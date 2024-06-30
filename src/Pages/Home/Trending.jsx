// src/pages/Trending.jsx
import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addProductToCart } from '../../redux/CartSlice';
import ProductCard from '../Products/ProductCard';

export default function Trending() {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.products);

  // Selecting random product of each category for display
  const getRandomElement = (arr) => arr[Math.floor(Math.random() * arr.length)];

  const randomProductsOfEachCategory = Object.values(
    products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = [];
      }
      acc[product.category].push(product);
      return acc;
    }, {})
  ).map(getRandomElement);

  const handleAddToCart = (item) => {
    dispatch(addProductToCart(item));
  };

  return (
    <>
      <h2 className="flex justify-center text-center text-3xl font-bold my-10">
        Trending Products Just For You
      </h2>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center flex-wrap">
        {randomProductsOfEachCategory.map((product) => (
          <ProductCard key={product.id} product={product} onAddToCart={handleAddToCart} />
        ))}
      </div>
    </>
  );
}
