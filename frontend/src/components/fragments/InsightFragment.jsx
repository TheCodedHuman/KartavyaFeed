import React from 'react';

function InsightFragment({ titleText, someInfo, imgUrl }) {
  return (
    <div className="group flex flex-col justify-center items-center bg-white rounded-2xl text-center font-outfit aspect-square h-56 w-56 p-4 shadow-md hover:shadow-xl transition-shadow duration-300 ease-in-out">

      {/* Text Section */}
      <div className="flex flex-col gap-1 transform transition-transform duration-300 ease-in-out group-hover:-translate-y-4">
        <h4 className="text-2xl font-semibold">{titleText}</h4>
        <p className="text-base text-gray-700">{someInfo}</p>
      </div>

      {/* Image Reveal Section */}
      <div className="flex justify-center items-center overflow-hidden w-0 group-hover:w-24 transition-all duration-300 ease-in-out">
        <img
          src={imgUrl}
          alt="Insight visual"
          className="object-contain w-full h-auto scale-0 group-hover:scale-100 transition-transform duration-300 ease-in-out"
        />
      </div>
    </div>
  );
}

export default InsightFragment;



// {/* Image Reveal Section ~ other possible method, but image not rising*/}
// <div className="overflow-hidden w-0 group-hover:w-24 transition-all duration-300 ease-in-out">

