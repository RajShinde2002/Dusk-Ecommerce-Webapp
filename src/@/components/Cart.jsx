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
import { Minus, Plus, ShoppingCart, Trash2 } from "lucide-react";

export default function Cart() {
  const [isOpen, setIsOpen] = useState(false);
  const dispatch = useDispatch();
  const cartItems = useSelector((state) => state.cart.cart);

  // Calculating total price of items in the cart
  const totalPrice = cartItems.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  //Adding quantity of product
  const handleAdd = (item) => {
    dispatch(addProductToCart(item));
  };

  //Removing quantity of product
  const handleRemove = (item) => {
    dispatch(removeProductFromCart(item));
  };

  //Deleting product from cart
  const handleDelete = (item) => {
    console.log(item)
    dispatch(deleteProductFromCart(item));
  };

  //Closing the cart
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogTrigger asChild className="w-20">
        <Button variant="outline" onClick={() => setIsOpen(true)}>
          <ShoppingCart />
          ({cartItems.length})
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Your Cart</DialogTitle>
        </DialogHeader>
        <div className="grid gap-4 py-4 max-h-[300px] overflow-y-auto">
          {/* If no cart items are present, show this message */}
          {cartItems.length === 0 && (
            <p className="text-black">Your cart is empty</p>
          )}
          {/* If cart items are present, map through it */}
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
                  <p id={`title-${item.id}`} className="flex gap-2 items-center">
                    <Button variant="outline" onClick={() => handleRemove(item)} className="flex items-center"><Minus /></Button>
                    {item.quantity}
                    <Button variant="outline" onClick={() => handleAdd(item)} className="flex items-center"><Plus /></Button>
                  </p>
                  <span className="ml-2">x ₹{item.price}</span>
                </div>
                <div className="col-span-1 text-right">
                  <p className="font-semibold">
                    ₹{item.price * item.quantity}
                  </p>
                  <button className="my-2" onClick={()=>handleDelete(item)}>
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
