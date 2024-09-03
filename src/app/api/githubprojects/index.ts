import axios from 'axios';
import { NextResponse } from 'next/server';

export async function GET() {
  try {
    const response = await axios.get(
      'https://api.github.com/users/fly0utWest/repos',
      {
        headers: {
          Authorization: `token ${process.env.GITHUB_API_KEY}`,
        },
      },
    );
    
    const jsonResponse = NextResponse.json(response.data);

    jsonResponse.headers.set('Cache-Control', 'no-store, no-cache, must-revalidate, proxy-revalidate');
    jsonResponse.headers.set('Pragma', 'no-cache');
    jsonResponse.headers.set('Expires', '0');

    return jsonResponse;
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { error: 'Sorry, error occurred' },
        { status: error.response?.status }
      );
    } else {
      return NextResponse.json(
        { error: 'Sorry, internal error occurred' },
        { status: 500 }
      );
    }
  }
}
