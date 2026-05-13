import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaSnapchatGhost,
  FaTwitter,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { MdLocalGroceryStore } from "react-icons/md";

const Footer = () => {
  return (
    <footer className="bg-green-50 text-gray-800 py-10">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8 items-start">
        <div>
          <div className="flex items-center gap-2 text-green-600 text-3xl font-bold">
            <MdLocalGroceryStore />
            <h1>FreshMart</h1>
          </div>
          <p className="mt-4 text-gray-600">
            Fresh choices, healthy life.
          </p>
          <div className="w-16 h-1 bg-green-500 mt-3"></div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Quick Links</h2>

          <div className="grid grid-cols-2 gap-3 text-gray-600">
            <p className="hover:text-green-600 cursor-pointer">Home</p>
            <p className="hover:text-green-600 cursor-pointer">Categories</p>
            <p className="hover:text-green-600 cursor-pointer">Shop</p>
            <p className="hover:text-green-600 cursor-pointer">Offers</p>
            <p className="hover:text-green-600 cursor-pointer">About Us</p>
            <p className="hover:text-green-600 cursor-pointer">Contact Us</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold mb-4">Follow Us</h2>

          <div className="flex gap-4 text-2xl text-green-600">
            <FaFacebookF className="cursor-pointer hover:scale-110" />
            <FaInstagram className="cursor-pointer hover:scale-110" />
            <FaSnapchatGhost className="cursor-pointer hover:scale-110" />
            <FaTwitter className="cursor-pointer hover:scale-110" />
            <FaMapMarkerAlt className="cursor-pointer hover:scale-110" />
          </div>
        </div>
      </div>
      <div className="border-t mt-8 pt-5 max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between text-gray-600">
        <p>© 2024 Fresh Mart. All Rights Reserved.</p>

        <p className="flex items-center gap-2 mt-3 md:mt-0">
          <FaMapMarkerAlt className="text-green-600" />
          Pune, Maharashtra, India
        </p>
      </div>
    </footer>
  );
};

export default Footer;