import { validEnv } from '../env/config';
import { drizzle } from 'drizzle-orm/libsql';

import * as schema from '@/lib/db/schema'

const db = drizzle({
  connection: {
    url: validEnv.tursoUrl,
    authToken: validEnv.nodeEnv === 'development' ? undefined : validEnv.tursoAuth,
  },
  casing: 'snake_case',
  schema
});

export default db