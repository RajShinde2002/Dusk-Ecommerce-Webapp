import { createSlice } from '@reduxjs/toolkit';

export const CartSlice = createSlice({
  name: 'cart',
  initialState: {
    cart: [],
    totalAmount: 0,
    totalPrice: 0,
  },
  reducers: {
    addProductToCart: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.cart.find(item => item.id === id);

      if (existingProduct) {
        // If product exists, increasing its quantity
        existingProduct.quantity += 1;
      } else {
        // If product doesn't exist, adding it to cart
        state.cart.push({ ...action.payload, quantity: 1 });
      }

      // Updating total amount and price
      state.totalAmount += 1;
      state.totalPrice += action.payload.price;
    },
    removeProductFromCart: (state, action) => {
      const { id } = action.payload;
      const existingProduct = state.cart.find(item => item.id === id);

      if (existingProduct && existingProduct.quantity > 1) {
        // Decreasing quantity if more than 1 item exists
        existingProduct.quantity -= 1;

        // Updating total amount and price
        state.totalAmount -= 1;
        state.totalPrice -= existingProduct.price;
      } else if (existingProduct && existingProduct.quantity === 1) {
        // Removing product from cart if only 1 item exists
        state.cart = state.cart.filter(item => item.id !== id);

        // Updating total amount and price
        state.totalAmount -= 1;
        state.totalPrice -= existingProduct.price;
      }
    },
    deleteProductFromCart: (state, action) => {
      const { id } = action.payload;
      console.log(action)
      const existingProduct = state.cart.find(item => item.id === id);
      console.log(existingProduct)
      if (existingProduct) {
        // Updating total amount and price before removing the product
        state.totalAmount -= existingProduct.quantity;
        state.totalPrice -= existingProduct.price * existingProduct.quantity;

        // Removing the product from the cart
        state.cart = state.cart.filter(item => item.id !== id)}}
  },
});

export const { addProductToCart, removeProductFromCart, deleteProductFromCart } = CartSlice.actions;

export default CartSlice.reducer;
