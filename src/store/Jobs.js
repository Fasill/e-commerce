import { createSlice } from '@reduxjs/toolkit';

const jobs = {
    "AccentedJobs":0,
    "MapedJobs":0,
    "LivePostions":0,
    "FavoriteJobs":0,
    "myJobs":0
}

export const jobsSlice = createSlice({
  name: 'Jobs',
  initialState: {value:jobs},
  reducers: {
    jobsInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { jobsInfo } = jobsSlice.actions; // Update to 'info' here
export default jobsSlice.reducer;