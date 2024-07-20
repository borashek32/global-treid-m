import { ProductFromFavoritApiType } from "../types/types";
import { instance } from "./instanse";

export const autopartsApi = {
  getAutoparts(number: string) {
    return instance.get<{goods: ProductFromFavoritApiType[]}>('/', {
      params: {
        key: '30D2E199-5AAE-4837-AABD-74518EE085FD',
        number,
      }
    });
  },
};

// В вашем коде todo-lists - это относительный путь к ресурсу (endpoint) API, который вы хотите получить.

// В данном случае, вы используете библиотеку Axios для выполнения HTTP-запроса к API. Метод get библиотеки Axios принимает два аргумента: первый аргумент - это относительный путь к ресурсу, а второй аргумент (необязательный) - это объект с заголовками и/или параметрами запроса.

// Таким образом, вызывая метод get с аргументом todo-lists, вы отправляете HTTP-запрос к API с относительным путем /todo-lists.