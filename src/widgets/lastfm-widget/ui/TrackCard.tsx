import React from 'react';
import Image from 'next/image';
import Audio from 'react-loading-icons/dist/esm/components/audio';
import { Track } from '@/shared/model';
import { IoMusicalNotes as IdleIcon } from 'react-icons/io5';
import { getDictionary } from '@/shared/config';

interface TrackCardProps {
  track: Track;
}

export default async function TrackCard({
  track,
}: TrackCardProps): Promise<JSX.Element> {
  const dictionary = await getDictionary();
  return (
    <div className="flex flex-ro items-center border-2 min-w-fit min-h-32 border-black p-4 dark:border-white select-none text-black dark:text-white">
      {track['@attr']?.nowplaying ? (
        <div className="flex flex-row items-center gap-4 text-sm">
          <Image
            className="flex-shrink-0 border-2 border-black dark:border-white"
            alt="track cover"
            src={track.image[1]['#text']}
            width={60}
            height={60}
          ></Image>
          <div className="my-3">
            <p className="font-light">{track.name}</p>
            <p>{track.artist['#text']}</p>
            <div className="flex flex-row items-baseline gap-2 font-light animate-pulse text-violet-500 text-xs">
              <Audio fill="#a78bfa" className="w-4 h-4" />
              <span>{dictionary['playing-now']}</span>
            </div>
          </div>
        </div>
      ) : (
        <div className="flex flex-row items-center gap-4 text-sm">
          <IdleIcon className="w-[60px] h-[60px]" />
          <p className="text-lg animate-pulse">
            {dictionary['nothing-playing']}
          </p>
        </div>
      )}
    </div>
  );
}
