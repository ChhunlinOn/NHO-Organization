import pool from '../config/database';


const createUser = async (username: string, email: string, password: string, role: 'admin' | 'user' = 'user') => {
  try {
    const result = await pool.query(
      'INSERT INTO users (username, email, password, role) VALUES ($1, $2, $3, $4) RETURNING *',
      [username, email, password, role]
    );
    return result.rows[0];
  } catch (error) {
    console.error(error);
    throw new Error('Failed to create user');
  }
};

const findUserByEmail = async (email: string) => {
  try {
    const result = await pool.query('SELECT * FROM users WHERE email = $1', [email]);
    return result.rows[0];
  } catch (error) {
    console.error(error);
    throw new Error('Failed to find user');
  }
};

export { createUser, findUserByEmail };