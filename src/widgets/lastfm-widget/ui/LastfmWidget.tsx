import React from 'react';
import Link from 'next/link';
import { LiaExternalLinkAltSolid as LinkIcon } from 'react-icons/lia';
import { Track } from '@/shared/model';
import ErrorTrackCard from './ErrorTrackCard';
import LoadingTrackCard from './LoadingTrackCard';
import TrackCard from './TrackCard';
import { repeatCounterArray } from '../lib/repeatCount';
import { publicBaseUrl } from '@/shared/config';

export default async function LastfmWidget(): Promise<JSX.Element> {
  let tracks: Track[] | undefined;
  let error: string | undefined;

  try {
    const response = await fetch(`${publicBaseUrl}/api/lastfmtracks`, {
      cache: 'no-store',
    });
    const data = await response.json();

    if (!response.ok) {
      throw new Error(`Failed to fetch tracks: ${response.status}`);
    }

    tracks = repeatCounterArray(data);
  } catch (err: unknown) {
    if (err instanceof Error) {
      error = err.message;
    }
  }

  const loading = !tracks && !error;

  return (
    <>
      <div className="w-full mb-5" id="music"></div>
      <section className="w-full flex flex-col gap-3 mb-5">
        <div>
          <h2 className="text-2xl text-black dark:text-white">
            <span className="text-violet-400 text">ls </span>
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
        <div className="w-full">
          {error && !loading && <ErrorTrackCard />}
          {!error && loading && <LoadingTrackCard />}
          {!error && !loading && <TrackCard track={tracks![0]} />}
        </div>
      </section>
      <hr className="border-gray-600 w-full mb-10" />
    </>
  );
}
