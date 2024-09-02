import next from 'next';
import { Track } from '../model/useTracks';

export function repeatCounterArray(array: Track[]): Track[] {
  const consolidatedTracks: Track[] = [];
  let currentTrack = array[0];
  let repeatCount = 1;
  for (let i = 1; i < array.length; i++) {
    let nextTrack = array[i];
    if (
      currentTrack.artist['#text'] === nextTrack.artist['#text'] &&
      currentTrack.name === nextTrack.name
    ) {
      repeatCount++;
    } else {
      consolidatedTracks.push({ ...currentTrack, repeatCount });
      currentTrack = nextTrack;
      repeatCount = 1;
    }
  }

  consolidatedTracks.push({ ...currentTrack, repeatCount });

  return consolidatedTracks;
}
