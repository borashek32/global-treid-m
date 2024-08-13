import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAutoparts, setError, setIsLoading } from "@/shared/providers/store-provider/slices/autoparts-slice";
import { autopartsApi } from "@/shared/api/autoparts-api";

export const fetchAutoparts = createAsyncThunk(
  'autoparts/fetchAutoparts', 
  async (number: string, { dispatch, rejectWithValue }) => {
    
    dispatch(setIsLoading(true));
    
    // try {
    //   const response = await autopartsApi.getAutoparts(number);
    //   dispatch(setAutoparts(response.data.goods));
    //   return response.data.goods;
    // } catch (error) {
    //   console.log(number)
    //   dispatch(setError(`Не удается загрузить данные по товару с номером ${number}`));
    // } finally {
    //   dispatch(setIsLoading(false));
    // }

    try {
      const response = await autopartsApi.getAutoparts(number);
      if (!response.data.goods) {
        throw new Error('Нет товаров в ответе');
      }
      dispatch(setAutoparts(response.data.goods));
      return response.data.goods;
    } catch (error) {
      const errorMessage = `Не удается загрузить данные по товару с номером ${number}`;
      console.error(errorMessage, error);
      dispatch(setError(errorMessage));
      return rejectWithValue(errorMessage);
    } finally {
      dispatch(setIsLoading(false));
    }
  }
);
