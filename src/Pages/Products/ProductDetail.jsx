import { addProductToCart } from "../../redux/CartSlice";
import { Button } from "../../@/components/ui/button";
import { Card } from "../../@/components/ui/card";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";

export default function ProductDetail() {
  const products = useSelector((state) => state.product.products);
  const dispatch = useDispatch()
  const { id } = useParams();

  //Adding products to the cart
  const onAddToCart = (item) => {
    dispatch(addProductToCart(item));
  }

  return (
    <>
      {products
        .filter((i) => i.id === parseInt(id))
        .map((item) => (
          <Card className="m-10 border-black p-10" key={item.id}>
            <div className="flex gap-10" key={item.id}>
              <img
                className="w-[20%] h-[10%] rounded-2xl"
                src={item.image}
                alt="Product Image"
              />
              <div className="flex flex-col">
                <h2 className="text-black text-[35px] font-medium my-2">
                  {item.title}
                </h2>
                <p className="text-[20px] text-wrap">{item.description}</p>
                <p className="flex bg-slate-950 justify-center items-center w-12 rounded-sm p-1 my-3">
                  <span className=" text-white">
                    {item.rating.rate}
                  </span>
                  <span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="#fff"
                      stroke="#000"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      className="lucide lucide-star"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                  </span>
                </p>
                <p className="text-black">Rated by {item.rating.count} people</p>
                <div className="text-black flex justify-between mt-5">
                  <p className="text-black text-[30px]">{"₹" + item.price}</p>
                  <Button onClick={()=>onAddToCart(item)}>Add to Cart</Button>
                </div>
              </div>
            </div>
          </Card>
        ))}
    </>
  );
}
