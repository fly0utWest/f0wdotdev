import React from 'react';
import Link from 'next/link';

const ContentsTable = () => {
  interface ContentsList {
    link: string;
    description: string;
  }

  const links: ContentsList[] = [
    { link: '#info', description: '> ./info/' },
    { link: '#tech-stack', description: '> ./tech-stack/' },
    { link: '#projects', description: '> ./projects/' },
    { link: '#shoutbox', description: '> ./tg-shoutbox/' },
    { link: '#music', description: '> ./music/' },
  ];

  return (
    <>
      <section className="w-full flex flex-col mb-5">
        <input
          type="checkbox"
          id="menu-toggle"
          className="peer opacity-0 absolute w-0 h-0"
        />
        <label
          htmlFor="menu-toggle"
          className="text-2xl font-bold cursor-pointer text-black dark:text-white"
        >
          <span className="text-violet-400">cd</span> *click*
        </label>
        <p className="text-gray-400 text-sm font-light">
          ## fast forward to primary page sections
        </p>
        <ul className="flex flex-col items-start gap-3 max-h-0 overflow-hidden opacity-0 transition-all duration-500 ease-in-out peer-checked:max-h-full peer-checked:opacity-100 mt-3">
          {links.map((element) => (
            <li key={element.link} className="flex items-center justify-center">
              <Link
                className="text-black dark:text-white py-2 pr-2 w-max hover:bg-black hover:text-white hover:transition-colors transition-colors dark:hover:invert"
                href={element.link}
              >
                {element.description}
              </Link>
            </li>
          ))}
        </ul>
      </section>
      <hr className="border-gray-600 w-full mb-10" />
    </>
  );
};

export default ContentsTable;
