'use client';

import React, { useState } from 'react';
import Link from 'next/link';

const ContentsTable = () => {
  interface ContentsList {
    link: string;
    description: string;
  }
  
  const links: ContentsList[] = [
    { link: '#info', description: '> ./info.txt' },
    { link: '#tech-stack', description: '> ./tech-stack.md' },
  ];

  const [menuOpened, setMenuOpened] = useState<boolean>(false);
  return (
    <>
      <section className="w-full flex flex-col gap-3 mb-5">
        <h2 className="text-2xl font-bold cursor-pointer" onClick={() => setMenuOpened(!menuOpened)}>
          <span className="text-violet-400">cd</span> *click*
        </h2>
        <ul className={`flex flex-col gap-4 ${menuOpened ? 'visible' : 'hidden'}`}>
          {links.map((element, index) => (
            <li key={index}>
              <Link
                className="py-2 pr-2 w-max hover:bg-black hover:text-white hover:transition-colors transition-colors dark:hover:invert"
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
