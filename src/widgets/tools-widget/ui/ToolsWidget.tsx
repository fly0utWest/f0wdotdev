import { getDictionary } from '@/shared/config';
import Image from 'next/image';
import React from 'react';

export default async function ToolsWidget(): Promise<JSX.Element> {
  const dictionary = await getDictionary();

  return (
    <>
      <div className="w-full mb-5" id="tools"></div>
      <section className="w-full flex flex-col gap-3 mb-5 text-black dark:text-white">
        <div>
          <h2 className="text-2xl text-black dark:text-white">
            <span className="text-violet-400">ls</span> /dev/everything
          </h2>
          <p className="text-gray-400 text-sm font-light">
            {dictionary['about-page']['everything-tip']}
          </p>
        </div>
        <h3>{dictionary['about-page']['devices-heading']}</h3>
        <p className="text-base font-medium">
        {dictionary['about-page']['devices-content']}
        </p>
        <details>
          <summary className="text-base font-bold cursor-pointer select-none">
            neofetch
          </summary>
          <figure>
            <Image
              className="border-2 border-black dark:border-white"
              src={'/neofetch.png'}
              width={700}
              height={100}
              alt="neofetch"
            ></Image>
            <figcaption className="text-xs text-center mt-2">
              i use nix, btw
            </figcaption>
          </figure>
        </details>
      </section>
      <hr className="border-gray-600 w-full mb-10" />
    </>
  );
}
