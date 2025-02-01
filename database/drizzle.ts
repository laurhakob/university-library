// import { drizzle } from "drizzle-orm/neon-http";
// import { neon } from "@neondatabase/serverless";
// import config from "@/lib/config";

// const sql = neon(config.env.databaseUrl);

// export const db = drizzle({ client: sql });

// chat gbt

// import { drizzle } from "drizzle-orm/neon-http";
// import { neon } from "@neondatabase/serverless";
// import config from "@/lib/config";

// // Check if databaseUrl is defined before using it, or provide a fallback
// const databaseUrl = config.env.databaseUrl;

// if (!databaseUrl) {
//   throw new Error("Database URL is not defined in the environment variables.");
// }

// const sql = neon(databaseUrl);

// export const db = drizzle({ client: sql });

import config from '@/lib/config';
import { neon } from '@neondatabase/serverless';
import { drizzle } from 'drizzle-orm/neon-http';

const sql = neon(config.env.databaseUrl)
export const db = drizzle({client: sql});
