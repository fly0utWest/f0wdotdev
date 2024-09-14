import React from 'react';
import Link from 'next/link';
import {
  BiLogoTypescript as TSLogo,
  BiLogoTailwindCss as TWLogo,
  BiLogoSass as SassLogo,
  BiLogoTux as LinuxLogo,
  BiLogoReact as ReactLogo,
} from 'react-icons/bi';
import { RiNextjsFill as NextLogo } from 'react-icons/ri';
import { GrMysql as MySqlLogo, GrDocker as DockerLogo } from 'react-icons/gr';

const infrastructureList = [
  {
    dest: 'https://en.wikipedia.org/wiki/Linux',
    caption: 'linux',
    icon: <LinuxLogo className="w-6 h-6" />,
  },
  {
    dest: 'https://mysql.com',
    caption: 'mySql',
    icon: <MySqlLogo className="w-6 h-6" />,
  },
  {
    dest: 'https://docker.com',
    caption: 'docker',
    icon: <DockerLogo className="w-6 h-6" />,
  },
];

const langsList = [
  {
    dest: 'https:///typescriptlang.org',
    caption: 'typescript',
    icon: <TSLogo className="w-6 h-6" />,
  },
  {
    dest: 'https://nextjs.org',
    caption: 'next',
    icon: <NextLogo className="w-6 h-6" />,
  },
  {
    dest: 'https://react.dev',
    caption: 'react',
    icon: <ReactLogo className="w-6 h-6" />,
  },
  {
    dest: 'https://tailwindcss.com',
    caption: 'tailwind',
    icon: <TWLogo className="w-6 h-6" />,
  },
  {
    dest: 'https://sass-lang.com',
    caption: 'SASS',
    icon: <SassLogo className="w-6 h-6" />,
  },
];

const TechStack = () => {
  return (
    <>
      <div className="w-full mb-5" id="tech-stack"></div>
      <section className="w-full flex flex-col gap-3 mb-5">
        <div>
          <h2 className="text-2xl">
            <span className="text-violet-400">cat</span> ~/tech-stack/readme.md
          </h2>
          <p className="text-gray-400 text-sm font-light">
            {"## technologies I'm working with on regular basis"}
          </p> 
        </div>
        <div className="text-lg flex flex-col gap-4 md:grid md:grid-cols-2 md:grid-rows-1 md:gap-y-2">
          <div className="flex flex-col gap-2 md:items-center">
            <h3 className="w-min text-violet-400">langs/frameworks</h3>
            <ul>
              {langsList.map((element) => (
                <li key={element.dest}>
                  <Link
                    href={element.dest}
                    className="flex flex-row items-center gap-2"
                  >
                    {element.icon}
                    {element.caption}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="flex flex-col gap-2 md:items-center">
            <h3 className="w-min text-violet-400">infrastructure</h3>
            <ul>
              {infrastructureList.map((element) => (
                <li key={element.dest}>
                  <Link
                    href={element.dest}
                    className="flex flex-row items-center gap-2"
                  >
                    {element.icon}
                    {element.caption}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
      <hr className="border-gray-600 w-full mb-10" />
    </>
  );
};

export default TechStack;
