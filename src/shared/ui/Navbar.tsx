import React from 'react';
import { Link } from '../config';
import { getDictionary } from '../config';
import axios from 'axios';
import { UserRingData } from '../model';
import { webringPublicUrl, webringUserId } from '../config';

export default async function Navbar(): Promise<JSX.Element> {
  const dictionary = await getDictionary();
  let userData: UserRingData | null = null;

  try {
    const response = await axios.get<UserRingData>(
      `${webringPublicUrl}/${webringUserId}/data`,
    );
    userData = response.data;
  } catch (error) {
    console.error('Failed to fetch user data:', error);
  }

  return (
    <nav className="text-black w-full h-16 border-t-2 bottom-0 px-6 border-t-black fixed flex justify-center bg-white dark:border-t-white dark:bg-black">
      <div className="w-full h-full max-w-[768px] flex items-center justify-between gap-4">
        <Link
          className="dark:invert text-center hover:underline"
          href={userData?.prev?.url || '#'}
        >
          <span className="text-nowrap">&lt;-</span>
          <span className="hidden md:inline">
            {' '}
            {userData?.prev.name ?? dictionary['nav-message-prev']}
          </span>
        </Link>

        <Link
          className="dark:invert text-center"
          href={process.env.WEBRING_PUBLIC_URL || '#'}
        >
          {dictionary['nav-message']}
        </Link>

        <Link
          className="dark:invert text-center hover:underline"
          href={userData?.next?.url || '#'}
        >
          <span className="hidden md:inline text-nowrap">
            {userData?.next.name ?? dictionary['nav-message-next']}
          </span>{' '}
          <span className="text-nowrap">-&gt;</span>
        </Link>
      </div>
    </nav>
  );
}
