import React, { useState } from "react";
import { Transition } from "@headlessui/react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div>
      <nav className="bg-gray-800 fixed w-full top-0 z-50">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <a href="/" className="text-white text-xl font-bold">
                <img className=" h-10 w-15" src="./nigus-logo.png" />
              </a>
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <a
                    href="#"
                    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    Home
                  </a>
                  <a
                    href="#"
                    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    Services
                  </a>
                  <a
                    href="#"
                    className="text-white hover:bg-gray-700 px-3 py-2 rounded-md text-sm font-medium transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                  >
                    About Us
                  </a>
                  <a
                    href="#"
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
            <div className="md:hidden" ref={ref}>
              <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
                <a
                  href="#"
                  className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                  Home
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                  Services
                </a>
                <a
                  href="#"
                  className="text-white hover:bg-gray-700 block px-3 py-2 rounded-md text-base font-medium transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-110"
                >
                  About Us
                </a>
                <a
                  href="#"
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
