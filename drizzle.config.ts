import { dbUrl } from '@/shared/config';
import { defineConfig } from 'drizzle-kit';

export default defineConfig({
  out: './drizzle',
  schema: './src/shared/config/db/schema.ts',
  dialect: 'postgresql',
  dbCredentials: {
    url: dbUrl!,
  },
});
