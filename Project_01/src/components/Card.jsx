import React, { useState } from "react";
import data from "../Data/data";

function Card() {
  const [selected, setSelected] = useState(null);

  const handleToggle = (id) => {
    setSelected(selected === id ? null : id); // toggle expand/collapse
  };

  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 p-10">
      <div className="flex flex-wrap gap-8 justify-center items-start">
        {data.map((profile) => {
          const isExpanded = selected === profile.id;
          const shouldTruncate = profile.about.length > 100;
          return (
            <div
              key={profile.id}
              className="w-72 bg-white rounded-3xl shadow-lg p-5 flex flex-col items-center"
            >
              <img
                src={profile.imgUrl}
                alt="profile"
                className="w-24 h-24 rounded-full object-cover border-4 border-pink-400"
              />
              <h1 className="text-lg font-bold mt-3">{profile.name}</h1>
              <p className="text-gray-600">{profile.designation}</p>

              {/* About text */}
              <p className="text-sm text-gray-500 text-center mt-2">
                {isExpanded
                  ? profile.about // full text
                  : shouldTruncate
                  ? profile.about.slice(0, 100) + "..."
                  : profile.about}
              </p>
              {shouldTruncate && (
                <button
                  onClick={() => handleToggle(profile.id)}
                  className="mt-2 text-blue-500 hover:underline"
                >
                  {isExpanded ? "Read Less" : "Read More"}
                </button>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Card;
