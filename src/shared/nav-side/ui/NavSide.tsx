import React from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from '@/features/theme-switcher';

export const NavSide = () => {
  return (
    <nav className="hidden flex-col flex-shrink-0 w-max min-h-full p-4 border-r-2 border-r-black bg-white p-y-4 dark:bg-black dark:border-r-white md:flex">
      <ThemeSwitcher />
    </nav>
  );
};
