import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import Orders from "./pages/Orders";
import Login from "./pages/Login";
import Navbar from "./components/Navbar"; // Import Navbar

function App() {
  return (
    <>
      <Navbar /> {/* ✅ Always visible */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/orders" element={<Orders />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
}

export default App;
