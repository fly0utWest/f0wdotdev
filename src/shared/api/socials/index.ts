import { NextRequest, NextResponse } from 'next/server';
import { drizzle } from 'drizzle-orm/node-postgres';
import { socials } from '@/shared/config/db/schema';

const db = drizzle(process.env.DATABASE_URL!);

export async function GET(request: NextRequest) {
  try {
    const socialsData = await db.select().from(socials);
    return NextResponse.json(socialsData, { status: 200 });
  } catch (error) {
    console.error('Error fetching socials:', error);
    return NextResponse.json({ error: 'Failed to fetch socials data.' }, { status: 500 });
  }
}
