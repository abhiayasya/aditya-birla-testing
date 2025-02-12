"use client";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/24/solid"; // Importing the icon

const Accordion = ({ isSingleOpen }) => {
  const items = [
    { title: "What is React?", content: "React is a JavaScript library for building user interfaces." },
    { title: "What is Next.js?", content: "Next.js is a React framework for production." },
    { title: "Why use Next.js?", content: "Next.js provides features like SSR, SSG, and API routes." },
  ];
  // State for tracking open indices
  const [activeIndices, setActiveIndices] = useState([]);
  const toggleAccordion = (index) => {
    if (isSingleOpen) {
      // Single-open behavior
      setActiveIndices((prev) => (prev[0] === index ? [] : [index]));
    } else {
      // Multi-open behavior
      setActiveIndices((prev) =>
        prev.includes(index)
          ? prev.filter((i) => i !== index) // Close the accordion
          : [...prev, index] // Open the accordion
      );
    }
  };
  return (
    <div className="max-w-2xl mx-auto my-8">
      <h2 className="text-2xl font-bold text-center mb-6">Accordion Component</h2>
      {items.map((item, index) => (
        <div
          key={index}
          className={`mb-4 border border-gray-300 rounded-lg overflow-hidden shadow-sm ${
            index % 2 === 0 ? "border-b-yellow-500" : "border-b-green-500"
          }`}
        >
          {/* Accordion Header */}
          <div
            onClick={() => toggleAccordion(index)}
            className={`p-4 flex justify-between items-center cursor-pointer font-medium ${
              activeIndices.includes(index) ? "bg-blue-100 text-blue-800" : "bg-gray-100"
            }`}
          >
            <span>{item.title}</span>
            {/* Arrow Icon */}
            <ChevronDownIcon
              className={`h-5 w-5 transform transition-transform ${
                activeIndices.includes(index) ? "rotate-180" : ""
              }`}
            />
          </div>
          {/* Accordion Content */}
          {activeIndices.includes(index) && (
            <div className="p-4 bg-white border-t border-gray-300">
              {item.content}
            </div>
          )}
        </div>
      ))}
    </div>
  );
};

export default Accordion;
