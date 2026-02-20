import React, { useState } from "react";
import { FiMenu, FiX, FiChevronDown, FiSearch } from "react-icons/fi";

const Navbar = () => {
  const navigations = ["About", "Blog", "FAQs"];
  const [menuOpen, setMenuOpen] = useState(false);
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <nav className="px-5 md:px-12 lg:px-17 py-5 relative">
      {/* Top Navbar */}
      <div className="flex justify-between items-center">
        <h2 className="font-bold">BRAND</h2>
        <h1 className="logo font-bold text-3xl text-[#FE6216]">4x Vision</h1>

        {/* Desktop navigation */}
        <ul className="hidden md:flex gap-5 list-none">
          {navigations.map((nav, index) => (
            <li key={index}>{nav}</li>
          ))}
        </ul>

        {/* Mobile Hamburger */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(true)}>
            <FiMenu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-white shadow-lg z-50 transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Drawer Header */}
        <div className="flex justify-between items-center px-4 py-4 border-b">
          <h2 className="font-bold text-lg">Menu</h2>
          <button onClick={() => setMenuOpen(false)}>
            <FiX size={24} />
          </button>
        </div>

        <div className="p-4 space-y-4">
          {/* Top Navigation Links */}
          <ul className="flex flex-col gap-2">
            {navigations.map((nav, index) => (
              <li key={index} className="text-gray-800 font-medium">
                {nav}
              </li>
            ))}
          </ul>

          {/* Categories Dropdown */}
          <div className="relative">
            <button
              onClick={() => setCategoryOpen(!categoryOpen)}
              className="flex items-center justify-between w-full bg-[#F6F6F6] px-4 py-2 rounded-full text-sm shadow-sm"
            >
              Categories <FiChevronDown />
            </button>
            {categoryOpen && (
              <div className="mt-2 bg-[#F6F6F6] rounded-xl p-2 space-y-1">
                {["Men", "Women", "Kids"].map((cat) => (
                  <p
                    key={cat}
                    className="px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                  >
                    {cat}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* New Product Dropdown */}
          <div className="relative">
            <button
              onClick={() => setProductOpen(!productOpen)}
              className="flex items-center justify-between w-full bg-[#F6F6F6] px-4 py-2 rounded-full text-sm shadow-sm"
            >
              New Product <FiChevronDown />
            </button>
            {productOpen && (
              <div className="mt-2 bg-[#F6F6F6] rounded-xl p-2 space-y-1">
                {["Latest", "Trending", "Best Seller"].map((item) => (
                  <p
                    key={item}
                    className="px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer"
                  >
                    {item}
                  </p>
                ))}
              </div>
            )}
          </div>

          {/* Search */}
          <div className="flex items-center bg-[#F6F6F6] px-4 py-2 rounded-full w-full shadow-sm">
            <input
              type="text"
              placeholder="Search"
              className="flex-1 outline-none text-sm bg-transparent"
            />
            <FiSearch className="text-gray-500" />
          </div>

          {/* Pills */}
          <div className="flex flex-wrap gap-2">
            {["Menswear", "Womenswear", "Footwear", "Outerwear"].map(
              (item) => (
                <button
                  key={item}
                  className="bg-white border border-zinc-400/50 px-4 py-2 rounded-full text-sm shadow-sm hover:bg-gray-100 w-full"
                >
                  {item}
                </button>
              )
            )}
          </div>
        </div>
      </div>

      {/* Overlay */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black/30 z-40"
          onClick={() => setMenuOpen(false)}
        />
      )}
    </nav>
  );
};

export default Navbar;
