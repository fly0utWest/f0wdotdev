import { useEffect, useState } from 'react';
import axios from 'axios';
import { repeatCounterArray } from '../lib/repeatCount';
import { Track } from '@/shared/model';

export const useTracks = () => {
  const [tracks, setTracks] = useState<Track[]>([]);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchTracks = async () => {
      try {
        const response = await axios.get<Track[]>('/api/lastfmtracks', {});
        setTracks(repeatCounterArray(response.data));
      } catch (error: unknown) {
        if (error instanceof Error) {
          setError(error.message);
        }
      } finally {
        setLoading(false);
      }
    };

    fetchTracks();
  }, []);

  return { tracks, loading, error };
};
