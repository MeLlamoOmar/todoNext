import { loadEnvConfig } from "@next/env";
import { z } from "zod";

loadEnvConfig(process.cwd())

const serverValidator = z.object({
  betterSecret: z.string(),
  betterUrl: z.url(),
  tursoUrl: z.url(),
  tursoAuth: z.string(),
  nodeEnv: z.string(),
  githubClient: z.string(),
  githubSecret: z.string()
})

const invalidEnv = {
  betterSecret: process.env.BETTER_AUTH_SECRET,
  betterUrl: process.env.BETTER_AUTH_URL,
  tursoUrl: process.env.TURSO_DATABASE_URL,
  tursoAuth: process.env.TURSO_AUTH_TOKEN,
  nodeEnv: process.env.NODE_ENV,
  githubClient: process.env.GITHUB_CLIENT_ID,
  githubSecret: process.env.GITHUB_CLIENT_SECRET,
};

const parsedInvalidEnv = serverValidator.safeParse(invalidEnv)

if (!parsedInvalidEnv.success) {
  console.error('Invalid server environment variables:');
  console.error(parsedInvalidEnv.error.flatten);
  throw new Error('Invalid server environment variables');
}

export const validEnv = parsedInvalidEnv.data
