"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; // Importing the icon

const Accordion = ({ title, content, isButton, index }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border rounded-lg overflow-hidden shadow-sm bg-white h-fit md:px-10 px-5">
      {/* Accordion Header */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full flex justify-between items-center text-left py-4 text-lg md:text-2xl text-black"
      >
        <p className="flex gap-2">
          <span>{index + 1}.</span>
          {title}
        </p>
        <span className="">
          <ChevronDownIcon
            className={`transition-transform duration-300 w-4 md:w-8 ${
              isOpen ? "rotate-180" : ""
            }`}
          />
        </span>
      </button>

      {/* Accordion Content (Height Transition) */}

      <div
        className={`relative grid transition-all rounded-lg duration-700 ${
          isOpen
            ? "max-h-[500px] opacity-100 py-8 mb-10"
            : "max-h-0 opacity-0 py-0"
        }  bg-gray-100 `}
      >
        <div
          className={` transition-all duration-700 text-base md:text-xl overflow-hidden ${
            isOpen
              ? "px-8 h-full opacity-100 translate-y-0"
              : "h-0 opacity-0 -translate-y-10 px-8 "
          }`}
        >
          {content}
        </div>
        {isButton && (
          <p
            className={`absolute -bottom-4 right-8 px-6 py-2 text-white bg-zinc-500 w-fit rounded-xl overflow-hidden`}
          >
            Start Learning
          </p>
        )}
      </div>
    </div>
  );
};

export default Accordion;
