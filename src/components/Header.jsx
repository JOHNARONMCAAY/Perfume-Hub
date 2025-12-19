import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = ({ searchTerm, setSearchTerm }) => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-yellow-400">
      <div className="px-4 py-4 mx-auto max-w-7xl">

        {/* TOP ROW */}
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">

          {/* LOGO */}
          <div className="text-center md:text-left">
            <h1 className="text-2xl font-bold text-yellow-500">
              Perfume Hub
            </h1>
            <p className="text-sm text-gray-500">
              Discover your perfect fragrance
            </p>
          </div>

          {/* RIGHT SIDE */}
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:gap-4">

            {/* SEARCH BAR */}
            <div className="w-full md:w-auto">
              <input
                type="text"
                placeholder="Search perfume..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full px-4 py-2 text-gray-800 placeholder-gray-400 bg-white border border-yellow-400 rounded-lg  md:w-64 focus:outline-none focus:ring-2 focus:ring-yellow-400"
              />
            </div>

            {/* NAV */}
            <nav className="flex justify-center gap-6">
              <NavLink
                to="/"
                className={({ isActive }) =>
                  isActive
                    ? 'text-yellow-500 font-semibold'
                    : 'text-gray-600 hover:text-yellow-500 transition'
                }
              >
                Home
              </NavLink>

              <NavLink
                to="/about"
                className={({ isActive }) =>
                  isActive
                    ? 'text-yellow-500 font-semibold'
                    : 'text-gray-600 hover:text-yellow-500 transition'
                }
              >
                About
              </NavLink>
            </nav>

          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
