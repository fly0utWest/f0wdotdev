'use client';

import React, { useEffect, useState } from 'react';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Link from 'next/link';
import { LiaExternalLinkAltSolid as LinkIcon } from 'react-icons/lia';
import { useTracks } from '../model/useTracks';
import ErrorTrackCard from './ErrorTrackCard';
import LoadingTrackCard from './LoadingTrackCard';
import TrackCard from './TrackCard';

const LastfmWidget = () => {
  const { tracks, loading, error } = useTracks();
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
          {error && !loading && <ErrorTrackCard />}
          {!error && loading && <LoadingTrackCard />}
          {!error &&
            !loading &&
            tracks.map((track, index) => (
              <TrackCard key={index} track={track} loading={loading} error={error} />
            ))}
        </div>
      </section>
      <hr className="border-gray-600 w-full mb-10" />
    </>
  );
};

export default LastfmWidget;
