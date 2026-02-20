import React, { useState } from "react";
import { FiChevronDown, FiSearch } from "react-icons/fi";

export default function SecondaryNavbar() {
  const [categoryOpen, setCategoryOpen] = useState(false);
  const [productOpen, setProductOpen] = useState(false);

  return (
    <div className="w-full px-5 md:px-12 lg:px-17 py-3">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center gap-3">

        {/* Categories Dropdown */}
        <div className="relative flex-1 sm:flex-none">
          <button
            onClick={() => setCategoryOpen(!categoryOpen)}
            className="flex items-center gap-2 bg-[#F6F6F6] px-4 py-2 rounded-full text-sm shadow-sm w-full sm:w-auto justify-between"
          >
            Categories <FiChevronDown />
          </button>

          {categoryOpen && (
            <div className="absolute top-full mt-2 w-full sm:w-40 bg-[#F6F6F6] rounded-xl shadow-lg p-2 z-20">
              <p className="px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                Men
              </p>
              <p className="px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                Women
              </p>
              <p className="px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                Kids
              </p>
            </div>
          )}
        </div>

        {/* New Product Dropdown */}
        <div className="relative flex-1 sm:flex-none">
          <button
            onClick={() => setProductOpen(!productOpen)}
            className="flex items-center gap-2 bg-[#F6F6F6] px-4 py-2 rounded-full text-sm shadow-sm w-full sm:w-auto justify-between"
          >
            New Product <FiChevronDown />
          </button>

          {productOpen && (
            <div className="absolute top-full mt-2 w-full sm:w-44 bg-[#F6F6F6] rounded-xl shadow-lg p-2 z-20">
              <p className="px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                Latest
              </p>
              <p className="px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                Trending
              </p>
              <p className="px-3 py-2 hover:bg-gray-100 rounded-lg cursor-pointer">
                Best Seller
              </p>
            </div>
          )}
        </div>

        {/* Search */}
        <div className="flex items-center bg-[#F6F6F6] px-4 py-2 rounded-full flex-1 min-w-[45%] sm:min-w-[200px] shadow-sm">
          <input
            type="text"
            placeholder="Search"
            className="flex-1 outline-none text-sm bg-transparent"
          />
          <FiSearch className="text-gray-500" />
        </div>

        {/* Pills */}
        <div className="flex flex-wrap gap-2 w-full sm:w-auto mt-2 sm:mt-0">
          {["Menswear", "Womenswear", "Footwear", "Outerwear"].map((item) => (
            <button
              key={item}
              className="bg-white border border-zinc-400/50 px-4 py-2 rounded-full text-sm shadow-sm hover:bg-gray-100 transition w-full sm:w-auto"
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
