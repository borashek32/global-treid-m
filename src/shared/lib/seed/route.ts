import bcrypt from 'bcrypt';
import { db } from '@vercel/postgres';
import { users, orders, faqs, products, carts } from "../dummy-data";

const client = await db.connect();

async function seedUsers() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS users (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      email TEXT NOT NULL UNIQUE,
      password TEXT NOT NULL
    );
  `;

  const insertedUsers = await Promise.all(
    users.map(async (user) => {
      const hashedPassword = await bcrypt.hash(user.password, 10);
      return client.sql`
        INSERT INTO users (id, name, email, password)
        VALUES (${user.id}, ${user.name}, ${user.email}, ${hashedPassword})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedUsers;
}

async function seedOrders() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS orders (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID NOT NULL,
      amount INT NOT NULL,
      status VARCHAR(255) NOT NULL,
      date DATE NOT NULL
    );
  `;

  const insertedIOrders = await Promise.all(
    orders.map(
      (order) => client.sql`
        INSERT INTO invoices (user_id, amount, status, date)
        VALUES (${order.user_id}, ${order.amount}, ${order.status}, ${order.date})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedIOrders;
}

async function seedCarts() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;

  await client.sql`
    CREATE TABLE IF NOT EXISTS carts (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      user_id UUID NOT NULL,
      amount INT NOT NULL,
    );
  `;

  const insertedCarts = await Promise.all(
    carts.map(
      (cart) => client.sql`
        INSERT INTO carts (user_id, amount)
        VALUES (${cart.user_id}, ${cart.amount})
        ON CONFLICT (id) DO NOTHING;
      `,
    ),
  );

  return insertedCarts;
}

async function seedProducts() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS products (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      name VARCHAR(255) NOT NULL,
      car_model VARCHAR(255) NOT NULL,
      price INT NOT NULL,
      stock_quantity INT NOT NULL,
    );
  `;

  const insertedProducts = await Promise.all(
    products.map((product) => {
      return client.sql`
        INSERT INTO products (id, name, car_model, stock_quantity)
        VALUES (${product.id}, ${product.name}, ${product.carModel}, ${product.stockQuantity})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedProducts;
}

async function seedFaqs() {
  await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
  await client.sql`
    CREATE TABLE IF NOT EXISTS faqs (
      id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
      question TEXT NOT NULL,
      answer TEXT NOT NULL
    );
  `;

  const insertedFaqs = await Promise.all(
    faqs.map(async (faq) => {
      return client.sql`
        INSERT INTO faqs (id, question, answer)
        VALUES (${faq.id}, ${faq.question}, ${faq.answer})
        ON CONFLICT (id) DO NOTHING;
      `;
    }),
  );

  return insertedFaqs;
}

export async function GET() {
  // return Response.json({
  //   message:
  //     'Uncomment this file and remove this line. You can delete this file when you are finished.',
  // });
  try {
    await client.sql`BEGIN`;
    await seedUsers();
    await seedOrders();
    await seedFaqs();
    await seedCarts();
    await client.sql`COMMIT`;

    return Response.json({ message: 'Database seeded successfully' });
  } catch (error) {
    await client.sql`ROLLBACK`;
    return Response.json({ error }, { status: 500 });
  }
}
