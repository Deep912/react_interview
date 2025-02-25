import { useCart } from "../context/CartContext";
import { useAuth } from "../context/AuthContext";
import { useState } from "react";

const Checkout = () => {
  const { cart } = useCart();
  const { placeOrder } = useAuth();
  const [success, setSuccess] = useState(false);

  const handleCheckout = () => {
    placeOrder({
      items: cart,
      total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0),
    });
    setSuccess(true);
  };

  return success ? (
    <p className="p-4 text-green-500">Order placed successfully! 🎉</p>
  ) : (
    <div className="p-4">
      <h2 className="text-xl">Checkout</h2>
      <button
        onClick={handleCheckout}
        className="bg-green-500 text-white px-4 py-2 mt-2"
      >
        Place Order
      </button>
    </div>
  );
};

export default Checkout;
