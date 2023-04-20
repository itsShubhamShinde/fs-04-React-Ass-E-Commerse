import { configureStore } from '@reduxjs/toolkit'
import MoviDetails from './MoviSlice'
export default configureStore({
  reducer: { MoviDetails}
})