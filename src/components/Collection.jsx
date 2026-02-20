import React, { useState, useEffect, useRef } from "react";

const images = [
  "src/assets/image010.webp",
  "src/assets/ww-dresses-mob-data.jpg",
  "src/assets/b9eddb606afa3c6f6776fff7a9748b73.jpg",
  "src/assets/fea71bd32059605bbf856fa5a3c90442.jpg",
  "src/assets/af458c8f078f89b76c395636c74adb96-683x1024.jpg",
  "src/assets/monaco-maxi-dress-black-jess_1800x.webp",
  "src/assets/image.png",
];

const Collection = () => {
  const [active, setActive] = useState(3);
  const autoPlayRef = useRef(null);
  const total = images.length;

  // Autoplay
  const resetAutoPlay = () => {
    if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    autoPlayRef.current = setInterval(() => {
      setActive((prevActive) => (prevActive + 1) % total);
    }, 3000);
  };

  const handleImageClick = (index) => {
    setActive(index);
    resetAutoPlay();
  };

  useEffect(() => {
    resetAutoPlay();
    return () => autoPlayRef.current && clearInterval(autoPlayRef.current);
  }, []);

  // Circular reorder only for md+
  const getReorderedImages = () => {
    const result = [];
    for (let i = 3; i > 0; i--) result.push(images[(active - i + total) % total]);
    result.push(images[active]);
    for (let i = 1; i <= 3; i++) result.push(images[(active + i) % total]);
    return result;
  };

  const reorderedImages = getReorderedImages();
  const centerIndex = 3;

  return (
    <section className="w-full px-5 md:px-12 lg:px-17 py-8 bg-white text-center overflow-hidden">
      <h2 className="text-[31px] md:text-[40px] lg:text-[47px] mb-2">
        Signature Collection
      </h2>
      <p className="text-gray-500 text-sm">
        Own your style with comfort and attitude <br />
        Own – made for trendsetters.
      </p>

      {/* Desktop / Tablet Carousel */}
      <div className="hidden md:relative md:flex md:overflow-hidden">
        <div
          className={`flex gap-2 w-full items-center transition-all duration-700 ease-in-out translate-x-[0%]`}
        >
          {reorderedImages.map((img, index) => {
            const distance = Math.abs(index - centerIndex);

            let heightClass = "h-[220px]";
            if (distance === 0) heightClass = "h-[420px]";
            else if (distance === 1) heightClass = "h-[385px]";
            else if (distance === 2) heightClass = "h-[345px]";
            else if (distance === 3) heightClass = "h-[305px]";

            return (
              <div
                key={`${img}-${index}`}
                onClick={() => handleImageClick(images.findIndex((o) => o === img))}
                className={`mt-10 cursor-pointer transition-all duration-700 ease-[cubic-bezier(0.22,1,0.36,1)]
                  ${index === centerIndex ? "w-[50%]" : "w-[20%]"} 
                  ${heightClass}`}
                style={{ willChange: "transform" }}
              >
                <img
                  src={img}
                  alt={`Collection ${index + 1}`}
                  className="w-full h-full object-cover rounded-2xl shadow-lg"
                />
              </div>
            );
          })}
        </div>
      </div>

      {/* Mobile Slider */}
      <div className="flex md:hidden gap-2 overflow-x-auto py-4">
        {images.map((img, index) => (
          <div
            key={img}
            className="shrink-0 w-50 md:w-64 h-64 cursor-pointer"
            onClick={() => handleImageClick(index)}
          >
            <img
              src={img}
              alt={`Collection ${index + 1}`}
              className="w-full h-full object-cover rounded-2xl shadow-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Collection;
