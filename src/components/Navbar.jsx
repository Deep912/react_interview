import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // ✅ Import useCart

const Navbar = () => {
  const { cart } = useCart(); // ✅ Now cart is defined

  return (
    <nav className="bg-indigo-600 p-4 shadow-lg">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link to="/" className="text-white text-2xl font-bold">
          🛍️ eShop
        </Link>
        <div className="space-x-6 flex items-center">
          <Link to="/" className="text-white hover:underline">
            Home
          </Link>
          <Link to="/orders" className="text-white hover:underline">
            Orders
          </Link>
          <Link to="/login" className="text-white hover:underline">
            Login
          </Link>

          {/* Cart Link with Count */}
          <Link to="/cart" className="text-white hover:underline">
            🛒 Cart ({cart.length}) {/* ✅ Shows cart count */}
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
