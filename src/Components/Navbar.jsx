import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // 👇 Close menu when any nav link is clicked
  const handleNavClick = () => {
    setIsOpen(false);
    setIsDropdownOpen(false);
  };

  return (
    <nav className="bg-[#2e1e17]/90 backdrop-blur-sm shadow-md border-gray-200 text-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link
          to="/"
          onClick={handleNavClick}
          className="text-3xl uppercase font-semibold text-white"
        >
          Koppee
        </Link>

        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#3c2d2d] focus:outline-none focus:ring-2 focus:ring-yellow-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <FaTimes className="w-5 h-5" /> : <FaBars className="w-5 h-5" />}
        </button>

        <div className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}>
          <div className="font-medium flex flex-col items-start p-4 mt-4 border border-gray-700 rounded-lg bg-[#2b1e1e] md:flex-row md:space-x-8 md:items-center md:mt-0 md:border-0 md:bg-transparent">
            <Link
              to="/"
              onClick={handleNavClick}
              className="block w-full py-2 px-3 hover:text-yellow-500 text-left md:w-auto md:p-0"
            >
              Home
            </Link>
            <Link
              to="/about"
              onClick={handleNavClick}
              className="block w-full py-2 px-3 hover:text-yellow-500 text-left md:w-auto md:p-0"
            >
              About
            </Link>
            <Link
              to="/services"
              onClick={handleNavClick}
              className="block w-full py-2 px-3 hover:text-yellow-500 text-left md:w-auto md:p-0"
            >
              Services
            </Link>
            <Link
              to="/menu"
              onClick={handleNavClick}
              className="block w-full py-2 px-3 hover:text-yellow-500 text-left md:w-auto md:p-0"
            >
              Menu
            </Link>

            <div className="relative w-full md:w-auto" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1 w-full py-2 px-3 hover:text-yellow-500 text-left md:w-auto md:p-0"
              >
                Pages <span className="text-sm">▼</span>
              </button>

              {isDropdownOpen && (
                <div className="absolute left-0 md:left-auto md:right-0 w-40 bg-white shadow-lg rounded mt-1 z-10">
                  <Link
                    to="/reservation"
                    onClick={handleNavClick}
                    className="block px-4 py-2 text-[#2e1e17] hover:bg-yellow-500 hover:text-white"
                  >
                    Reservation
                  </Link>
                  <Link
                    to="/testimonial"
                    onClick={handleNavClick}
                    className="block px-4 py-2 text-[#2e1e17] hover:bg-yellow-500 hover:text-white"
                  >
                    Testimonial
                  </Link>
                </div>
              )}
            </div>

            <Link
              to="/contact"
              onClick={handleNavClick}
              className="block w-full py-2 px-3 hover:text-yellow-500 text-left md:w-auto md:p-0"
            >
              Contact
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
