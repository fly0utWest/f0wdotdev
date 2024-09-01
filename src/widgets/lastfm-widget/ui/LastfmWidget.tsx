'use client';

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import 'keen-slider/keen-slider.min.css';
import { useKeenSlider } from 'keen-slider/react';
import Image from 'next/image';
import Link from 'next/link';
import { LiaExternalLinkAltSolid as LinkIcon } from 'react-icons/lia';

const LastfmWidget = () => {
  const [tracks, setTracks] = useState<any[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);
  const [sliderRef, instanceRef] = useKeenSlider({
    mode: 'free',
    slides: { spacing: 20, perView: 'auto' },
  });

  useEffect(() => {
    const fetchAPI = async () => {
      try {
        const result = await axios.get('https://ws.audioscrobbler.com/2.0/', {
          params: {
            method: 'user.getrecenttracks',
            user: 'fly0utwest',
            api_key: '7468e6222c8859d7f0b0f238c7714dd3',
            limit: '19',
            format: 'json',
          },
        });
        console.log(result.data);
        setTracks(result.data.recenttracks.track);
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };
    fetchAPI();
  }, []);

  useEffect(() => {
    instanceRef.current?.update();
    console.log();
  }, [tracks]);

  return (
    <>
      <div className="w-full mb-5" id="music"></div>
      <section className="w-full flex flex-col gap-3 mb-5">
        <div>
          <h2 className="text-2xl">
            <span className="text-violet-400">cmus </span>
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
                <div>
                  <p className="font-light">{track.name}</p>
                  <p>{track.artist['#text']}</p>
                  {track['@attr']?.nowplaying ? (
                    <p className="font-light animate-pulse text-violet-500">
                      Playing now
                    </p>
                  ) : null}
                </div>
              </div>
            ))}
        </div>
      </section>
      <hr className="border-gray-600 w-full mb-10" />
    </>
  );
};

export default LastfmWidget;
