import React from "react";
import Heading from "../Heading/Heading";
import Button from "../CTA/Button";

const HeroBanner = () => {

    return (
    <div className=" w-full flex flex-col md:flex-row-reverse items-center justify-between">
      <div className="banner-image w-full md:w-1/2">
        <img src="/hero.png" className="w-full" alt="" />
      </div>
      <div className="banner-content font-sans flex flex-col space-y-8 w-full md:w-1/2">
        {/* <div className="banner-title">
          <h2 className="text-[#2a2e34] font-bold text-5xl mb-2">Learn, Plan, Grow</h2>
          <span className="text-[#2a2e34] text-5xl">Manage Your Money Wisely</span>
        </div> */}
        <Heading boldText={"Manage Your Money Wisely"} regularText={"Learn, Plan, Grow "}/>
        <div className="banner-description mb-2">
          <p className="text-gray-500 text-lg font-medium">
            Financial literacy is not one-size-fits-all. Whether you are a
            student, gig worker, or retiree, we offer tailored resources to
            guide your journey.
          </p>
        </div>

        <div className="banner-cta">
          {/* <button className="bg-[#2a2e34] text-white px-8 py-4 rounded-full">
            Start Learning Today
          </button> */}
          <Button title={"Start Learning Today"}/>
        </div>
      </div>

    </div>
  );
};

export default HeroBanner;
