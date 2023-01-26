import { configureStore } from '@reduxjs/toolkit'
import counterReducer from '../features/counter/counterSlice'
import  authorSlice  from '../features/counter/author'
export default configureStore({
  reducer: {
    counter: counterReducer,
    author: authorSlice,
  },
})