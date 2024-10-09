import React from 'react';
import ProjectCard from './ProjectCard';
import { ProjectCardSkeleton } from '@/shared/ui';
import { Project } from '@/shared/model';
import { neededProjectsSearch } from '../lib/neededProjectsSearch';

export default async function ProjectsWidget(): Promise<JSX.Element> {
  const neededProjectsIds = [742777438, 651871385, 821314092];

  let projects: Project[] | undefined;
  let error: string | undefined;

  try {
    const response = await fetch(`http://localhost:3001/api/githubprojects/`);

    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Failed to fetch projects: ${response.status}`);
    }

    projects = neededProjectsSearch(data, neededProjectsIds);
  } catch (err: unknown) {
    if (err instanceof Error) {
      error = err.message;
    }
  }

  const loading = !projects && !error;

  return (
    <>
      <div className="w-full mb-5" id="projects"></div>
      <section className="w-full flex flex-col gap-3 mb-5">
        <div>
          <h2 className="text-2xl">
            <span className="text-violet-400">ls</span> ~/projects
          </h2>
          <p className="text-gray-400 font-light text-sm">
            ## projects I&apos;ve worked on
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {loading && !error && <ProjectCardSkeleton />}
          {!loading &&
            !error &&
            projects!.map((project) => (
              <ProjectCard key={project.name} project={project} />
            ))}
          {!loading && error && (
            <p className="text-red-500 text-lg">Error occurred: {error}</p>
          )}
        </div>
      </section>
      <hr className="border-gray-600 w-full mb-10" />
    </>
  );
}
