import { betterAuth } from 'better-auth';
import { drizzleAdapter } from 'better-auth/adapters/drizzle';
import db from '@/lib/db';
import { validEnv } from '../env/config';

export const auth = betterAuth({
  database: drizzleAdapter(db, {
    provider: 'sqlite',
  }),
  socialProviders: {
    github: {
      clientId: validEnv.githubClient,
      clientSecret: validEnv.githubSecret,
    },
  },
});
