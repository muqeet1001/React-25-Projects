 import React, { useState } from "react";

function Random() {
  const [bgColor, setBgColor] = useState("rgb(255, 255, 255)"); // default white

  const generatColor = () => {
    let firstColor = Math.floor(Math.random() * 256);
    let secondColor = Math.floor(Math.random() * 256);
    let thirdColor = Math.floor(Math.random() * 256);
    let color = `rgb(${firstColor}, ${secondColor}, ${thirdColor})`;

    setBgColor(color); // update state
  };

  return (
    <div
      className="w-screen h-screen flex items-center justify-center"
      style={{ backgroundColor: bgColor }} // apply inline style
    >
      <button
        className="px-6 py-3 rounded-2xl bg-blue-400 text-white font-semibold"
        onClick={generatColor}
      >
        Random Color
        <br />
        {bgColor}
      </button>
    </div>
  );
}

export default Random;
