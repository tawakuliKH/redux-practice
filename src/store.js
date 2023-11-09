import { configureStore } from '@reduxjs/toolkit';
import cartReducer from './features/cart/cartSlice';
import modalRecucer from './features/modal/modalSlice';

const store = configureStore({
  reducer: {
    cart: cartReducer,
    modal: modalRecucer,
  },
});

export default store;
