import React from "react";

export default function Footer() {
  return (
    <footer className="pt-16 pb-8 px-5 md:px-12 lg:px-17">
      <div className="max-w-7xl mx-auto">
        <div className="flex flex-col lg:flex-row justify-between gap-5">
          {/* Left Section */}
          <div className="md:col-span-2">
            <h1 className="logo font-bold text-3xl text-[#FE6216]">
              4x Vision
            </h1>

            <p className="mt-4 text-gray-700 font-medium">
              Explore Our Vast Collection Of Fashion.
            </p>

            <p className="mt-3 text-gray-500 text-sm max-w-md">
              Stay in the loop with our latest updates, from head to toe, every
              season and every body. Elevate your wardrobe with just a click.
            </p>

            {/* Newsletter */}
            <div className="mt-6 flex max-w-md">
              <input
                type="email"
                placeholder="Your Email..."
                className="flex-1 px-4 py-3 rounded-l-full border border-gray-300 focus:outline-none"
              />
              <button className="bg-[#FE6216] text-white px-6 rounded-r-full hover:bg-orange-600 transition">
                Get in Touch
              </button>
            </div>
          </div>
          <div className="flex flex-col md:flex-row gap-30">
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Products</h3>
              <ul className="space-y-3 text-gray-500 text-sm">
                <li className="hover:text-[#FE6216] cursor-pointer">Shirts</li>
                <li className="hover:text-[#FE6216] cursor-pointer">Shoes</li>
                <li className="hover:text-[#FE6216] cursor-pointer">Pants</li>
                <li className="hover:text-[#FE6216] cursor-pointer">
                  Sunglasses
                </li>
                <li className="hover:text-[#FE6216] cursor-pointer">Suits</li>
              </ul>
            </div>

            {/* Categories */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Categories</h3>
              <ul className="space-y-3 text-gray-500 text-sm">
                <li className="hover:text-[#FE6216] cursor-pointer">Men</li>
                <li className="hover:text-[#FE6216] cursor-pointer">Women</li>
                <li className="hover:text-[#FE6216] cursor-pointer">New</li>
                <li className="hover:text-[#FE6216] cursor-pointer">Kids</li>
                <li className="hover:text-[#FE6216] cursor-pointer">Brands</li>
              </ul>
            </div>

            {/* Social Media */}
            <div>
              <h3 className="font-semibold text-gray-800 mb-4">Social Media</h3>
              <ul className="space-y-3 text-gray-500 text-sm">
                <li className="hover:text-[#FE6216] cursor-pointer">
                  Instagram
                </li>
                <li className="hover:text-[#FE6216] cursor-pointer">
                  Facebook
                </li>
                <li className="hover:text-[#FE6216] cursor-pointer">Tiktok</li>
                <li className="hover:text-[#FE6216] cursor-pointer">Twitter</li>
              </ul>
            </div>
          </div>
          {/* Products */}
        </div>

        {/* Bottom Border */}
        <div className="border-t border-gray-300 mt-12 pt-6 text-center text-gray-400 text-sm">
          © {new Date().getFullYear()} 4x Vision. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
