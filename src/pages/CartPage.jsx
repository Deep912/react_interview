import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

const CartPage = () => {
  const { cart, removeFromCart } = useCart();

  return (
    <div className="p-4">
      <h2 className="text-2xl">Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map((item) => (
          <div key={item.id} className="flex justify-between border p-2 my-2">
            <p>
              {item.title} - ${item.price} x {item.quantity}
            </p>
            <button
              onClick={() => removeFromCart(item.id)}
              className="bg-red-500 px-2 text-white"
            >
              Remove
            </button>
          </div>
        ))
      )}
      {cart.length > 0 && (
        <Link
          to="/checkout"
          className="block bg-green-500 text-white p-2 text-center mt-4"
        >
          Checkout
        </Link>
      )}
    </div>
  );
};

export default CartPage;
