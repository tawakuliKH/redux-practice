import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const url = 'https://course-api.com/react-useReducer-cart-project';

const initialState = {
  cartItems: [],
  amount: 4,
  total: 0,
  isLoading: true,

};

export const getCartItems = createAsyncThunk('cart/getCartItems',
  () => fetch(url).then((resp) => resp.json()).catch((err) => console.log(err)));

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    clearCart: (state) => {
      state.cartItems = [];
    },
    removeItem: (state, action) => {
      const itemId = action.payload;
      state.cartItems = state.cartItems.filter((item) => item.id !== itemId);
    },
    increase: (state, { payload }) => {
      const cart = state.cartItems.find((item) => item.id === payload.id);
      cart.amount += 1;
    },
    decrease: (state, { payload }) => {
      const cart = state.cartItems.find((item) => item.id === payload.id);
      cart.amount -= 1;
    },
    caculateTotals: (state) => {
      let amount = 0;
      let total = 0;

      state.cartItems.forEach((item) => {
        amount += item.amount;
        total += item.amount * item.price;
      });
      state.amount = amount;
      state.total = total;
    },
  },
  extraReducers: {
    [getCartItems.pending]: (state) => {
      state.isLoading = true;
    },
    [getCartItems.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.cartItems = action.payload;
    },
    [getCartItems.rejected]: (state) => {
      state.isLoading = false;
    },
  },
});

// console.log(cartSlice);
export const {
  clearCart, removeItem, increase, decrease, caculateTotals,
} = cartSlice.actions;
export default cartSlice.reducer;
