import { NextResponse } from 'next/server';
import axios from 'axios';

export async function GET(req: Request) {
  const url = new URL(req.url);
  const user = url.searchParams.get('user') || process.env.USER;
  const limit = url.searchParams.get('limit') || process.env.TRACK_LIMIT;

  try {
    const response = await axios.get('https://ws.audioscrobbler.com/2.0/', {
      params: {
        method: 'user.getRecentTracks',
        user,
        api_key: process.env.LASTFM_API_KEY,
        limit,
        format: 'json',
      },
    });

    return NextResponse.json(response.data.recenttracks.track);
  } catch (error) {
    return NextResponse.json({ error: "Sorry, there won't be tracks :(" }, { status: 500 });
  }
}