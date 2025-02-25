import { Link } from "react-router-dom";

const ProductCard = ({ product }) => (
  <div className="bg-white shadow-md rounded-lg overflow-hidden border">
    <img
      src={product.thumbnail}
      alt={product.title}
      className="w-full h-48 object-cover"
    />
    <div className="p-4">
      <h3 className="font-bold text-lg">{product.title}</h3>
      <p className="text-gray-500">${product.price}</p>
      <p
        className={`text-sm font-semibold ${
          product.stock > 0 ? "text-green-600" : "text-red-600"
        }`}
      >
        {product.stock > 0 ? "In Stock" : "Out of Stock"}
      </p>
      <Link
        to={`/product/${product.id}`}
        className="mt-2 block bg-blue-500 text-white px-4 py-2 rounded-md text-center hover:bg-blue-600"
      >
        View Details
      </Link>
    </div>
  </div>
);

export default ProductCard;
