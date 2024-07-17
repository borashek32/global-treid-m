import { instance } from "../api/instanse";

export async function getAutoparts(number: string) {
  try {
    const response = await instance.get('/', {
      params: {
        key: '30D2E199-5AAE-4837-AABD-74518EE085FD',
        number: number,
      }
    });
    console.log('api', response);
  } catch (error) {
    throw new Error('Failed to fetch products data.');
  }  
}