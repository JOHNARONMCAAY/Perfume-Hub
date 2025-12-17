import React from 'react';
import { NavLink } from 'react-router-dom';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 bg-white border-b border-gray-200">
      <div className="flex items-center justify-between px-4 py-4 mx-auto max-w-7xl">
        
        {/* LOGO */}
        <h1 className="text-xl font-bold text-black">
          Perfume Hub
        </h1>

        {/* NAV */}
        <nav className="flex space-x-8">
          <NavItem to="/" label="Home" />
          <NavItem to="/about" label="About" />
        </nav>
      </div>
    </header>
  );
};

const NavItem = ({ to, label }) => {
  return (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `
        relative pb-1 text-sm font-medium transition-all duration-300
        ${isActive ? 'text-black' : 'text-gray-500 hover:text-black'}
        `
      }
    >
      {({ isActive }) => (
        <>
          <span
            className={`inline-block transition-all duration-300 ${
              isActive ? 'translate-y-0 opacity-100' : 'translate-y-1 opacity-90'
            }`}
          >
            {label}
          </span>

          {/* UNDERLINE ANIMATION */}
          <span
            className={`
              absolute left-0 -bottom-0.5 h-[2px] bg-black
              transition-all duration-300 ease-out
              ${isActive ? 'w-full' : 'w-0 group-hover:w-full'}
            `}
          />
        </>
      )}
    </NavLink>
  );
};

export default Header;
