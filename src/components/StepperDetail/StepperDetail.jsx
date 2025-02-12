import React from "react";
import {formatNumber} from "@/utils/formatNumber"
import Heading from "../Heading/Heading";

const StepperDetails = (props) => {
  const {title,titleBold,mainImg,steps } = props?.StepperDetailsData;

  return (
    <>
      <section className="bg-gray-500 flex flex-col p-8 text-white gap-y-10 md:gap-y-28 rounded-3xl">
        <div className="flex w-full justify-between flex-col-reverse md:flex-row ">
          {/* <h1 className="text-5xl w-full md:w-2/5 flex flex-col">
            {title} <b>{titleBold}</b>
          </h1> */}
          <Heading boldText={titleBold} regularText={title}/>
          <div className="w-40 h-40 md:mx-20 rounded-xl mx-auto overflow-hidden max-md:my-10">
            <img className="h-full w-full" alt="error" src={mainImg} />
          </div>
        </div>
        <div className="grid lg:grid-cols-4 md:grid-cols-2 gap-7">
          {steps.map((card, index) => (
            <div key={index} className="flex gap-5">
            <div>
            <div className="rotate-[270deg] ">{formatNumber(index)}</div>
            <div className="h-10 w-[1px] bg-white mx-auto"></div>
            <div className="h-2 w-2 bg-white rounded mx-auto"></div>
            </div>
            <div className="flex flex-col gap-y-4">
              <div className="w-8 h-8">
                <img className="h-full w-full" alt="error" src={card.icon} />
              </div>
              <h3 className="font-semibold">{card.title}</h3>
              <p className="text-xs text-gray-300">{card.description}</p>
            </div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
};

export default StepperDetails;