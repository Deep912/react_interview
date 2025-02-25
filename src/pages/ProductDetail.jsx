import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import axios from "axios";

const ProductDetails = ({ addToCart }) => {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    axios
      .get(`https://dummyjson.com/products/${id}`)
      .then((response) => {
        setProduct(response.data);
        setSelectedImage(response.data.thumbnail);
      })
      .catch((error) => console.error("Error fetching product:", error));
  }, [id]);

  if (!product) {
    return <div className="text-center text-gray-700 text-lg">Loading...</div>;
  }

  return (
    <section className="py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Back to Product List */}
        <Link
          to="/"
          className="text-indigo-600 font-semibold hover:underline mb-4 block"
        >
          ← Back to Products
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image Gallery */}
          <div className="w-full flex flex-col items-center">
            <img
              src={selectedImage}
              alt={product.title}
              className="w-full max-w-lg h-96 object-cover rounded-xl shadow-lg"
            />

            {/* Thumbnails */}
            <div className="mt-4 flex gap-3 overflow-x-auto">
              {product.images.map((img, index) => (
                <img
                  key={index}
                  src={img}
                  alt={`Thumbnail ${index}`}
                  onClick={() => setSelectedImage(img)}
                  className={`w-20 h-20 object-cover rounded-md cursor-pointer border-2 transition-all ${
                    selectedImage === img
                      ? "border-indigo-600"
                      : "border-gray-300"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="max-w-lg">
            <h2 className="text-3xl font-bold text-gray-900 mb-2">
              {product.title}
            </h2>
            <p className="text-gray-500 text-lg">{product.description}</p>

            <div className="flex items-center mt-4">
              <span className="text-2xl font-semibold text-gray-900">
                ${product.price}
              </span>
              {product.discountPercentage > 0 && (
                <span className="ml-3 text-lg font-semibold text-indigo-600">
                  {product.discountPercentage}% off
                </span>
              )}
            </div>

            {/* Stock Number */}
            <p className="mt-3 text-lg font-medium text-gray-900">
              Stock:{" "}
              <span
                className={
                  product.stock > 0 ? "text-green-600" : "text-red-600"
                }
              >
                {product.stock} units available
              </span>
            </p>

            {/* Additional Details */}
            <div className="mt-4">
              <p className="text-lg font-medium text-gray-900">
                Product Details
              </p>
              <ul className="list-disc list-inside text-gray-700 text-base mt-2">
                <li>Brand: {product.brand}</li>
                <li>Category: {product.category}</li>
                <li>
                  Weight: {product.weight ? `${product.weight} kg` : "N/A"}
                </li>
                <li>Rating: {product.rating} ⭐</li>
              </ul>
            </div>

            {/* Add to Cart Button */}
            {product.stock > 0 && (
              <button
                onClick={() => addToCart(product)}
                className="mt-6 bg-indigo-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-indigo-700 w-full"
              >
                Add to Cart
              </button>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductDetails;
