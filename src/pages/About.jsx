import React from 'react';
import Header from '../components/Header';

const About = () => {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl px-4 py-12 mx-auto">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold text-black">About Perfume Hub</h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Your ultimate destination for discovering the perfect fragrance
          </p>
        </div>

        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2">
          <div className="p-6 rounded-lg bg-gray-50">
            <h3 className="mb-3 text-xl font-semibold text-black">Our Mission</h3>
            <p className="text-gray-700">
              Perfume Hub is dedicated to helping fragrance enthusiasts discover their signature scent. 
              We provide a comprehensive browsing experience of designer, UAE, and local brand perfumes 
              with detailed fragrance notes and seasonal recommendations.
            </p>
          </div>
          
          <div className="p-6 rounded-lg bg-gray-50">
            <h3 className="mb-3 text-xl font-semibold text-black">What We Offer</h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Extensive collection of designer perfumes</li>
              <li>• Popular UAE fragrance brands</li>
              <li>• Local perfume house selections</li>
              <li>• Detailed fragrance notes and compositions</li>
              <li>• Seasonal recommendations</li>
            </ul>
          </div>
        </div>

        <div className="p-8 rounded-lg bg-gray-50">
          <h3 className="mb-4 text-2xl font-semibold text-center text-black">How It Works</h3>
          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-xl font-bold text-white bg-black rounded-full">1</div>
              <h4 className="mb-2 font-semibold text-black">Browse Categories</h4>
              <p className="text-gray-600">Explore our three main categories: Designer, UAE Perfume, and Local Brand</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-xl font-bold text-white bg-black rounded-full">2</div>
              <h4 className="mb-2 font-semibold text-black">Filter by Scent</h4>
              <p className="text-gray-600">Find perfumes by scent type: Sweet, Fresh, Floral, Woody, or Spicy</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-xl font-bold text-white bg-black rounded-full">3</div>
              <h4 className="mb-2 font-semibold text-black">Discover Details</h4>
              <p className="text-gray-600">Click on any perfume card to view detailed fragrance notes and seasonal recommendations</p>
            </div>
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-xl font-bold text-white bg-black rounded-full">4</div>
              <h4 className="mb-2 font-semibold text-black">Use Search</h4>
              <p className="text-gray-600">Quickly find specific perfumes using our powerful search bar</p>
            </div>
          </div>
        </div>

        <div className="mt-12 text-center">
          <h3 className="mb-4 text-xl font-semibold text-black">Contact Us</h3>
          <p className="mb-4 text-gray-600">
            Have questions or suggestions? We'd love to hear from you!
          </p>
          <p className="text-gray-700">
            Email: contact@perfumehub.com
          </p>
        </div>
      </main>

      <footer className="px-4 py-8 mt-12 text-white bg-gray-900">
        <div className="mx-auto text-center max-w-7xl">
          <p>© 2025 Perfume Hub. All rights reserved.</p>
          <p className="mt-2 text-sm text-gray-400">A fragrance discovery experience</p>
        </div>
      </footer>
    </div>
  );
};

export default About;
