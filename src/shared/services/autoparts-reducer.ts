import { createAsyncThunk } from "@reduxjs/toolkit";
import { setAutoparts, setError, setIsLoading } from "@/shared/providers/store-provider/slices/autoparts-slice";
import { autopartsApi } from "@/shared/api/autoparts-api";

export const fetchAutoparts = createAsyncThunk(
  'autoparts/fetchAutoparts', 
  (number: string, thunkAPI ) => {

  const { dispatch } = thunkAPI
  dispatch(setIsLoading(true))
  
  setTimeout(async () => {
    try {
      const response = await autopartsApi.getAutoparts(number);
      dispatch(setIsLoading(false));
      dispatch(setAutoparts(response.data.goods));
    } catch (error) {
      dispatch(setError(`Failed to fetch autoparts for VIN number ${number}`))
    }
  }, 2000)
});