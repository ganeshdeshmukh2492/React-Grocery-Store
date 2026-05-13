import { PhoneCall, ShoppingCart } from 'lucide-react';
import React, { useState } from 'react'

const Navbar = () => {
  const [isMenuOpen, setisMenuOpen] = useState(false);
  const navlist = [
    { href: '#home', label: 'Home' },
    { href: '#services', label: 'Services' },
    { href: '#about us', label: 'About Us' },
    { href: '#tips', label: 'Tips' },
    { href: '#offers', label: 'Offers' },
    { href: '#categories', label: 'Categories' },
  ];
  return (
    <header className="scroll-mt-20 bg-green-100 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-4 lg:px-8">
        <div className="flex items-center space-x-2">
          <ShoppingCart className="w-8 h-8 text-green-600" />
          <span className="text-xl font-bold text-green-600">
            FreshMart Grocery
          </span>
        </div>
        <nav className="hidden md:flex space-x-6 text-gray-600 font-medium">
          {navlist.map((link) => (
            <a 
              href={link.href} 
              key={link.href} 
              className="hover:text-green-600 transition"
            >
              {link.label}
            </a>
          ))}
        </nav>
        <div className="hidden md:flex items-center space-x-2">
          <PhoneCall className="text-green-600" />
          <a 
            href="#" 
            className="bg-green-600 text-white px-4 py-2 rounded-xl hover:bg-green-700 transition text-sm">
            Shop Now
          </a>
        </div>
        <div className=" md:hidden">
         <button onClick={()=>setisMenuOpen}>
          {isMenuOpen ? <x className=" text-gray-700"/> : <menu className="text-gray-700"/>}
         </button>
        </div>
      </div>
      {
        isMenuOpen && (
          <div className="md:hidden bg-white border-t border-gray-200 shadow-md px-4 py-3 text-gray-700 font-medium">
            {navlist.map((link)=>
            <a 
            href= {link.href}
            key={link.href}
            className=" block hover:text-green-600 transition"
            onClick={()=> setisMenuOpen(false)}
            > {link.label}</a>
            )}
          </div>
        )}
    </header>
  );
};

export default Navbar