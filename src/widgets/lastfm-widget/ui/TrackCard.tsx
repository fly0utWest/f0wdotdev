import React from 'react';
import Image from 'next/image';
import Audio from 'react-loading-icons/dist/esm/components/audio';
import { Track } from '@/shared/model';

interface TrackCardProps {
    track: Track
    loading: boolean
    error: string | null
}

const TrackCard: React.FC<TrackCardProps> = ({track, loading, error}) => {
  return (
    <div key={track.name} className="keen-slider__slide">
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
        {track['@attr']?.nowplaying ? (
          <div className="flex flex-row items-baseline gap-2 font-light animate-pulse text-violet-500 text-xs">
            <Audio fill="#a78bfa" className="w-4 h-4" />
            <span>Playing now</span>
          </div>
        ) : null}
        {!loading && error && <p className="text-red-500">Error occured</p>}
      </div>
      {track.repeatCount! > 1 ? (
        <p className="absolute bottom-0 right-0 bg-black text-white p-1 dark:bg-white dark:text-black text-xs font-bold">
          x{track.repeatCount}
        </p>
      ) : null}
    </div>
  );
};

export default TrackCard;
