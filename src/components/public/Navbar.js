
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({ isLoggedIn, onSignOut }) => {
  return (
    <header className="self-stretch bg-white overflow-hidden top-[0] z-[99] sticky max-w-full text-base text-color-brand-black font-text-small-link shadow-md">
      <div className="h-[80px] w-screen py-0 max-w-full flex items-center">

      <div className="w-screen overflow-hidden flex flex-row items-center justify-start ml-10 gap-5">

<Link to="/" className="text-lg text-black hover:text-gray-600 no-underline transition duration-300">Home</Link>

<Link to="/pricing" className="text-lg text-black hover:text-gray-600 no-underline transition duration-300">Pricing</Link>

<Link to="/products" className="text-lg text-black hover:text-gray-600 no-underline transition duration-300">Products</Link>

<Link to="/about-us" className="text-lg text-black hover:text-gray-600 no-underline transition duration-300">About Us</Link>

<Link to="/dashboard" className="text-lg text-black hover:text-gray-600 no-underline transition duration-300">Dashboard</Link>

<Link to="/story-nav" className="text-lg text-black hover:text-gray-600 no-underline transition duration-300">Story Navigation</Link>

<Link to="/generate-book-1" className="text-lg text-black hover:text-gray-600 no-underline transition duration-300">Generate Book 1</Link>

<Link to="/generate-book-2" className="text-lg text-black hover:text-gray-600 no-underline transition duration-300">Generate Book 2</Link>


</div>


{!isLoggedIn ? (
          <>
<div className="flex-1 flex flex-row items-center justify-end">
  <button className="cursor-pointer p-2 mr-[10px] bg-color-brand-black w-[83px] rounded-smi box-border flex items-center justify-center border border-color-brand-black hover:bg-darkslategray-300">
    <Link to="/login" className="relative text-base leading-[150%] font-text-small-link text-link-alternate text-left no-underline">
      Login
    </Link>
  </button>

  <div>
    <button className="cursor-pointer p-2 mr-[100px] w-[83px] flex items-center justify-center border-none bg-white">
      <Link to="/register" className="relative text-base leading-[150%] font-text-small-link text-black text-left no-underline">
        Register
      </Link>
    </button>
  </div>
</div>

          </>
        ) : (
          <li><button onClick={onSignOut}>Sign Out</button></li>
        )}


      </div>
    </header>
  );
};

export default Navbar;
