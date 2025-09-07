import React from "react";
import data from "../Data/data";
function Card() {
  return (
    <div className="min-h-screen flex justify-center items-center bg-gradient-to-r from-purple-500 to-pink-500 p-10">
      <div className="flex  flex-wrap gap-8 justify-center">
       { data.map((profile) => (
          <div className="w-72 bg-white rounded-3xl shadow-lg p-5 flex flex-col items-center">
          <img
            src={profile.imgUrl}
            alt="profile"
            className="w-24 h-24 rounded-full object-cover border-4 border-pink-400"
          />
          <h1 className="text-lg font-bold mt-3">{profile.name}</h1>
          <p className="text-gray-600">{profile.designation}</p>
          <p className="text-sm text-gray-500 text-center mt-2">
            {profile.about.length > 100
              ? profile.about.substring(0, 100) + "..."
              : profile.about}
            {profile.about.length > 100 && (
              <span className="text-blue-500 cursor-pointer"> Read more</span>
            )}
          </p>
        </div>
       ))}
      </div>
    </div>
  );
}

export default Card;
