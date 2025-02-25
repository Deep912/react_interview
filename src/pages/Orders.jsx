import { useAuth } from "../context/AuthContext";

const Orders = () => {
  const { orders } = useAuth();

  return (
    <div className="p-4">
      <h2 className="text-xl">Your Orders</h2>
      {orders.length === 0 ? (
        <p>No orders placed yet.</p>
      ) : (
        orders.map((order, index) => (
          <div key={index} className="border p-2 mt-2">
            <h3>Order #{index + 1}</h3>
            <p>Total: ${order.total}</p>
            <ul>
              {order.items.map((item) => (
                <li key={item.id}>
                  {item.title} - ${item.price} x {item.quantity}
                </li>
              ))}
            </ul>
          </div>
        ))
      )}
    </div>
  );
};

export default Orders;
