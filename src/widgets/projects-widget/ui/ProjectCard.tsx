import React from 'react';
import Link from 'next/link';
import {
  LiaExternalLinkAltSolid as LinkIcon,
  LiaGithub as GithubIcon,
} from 'react-icons/lia';
import { Project } from '@/shared/model';
import { dateFormatter } from '../lib/dateFormatter';

interface ProjectCardProps {
  project: Project;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {

  return (
    <Link
      key={project.name}
      href={project.html_url}
      className="p-4 min-h-24 transition-colors duration-150 border-2 border-black dark:border-white relative hover:text-white hover:bg-black hover:border-white dark:hover:text-black dark:hover:bg-white dark:hover:border-black"
    >
      <h3 className="text-lg text-violet-400 flex gap-1 items-center">
        <GithubIcon className=" text-violet-400 w-6 h-6" />
        {project.name}
      </h3>
      <p className="font-medium text-base">{project.description}</p>
      <p className="font-medium text-sm text-gray-400 mt-4">
          Last updated on: {dateFormatter(project.pushed_at!)}
      </p>
      <div className="flex absolute top-0 right-0 m-2">
        <LinkIcon className=" text-violet-400 w-6 h-6" />
      </div>
    </Link>
  );
};

export default ProjectCard;