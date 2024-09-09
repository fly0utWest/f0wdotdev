import axios from 'axios';
import { NextResponse } from 'next/server';
import { githubApiKey } from '@/shared/config';

export const dynamic = 'force-dynamic';

export async function GET() {
  try {
    const response = await axios.get(
      'https://api.github.com/users/fly0utWest/repos',
      {
        headers: {
          Authorization: `token ${githubApiKey}`,
        },
      },
    );

    return NextResponse.json(response.data, { status: 200 });
  } catch (error: unknown) {
    if (axios.isAxiosError(error)) {
      return NextResponse.json(
        { error: 'Sorry, error occurred' },
        { status: error.response?.status },
      );
    } else {
      return NextResponse.json(
        { error: 'Sorry, internal error occurred' },
        { status: 500 },
      );
    }
  }
}