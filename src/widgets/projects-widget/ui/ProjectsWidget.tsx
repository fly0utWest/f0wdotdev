'use client';

import React, { useEffect, useState } from 'react';
import { useProjects } from '../model/useProjects';
import Link from 'next/link';
import {
  LiaExternalLinkAltSolid as LinkIcon,
  LiaGithub as GithubIcon,
} from 'react-icons/lia';

const ProjectsWidget: React.FC = () => {
  const { projects, error, loading } = useProjects();
  const [mounted, setMounted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, [])

  if (!mounted) {
    null
  }

  return (
    <>
      <div className="w-full mb-5" id="#projects"></div>
      <section className="w-full flex flex-col gap-3 mb-5">
        <div>
          <h2 className="text-2xl">
            <span className="text-violet-400">ls</span> ~/projects
          </h2>
          <p className="text-gray-400 font-light text-sm">
            ## projects I&apos;ve beenn working on
          </p>
        </div>
        <div className="flex flex-col gap-6">
          {loading && !error && (
            <div className="p-4 min-h-24 w-full animate-pulse duration-150 border-2 border-black dark:border-white">
              <div className="flex flex-col gap-6 w-full h-full">
                <div className='flex flex-col gap-2'>
                  <div className="w-[50%] h-7 bg-black dark:invert"></div>
                  <div className="w-[100%] h-4 bg-black dark:invert"></div>
                  <div className="w-[100%] h-4 bg-black dark:invert"></div>
                  <div className="w-[100%] h-4 bg-black dark:invert"></div>
                </div>
              </div>
            </div>
          )}
          {!loading &&
            !error &&
            projects.map((project, index) => (
              <Link
                key={index}
                href={project.html_url}
                className="p-4 min-h-24 transition-colors duration-150 border-2 border-black dark:border-white relative hover:text-white hover:bg-black hover:border-white dark:hover:text-black dark:hover:bg-white dark:hover:border-black"
              >
                <h3 className="text-lg text-violet-400 flex gap-1 items-center">
                  <GithubIcon className=" text-violet-400 w-6 h-6" />
                  {project.name}
                </h3>
                <p className="font-medium text-base">{project.description}</p>
                <div className="flex absolute top-0 right-0 m-2">
                  <LinkIcon className=" text-violet-400 w-6 h-6" />
                </div>
              </Link>
            ))}
            {!loading && error && 
            <p className='text-red-500'>Error occured</p>
            }
        </div>
      </section>
      <hr className="border-gray-600 w-full mb-10" />
    </>
  );
};

export default ProjectsWidget;
