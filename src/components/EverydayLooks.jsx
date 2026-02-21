import React from "react";
import sampleImage from "/assets/everyday-looks.png"
import { FiArrowRight } from "react-icons/fi";

const EverydayLooks = () => {
  const features = [
    {
      title: "Trend Edit",
      description: "Discover the latest drops, from casual fits to statement wear.",
    },
    {
      title: "Street Luxe",
      description: "High-fashion details blended with effortless street energy.",
    },
    {
      title: "Timeless Edge",
      description: "Classic silhouettes reimagined for the modern trendsetter.",
    },
  ];

  return (
    <section className="w-full bg-white py-8 px-5 md:px-12 lg:px-17">
      <div className="flex flex-col lg:flex-row gap-10 lg:gap-16">
        
        {/* Left Text Section */}
        <div className="flex-1">
          <h2 className="text-[31px] md:text-[40px] lg:text-[47px] lg:text-5xl  mb-6">
            Everyday Looks With <br /> Purpose.
          </h2>
          <p className="text-gray-500 mb-10">
            Built for the city and beyond. Every detail speaks quality,
            individuality, and effortless confidence
          </p>

          <div className="flex flex-col gap-6">
            {features.map((item, index) => (
              <div
                key={index}
                className="flex justify-between items-center cursor-pointer mb-4 group  "
              >
                <div>
                  <h3 className="text-[23px] mb-1 group-hover:text-[#FE6216] transition-colors duration-500 ease">{item.title}</h3>
                  <p className="text-gray-500 text-sm">{item.description}</p>
                </div>
                 <FiArrowRight className="text-2xl text-gray-500 group-hover:text-[#FE6216] transition-colors duration-500 ease" />
              </div>
            ))}
          </div>
        </div>

        {/* Right Image Section */}
        <div className="flex-1 overflow-hidden">
          <img
            src={sampleImage}
            alt="Everyday looks"
            className="w-full h-auto object-cover rounded-lg shadow-lg hover:scale-105 transition-all duration-500 ease"
          />
        </div>
      </div>
    </section>
  );
};

export default EverydayLooks;
