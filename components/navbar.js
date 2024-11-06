import { useState } from 'react';
import Link from 'next/link';

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-gray-800 p-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-white text-2xl font-bold">MyWebsite</h1>
        <div className="md:hidden">
          <button
            onClick={toggleMenu}
            className="text-white focus:outline-none"
          >
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
        <ul
          className={`${
            isOpen ? 'block' : 'hidden'
          } md:flex space-x-6 md:space-x-8 md:items-center md:flex-row flex-col md:static absolute bg-gray-800 md:bg-transparent top-16 left-0 w-full md:w-auto`}
        >
          <li className="text-white hover:text-gray-400 cursor-pointer">
            <Link href="/">Home</Link>
          </li>
          <li className="text-white hover:text-gray-400 cursor-pointer">
            <Link href="/about">About</Link>
          </li>
          <li className="text-white hover:text-gray-400 cursor-pointer">
            <Link href="/popular-city">Popular City</Link>
          </li>
          <li className="text-white hover:text-gray-400 cursor-pointer">
            <Link href="/alert">Alert</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
