import { loadEnvConfig } from "@next/env";
import { z } from "zod";

loadEnvConfig(process.cwd())

const EnvSchema = z.object({
  BETTER_AUTH_SECRET: z.string(),
  BETTER_AUTH_URL: z.url(),
  TURSO_DATABASE_URL: z.url(),
  TURSO_AUTH_TOKEN: z.string(),
  NODE_ENV: z.string(),
  GITHUB_CLIENT_ID: z.string(),
  GITHUB_CLIENT_SECRET: z.string(),
});

export default EnvSchema.parse(process.env)
