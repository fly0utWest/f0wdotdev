import React from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from '@/features/theme-switcher';

export const NavSide = () => {
  return (
    <nav className="flex flex-row w-full sticky top-0 min-h-full p-4 border-b-2 border-b-black bg-white p-y-4 dark:bg-black dark:border-b-white md:flex-col md:border-r-2 md:border-r-black md:dark:border-r-white md:w-max md:static">
      <ThemeSwitcher />
    </nav>
  );
};
