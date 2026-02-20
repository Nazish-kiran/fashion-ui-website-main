import React from "react";
import { FiArrowUpRight } from "react-icons/fi";
import { IoMdMail } from "react-icons/io";
import { BiSupport } from "react-icons/bi";
import { GrSettingsOption } from "react-icons/gr";
import { RiSettingsLine } from "react-icons/ri";

export default function ComfortStyleSection() {
  return (
    <section className="py-8 px-5 md:px-12 lg:px-17 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-[31px] md:text-[40px] lg:text-[47px] text-gray-800">
            Embrace Comfort & Style
          </h2>
          <p className="text-gray-500 mt-3 max-w-2xl mx-auto">
            Designed to move with you — effortless, modern, and made for
            everyday life.
          </p>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 auto-rows-[220px] gap-6">
          {/* Card 1 */}
          <div className="bg-[#040C0F] text-white rounded-2xl p-6 flex flex-col items-center justify-between md:col-span-1 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="w-13 h-13 rounded-full bg-[#FE6216] flex items-center justify-center mt-2">
              <RiSettingsLine size={30} />
            </div>
            <div>
              <h3 className="text-xl text-gray-200 text-center">
                100 Days Returns
              </h3>
              <p className="text-sm text-gray-300 mt-2 text-center mb-3">
                Enjoy peace of mind with our easy 100-day return policy
              </p>
            </div>
          </div>

          {/* Card 2 */}
          <div className="group relative rounded-2xl overflow-hidden md:col-span-1 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <img
              src="src/assets/new-collection.png"
              alt="collection"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition" />
            <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-white">
              <span className="text-xl">New Collection</span>
              <button className="w-9 h-9 rounded-full bg-white text-black flex items-center justify-center">
                <FiArrowUpRight className="transition-transform group-hover:translate-x-1" size={18} />
              </button>
            </div>
          </div>

          {/* Card 3 (Tall) */}
          <div className="group relative rounded-2xl overflow-hidden md:col-span-1 md:row-span-2 cursor-pointer hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <img
              src="src/assets/trendy-collection.png"
              alt="trendy"
              className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/10" />

            <span className="absolute top-4 left-4 text-white text-2xl">
              Trendy <br />
              Collection
            </span>

            <button className="absolute bottom-4 left-[50%] translate-x-[-50%] bg-white text-gray-800 px-4 py-2 rounded-full font-medium shadow hover:bg-[#FE6216] hover:text-white transition">
              Add To Card +
            </button>
          </div>

          {/* Card 4 */}
          <div className="bg-[#F5E9E4] rounded-2xl p-6 flex flex-col justify-center items-center text-center hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <p className="text-sm">Active Users</p>
            <h3 className="text-5xl mt-2">120K</h3>

            <div className="flex -space-x-2 mt-4">
              <img
                className="w-8 h-8 rounded-full border-2 border-white hover:scale-110 transition-transform"
                src="https://randomuser.me/api/portraits/women/1.jpg"
                alt=""
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white hover:scale-110 transition-transform"
                src="https://randomuser.me/api/portraits/men/2.jpg"
                alt=""
              />
              <img
                className="w-8 h-8 rounded-full border-2 border-white hover:scale-110 transition-transform"
                src="https://randomuser.me/api/portraits/women/3.jpg"
                alt=""
              />
              <div className="w-8 h-8 rounded-full bg-[#FE6216] text-white text-xs flex items-center justify-center border-2 border-white">
                +
              </div>
            </div>
          </div>

          {/* Card 5 */}
          <div className="bg-[#F5E9E4] rounded-2xl p-6 flex justify-between md:col-span-2 hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <div className="flex flex-col justify-between">
              <h3 className="text-3xl text-gray-800">
                24/07 Customer Services
              </h3>
              <p className="text-sm text-gray-500 mt-2 max-w-md">
                Enjoy peace of mind with our easy 100-day return policy <br />
                peace of mind is important to us.
              </p>
            </div>

            <div className="hidden md:flex flex-col items-end mt-4">
              <div className="w-18 h-18 rounded-full flex items-center">
                <img
                  className="object-cover w-full h-full rounded-full"
                  src="https://randomuser.me/api/portraits/men/4.jpg"
                  alt=""
                />
              </div>

              <div className="flex items-center gap-2">
                <div className="w-16 h-16 rounded-full border border-[#FE6216] flex items-center justify-center text-[#FE6216] bg-white -translate-y-6.25 hover:scale-110 transition-transform duration-200">
                  <BiSupport size={30} />
                </div>
                <div className="w-12.5 h-12.5 rounded-full bg-[#FE6216] flex items-center justify-center text-white me-2 hover:scale-110 transition-transform duration-200">
                  <IoMdMail size={20} />
                </div>
              </div>
            </div>
          </div>

          {/* Card 6 */}
          <div className="bg-gray-100 rounded-2xl p-6 flex flex-col items-center justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
            <GrSettingsOption size={50} className="text-[#FE6216] mt-3" />
            <div>
              <h3 className="text-center text-xl">Life Time Warranty</h3>
              <p className="text-sm text-center text-gray-500 mt-2 mb-3">
                Enjoy complete peace of mind with our lifetime warranty
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
