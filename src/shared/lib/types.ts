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

export type CartType = {
  id: string,
  user_id: string,
  amount: number,
};

export type ProductFromInternalDBType = {
  id: number,
  name: string,
  car_model: string,
  price: number,
  stockQuantity: number,
};

// Api Favorit types, surce https://api.favorit-parts.ru/static/wsprice.pdf?v=060223
export type ProdustFromFavoritApiType = {
  goodsID: string,
  brand: string,
  number: string,
  name: string,
  // Остаток на всех складах 
  count: number,
  // НЕ ИСПОЛЬЗОВАТЬ, цену нужно брать из конкретного склада, 
  // этот реквизит остался для совместимости
  price: number,
  rate: number,
  // Массив с аналогами (с параметрами как в goods) (значение
  // возвращается, если переданы параметры «analogues=on» и brand)
  analogues: ProdustFromFavoritApiType[],
  // Массив складов на которых имеется товар
  warehouses: Array<any>,
  // Невозвратная позиция 
  notRefund: boolean,
};

export type WarehouseFavoritApiType = {
  // Сокращенное наименование склада (имеется не у всех
  // складов)
  code: string,
  id: string,
  // Товар находиться на нашем складе 
  own: boolean,
  // Поле содержит Дату и Время. Дата – это дата отгрузки
  // товара. Время – это время, до какого часа можно заказать,
  // что бы товар можно было отгрузить на эту дату.
  shipmentDate: string,
  price: number,
  // Остаток на этом складе 
  stock: number,
  // Невозвратная позиция
  notRefund: boolean,  
};

// Невозвратная позиция
// Если в запросе передавать параметр info=on, то в ответе появиться признак notRefund
// Невозвратной позиции.
// Невозвратная позиция – это предложение, которое нельзя вернуть по причине «Отказ».
// В ответе признак Невозвратная позиция есть у самого товара (в основном это масла, жидкости) и у
// предложений поставщиков (которые не принимают возвраты).