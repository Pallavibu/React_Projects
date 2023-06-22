import { configureStore } from '@reduxjs/toolkit'
import counterslice from '../features/counter/counterslice'
export const store = configureStore({
  reducer: {
    counter : counterslice
  },
})