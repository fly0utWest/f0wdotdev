import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '@/shared/config/db/schema';

export const db = drizzle(process.env.DATABASE_URL!, { schema });
