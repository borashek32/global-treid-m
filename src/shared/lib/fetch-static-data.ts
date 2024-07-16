import { sql } from '@vercel/postgres';
import { DeliveryType, FaqType, ProductFromInternalDBType, ReturnType, UserType } from './types';

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

export async function fetchAutoparts() {
  try {
    const data = await sql<ProductFromInternalDBType>`SELECT * FROM products`;

    return data.rows;
  } catch (error) {
    throw new Error('Failed to fetch products data.');
  }
}

export async function fetchDeliveries() {
  try {
    const data = await sql<DeliveryType>`SELECT * FROM deliveries`;

    return data.rows;
  } catch (error) {
    throw new Error('Failed to fetch delivery data.');
  }
}

export async function fetchReturns() {
  try {
    const data = await sql<ReturnType>`SELECT * FROM returns`;

    return data.rows;
  } catch (error) {
    throw new Error('Failed to fetch returns data.');
  }
}