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
import { GrMysql as MysqlLogo, GrDocker as DockerLogo } from 'react-icons/gr';

const TechStack = () => {
  return (
    <>
      <div className="w-full mb-5" id="#tech-stack"></div>
      <section className="w-full flex flex-col gap-3 mb-5">
        <h2 className="text-2xl">
          <span className="text-violet-400">cat</span> ~/tech-stack.md
        </h2>
        <div className="text-lg flex flex-col gap-4 md:grid md:grid-cols-2 md:grid-rows-1 md:gap-y-2">
          <div className="flex flex-col gap-2 md:items-center">
            <h3 className='w-min text-wrap'>langs/frameworks</h3>
            <ul>
              <li className="flex flex-row">
                <Link
                  className="flex flex-row items-center gap-2"
                  href="https://typescriptlang.org"
                >
                  <TSLogo className="w-6 h-6" />
                  typescript
                </Link>
              </li>
              <li className="flex flex-row">
                <Link
                  className="flex flex-row items-center gap-2"
                  href="https://nextjs.org"
                >
                  <NextLogo className="w-6 h-6" />
                  nextJS
                </Link>
              </li>
              <li className="flex flex-row">
                <Link
                  className="flex flex-row items-center gap-2"
                  href="https://react.dev"
                >
                  <ReactLogo className="w-6 h-6" />
                  react
                </Link>
              </li>
              <li className="flex flex-row">
                <Link
                  className="flex flex-row items-center gap-2"
                  href="https://tailwindcss.com"
                >
                  <TWLogo className="w-6 h-6" />
                  tailwind
                </Link>
              </li>
              <li className="flex flex-row">
                <Link
                  className="flex flex-row items-center gap-2"
                  href="https://sass-lang.com"
                >
                  <SassLogo className="w-6 h-6" />
                  SASS
                </Link>
              </li>
            </ul>
          </div>
          <div className='flex flex-col gap-2 md:items-center'>
            <h3 className='w-min'>infrastructure</h3>
            <ul>
              <li className="flex flex-row">
                <Link
                  className="flex flex-row items-center gap-2"
                  href="https://en.wikipedia.org/wiki/Linux"
                >
                  <LinuxLogo className="w-6 h-6" />
                  linux
                </Link>
              </li>
              <li className="flex flex-row">
                <Link
                  className="flex flex-row items-center gap-2"
                  href="https://mysql.com"
                >
                  <MysqlLogo className="w-6 h-6" />
                  mySQL
                </Link>
              </li>
              <li className="flex flex-row">
                <Link
                  className="flex flex-row items-center gap-2"
                  href="https://docker.com"
                >
                  <DockerLogo className="w-8 h-8" />
                  docker
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </section>
      <hr className="border-gray-600 w-full mb-10" />
    </>
  );
};

export default TechStack;
