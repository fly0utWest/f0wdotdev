import { useEffect, useState } from 'react';
import axios from 'axios';
import { repeatCounterArray } from '../lib/repeatCount';

export interface Track {
  name: string;
  artist: { '#text': string };
  image: Array<{ '#text': string }>;
  '@attr'?: { nowplaying: boolean };
  repeatCount?: number;
}

export const useTracks = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get<Track[]>('/api/lastfmtracks', {});
        setTracks(repeatCounterArray(response.data));
      } catch (error: any) {
        setError(error.message);
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, []);

  return { tracks, loading, error };
};
