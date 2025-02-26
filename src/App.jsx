import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // ✅ Navbar always visible
import Home from "./pages/Home";
import ProductDetail from "./pages/ProductDetail";
import CartPage from "./pages/CartPage";
import Orders from "./pages/Orders";
import Login from "./pages/Login";

function App() {
  return (
    <>
      <Navbar /> {/* ✅ Navbar stays on all pages */}
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
