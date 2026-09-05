import { Pool } from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
    max: 10,
    connectionTimeoutMillis: 10000,
    idleTimeoutMillis: 30000,
});

pool.on("error", (err) => {
    console.error("POSTGRES POOL ERROR:", err);
});

export default pool;