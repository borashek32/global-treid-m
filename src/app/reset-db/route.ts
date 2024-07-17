import { db } from '@vercel/postgres';

const client = await db.connect();

async function clearDatabase() {
  await client.sql`DROP EXTENSION IF EXISTS "uuid-ossp" CASCADE`;
  
  await client.sql`DROP TABLE IF EXISTS users CASCADE`;
  await client.sql`DROP TABLE IF EXISTS faqs CASCADE`;
  await client.sql`DROP TABLE IF EXISTS orders CASCADE`;
  await client.sql`DROP TABLE IF EXISTS products CASCADE`;
  await client.sql`DROP TABLE IF EXISTS carts CASCADE`;
  await client.sql`DROP TABLE IF EXISTS deliveries CASCADE`;
  await client.sql`DROP TABLE IF EXISTS returns CASCADE`;

  return 'Database cleared';
}

export async function GET() {
  try {
    await client.sql`BEGIN`;
    await clearDatabase();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database cleared successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
