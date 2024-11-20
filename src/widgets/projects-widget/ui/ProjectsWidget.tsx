import React from 'react';
import ProjectCard from './ProjectCard';
import { ProjectCardSkeleton } from '@/shared/ui';
import { ProjectWithTools } from '@/shared/config/db/schema';
import { getDictionary } from '@/shared/config';
import { unstable_cache } from 'next/cache';
import { db } from '@/db';
import ErrorDB from '@/shared/ui/ErrorDB';

export default async function ProjectsWidget(): Promise<JSX.Element> {
  const dictionary = await getDictionary();

  let projectsData: ProjectWithTools[] | undefined;
  let error: boolean | undefined;

  const getProjects = unstable_cache(
    async () => {
      const result = await db.query.projects.findMany({
        with: {
          tools: {
            with: {
              tool: true,
            },
          },
        },
        orderBy: (projects, { desc }) => [desc(projects.releasedAt)],
      });
      return result.map((project) => ({
        ...project,
        tools: project.tools.map((relation) => relation.tool),
      }));
    },
    undefined,
    { revalidate: 43200 },
  );

  try {
    projectsData = await getProjects();
  } catch (err) {
    error = true;
  }

  const loading = !projectsData && !error;

  return (
    <>
      <div className="w-full mb-5" id="projects"></div>
      <section className="w-full flex flex-col gap-3 mb-5">
        <div>
          <h2 className="text-2xl text-black dark:text-white">
            <span className="text-violet-400">ls</span>{' '}
            {dictionary['home-page'].headings[2]}
          </h2>
          <p className="text-gray-400 font-light text-sm">
            {dictionary['home-page']['projects-tip']}
          </p>
        </div>
        <div className="flex flex-col gap-6 md:grid md:grid-cols-2">
          {loading && <ProjectCardSkeleton />}
          {!loading &&
            projectsData?.map((project: ProjectWithTools) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          {error && <ErrorDB>{dictionary['error-db']}</ErrorDB>}
        </div>
      </section>
      <hr className="border-gray-600 w-full mb-10" />
    </>
  );
}
