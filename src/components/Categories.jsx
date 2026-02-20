import React, { useState } from "react";

const categories = ["New", "Women", "Men", "Kids", "Collections"];

const products = [
  {
    id: 1,
    name: "Black T-Shirt",
    price: "$20.00",
    image: "src/assets/shirt.png",
    tag: ["women", "men"],
  },
  {
    id: 2,
    name: "Tank top",
    price: "$18.00",
    image: "src/assets/tank-top.png",
    tag: ["new", "women"],
  },
  {
    id: 3,
    name: "Maxi dress",
    price: "$35.00",
    image: "src/assets/maxi.png",
    tag: ["women"],
  },
  {
    id: 4,
    name: "Jackets",
    price: "$45.00",
    image: "src/assets/jacket.png",
    tag: ["women"],
  },
  {
    id: 5,
    name: "Sports Jacket",
    price: "$50.00",
    image: "src/assets/sport-jacket.png",
    tag: ["men", "new"],
  },
  {
    id: 6,
    name: "Hoodie",
    price: "$30.00",
    image: "src/assets/hoodie.png",
    tag: ["men", "new", "kids"],
  },
  {
    id: 7,
    name: "Tuxedo Dress",
    price: "$60.00",
    image: "src/assets/formal.png",
    tag: ["men"],
  },
  {
    id: 8,
    name: "Long Pants",
    price: "$28.00",
    image: "src/assets/long-pants.png",
    tag: ["men", "kids"],
  },
  {
    id: 9,
    name: "Red Frock",
    price: "$48.00",
    image: "src/assets/red-frock.png",
    tag: ["kids", "new"],
  },
  {
    id: 10,
    name: "Pink Shorts",
    price: "$21.00",
    image: "src/assets/shorts.png",
    tag: ["kids"],
  },
];

export default function CategorySection() {
  const [active, setActive] = useState("Women");

  const filteredProducts =
    active === "Collections"
      ? products
      : products.filter((item) => item.tag.includes(active.toLowerCase()));

  return (
    <section className="py-8 px-5 md:px-12 lg:px-17">
      <div className="max-w-7xl mx-auto">
        {/* Title */}
        <div className="text-center mb-10">
          <h2 className=" text-[31px] md:text-[40px] lg:text-[47px]">
            Find Your Category
          </h2>
          <p className="text-gray-500 mt-2">
            Explore styles and collections curated just for you.
          </p>
        </div>

        {/* Category Tabs */}
        <div className="flex justify-center gap-3 mb-12 flex-wrap">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActive(cat)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition 
                ${
                  active === cat
                    ? "border border-[#FE6216] text-[#FE6216]"
                    : "bg-white text-gray-600"
                }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredProducts.map((item) => (
            <div
              key={item.id}
              className="rounded-md overflow-hidden shadow-xl hover:shadow-2xl transition"
            >
              <div className="overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-65 object-cover"
                />
              </div>

              <div className="m-4 flex justify-between">
                <div >

                <h3 className="text-gray-800 text-lg">{item.name}</h3>
                <p className="text-gray-500 text-sm mt-1">{item.price}</p>
                </div>

                <button className="mt-3 bg-[#FE6216] text-white text-sm px-3 rounded-full">
                  Buy Now
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
