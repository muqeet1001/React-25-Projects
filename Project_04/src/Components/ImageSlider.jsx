 import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";

function ImageSlider() {
  const [currId, setCurrId] = useState(0);

  const images = [
    { id: 1, url: "https://picsum.photos/id/1015/800/500" },
    { id: 2, url: "https://picsum.photos/id/1016/800/500" },
    { id: 3, url: "https://picsum.photos/id/1018/800/500" },
    { id: 4, url: "https://picsum.photos/id/1020/800/500" },
    { id: 5, url: "https://picsum.photos/id/1024/800/500" },
  ];

  // ✅ Preload images
  useEffect(() => {
    images.forEach((img) => {
      const newImg = new Image();
      newImg.src = img.url;
       console.log(newImg);
       
    });
  }, []);
  
  

  const handleLeft = () => {
    setCurrId((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleRight = () => {
    setCurrId((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="w-screen h-screen flex items-center justify-center bg-gray-500">
      <div
        className="w-[80%] h-[80%] bg-center bg-cover flex items-center justify-between rounded-2xl relative transition-all duration-500"
        style={{
          backgroundImage: `url(${images[currId].url})`,
          backgroundColor: "lightgray",
        }}
      >
        {/* Left Arrow */}
        <button
          onClick={handleLeft}
          className="p-4 rounded-full text-gray-700 shadow-md 
                     bg-gradient-to-r from-white/90 to-gray-200/80
                     hover:shadow-lg hover:scale-105 transition-all duration-200 absolute left-5"
        >
          <ChevronLeft size={28} />
        </button>

        {/* Right Arrow */}
        <button
          onClick={handleRight}
          className="p-4 rounded-full text-gray-700 shadow-md 
                     bg-gradient-to-l from-white/90 to-gray-200/80
                     hover:shadow-lg hover:scale-105 transition-all duration-200 absolute right-5"
        >
          <ChevronRight size={28} />
        </button>
      </div>
    </div>
  );
}

export default ImageSlider;
