import React from 'react';
import ProjectCard from './ProjectCard';
import { ProjectCardSkeleton } from '@/shared/ui';
import { Project } from '@/shared/model';
import { getDictionary } from '@/shared/config';
import { drizzle } from 'drizzle-orm/node-postgres';
import { projects } from '@/shared/config/db/schema';
import { unstable_cache } from 'next/cache';

export default async function ProjectsWidget(): Promise<JSX.Element> {
  const db = drizzle(process.env.DATABASE_URL!);
  const dictionary = await getDictionary();

  let projectsData: Project[] | undefined;
  let error: string | undefined;

  const getProjects = unstable_cache(
    async () => {
      const projectsSet = await db.select().from(projects);
      return projectsSet;
    },
    undefined,
    { revalidate: 43200 }
  );

  try {
    projectsData = await getProjects();
  } catch (err) {
    error = 'Something went wrong during fetch from DB.';
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
            projectsData?.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          {error && (
            <p className="text-red-500 text-lg">Error occurred: {error}</p>
          )}
        </div>
      </section>
      <hr className="border-gray-600 w-full mb-10" />
    </>
  );
}
``
