// src/pages/About.jsx
import React from 'react';
import Header from '../components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-black mb-4">About Perfume Hub</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Your ultimate destination for discovering the perfect fragrance
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-3">Our Mission</h3>
            <p className="text-gray-700">
              Perfume Hub is dedicated to helping fragrance enthusiasts discover their signature scent. 
              We provide a comprehensive browsing experience of designer, UAE, and local brand perfumes 
              with detailed fragrance notes and seasonal recommendations.
            </p>
          </div>
          
          <div className="bg-gray-50 p-6 rounded-lg">
            <h3 className="text-xl font-semibold text-black mb-3">What We Offer</h3>
            <ul className="text-gray-700 space-y-2">
              <li>• Extensive collection of designer perfumes</li>
              <li>• Popular UAE fragrance brands</li>
              <li>• Local perfume house selections</li>
              <li>• Detailed fragrance notes and compositions</li>
              <li>• Seasonal recommendations</li>
            </ul>
          </div>
        </div>

        <div className="bg-gray-50 p-8 rounded-lg">
          <h3 className="text-2xl font-semibold text-black mb-4 text-center">How It Works</h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">1</div>
              <h4 className="font-semibold text-black mb-2">Browse Categories</h4>
              <p className="text-gray-600">Explore our three main categories: Designer, UAE Perfume, and Local Brand</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">2</div>
              <h4 className="font-semibold text-black mb-2">Filter by Scent</h4>
              <p className="text-gray-600">Find perfumes by scent type: Sweet, Fresh, Floral, Woody, or Spicy</p>
            </div>
            <div className="text-center">
              <div className="w-16 h-16 bg-black text-white rounded-full flex items-center justify-center mx-auto mb-4 text-xl font-bold">3</div>
              <h4 className="font-semibold text-black mb-2">Discover Details</h4>
              <p className="text-gray-600">Click on any perfume card to view detailed fragrance notes and seasonal recommendations</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="text-xl font-semibold text-black mb-4">Contact Us</h3>
          <p className="text-gray-600 mb-4">
            Have questions or suggestions? We'd love to hear from you!
          </p>
          <p className="text-gray-700">
            Email: contact@perfumehub.com
          </p>
        </div>
      </main>

      <footer className="bg-gray-900 text-white py-8 px-4 mt-12">
        <div className="max-w-7xl mx-auto text-center">
          <p>© 2025 Perfume Hub. All rights reserved.</p>
          <p className="mt-2 text-gray-400 text-sm">A fragrance discovery experience</p>
        </div>
      </footer>
    </div>
  );
};

export default About;