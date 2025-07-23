import React, { useState, useEffect, useRef } from "react";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef();

  // Close dropdown if clicked outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <nav className="bg-[#2e1e17]/90 backdrop-blur-sm shadow-md border-gray-200 text-white fixed top-0 left-0 w-full z-50">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <a href="#" className="text-3xl uppercase font-semibold text-white">
          Koppee
        </a>

        {/* Hamburger Icon */}
        <button
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-white rounded-lg md:hidden hover:bg-[#3c2d2d] focus:outline-none focus:ring-2 focus:ring-yellow-500"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <FaTimes className="w-5 h-5" />
          ) : (
            <FaBars className="w-5 h-5" />
          )}
        </button>

        {/* Nav Links */}
        <div
          className={`${isOpen ? "block" : "hidden"} w-full md:block md:w-auto`}
        >
          <ul className="font-medium flex flex-col p-4 mt-4 border border-gray-700 rounded-lg bg-[#2b1e1e] md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-transparent">
            <li>
              <a
                href="#home"
                className="block py-2 px-3 hover:text-yellow-500 rounded md:p-0"
              >
                Home
              </a>
            </li>
            <li>
              <a
                href="#about"
                className="block py-2 px-3 hover:text-yellow-500 text-white rounded md:p-0"
              >
                About
              </a>
            </li>
            <li>
              <a
                href="#service"
                className="block py-2 px-3 hover:text-yellow-500 text-white rounded md:p-0"
              >
                Services
              </a>
            </li>
            <li>
              <a
                href="#menu"
                className="block py-2 px-3 hover:text-yellow-500 text-white rounded md:p-0"
              >
                Menu
              </a>
            </li>

            {/* Pages Dropdown */}
            <li className="relative" ref={dropdownRef}>
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center gap-1  hover:text-yellow-500 rounded md:mt-0 mt-2"
              >
                Pages <span className="text-sm">▼</span>
              </button>

              <ul
                className={`absolute md:left-0 w-40 bg-white shadow-lg rounded mt-1 z-10 ${
                  isDropdownOpen ? "block" : "hidden"
                }`}
              >
                <li>
                  <a
                    href="#reservation"
                    className="block px-4 py-2 text-[#2e1e17] hover:bg-yellow-500 hover:text-white"
                  >
                    Reservation
                  </a>
                </li>
                <li>
                  <a
                    href="#testimonial"
                    className="block px-4 py-2 text-[#2e1e17] hover:bg-yellow-500 hover:text-white"
                  >
                    Testimonial
                  </a>
                </li>
              </ul>
            </li>

            <li>
              <a
                href="#contact"
                className="block py-2 px-3 hover:text-yellow-500 text-white rounded md:p-0"
              >
                Contact
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
