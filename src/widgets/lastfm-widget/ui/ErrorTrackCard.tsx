import React from 'react';
import Image from 'next/image';

const ErrorTrackCard = () => {
  return (
    <div className="flex flex-row items-center gap-4 min-w-fit min-h-32 text-sm border-2 border-black p-4 dark:border-white">
      <Image
        alt="Music error"
        src={'/music-error.gif'}
        width={60}
        height={60}
      ></Image>
      <p className="text-red-500">
        {"Error occured, there won't be tracks :("}
      </p>
    </div>
  );
};

export default ErrorTrackCard;
