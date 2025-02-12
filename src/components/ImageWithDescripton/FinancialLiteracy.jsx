import React from "react";
import Heading from "../Heading/Heading";

const features = [
  {
    title: "Empowers Better Money Management",
    description:
      "Learn to budget, save, and invest wisely to avoid debt and build financial security.",
  },
  {
    title: "Prepares for Life’s Uncertainties",
    description:
      "Understand insurance, emergency funds, and risk management to stay financially stable during unexpected events.",
  },
  {
    title: "Ensures Long-Term Financial Freedom",
    description:
      "Plan for retirement, wealth creation, and passive income to achieve financial independence and peace of mind.",
  },
];

const stats = [
  { title: "Male", value: "35%", icon: "👤" },
  { title: "Female", value: "20%", icon: "👩" },
  { title: "Urban", value: "33%", icon: "🏙️" },
  { title: "Rural", value: "24%", icon: "🌾" },
];

const FinancialLiteracy = () => {
  return (
    <div className=" rounded-lg  max-w-[1440px] mx-auto">
      <Heading boldText="Matters" regularText=" Why Financial Literacy " />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 mt-6">
        <div className="">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>

        <div className="flex flex-col items-center justify-end relative md:p-20 p-5 ">
          <div className="md:absolute top-0 left-0 max-md:w-full">
            <StatsCard data={stats} value="35%" icon="👤" />
          </div>
          <ImagePlaceholder />
          <div className="md:absolute bottom-0 right-0 max-md:w-full">
            <StatsCard data={stats.slice(2, 4)} value="35%" icon="👤" />
          </div>
        </div>
      </div>
    </div>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <div className="bg-white p-6 rounded-lg mb-4 space-y-4">
      <h3 className="text-gray-700 text-2xl font-bold">{title}</h3>
      <p className="text-gray-400 text-xl font-semibold">{description}</p>
    </div>
  );
};

const StatsCard = ({ data, icon }) => {
  return (
    <div className="bg-white p-8 rounded-lg border  flex flex-col items-center ">
      <div className="flex items-center gap-4">
        <span className="text-xl">{icon}</span>
        <p className=" text-2xl ">
          {data[0].title} - {data[0].value}
        </p>
      </div>
      <p>v/s</p>
      <div className="flex items-center gap-4">
        <span className="text-2xl">{icon}</span>
        <p className="text-2xl ">
          {data[1].title} - {data[1].value}
        </p>
      </div>
    </div>
  );
};

const ImagePlaceholder = () => {
  return (
    <div className="w-full h-full bg-white flex items-center justify-center rounded-lg aspect-square">
      <span className="text-gray-600">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
          className="size-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="m2.25 15.75 5.159-5.159a2.25 2.25 0 0 1 3.182 0l5.159 5.159m-1.5-1.5 1.409-1.409a2.25 2.25 0 0 1 3.182 0l2.909 2.909m-18 3.75h16.5a1.5 1.5 0 0 0 1.5-1.5V6a1.5 1.5 0 0 0-1.5-1.5H3.75A1.5 1.5 0 0 0 2.25 6v12a1.5 1.5 0 0 0 1.5 1.5Zm10.5-11.25h.008v.008h-.008V8.25Zm.375 0a.375.375 0 1 1-.75 0 .375.375 0 0 1 .75 0Z"
          />
        </svg>
      </span>
    </div>
  );
};

export default FinancialLiteracy;
