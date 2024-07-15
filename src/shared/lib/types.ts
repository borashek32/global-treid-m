export type UserType = {
  id: string;
  name: string;
  email: string;
  image_url: string;
  password: string;
};

export type OrderType = {
  id: string;
  user_id: string;
  amount: number;
  date: string;
  status: 'pending' | 'paid';
};

export type FaqType = {
  id: string,
  question: string,
  answer: string,
};

export type ProductType = {
  id: number,
  name: string,
  car_model: string,
  price: number,
  stockQuantity: number,
}

export type CartType = {
  id: string,
  user_id: string,
  amount: number,
}