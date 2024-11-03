"use client"; 

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import SearchBar from "./search";
import logo from "../../../public/Logo.png";
import like_icon from '../../../public/like.png';
import cart from "../../../public/cart.png";
import user from "../../../public/user.png";
import { FaBars, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="w-full h-[88px] flex items-center justify-between text-black bg-white shadow-md px-4 md:px-10 lg:px-40">
      <div className="flex items-center">
        <Image src="/Logo.png" alt="logo" width={65} height={23} className="mr-8" />
      </div>

      {/* SearchBar - Hide on smaller screens */}
      <div className="hidden md:flex flex-grow">
        <SearchBar />
      </div>

      {/* Desktop Menu */}
      <ul className="hidden md:flex space-x-8 items-center text-lg font-medium">
        <li>
          <Link href="/" className="text-black">Home</Link>
        </li>
        <li>
          <Link href="#about" className="text-gray-500 opacity-70 hover:opacity-100">About</Link>
        </li>
        <li>
          <Link href="#contact" className="text-gray-500 opacity-70 hover:opacity-100">Contact Us</Link>
        </li>
        <li className="mr-10"> 
          <Link href="#blog" className="text-gray-500 opacity-70 hover:opacity-100">Blog</Link>
        </li>
      </ul>

      {/* Icons */}
      <div className="hidden md:flex space-x-10 items-center">
            <Image src="/like.png" alt="like icon" width={20} height={18} />
            <Image src="/cart.png" alt="cart icon" width={25} height={22} />
            <Image src="/user.png" alt="user icon" width={17} height={22} />  
      </div>

      {/* Hamburger Icon for Mobile */}
      <div className="flex md:hidden">
        <button onClick={toggleMenu} className="text-xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="absolute top-[88px] left-0 w-full bg-white shadow-md md:hidden">
          <ul className="flex flex-col items-center space-y-4 p-6 text-lg font-medium">
            <li>
              <Link href="/" onClick={toggleMenu} className="text-black">Home</Link>
            </li>
            <li>
              <Link href="#about" onClick={toggleMenu} className="text-gray-500 opacity-70 hover:opacity-100">About</Link>
            </li>
            <li>
              <Link href="#contact" onClick={toggleMenu} className="text-gray-500 opacity-70 hover:opacity-100">Contact Us</Link>
            </li>
            <li>
              <Link href="#blog" onClick={toggleMenu} className="text-gray-500 opacity-70 hover:opacity-100">Blog</Link>
            </li>
          </ul>
          <div className="flex justify-center space-x-8 p-4 border-t"> 
            <Image src="/like.png" alt="like icon" width={20} height={18} />
            <Image src="/cart.png" alt="cart icon" width={25} height={22} />
            <Image src="/user.png" alt="user icon" width={17} height={22} />
          </div>
        </div>
      )}
    </nav>
  );
}
