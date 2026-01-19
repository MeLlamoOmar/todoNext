import { defineConfig } from 'drizzle-kit';

import { validEnv } from './lib/env/config';

export default defineConfig({
  out: './lib/db/migrations',
  schema: './lib/db/schema/index.ts',
  dialect: 'turso',
  dbCredentials: {
    url: validEnv.tursoUrl,
    authToken: validEnv.nodeEnv === 'development' ? undefined : validEnv.tursoAuth
  },
});
