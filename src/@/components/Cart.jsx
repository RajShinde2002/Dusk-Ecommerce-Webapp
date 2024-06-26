import { useState } from "react";
import { Button } from "../../@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "../../@/components/ui/dialog";
import { Label } from "../../@/components/ui/label";
import { useDispatch, useSelector } from "react-redux";
import {
  addProductToCart,
  deleteProductFromCart,
  removeProductFromCart,
} from "../../redux/CartSlice";
import { LucideDelete, Trash2 } from "lucide-react";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  // Calculate total price of items in the cart
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  const handleAdd = (item) => {
    dispatch(addProductToCart(item));
  };

  const handleRemove = (item) => {
    dispatch(removeProductFromCart(item));
  };

  const handleDelete = (item) => {
    console.log(item)
    dispatch(deleteProductFromCart(item));
  };

  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className="w-20">
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            fill="currentColor"
            className="bi bi-cart"
            viewBox="0 0 16 16"
          >
            <path d="M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .491.592l-1.5 8A.5.5 0 0 1 13 12H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5M3.102 4l1.313 7h8.17l1.313-7zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4m7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4m-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2m7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2" />
          </svg>
          ({cartItems.length})
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Your Cart</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4 max-h-[300px] overflow-y-auto">
          {cartItems.length === 0 && (
            <p className="text-black">Your cart is empty</p>
          )}
          {cartItems &&
            cartItems.map((item) => (
              <div
                key={item.id}
                className="grid grid-cols-4 items-center gap-4"
              >
                <div className="col-span-1">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="h-20 w-20 object-contain"
                  />
                </div>
                <div className="col-span-2">
                  <Label htmlFor={`title-${item.id}`}>{item.title}</Label>
                  <p id={`title-${item.id}`} className="w-20">
                    <button onClick={() => handleRemove(item)}>-</button>
                    {item.quantity}
                    <button onClick={() => handleAdd(item)}>+</button>
                  </p>
                  <span className="ml-2">x ₹{item.price}</span>
                </div>
                <div className="col-span-1 text-right">
                  <p className="font-semibold">
                    ₹{item.price * item.quantity}
                  </p>
                  <button onClick={()=>handleDelete(item)}>
                    <Trash2 />
                  </button>
                </div>
              </div>
            ))}
        </div>
        <div className="flex justify-between items-center mt-4">
          <p className="font-semibold text-lg">Total:</p>
          <p className="font-semibold text-lg">₹{totalPrice.toFixed(2)}</p>
        </div>
        <DialogFooter>
          <Button variant="outline" onClick={handleClose}>
            Continue Shopping
          </Button>
          <Button
            type="submit"
            onClick={handleClose}
            disabled={cartItems.length === 0}
          >
            Checkout
          </Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  );
}
