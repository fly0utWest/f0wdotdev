import { NextResponse } from 'next/server';
import axios, { AxiosError } from 'axios';
import { lastfmUser, lastfmBaseUrl, trackLimit, lastfmApiKey } from '@/shared/config';


export const dynamic = 'force-dynamic';

export async function GET() {
  const user = lastfmUser;
  const limit = trackLimit;

  try {
    const response = await axios.get(lastfmBaseUrl!, {
      params: {
        method: 'user.getRecentTracks',
        user,
        api_key: lastfmApiKey,
        limit,
        format: 'json',
      },
    });

    return NextResponse.json(response.data.recenttracks.track);
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { error: "Sorry, there won't be tracks :(" },
        { status: error.response!.status },
      );
    } else {
      return NextResponse.json(
        { error: "Sorry, there won't be tracks :(" },
        { status: 500 },
      );
    }
  }
}
