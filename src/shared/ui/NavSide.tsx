import React from 'react';
import { Link } from '../config';
import { ThemeSwitcher } from '@/features/theme-switcher';
import {
  PiTelegramLogo as TelegramLogo,
  PiGithubLogo as GithubLogo,
  PiSteamLogo as SteamLogo,
  PiLastfmLogo as LastFMLogo,
} from 'react-icons/pi';

const NavSide: React.FC = () => {
  
  const navlinks = [
    {
      dest: 'https://t.me/fly0utWest',
      icon: <TelegramLogo className="w-6 h-6" />,
    },
    {
      dest: 'https://github.com/fly0utwest',
      icon: <GithubLogo className="w-6 h-6" />,
    },
    {
      dest: 'https://www.last.fm/user/fly0utWest',
      icon: <LastFMLogo className="w-6 h-6" />,
    },
    {
      dest: 'https://steamcommunity.com/id/fly0utWest/',
      icon: <SteamLogo className="w-6 h-6" />,
    },
  ];


  return (
    <nav className="flex flex-row gap-4 items-center justify-between w-full sticky top-0 min-h-full border-b-2 border-b-black bg-white p-y-4 dark:bg-black dark:border-b-white md:flex-col md:border-r-2 md:border-r-black md:border-0 md:dark:border-r-white md:relative md:pb-20 md:justify-normal md:gap-6 md:w-max md:min-h-full">
      <div className="flex gap-4 w-full justify-between md:flex-col md:sticky md:top-0 md:gap-12 p-4 md:items-center text-black dark:text-white">
        <ThemeSwitcher />
        <div className="flex flex-row gap-4 md:flex-col">
          {navlinks.map((link) => (
            <Link key={link.dest} href={link.dest}>{link.icon}</Link>
          ))}
        </div>
      </div>
    </nav>
  );
};

export default NavSide;
