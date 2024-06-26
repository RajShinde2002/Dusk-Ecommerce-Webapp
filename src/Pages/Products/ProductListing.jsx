import React, { useEffect } from "react";
import Filter from "../../@/components/Filter";
import { useDispatch } from "react-redux";
import { Button } from "../../@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import Sort from "../../@/components/ui/Sort";
import { addProductToCart } from "../../redux/CartSlice";

const ProductListing = () => {

  //Cropping the text after a certain limit 
  const truncateTitle = (title) => {
    const words = title.split(" ");
    if (words.length > 5) {
      return words.slice(0, 5).join(" ") + "...";
    }
    return title;
  };

  const dispatch = useDispatch();

  //Adding products to the cart
  const onAddToCart = (item) => {
    dispatch(addProductToCart(item));
  };

  const products = useSelector((state) => state.product.filteredProduct);
  return (
    <>
      <div className="flex justify-between">
        <Filter />
        <Sort />
      </div>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center flex-wrap">
        {products.map((product) => (
          <Card key={product.id} className="w-[250px] hover:shadow-xl">
            <Link to={`/products/${product.id}`}>
              <CardHeader>
                <CardContent>
                  <img
                    className="h-48 w-48 object-contain"
                    src={product.image}
                    alt={product.title}
                  />
                </CardContent>
                <CardTitle className="truncate text-md">
                  {truncateTitle(product.title)}
                </CardTitle>
              </CardHeader>
            </Link>
            <CardFooter className="flex justify-between text-xl">
              <p>{"₹" + product.price}</p>
              <Button onClick={() => onAddToCart(product)}>Add to cart</Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
};

export default ProductListing;
