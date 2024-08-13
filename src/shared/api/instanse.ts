import axios from "axios";

export const instance = axios.create({
  baseURL: 'https://api.favorit-parts.ru/hs/hsprice',
  timeout: 5000,
});