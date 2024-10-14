import React from 'react';
import { getDictionary } from '@/shared/config';

export default async function BioSection(): Promise<JSX.Element> {
  const dictionary = await getDictionary();

  const languages = dictionary['home-page']['bio-langs'];
  return (
    <>
      <div className="w-full mb-5" id="info"></div>
      <section className="w-full flex flex-col gap-3 mb-5">
        <div>
          <h2 className="text-2xl text-black dark:text-white">
            <span className="text-violet-400">cat</span> {dictionary["home-page"].headings[0]}
          </h2>
          <p className="text-sm text-gray-400 font-light">
            {dictionary['home-page']['bio-tip']}
          </p>
        </div>
        <p className="text-base text-black dark:text-white">
          {dictionary['home-page']['bio-content']}
          <br />
        </p>
        <h3 className="text-base font-extrabold text-violet-400">{dictionary['home-page']['lang-heading']}</h3>
        <ul className="list-disc list-inside">
          {languages.map((lang) => (
            <li
              className="text-base text-black dark:text-white marker:text-violet-400"
              key={lang}
            >
              {lang}
            </li>
          ))}
        </ul>
      </section>
      <hr className="border-gray-600 w-full mb-10" />
    </>
  );
}
