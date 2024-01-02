import { createSlice } from '@reduxjs/toolkit';


export const productsSlice = createSlice({
  name: 'products',
  initialState: {value:{
  0:{"tittle":"White Tent",
    "price":200.00,
    "Quantity":0,},
  1:{
    "tittle":"Tin Coffee Tumbler",
    "price":35.00,
    "Quantity":0,
  },
  2:{
    "tittle":"Blue Canvas Pack",
    "price":95.00,
    "Quantity":0,

  }

  }},
  reducers: {
    productsInfo: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { productsInfo } = productsSlice.actions; // Update to 'info' here
export default productsSlice.reducer;