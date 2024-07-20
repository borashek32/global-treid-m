import axios from "axios";

export const instance = axios.create({
  baseURL: 'http://api.favorit-parts.ru/hs/hsprice',
  timeout: 1000,
});