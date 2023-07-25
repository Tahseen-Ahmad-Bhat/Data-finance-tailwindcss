import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
// import logo from "../assets/Finance2.svg";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <div className="flex justify-between items-center h-24 max-w-[1240px] mx-auto px-4 text-white">
      <h1 className="w-full text-3xl font-bold text-primary">Data Fin.</h1>

      <ul className="hidden md:flex">
        <li className="px-3">Home</li>
        <li className="px-3">Company</li>
        <li className="px-3">Resources</li>
        <li className="px-3">About</li>
        <li className="px-3">Contact</li>
      </ul>
      <div
        className="block md:hidden cursor-pointer text-white"
        onClick={handleNav}
      >
        {nav ? <AiOutlineClose size={30} /> : <AiOutlineMenu size={30} />}
      </div>

      {/* Menu for mobile devices */}
      <div
        className={
          nav
            ? "fixed left-0 top-0 w-[60%] h-full border-r border-r-gray-900 bg-[#000300] ease-in-out duration-500 pt-7"
            : "fixed left-[-100%] pt-7"
        }
      >
        <h1 className="w-full text-3xl font-bold m-4 text-primary">
          Data Fin.
        </h1>
        <ul className="p-4 uppercase">
          <li className="p-4 border-b border-gray-600">Home</li>
          <li className="p-4 border-b border-gray-600">Company</li>
          <li className="p-4 border-b border-gray-600">Resources</li>
          <li className="p-4 border-b border-gray-600">About</li>
          <li className="p-4 border-b border-gray-600">Contact</li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
