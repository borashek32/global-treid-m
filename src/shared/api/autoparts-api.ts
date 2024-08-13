import { ProductFromFavoritApiType } from "../types/types";
import { instance } from "./instanse";

export const autopartsApi = {
  getAutoparts(number: string) {
    console.log(number)
    return instance.get<{goods: ProductFromFavoritApiType[]}>('/', {
      params: {
        key: '30D2E199-5AAE-4837-AABD-74518EE085FD',
        number,
      }
    });
  },
};
