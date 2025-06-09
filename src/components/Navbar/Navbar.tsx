"use client";

import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav aria-label="Main navigation" className="bg-blue-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
        <div className="flex items-center">
          <Link
            href="/"
            className="text-lg font-bold text-gray-900 dark:text-white"
          >
            CarbCounter
          </Link>
        </div>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="sm:hidden inline-flex items-center justify-center p-2 rounded-md text-gray-500 dark:text-gray-300 hover:text-black hover:bg-gray-200 dark:hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
          aria-controls="primary-navigation"
          aria-expanded={isOpen}
          aria-label="Toggle navigation menu"
        >
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}
            />
          </svg>
        </button>

        <ul
          id="primary-navigation"
          className={`sm:flex space-x-6 text-sm font-medium ${
            isOpen ? "block" : "hidden"
          } sm:block absolute sm:static top-full left-0 w-full sm:w-auto sm:bg-transparent bg-white dark:bg-gray-900 sm:shadow-none shadow-md`}
        >
          {/* <li>
            <Link
              href="/"
              className="block px-4 py-2 text-gray-700 dark:text-gray-200 hover:text-blue-600"
              aria-current="page"
            >
              Home
            </Link>
          </li> */}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
