import React from 'react';
import Image from 'next/image';

const ErrorTrackCard = () => {
  return (
    <div className="keen-slider__slide">
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
