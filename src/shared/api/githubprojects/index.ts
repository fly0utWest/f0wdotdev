import axios from 'axios';
import { NextResponse } from 'next/server';
import { githubApiKey, githubUser } from '@/shared/config';

export async function GET() {
  try {
    const response = await fetch(`https://api.github.com/users/${githubUser}/repos`, {
      headers: {
        Authorization: `Bearer ${githubApiKey}`,
      },
    });

    // Log response status and status text
    console.log('GitHub API Response Status:', response.status, response.statusText);

    if (!response.ok) {
      console.error('GitHub API Error:', await response.text());
      return NextResponse.json({ error: 'GitHub API error occurred' }, { status: response.status });
    }

    const data = await response.json();
    console.log('Data from GitHub API:', data); // Log the data
    
    return NextResponse.json(data, { status: 200 });
  } catch (error: unknown) {
    console.error('Error fetching GitHub projects:', error);
    return NextResponse.json({ error: 'Sorry, internal error occurred' }, { status: 500 });
  }
}
