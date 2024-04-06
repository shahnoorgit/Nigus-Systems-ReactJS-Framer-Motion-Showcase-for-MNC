import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [MisOpen, setMisOpen] = useState(false);
  const [isCompany, setIsCompany] = useState(false);

  return (
    <div>
      <nav className="bg-gray-800 fixed w-full top-0 z-50 ">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-white text-xl font-bold">
                <img
                  className="h-10 w-15"
                  src="/nigus-logo.png"
                  alt="Nigus Logo"
                />
              </a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="/"
                    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    Home
                  </a>
                  <div className="relative">
                    <button
                      onClick={() => setIsOpen(!isOpen)}
                      className="text-white flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    >
                      Services
                      <svg
                        className={`h-4 w-4 ${
                          isOpen ? "transform rotate-180" : "transform rotate-0"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a1 1 0 01-.707-.293l-8-8a1 1 0 111.414-1.414L10 15.586l7.293-7.293a1 1 0 111.414 1.414l-8 8A1 1 0 0110 18z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {isOpen && (
                      <div className="absolute z-10 top-full mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl">
                        <a
                          href="/services/web_dev"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300 ease-in-out"
                        >
                          Web Development
                        </a>
                        <a
                          href="/services/aiml"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300 ease-in-out"
                        >
                          AIML
                        </a>
                        <a
                          href="/services/app_dev"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300 ease-in-out"
                        >
                          App Development
                        </a>
                        <a
                          href="/services/software"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300 ease-in-out"
                        >
                          Software Development
                        </a>
                      </div>
                    )}
                  </div>
                  <div className="relative">
                    <button
                      onClick={() => setIsCompany(!isCompany)}
                      className="text-white flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                    >
                      Company
                      <svg
                        className={`h-4 w-4 ${
                          isCompany
                            ? "transform rotate-180"
                            : "transform rotate-0"
                        }`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a1 1 0 01-.707-.293l-8-8a1 1 0 111.414-1.414L10 15.586l7.293-7.293a1 1 0 111.414 1.414l-8 8A1 1 0 0110 18z"
                          clipRule="evenodd"
                        />
                      </svg>
                    </button>
                    {isCompany && (
                      <div className="absolute z-10 top-full mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl">
                        <a
                          href="/about_us"
                          className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300 ease-in-out"
                        >
                          About US
                        </a>
                      </div>
                    )}
                  </div>
                  <a
                    href="/contact_us"
                    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
            <div className="-mr-2 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="text-white inline-flex items-center justify-center p-2 rounded-md hover:text-white hover:bg-gray-700 focus:outline-none focus:bg-gray-700 focus:text-white transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
              >
                <svg
                  className="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h16M4 18h16"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
        </div>
        <Transition
          show={isOpen}
          enter="transition-opacity duration-300 ease-in-out transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition-opacity duration-300 ease-in-out transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div
              className="md:hidden fixed inset-0 bg-black bg-opacity-25 backdrop-blur-sm z-20"
              ref={ref}
            >
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="/"
                  className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                  Home
                </a>
                <div className="relative">
                  <button
                    onClick={() => setMisOpen(!MisOpen)}
                    className="text-white flex items-center justify-between w-full px-3 py-2 rounded-md text-base font-medium hover:bg-gray-700 transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    Services
                    <svg
                      className={`h-5 w-5 ${
                        isOpen ? "transform rotate-180" : "transform rotate-0"
                      }`}
                      fill="currentColor"
                      viewBox="0 0 20 20"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        fillRule="evenodd"
                        d="M10 18a1 1 0 01-.707-.293l-8-8a1 1 0 111.414-1.414L10 15.586l7.293-7.293a1 1 0 111.414 1.414l-8 8A1 1 0 0110 18z"
                        clipRule="evenodd"
                      />
                    </svg>
                  </button>
                  {MisOpen && (
                    <div className="absolute z-30 top-full mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl">
                      <a
                        href="/services/web_dev"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300 ease-in-out"
                      >
                        Web Development
                      </a>
                      <a
                        href="/services/aiml"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300 ease-in-out"
                      >
                        AIML
                      </a>
                      <a
                        href="/services/app_dev"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300 ease-in-out"
                      >
                        AppDevelopment
                      </a>
                      <a
                        href="/services/software"
                        className="block px-4 py-2 text-gray-800 hover:bg-gray-200 transition duration-300 ease-in-out"
                      >
                        Software Development
                      </a>
                    </div>
                  )}
                </div>
                <a
                  href="/about_us"
                  className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                  About Us
                </a>
                <a
                  href="/contact_us"
                  className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </div>
  );
}

export default Navbar;
