import React from "react";

export default function DiscountBanner() {
  return (
    <section className="px-5 md:px-12 lg:px-17 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative rounded-2xl overflow-hidden">
          
          {/* Background Video */}
          <video
            autoPlay
            loop
            muted
            src="src/assets/video/sale-banner-video.mp4"
            className="w-full h-65 md:h-85 lg:h-100 object-cover"
          />

          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black/30" />

          {/* Glass Card */}
          <div className="absolute inset-0 flex items-center justify-center p-4">
            
            {/* inner card wrapper for overlay */}
            <div className="relative max-w-md w-full">
              
              {/* inner image background */}
              <div className="absolute inset-0 bg-[url('src/assets/sale-banner.png')] bg-cover bg-center rounded-2xl" />
              
              {/* inner dark overlay */}
              <div className="absolute inset-0 bg-black/40 rounded-2xl" />

              {/* content */}
              <div className="relative border border-white/30 rounded-2xl px-10 py-10 text-center">
                <h2 className="text-white/85 text-3xl md:text-4xl ">
                  Get 50% Off
                </h2>

                <p className="text-gray-300 text-sm mt-3">
                  Find your perfect winter looks and stay bold in every season.
                </p>

                <button className="mt-6 bg-[#FE6216] hover:bg-[#e45712] text-white px-6 py-3 rounded-full text-sm font-medium transition">
                  Shop Now
                </button>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
