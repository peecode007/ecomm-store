import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import products from '../data/products';
import { useCart } from '../context/CartContext';

const ProductPage = () => {
  const { id } = useParams();
  const { addToCart } = useCart();
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const foundProduct = products.find(p => p.id === parseInt(id));
    setProduct(foundProduct);
  }, [id]);

  if (!product) {
    return (
      <div className="flex justify-center items-center h-screen text-blue-700 font-medium text-lg">
        Loading product...
      </div>
    );
  }

  return (
    <div className="bg-blue-50 min-h-screen px-4 py-10">
      <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-10 bg-white p-8 rounded-lg shadow-md">
        {/* Product Image */}
        <div className="flex justify-center">
          <img
            src={product.image}
            alt={product.name}
            className="rounded-xl shadow-md w-full max-h-[400px] object-contain bg-blue-100"
          />
        </div>

        {/* Product Details */}
        <div className="flex flex-col justify-center">
          <h1 className="text-3xl font-bold text-blue-900 mb-3">{product.name}</h1>
           <p className="text-md text-gray-600 mb-6">{product.description}</p>
          <p className="text-2xl font-semibold text-blue-800 mb-6">${product.price.toFixed(2)}</p>

          <button
            onClick={() => addToCart(product)}
            className="bg-blue-700 hover:bg-blue-600 text-white font-medium py-3 px-6 rounded transition duration-200"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
