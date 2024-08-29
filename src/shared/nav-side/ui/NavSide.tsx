import React from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from '@/features/theme-switcher';
import {
  PiTelegramLogo as TelegramLogo,
  PiGithubLogo as GithubLogo,
} from 'react-icons/pi';

export const NavSide = () => {
  return (
    <nav className="flex flex-row justify-between w-full sticky top-0 min-h-full p-4 border-b-2 border-b-black bg-white p-y-4 dark:bg-black dark:border-b-white md:flex-col md:border-r-2 md:border-r-black md:dark:border-r-white md:w-max md:static md:pb-20 md:justify-normal md:gap-6">
      <ThemeSwitcher />
      <div className="flex gap-4 md:self-center md:flex-col">
        <Link href="https://t.me/fly0utwest">
          <TelegramLogo className="w-6 h-6" />
        </Link>
        <Link href="https://github.com/fly0utwest">
          <GithubLogo className="w-6 h-6" />
        </Link>
      </div>
    </nav>
  );
};
