"use client";

import React, { useState, useEffect } from "react";

const testimonials = [
  {
    text: "What are the best investment strategies?",
    name: "Manish Kumar",
    responses: 102,
  },
  {
    text: "How can I start budgeting effectively?",
    name: "Manish Kumar",
    responses: 102,
  },
  {
    text: "What are the best ways to save money?",
    name: "Manish Kumar",
    responses: 102,
  },
];

const SuccessStoryCarousel = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically transition to the next testimonial every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 5000);

    // Clean up the interval on component unmount
    return () => clearInterval(interval);
  }, []);

  //   const handlePrev = () => {
  //     setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
  //   };

  //   const handleNext = () => {
  //     setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  //   };

  return (
    <div className="w-[400px] mx-auto h-[300px] flex flex-col-reverse items-center justify-center relative overflow-hidden bg-[#ededf0]">
      {/* Testimonials */}
      <div className="w-full h-full">
        <div className="relative">
          {testimonials.map((item, index) => (
            <div
              key={index}
              className={`absolute w-full transition-all duration-1000 ease-in-out ${
                index === currentIndex
                  ? "opacity-100 z-10 scale-100"
                  : "opacity-50 translate-y-[70%] z-0 scale-75"
              }`}
            >
              <div className="relative flex flex-col p-6 shadow-lg border border-gray-300 rounded-xl overflow-hidden bg-white">
              <div className={`${index !== currentIndex ? "block" :"hidden"} bg-white bg-opacity-20 w-full h-full absolute top-0 left-0`}/>
                <p className="text-lg font-semibold text-gray-900">
                  {item.text}
                </p>
                <p className="text-sm text-gray-500 mt-2">- Author</p>
                <p className="text-md font-bold">{item.name}</p>

                {/* Responses & Button Section */}
                <div className="flex items-center justify-between mt-4">
                  <div className="flex items-center gap-2">
                    <div className="flex -space-x-1">
                      {[...Array(4)].map((_, i) => (
                        <span
                          key={i}
                          className="w-5 h-5 bg-gray-400 rounded-full"
                        ></span>
                      ))}
                    </div>
                    <span className="text-sm text-gray-500">
                      {item.responses} Responses
                    </span>
                  </div>
                  <button className="bg-gray-900 text-white px-4 py-2 text-sm rounded-lg">
                    Respond
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="absolute top-1/2 left-2 transform -translate-y-1/2">
        {/* <button onClick={handlePrev} className="bg-gray-900 text-white px-4 py-2 text-sm rounded-lg">
          Prev
        </button>
      </div>
      <div className="absolute top-1/2 right-2 transform -translate-y-1/2">
        <button onClick={handleNext} className="bg-gray-900 text-white px-4 py-2 text-sm rounded-lg">
          Next
        </button> */}
      </div>
    </div>
  );
};

export default SuccessStoryCarousel;
