'use client';

import React from 'react';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

const Header: React.FC = () => {
  const path = usePathname();
  
  return (
    <header
      id="header"
      className="min-w-full border-b-2 border-b-black h-28 px-6 flex flex-1 flex-col items-center justify-center light:border-b-black dark:border-b-white bg-white dark:bg-black"
    >
      <div className="h-full w-full md: max-w-[768px] flex flex-1 items-center justify-between">
        <div className="flex flex-col gap-2">
          <Link href="/">
            <h1 className="font-bold text-2xl text-violet-400">
              fly0utWest{' '}
              <span className="text-black dark:text-white"> | ~{path} </span>
            </h1>
          </Link>
          <span className="typed-[web_dev;linux_enthusiast;does_someone_even_read_this?] typed-caret-width-2 typed-caret typed-caret-space-2 typed-caret-color-black dark:typed-caret-color-white text-black dark:text-white"></span>
        </div>
        <Image
          src={'/computer.gif'}
          width={64}
          height={64}
          alt="Header gif"
          unoptimized
        />
      </div>
    </header>
  );
};

export default Header;