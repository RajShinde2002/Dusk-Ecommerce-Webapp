import { createSlice } from '@reduxjs/toolkit'

export const ProductSlice = createSlice({
  name: 'product',
  initialState: {
    products: [],
    singleProduct: [],
    filteredProduct: []
  },
  //Defining reducers to handle state changes
  reducers: { 
    //Action to set all the products and filtered products
    allProducts: (state, action) => {
      state.products = action.payload;
      state.filteredProduct = action.payload;
    },
    // Action to filter products by selected categories
    filterByCategory: (state, action) => {
      const selectedCategories = action.payload;
      state.filteredProduct = state.products.filter(product => 
        selectedCategories.includes(product.category)
      );
    },
    // Action to sort products by price from high to low
    sortByPriceHighToLow: (state) => {
      state.filteredProduct = [...state.filteredProduct].sort((a, b) => b.price - a.price);
    },
    // Action to sort products by price from low to high
    sortByPriceLowToHigh: (state) => {
      state.filteredProduct = [...state.filteredProduct].sort((a, b) => a.price - b.price);
    },
    // Action to clear all filters
    clearFilter: (state) => {
      state.filteredProduct = state.products;
    },
  }
});

export const { allProducts, filterByCategory, filterByRating, sortByPriceHighToLow, sortByPriceLowToHigh, clearFilter } = ProductSlice.actions;

export default ProductSlice.reducer;
