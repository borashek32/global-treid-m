import { configureStore } from '@reduxjs/toolkit'
import autopartsReducer from '../slices/autoparts-slice'

export const store = configureStore({
  reducer: {
    autoparts: autopartsReducer,
  },
})

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch