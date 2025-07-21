import React from 'react';
import { Link } from 'react-router-dom';
import { Carousel } from 'react-responsive-carousel';
import products from '../data/products';

const Home = () => {
  return (
    <div className="bg-gradient-to-b from-blue-50 to-gray-100 text-gray-800 min-h-screen">
      {/* Banner Carousel */}
      <Carousel
  showThumbs={false}
  infiniteLoop
  autoPlay
  interval={6000} // Slower transition: 6 seconds per slide
  transitionTime={1200} // Smooth fade effect: 1.2 seconds transition
  showStatus={false}
  className="max-w-7xl mx-auto rounded-lg overflow-hidden mt-4"
>
  <div>
    <img src="/watches.webp" alt="Jeans Banner" className="h-96 object-cover w-full" />
  </div>
  <div>
    <img src="/shirts.jpg" alt="Shirt Banner" className="h-96 object-cover w-full" />
  </div>
  <div>
    <img src="/shoes.jpg" alt="Watch Banner" className="h-96 object-cover w-full" />
  </div>
</Carousel>


      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-6 py-16 text-center">
        <h1 className="text-5xl font-extrabold text-blue-900 mb-4 leading-tight">
          Welcome to <span className="text-blue-600">UrbanAura</span>
        </h1>
        <p className="text-lg text-gray-700 mb-6 max-w-2xl mx-auto">
          Discover curated fashion and lifestyle picks designed to elevate your daily look.
        </p>
        <Link
          to="/products"
          className="inline-block bg-blue-600 hover:bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg transition"
        >
          Shop Now
        </Link>
      </div>

      {/* Featured Products */}
      <div className="bg-white py-12">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-8">Featured Products</h2>
          <div className="grid gap-8 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {products.slice(0, 4).map((product) => (
              <div
                key={product.id}
                className="bg-gray-50 border border-gray-200 rounded-xl shadow-md hover:shadow-lg transition p-4"
              >
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover rounded-md mb-4"
                />
                <h3 className="text-lg font-semibold text-gray-800">{product.name}</h3>
                <p className="text-blue-700 font-bold mb-2">${product.price.toFixed(2)}</p>
                <Link
                  to={`/product/${product.id}`}
                  className="text-sm text-blue-600 hover:underline font-medium"
                >
                  View Details
                </Link>
              </div>
            ))}
          </div>
          <p className="mt-8 text-gray-500">More products coming soon...</p>
        </div>
      </div>
    </div>
  );
};

export default Home;
