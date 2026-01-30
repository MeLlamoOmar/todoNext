import { defineConfig } from 'drizzle-kit';

import validEnv from './lib/env/config';

export default defineConfig({
  out: './lib/db/migrations',
  schema: './lib/db/schema/index.ts',
  dialect: 'turso',
  dbCredentials: {
    url: validEnv.TURSO_DATABASE_URL,
    authToken: validEnv.NODE_ENV === 'development' ? undefined : validEnv.TURSO_AUTH_TOKEN
  },
  casing: 'snake_case'
});
