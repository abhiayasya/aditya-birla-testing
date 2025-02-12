import React from "react";

const SliderCard = () => {
  return (
    <div className="bg-white text-left rounded-lg overflow-hidden p-6 space-y-6 flex flex-col items-start w-full">
      <div className="flex ">
        <div className="bg-zinc-100 rounded-full p-6 w-fit border "></div>
        <div className="bg-zinc-100 rounded-full p-6 w-fit border -ml-6"></div>
        <div className="bg-zinc-100 rounded-full p-6 w-fit border -ml-6"></div>
        <div className="bg-zinc-100 rounded-full p-6 w-fit border -ml-6"></div>
      </div>
      <div className="text-lg md:text-2xl font-semibold">
        <p>E-books</p>
      </div>
    </div>
  );
};

export default SliderCard;
