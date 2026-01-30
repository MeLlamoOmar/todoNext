import validEnv from '../env/config';
import { drizzle } from 'drizzle-orm/libsql';

import * as schema from '@/lib/db/schema'

const db = drizzle({
  connection: {
    url: validEnv.TURSO_DATABASE_URL,
    authToken: validEnv.NODE_ENV === 'development' ? undefined : validEnv.TURSO_AUTH_TOKEN,
  },
  casing: 'snake_case',
  schema
});

export default db