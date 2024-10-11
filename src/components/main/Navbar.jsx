// src/components/Navbar.jsx
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X } from "lucide-react";

export default function Navbar({ menuItems }) {
  const [isOpen, setIsOpen] = useState(false);

  //   { menuItems }

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // const menuItems = [
  //   { to: "/dashboard", label: "Dashboard" },
  //   { to: "/all-positions", label: "All Positions" },
  //   { to: "/clients", label: "Clients" },
  //   { to: "/operations", label: "Operations" },
  // ];

  return (
    <nav className="bg-white border-b fixed w-full top-0 border-gray-200 shadow-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center">
            <NavLink to="/" className="flex-shrink-0">
              <span className="font-bold text-lg sm:text-xl text-gray-800">
                Ts Technos
              </span>
            </NavLink>
          </div>
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {menuItems.map((item) => (
                <NavLink
                  key={item.to}
                  to={item.to}
                  className={({ isActive }) =>
                    isActive
                      ? "px-3 py-2 bg-indigo-500 rounded-md text-sm font-medium text-white hover:text-white hover:bg-indigo-600 transition duration-150 ease-in-out"
                      : "px-3 py-2 rounded-md text-sm font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition duration-150 ease-in-out"
                  }
                >
                  {item.label}
                </NavLink>
              ))}
            </div>
          </div>
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-gray-300 transition duration-150 ease-in-out"
              aria-expanded={isOpen}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {menuItems.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  isActive
                    ? "block px-3 py-2 rounded-md text-base font-medium text-indigo-500 hover:text-indigo-500 hover:bg-gray-100 transition duration-150 ease-in-out"
                    : "block px-3 py-2 rounded-md text-base font-medium text-gray-600 hover:text-gray-900 hover:bg-gray-100 transition duration-150 ease-in-out"
                }
                onClick={toggleMenu}
              >
                {item.label}
              </NavLink>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
}
