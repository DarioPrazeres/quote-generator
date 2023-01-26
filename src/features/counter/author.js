import { createSlice } from '@reduxjs/toolkit'

export const authorSlice = createSlice({
  name: 'counter',
  initialState: {
    value: '',
  },
  reducers: {
    updateAuthor: (state, action) => {
      state.value = action.payload
    }
  },
})

// Action creators are generated for each case reducer function
export const { updateAuthor} = authorSlice.actions

export default authorSlice.reducer