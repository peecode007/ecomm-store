import React from 'react';
import { Link } from 'react-router-dom';
import products from '../data/products';

const ProductsPage = () => {
  return (
    <div className="bg-gray-100 min-h-screen py-10 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-3xl font-bold text-blue-900 mb-8 text-center">Our Products</h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {products.map(product => (
            <div key={product.id} className="bg-white shadow-md rounded-lg overflow-hidden hover:shadow-xl transition">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h2 className="text-xl font-semibold text-gray-800">{product.name}</h2>
                <p className="text-sm text-gray-600 mb-2">{product.description}</p>
                <p className="text-blue-700 font-bold">${product.price.toFixed(2)}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="inline-block mt-2 text-sm text-blue-600 hover:text-blue-800 font-medium underline"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-lg text-gray-700 italic">More products coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default ProductsPage;
