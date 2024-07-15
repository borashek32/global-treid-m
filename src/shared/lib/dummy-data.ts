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
  },
  {
    question: 'Как мне изменить пароль?',
    answer: 'Перейдите на страницу вашего профиля, в меню слева выберите пункт Настройки. Найдите раздел Изменить пароль. Введите ваш текущий пароль и новый пароль в соответствующие поля. Нажмите кнопку Сохранить изменения.'
  },
  {
    question: 'Что делать, если я забыл свой пароль?',
    answer: 'Перейдите на страницу входа и нажмите ссылку Забыли пароль?. Введите ваш зарегистрированный email адрес и следуйте инструкциям для сброса пароля. Вы получите письмо с инструкциями по восстановлению доступа к вашему аккаунту.'
  },
  {
    question: 'Как мне изменить пароль?',
    answer: 'Перейдите на страницу вашего профиля, в меню слева выберите пункт "Настройки". Найдите раздел "Изменить пароль". Введите ваш текущий пароль и новый пароль в соответствующие поля. Нажмите кнопку "Сохранить изменения".'
  },
  {
    question: 'Как мне обновить информацию о моей компании?',
    answer: 'Перейдите на страницу вашего профиля, в меню слева выберите пункт "Настройки". Найдите раздел "Информация о компании". Внесите необходимые изменения и нажмите кнопку "Сохранить".'
  },
  {
    question: 'Как добавить нового пользователя к моей компании?',
    answer: 'Перейдите на страницу вашего профиля, в меню слева выберите пункт "Пользователи". Нажмите кнопку "Добавить пользователя", заполните информацию о новом пользователе и нажмите кнопку "Сохранить".'
  },
  {
    question: 'Как мне связаться с поддержкой?',
    answer: 'Перейдите на страницу "Контакты" и заполните форму обратной связи. Вы также можете отправить нам письмо на support@portal.com. Мы ответим вам в ближайшее время.'
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
  },
  {
    id: '3',
    name: 'Комплект шин',
    car_model: 'Lada',
    price: 20000,
    stock_quantity: 100,
  },
  {
    id: '4',
    name: 'Диски тормозные',
    car_model: 'Porche',
    price: 45000,
    stock_quantity: 140,
  },
  {
    id: '5',
    name: 'Покрышки',
    car_model: 'Москвич',
    price: 1000,
    stock_quantity: 20,
  },
  {
    id: '6',
    name: 'Стеклоомыватель',
    car_model: 'Mercedez',
    price: 1000,
    stock_quantity: 20,
  },
  {
    id: '7',
    name: 'Комплект сидений',
    car_model: 'Lada',
    price: 20000,
    stock_quantity: 100,
  },
  {
    id: '8',
    name: 'Колодки тормозные',
    car_model: 'Porche',
    price: 45000,
    stock_quantity: 140,
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
