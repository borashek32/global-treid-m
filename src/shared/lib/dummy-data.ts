const users = [
  {
    id: '410544b2-4001-4271-9855-fec4b6a6442a',
    name: 'User',
    email: 'user@nextmail.com',
    image_url: '/users/evil-rabbit.png',
    password: '123456',
  },
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    name: 'Delba de Oliveira',
    email: 'delba@oliveira.com',
    image_url: '/users/delba-de-oliveira.png',
    password: '123456'
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    name: 'Lee Robinson',
    email: 'lee@robinson.com',
    image_url: '/users/lee-robinson.png',
    password: '123456'
  },
  {
    id: '76d65c26-f784-44a2-ac19-586678f7c2f2',
    name: 'Michael Novotny',
    email: 'michael@novotny.com',
    image_url: '/users/michael-novotny.png',
    password: '123456'
  },
  {
    id: 'CC27C14A-0ACF-4F4A-A6C9-D45682C144B9',
    name: 'Amy Burns',
    email: 'amy@burns.com',
    image_url: '/users/amy-burns.png',
    password: '123456'
  },
  {
    id: '13D07535-C59E-4157-A011-F8D2EF4E0CBB',
    name: 'Balazs Orban',
    email: 'balazs@orban.com',
    image_url: '/users/balazs-orban.png',
    password: '123456'
  },
];

const orders = [
  {
    user_id: users[0].id,
    amount: 15795,
    status: 'pending',
    date: '2022-12-06',
  },
  {
    user_id: users[1].id,
    amount: 20348,
    status: 'pending',
    date: '2022-11-14',
  },
  {
    user_id: users[4].id,
    amount: 3040,
    status: 'paid',
    date: '2022-10-29',
  },
  {
    user_id: users[3].id,
    amount: 44800,
    status: 'paid',
    date: '2023-09-10',
  },
  {
    user_id: users[3].id,
    amount: 34577,
    status: 'pending',
    date: '2023-08-05',
  },
  {
    user_id: users[2].id,
    amount: 54246,
    status: 'pending',
    date: '2023-07-16',
  },
  {
    user_id: users[0].id,
    amount: 666,
    status: 'pending',
    date: '2023-06-27',
  },
  {
    user_id: users[3].id,
    amount: 32545,
    status: 'paid',
    date: '2023-06-09',
  },
  {
    user_id: users[4].id,
    amount: 1250,
    status: 'paid',
    date: '2023-06-17',
  },
  {
    user_id: users[3].id,
    amount: 8546,
    status: 'paid',
    date: '2023-06-07',
  },
  {
    user_id: users[1].id,
    amount: 500,
    status: 'paid',
    date: '2023-08-19',
  },
  {
    user_id: users[3].id,
    amount: 8945,
    status: 'paid',
    date: '2023-06-03',
  },
  {
    user_id: users[2].id,
    amount: 1000,
    status: 'paid',
    date: '2022-06-05',
  },
];

const faqs = [
  {
    question: 'Как мне зарегистрироваться на портале, в качестве юридического лица?',
    answer: 'Если вы регистрируетесь, то перейдите на страницу регистрации. Заполните регистрационные данные и отметьте галочкой чекбокс юридическое лицо. Под формой регистрации откроется форма добавления реквизитов вашей компании. Заполните все обязательные поля. Если вы уже рарегистрировались, как физическое лицо, то перейдите на страницу вашего профиля, в меню слева выберите пункт Настройки. В настройках отметьте галочкой чекбокс юридическое лицо. Откроется форма для внесения реквизитов вашей компании. Заполните все обязательные поля.'
  },
  {
    question: 'Как мне удалить свой аккаунт на портале?',
    answer: 'Перейдите на страницу вашего профиля, в меня слева выберите пункт Настройки. Промотайте страницу до конца. Нажмите кнопку Удалить аккунт. Подтвердите удаление во всплывающем модальном окне.'
  }
];

const products = [
  {
    id: '1',
    name: 'Зеркалo',
    car_model: 'Москвич',
    price: 1000,
    stock_quantity: 20,
  },
  {
    id: '2',
    name: 'Стекло',
    car_model: 'Mercedez',
    price: 1000,
    stock_quantity: 20,
  }
];

const carts = [
  {
    user_id: users[0].id,
    amount: 15795,
  },
  {
    user_id: users[1].id,
    amount: 15796,
  },
  {
    user_id: users[2].id,
    amount: 15797,
  },
  {
    user_id: users[3].id,
    amount: 15798,
  },
];

export { users, orders, faqs, products, carts };
