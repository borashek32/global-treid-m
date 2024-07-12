import { sql } from '@vercel/postgres';
import { FaqType, UserType } from './types';

export async function fetchUsers() {
  try {
    console.log('Fetching users data...');
    const data = await sql<UserType>`SELECT * FROM users`;

    return data.rows;
  } catch (error) {
    throw new Error('Failed to fetch users data.');
  }
}

export async function fetchFaqs() {
  try {
    const data = await sql<FaqType>`SELECT * FROM faqs`;

    return data.rows;
  } catch (error) {
    throw new Error('Failed to fetch faqs data.');
  }
}