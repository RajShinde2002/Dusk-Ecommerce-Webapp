import * as React from "react";
import { addProductToCart } from "../../redux/CartSlice";
import { Button } from "../../@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";

export default function Trending() {
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

  const products = useSelector((state) => state.product.products);

  // Selecting first product of each category for display
  const firstProductsOfEachCategory = Object.values(
    products.reduce((acc, product) => {
      if (!acc[product.category]) {
        acc[product.category] = product;
      }
      return acc;
    }, {})
  );
  return (
    <>
      <h2 className="flex justify-center text-center text-3xl font-bold my-10">
        Trending Products Just For You
      </h2>
      <div className="flex flex-col md:flex-row gap-10 justify-center items-center flex-wrap">
        {firstProductsOfEachCategory.map((product) => (
          <Card
            key={product.id}
            className="w-[250px] hover:shadow-xl hover:scale-105 transition-all"
          >
            <Link to={`/products/${product.id}`}>
              <CardHeader>
                <CardContent>
                  <React.Suspense fallback={<h2 className="text-black">Loading...</h2>}>
                    <img
                      className="h-48 w-48 object-contain"
                      src={product.image}
                      alt={product.title}
                    />
                  </React.Suspense>
                </CardContent>
                <CardTitle className="truncate text-lg">
                  {truncateTitle(product.title)}
                </CardTitle>
              </CardHeader>
            </Link>
            <CardFooter className="flex justify-between">
              <p className="text-xl">{"₹" + product.price}</p>
              <Button
                className="bg-[#FF3F01]"
                onClick={() => onAddToCart(product)}
              >
                Add to cart
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </>
  );
}
