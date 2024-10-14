import React from 'react';
import Image from 'next/image';
import { getDictionary } from '@/shared/config';

export default async function ErrorTrackCard(): Promise<JSX.Element> {
  const dictionary = await getDictionary();

  return (
    <div className="flex flex-row items-center gap-4 min-w-fit min-h-32 text-sm border-2 border-black p-4 dark:border-white text-black dark:text-white">
      <Image
        alt="Music error"
        src={'/img/music-error.gif'}
        width={60}
        height={60}
      ></Image>
      <p className="text-red-500">
        {dictionary['track-error']}
      </p>
    </div>
  );
};

