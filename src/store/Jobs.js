import { createSlice } from '@reduxjs/toolkit';


export const jobsSlice = createSlice({
  name: 'Jobs',
  initialState: {value:{}},
  reducers: {
    jobsInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { jobsInfo } = jobsSlice.actions; // Update to 'info' here
export default jobsSlice.reducer;