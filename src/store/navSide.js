
// navbar.js
import { createSlice } from '@reduxjs/toolkit';

export const navSideSlice = createSlice({
  name: 'navSide',
  initialState: { value: { collapse: false } },
  reducers: {
    navSideInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { navSideInfo } = navSideSlice.actions;
export default navSideSlice.reducer;
