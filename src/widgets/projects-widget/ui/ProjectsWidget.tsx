import React from 'react';
import ProjectCard from './ProjectCard';
import { ProjectCardSkeleton } from '@/shared/ui';
import { Project } from '@/shared/model';
import { neededProjectsSearch } from '../lib/neededProjectsSearch';
import { publicBaseUrl } from '@/shared/config';
import axios, { AxiosError } from 'axios';

export default async function ProjectsWidget(): Promise<JSX.Element> {
  const neededProjectsIds = [742777438, 821314092];

  let projects: Project[] | undefined;
  let error: string | undefined;

  try {
    const response = await axios.get(`${publicBaseUrl}/api/githubprojects/`, {
      headers: {
        'Cache-Control': 'no-store',
      },
    });

    projects = neededProjectsSearch(response.data, neededProjectsIds);
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      error = err.message;
    }
  }

  const loading = !projects && !error;

  return (
    <>
      <div className="w-full mb-5" id="projects"></div>
      <section className="w-full flex flex-col gap-3 mb-5">
        <div>
          <h2 className="text-2xl text-black dark:text-white">
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
