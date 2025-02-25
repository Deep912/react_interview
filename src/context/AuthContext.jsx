import { createContext, useState, useContext } from "react";
import axios from "axios";

const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [orders, setOrders] = useState([]);

  const login = async (username) => {
    try {
      const res = await axios.get(
        `https://dummyjson.com/users?username=${username}`
      );
      const userData = res.data.users.find((u) => u.username === username);
      if (userData) setUser(userData);
      else alert("User not found");
    } catch (error) {
      alert("Login failed");
    }
  };

  const logout = () => setUser(null);

  const placeOrder = (order) => setOrders([...orders, order]);

  return (
    <AuthContext.Provider value={{ user, login, logout, orders, placeOrder }}>
      {children}
    </AuthContext.Provider>
  );
};
