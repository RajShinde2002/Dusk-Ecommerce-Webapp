import React from "react";
import { Link } from "react-router-dom";
import { Button } from "../../@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../../@/components/ui/card";
import LazyImage from "../../@/components/LazyImage";
import { useToast } from "../../@/components/ui/use-toast";

const truncateTitle = (title) => {
  const words = title.split(" ");
  if (words.length > 5) {
    return words.slice(0, 5).join(" ") + "...";
  }
  return title;
};

const ProductCard = ({ product, onAddToCart }) => {
  const { toast } = useToast();

  return (
    <Card className="w-[250px] md:hover:shadow-xl md:hover:scale-105 transition-all">
      <Link to={`/products/${product.id}`}>
        <CardHeader>
          <CardContent>
            <LazyImage src={product.image} alt={product.title} />
          </CardContent>
          <CardTitle className="truncate text-md">
            {truncateTitle(product.title)}
          </CardTitle>
        </CardHeader>
      </Link>
      <CardFooter className="flex justify-between text-xl">
        <p>{"₹" + product.price}</p>
        <Button
          className="bg-[#FF3F01] hover:bg-[#FF3F01] md:hover:bg-black/90"
          onClick={() => {
            onAddToCart(product);
            toast({
              title: "Woohoo! Product added to the cart",
            });
          }}
        >
          Add to cart
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ProductCard;
