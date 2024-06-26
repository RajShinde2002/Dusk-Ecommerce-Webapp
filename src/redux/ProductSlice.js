import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    singleProduct: [],
    filteredProduct: []
  },
  reducers: {
    allProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProduct = action.payload;
    },
    filterByCategory: (state, action) => {
      const selectedCategories = action.payload;
      state.filteredProduct = state.products.filter(product => 
        selectedCategories.includes(product.category)
      );
    },
    sortByPriceHighToLow: (state) => {
      state.filteredProduct = [...state.filteredProduct].sort((a, b) => b.price - a.price);
    },
    sortByPriceLowToHigh: (state) => {
      state.filteredProduct = [...state.filteredProduct].sort((a, b) => a.price - b.price);
    },
    clearFilter: (state) => {
      state.filteredProduct = state.products;
    },
  }
});

export const { allProducts, filterByCategory, filterByRating, sortByPriceHighToLow, sortByPriceLowToHigh, clearFilter } = ProductSlice.actions;

export default ProductSlice.reducer;
