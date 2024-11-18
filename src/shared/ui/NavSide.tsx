import React from 'react';
import { ThemeSwitcher } from '@/features/theme-switcher';
import { unstable_cache } from 'next/cache';
import { drizzle } from 'drizzle-orm/node-postgres';
import { socials } from '../config/db/schema';
import { Social } from '../model';
import Image from 'next/image';
import Link from 'next/link';

const NavSide = async (): Promise<JSX.Element> => {
  const db = drizzle(process.env.DATABASE_URL!);

  const getSocials = unstable_cache(
    async () => {
      const socialsSet = await db.select().from(socials);
      return socialsSet;
    },
    undefined,
    { revalidate: 43200 },
  );

  let socialsData: Social[] = [];
  let error: string | undefined;

  try {
    socialsData = await getSocials();
    console.log(socialsData);
  } catch (err) {
    error = 'Something went wrong during fetch from DB.';
  }

  return (
    <nav className="flex flex-row gap-4 items-center justify-between w-full sticky top-0 min-h-full border-b-2 border-b-black bg-white p-y-4 dark:bg-black dark:border-b-white md:flex-col md:border-r-2 md:border-r-black md:border-0 md:dark:border-r-white md:relative md:pb-20 md:justify-normal md:gap-6 md:w-max md:min-h-full">
      <div className="flex gap-4 w-full justify-between md:flex-col md:sticky md:top-0 md:gap-12 p-4 md:items-center text-black dark:text-white">
        <ThemeSwitcher />
        <div className="flex flex-row gap-4 md:flex-col">
          {error ? (
            <p className="text-red-500">{error}</p>
          ) : socialsData.length ? (
            socialsData.map((social) => (
              <Link href={social.link!}>
                <Image
                  key={social.id}
                  src={`${process.env.NEXT_PUBLIC_IMAGES_URL}/icons/socials/${social.icon}`}
                  width={24}
                  height={24}
                  alt="social icon"
                  className="dark:invert"
                />
              </Link>
            ))
          ) : (
            <p>...</p>
          )}
        </div>
      </div>
    </nav>
  );
};

export default NavSide;
