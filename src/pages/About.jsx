import React, { useEffect, useState } from 'react';
import Header from '../components/Header';

const About = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    setShow(true);
  }, []);

  return (
    <div className="min-h-screen bg-white">
      <Header />
      
      <main className="max-w-4xl px-4 py-12 mx-auto">
        {/* TITLE */}
        <div
          className={`
            mb-12 text-center
            transition-all duration-700
            ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          <h2 className="mb-4 text-3xl font-bold text-black">
            About Perfume Hub
          </h2>
          <p className="max-w-2xl mx-auto text-gray-600">
            Your ultimate destination for discovering the perfect fragrance
          </p>
        </div>

        {/* MISSION + OFFER */}
        <div className="grid grid-cols-1 gap-8 mb-12 md:grid-cols-2">
          <div
            className={`
              p-6 rounded-lg bg-gray-50
              transition-all duration-700 delay-100
              ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            <h3 className="mb-3 text-xl font-semibold text-black">
              Our Mission
            </h3>
            <p className="text-gray-700">
              Perfume Hub is dedicated to helping fragrance enthusiasts discover their signature scent. 
              We provide a comprehensive browsing experience of designer, UAE, and local brand perfumes 
              with detailed fragrance notes and seasonal recommendations.
            </p>
          </div>
          
          <div
            className={`
              p-6 rounded-lg bg-gray-50
              transition-all duration-700 delay-200
              ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
            `}
          >
            <h3 className="mb-3 text-xl font-semibold text-black">
              What We Offer
            </h3>
            <ul className="space-y-2 text-gray-700">
              <li>• Extensive collection of designer perfumes</li>
              <li>• Popular UAE fragrance brands</li>
              <li>• Local perfume house selections</li>
              <li>• Detailed fragrance notes and compositions</li>
              <li>• Seasonal recommendations</li>
            </ul>
          </div>
        </div>

        {/* HOW IT WORKS (STAGGERED) */}
        <div
          className={`
            p-8 rounded-lg bg-gray-50
            transition-all duration-700 delay-300
            ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          <h3 className="mb-4 text-2xl font-semibold text-center text-black">
            How It Works
          </h3>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-4">
            {[
              {
                title: 'Browse Categories',
                desc: 'Explore our three main categories: Designer, UAE Perfume, and Local Brand',
              },
              {
                title: 'Filter by Scent',
                desc: 'Find perfumes by scent type: Sweet, Fresh, Floral, Woody, or Spicy',
              },
              {
                title: 'Discover Details',
                desc: 'Click on any perfume card to view detailed fragrance notes and seasonal recommendations',
              },
              {
                title: 'Use Search',
                desc: 'Quickly find specific perfumes using our powerful search bar',
              },
            ].map((item, index) => (
              <div
                key={item.title}
                className={`
                  text-center
                  transition-all duration-700
                  ${show
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-6'}
                `}
                style={{
                  transitionDelay: `${400 + index * 120}ms`,
                }}
              >
                <div className="flex items-center justify-center w-16 h-16 mx-auto mb-4 text-xl font-bold text-white bg-black rounded-full">
                  {index + 1}
                </div>
                <h4 className="mb-2 font-semibold text-black">
                  {item.title}
                </h4>
                <p className="text-gray-600">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* CONTACT */}
        <div
          className={`
            mt-12 text-center
            transition-all duration-700 delay-[900ms]
            ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}
          `}
        >
          <h3 className="mb-4 text-xl font-semibold text-black">
            Contact Us
          </h3>
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
          <p className="mt-2 text-sm text-gray-400">
            A fragrance discovery experience
          </p>
        </div>
      </footer>
    </div>
  );
};

export default About;
