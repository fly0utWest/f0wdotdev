import React from 'react';
import { birthDateCounter } from '../lib/birthdayCounter';

export const BioSection: React.FC = () => {

  const languages = ['English (B2+)', 'Russian (native)', 'Ukrainian (fluent)'];

  return (
    <>
      <div className="w-full mb-5" id="info"></div>
      <section className="w-full flex flex-col gap-3 mb-5">
        <div>
          <h2 className="text-2xl text-black dark:text-white">
            <span className="text-violet-400">cat</span> ~/info/info.md
          </h2>
          <p className="text-sm text-gray-400 font-light">
            ## some information about me
          </p>
        </div>
        <p className="text-base text-black dark:text-white">I&apos;m Nikita Ablamskiy, <span>{birthDateCounter('2003-09-30')}</span> years old web developer with a burning passion for crafting scalable and user-friendly web apps that captivate users at first click. I&apos;m always on the hunt, exploring new tech ans frameworks to innovate and solve challenges. I have experience writing SPA with React and its server components, SCSS, Tailwind and TypeScript, using Feature Sliced Design as frontend methodology. I also have written some backend in NodeJS/Express. Now I look for new possibilities for learning and enhancing my abilities as a fullstack developer.
          <br />
        </p>
        <h3 className='text-base font-extrabold text-violet-400'>Languages</h3>
        <ul className='list-disc list-inside'>
          {languages.map(lang => (
            <li className='text-base text-black dark:text-white marker:text-violet-400' key={lang}>{lang}</li>
          ))}
        </ul>
      </section>
      <hr className="border-gray-600 w-full mb-10" />
    </>
  );
};
