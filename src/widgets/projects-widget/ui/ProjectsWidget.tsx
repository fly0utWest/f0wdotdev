'use client';

import React, { useEffect, useState } from 'react';
import { useProjects } from '../model/useProjects';
import ProjectCard from './ProjectCard';
import { ProjectCardSkeleton } from '@/shared/ui';

const ProjectsWidget: React.FC = () => {
  const { projects, error, loading } = useProjects();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

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
            projects.map((project) => <ProjectCard key={project.name} project={project} />)}
          {!loading && error && <p className="text-red-500 text-lg">Error occured</p>}
        </div>
      </section>
      <hr className="border-gray-600 w-full mb-10" />
    </>
  );
};

export default ProjectsWidget;
