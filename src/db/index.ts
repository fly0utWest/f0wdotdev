import { drizzle } from 'drizzle-orm/node-postgres';
import * as schema from '@/shared/config/db/schema';
import { dbUrl } from '@/shared/config';

export const db = drizzle(dbUrl!, { schema });
