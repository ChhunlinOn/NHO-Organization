import { Pool } from 'pg';

const pool = new Pool({
  user: process.env.DB_USER || 'nho',
  host: process.env.DB_HOST || 'db',
  database: process.env.DB_DATABASE || 'nho_organization_db',
  password: process.env.DB_PASSWORD || 'nho123',
  port: parseInt(process.env.DB_PORT || '5432'),
});

export default pool;