import { NextResponse } from 'next/server';
import { socials } from '@/shared/config/db/schema';
import { db } from '@/db';

export async function GET() {
  try {
    const socialsData = await db.select().from(socials);
    return NextResponse.json(socialsData, { status: 200 });
  } catch (error) {
    console.error('Error fetching socials:', error);
    return NextResponse.json(
      { error: 'Failed to fetch socials data.' },
      { status: 500 },
    );
  }
}
