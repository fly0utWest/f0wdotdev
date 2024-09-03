'use client';

import React, { useEffect, useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import Link from 'next/link';
import { LiaExternalLinkAltSolid as LinkIcon } from 'react-icons/lia';
import { useTracks } from '../model/useTracks';
import Audio from 'react-loading-icons/dist/esm/components/audio';
import Oval from 'react-loading-icons/dist/esm/components/oval';
import { useTheme } from 'next-themes';

const LastfmWidget = () => {
  const { tracks, loading, error } = useTracks();
  const { theme } = useTheme();
  const [mounted, setMounted] = useState<boolean>(false);
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free',
    slides: { spacing: 20, perView: 'auto' },
  });

  useEffect(() => {
    setMounted(true);
    instanceRef.current?.update();
  }, [tracks]);

  if (!mounted) {
    return null;
  }

  return (
    <>
      <div className="w-full mb-5" id="music"></div>
      <section className="w-full flex flex-col gap-3 mb-5">
        <div>
          <h2 className="text-2xl">
            <span className="text-violet-400">ls </span>
            {'~/music'}
          </h2>
          <p className="text-gray-400 text-sm font-medium">
            ## tracks fetched from{' '}
            <Link
              className="text-violet-400 hover:underline"
              href="https://last.fm/user/fly0utwest"
            >
              <span>last.fm</span>{' '}
              <LinkIcon className="inline -translate-y-2 -translate-x-2"></LinkIcon>
            </Link>
          </p>
        </div>
        <div className="keen-slider" ref={sliderRef}>
          {error && !loading && (
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
          )}
          {!error && loading && (
            <div className="keen-slider__slide">
              <Image
                alt="Music loading"
                src={'/music-loading.gif'}
                width={60}
                height={60}
              ></Image>
              <Oval
                stroke={theme === 'dark' ? '#ffffff' : '#000000'}
                className="w-6 h-6"
              />
              <p className="text-lg">Loading...</p>
            </div>
          )}
          {!error &&
            !loading &&
            tracks.map((track, index) => (
              <div key={index} className="keen-slider__slide">
                <Image
                  className="flex-shrink-0 border-2 border-black dark:border-white"
                  alt="track cover"
                  src={track.image[1]['#text']}
                  width={60}
                  height={60}
                ></Image>
                <div className="m-3">
                  <p className="font-light">{track.name}</p>
                  <p>{track.artist['#text']}</p>
                  {track['@attr']?.nowplaying ? (
                    <div className="flex flex-row items-baseline gap-2 font-light animate-pulse text-violet-500 text-xs">
                      <Audio fill="#a78bfa" className="w-4 h-4" />
                      <span>Playing now</span>
                    </div>
                  ) : null}
                  {!loading && error && <p className='text-red-500'>Error occured</p>}
                </div>
                {track.repeatCount! > 1 ? (
                  <p className="absolute bottom-0 right-0 bg-black text-white p-1 dark:bg-white dark:text-black text-xs font-bold">
                    x{track.repeatCount}
                  </p>
                ) : null}
              </div>
            ))}
        </div>
      </section>
      <hr className="border-gray-600 w-full mb-10" />
    </>
  );
};

export default LastfmWidget;
