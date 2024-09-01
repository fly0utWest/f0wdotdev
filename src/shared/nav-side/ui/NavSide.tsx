import React from 'react';
import Link from 'next/link';
import { ThemeSwitcher } from '@/features/theme-switcher';
import {
  PiTelegramLogo as TelegramLogo,
  PiGithubLogo as GithubLogo,
  PiSteamLogo as SteamLogo,
  PiLastfmLogo as LastFMLogo,
} from 'react-icons/pi';

export const NavSide = () => {
  return (
    <nav className="flex flex-row gap-4 items-center justify-between w-full sticky top-0 min-h-full border-b-2 border-b-black bg-white p-y-4 dark:bg-black dark:border-b-white md:flex-col md:border-r-2 md:border-r-black md:border-0 md:dark:border-r-white md:relative md:pb-20 md:justify-normal md:gap-6 md:w-max md:min-h-full">
      <div className='flex gap-4 w-full justify-between md:flex-col md:sticky md:top-0 md:gap-12 p-4 md:items-center'>
      <ThemeSwitcher />
      <div className="flex flex-row gap-4 md:flex-col">
        <Link href="https://t.me/fly0utwest">
          <TelegramLogo className="w-6 h-6" />
        </Link>
        <Link href="https://github.com/fly0utwest">
          <GithubLogo className="w-6 h-6" />
        </Link> 
        <Link href="https://steamcommunity.com/id/fly0utWest/">
          <SteamLogo className="w-6 h-6" />
        </Link>
        <Link href="https://www.last.fm/user/fly0utWest">
          <LastFMLogo className="w-6 h-6" />
        </Link>
      </div>
      </div>
    </nav>
  );
};
