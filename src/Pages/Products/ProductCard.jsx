import React from 'react';
import { Link } from 'react-router-dom';
import { Button } from '../../@/components/ui/button';
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from '../../@/components/ui/card';
import LazyImage from '../../@/components/LazyImage';

const truncateTitle = (title) => {
  const words = title.split(' ');
  if (words.length > 5) {
    return words.slice(0, 5).join(' ') + '...';
  }
  return title;
};

const ProductCard = ({ product, onAddToCart }) => (
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
      <p>{'₹' + product.price}</p>
      <Button className="bg-[#FF3F01] hover:bg-[#FF3F01]" onClick={() => onAddToCart(product)}>
        Add to cart
      </Button>
    </CardFooter>
  </Card>
);

export default ProductCard;
