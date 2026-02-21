import React, { useMemo } from "react";

export default function WinterSaleBanner() {
  // Generate snowflakes data once and memoize it
  const snowflakes = useMemo(() => {
    return [...Array(40)].map((_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      top: `${Math.random() * 100}%`,
      width: `${Math.random() * 7 + 4}px`, // Increased size (4-14px)
      height: `${Math.random() * 7 + 4}px`, // Increased size (4-14px)
      opacity: Math.random() * 0.4 + 0.6, // Increased opacity (0.6-1.0)
      blur: Math.random() * 2, // Random blur for depth
      delay: `${Math.random() * 3}s`,
      duration: `${Math.random() * 4 + 3}s`, // Slower fall (3-7s)
    }));
  }, []); // Empty dependency array means this runs once

  return (
    <section className="px-5 md:px-12 lg:px-17 py-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative overflow-hidden rounded-2xl bg-[url('/assets/winter-sale.png')] bg-cover bg-center group">
          {/* subtle pattern overlay */}
          <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none">
            <div className="absolute inset-0 bg-gradient-to-b from-white/10 to-gray-400/40" />
            {/* Snow particles */}
            {snowflakes.map((flake) => (
              <div
                key={flake.id}
                className="absolute rounded-full bg-white shadow-[0_0_10px_rgba(255,255,255,0.8)] animate-snow"
                style={{
                  left: flake.left,
                  top: flake.top,
                  width: flake.width,
                  height: flake.height,
                  opacity: flake.opacity,
                  filter: `blur(${flake.blur}px)`,
                  boxShadow: '0 0 10px rgba(255,255,255,0.8)',
                  animationDelay: flake.delay,
                  animationDuration: flake.duration,
                }}
              />
            ))}
          </div>

          <div className="relative grid md:grid-cols-2 items-center">
            {/* Left Content */}
            <div className="p-8 md:p-12 lg:p-16 lg:pb-20">
              <h2 className="text-[31px] md:text-[40px] lg:text-[47px]">
                Winter Super Sales
              </h2>

              <p className="text-gray-500 mt-4 max-w-md">
                Stay warm in style — discover cozy essentials and trendy winter
                fits at unbeatable prices.
              </p>

              <button className="mt-6 bg-[#FE6216] hover:bg-[#e45712] text-white px-6 py-3 rounded-full text-sm font-medium transition">
                See More
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}