import { sql } from '@vercel/postgres';
import { DeliveryType, FaqType, ReturnType, UserType } from '../types/types';

export async function fetchUsers() {
  try {
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
    throw new Error('Не удается загрузить часто задаваеиые вопросы.');
  }
}

export async function fetchDeliveries() {
  try {
    const data = await sql<DeliveryType>`SELECT * FROM deliveries`;

    return data.rows;
  } catch (error) {
    throw new Error('Не удается загрузить данные по доставке.');
  }
}

export async function fetchReturns() {
  try {
    const data = await sql<ReturnType>`SELECT * FROM returns`;

    return data.rows;
  } catch (error) {
    throw new Error('Не удается загрузить данные по возврату товаров.');
  }
}