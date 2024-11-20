import React from 'react';
import { Link, getDictionary, getLang } from '@/shared/config';
import { LiaExternalLinkAltSolid as LinkIcon } from 'react-icons/lia';
import { ProjectWithTools, Tool } from '@/shared/config/db/schema';
import { dateFormatter } from '../lib/dateFormatter';
import Image from 'next/image';

interface ProjectCardProps {
  project: ProjectWithTools;
}

export default async function ProjectCard({
  project,
}: ProjectCardProps): Promise<JSX.Element> {
  const lang = await getLang();
  const dictionary = await getDictionary();

  return (
    <Link
      key={project.name}
      href={project.link}
      className="flex flex-col min-h-24 transition-all duration-150 border-2 border-black dark:border-white relative hover:text-white hover:bg-black  dark:hover:text-black dark:hover:bg-white text-black hover:border-black dark:text-white group hover:scale-[103%]"
    >
      <div className="relative">
        <div className="bg-black bg-opacity-50 flex justify-center items-center absolute top-0 left-0 w-full h-full opacity-0 group-hover:opacity-100 transition-opacity">
          <span className="text-2xl text-violet-400">
            {dictionary['home-page']['click-tip']}
          </span>
        </div>
        <img
          className="object-contain"
          src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/projects/${project.screenshot}`}
          alt="project screen"
        />
      </div>
      <div className="p-4 h-full flex gap-4 flex-col justify-between">
        <div>
          <h3 className="text-lg text-violet-400 flex gap-1 justify-between">
            {project.name}
            <LinkIcon className=" text-violet-400 w-6 h-6" />
          </h3>
          <p className="font-medium text-base">
            {lang === 'en' ? project.description : project.descriptionRu}
          </p>
        </div>
        <div>
          <div className="w-full">
            <h4 className="text-lg text-violet-400 hover:text-violet-400">
              {dictionary['home-page']['project-created-with']}
            </h4>
            <div className="flex flex-row gap-4">
              {project.tools.map((tool: Tool) => (
                <Image
                  className="dark:invert dark:group-hover:invert-0 group-hover:invert"
                  key={tool.icon}
                  src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/icons/tools/${tool.icon}`}
                  width={20}
                  height={20}
                  alt="Tool icon"
                ></Image>
              ))}
            </div>
          </div>
          <p className="font-medium text-sm text-gray-400 space-y mt-4">
            {dictionary['created-on']}{' '}
            <span>{dateFormatter(project.releasedAt!)}</span>
          </p>
        </div>
      </div>
    </Link>
  );
}
