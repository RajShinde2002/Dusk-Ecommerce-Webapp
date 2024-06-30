import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProductToCart } from "../../redux/CartSlice";
import Filter from "../../@/components/Filter";
import Sort from "../../@/components/ui/Sort";
import ProductCard from "./ProductCard";

const ProductListing = () => {
  const dispatch = useDispatch();
  const products = useSelector((state) => state.product.filteredProduct);

  const handleAddToCart = (item) => {
    dispatch(addProductToCart(item));
  };

  return (
    <>
      <div className="flex justify-between mb-1">
        <Filter />
        <Sort />
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center flex-wrap">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAddToCart={handleAddToCart}
          />
        ))}
      </div>
    </>
  );
};

export default ProductListing;
