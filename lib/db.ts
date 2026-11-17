import { Pool } from 'pg';

const connectionString = process.env.SUPABASE_DIRECT_URL;

export function getPool() {
  if (!connectionString) {
    return null;
  }

  return new Pool({
    connectionString,
    ssl: { rejectUnauthorized: false },
  });
}

export const pool = connectionString ? new Pool({
  connectionString,
  ssl: { rejectUnauthorized: false },
}) : null;
