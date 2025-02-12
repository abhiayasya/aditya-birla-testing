
// import Accordion from "@/components/Accordion";
import Accordion from "@/components/Accordion/Accordion";
import AdvantageCard from "@/components/Card/AdvantageCard";
import Customcard from "@/components/Card/CustomCard";
import HoverDetailCard from "@/components/Card/HoverDetailCard";
import Card from "@/components/Card/IconCard";
// import Button from "@/components/CTA/Button";
import Heading from "@/components/Heading/Heading";
import HeroBanner from "@/components/HeroBanner/HeroBanner";
import FinancialLiteracy from "@/components/ImageWithDescripton/FinancialLiteracy";
import { MainContainer } from "@/components/MainContainer/MainContainer";
import Slider from "@/components/Slider/Slider";
import SuccessStoryCard from "@/components/Slider/SuccessStoryCard";
import StepperDetails from "@/components/StepperDetail/StepperDetail";
import VideoWithText from "@/components/VideoWithText/VideoWithText";
import { accordionData, AdvantageCardData, HoverDetailCardSection, StepperDetailsData } from "@/constants/constant";
import _map from 'lodash/map';


export default function Home() {

  return (
    <div className="min-h-screen bg-white ">
      <MainContainer className="bg-[#ededf0]">
        <section className="bg-[#ededf0]" id="first-component">
          <HeroBanner />
        </section>
      </MainContainer>
      <MainContainer>
        <section className=" flex flex-col max-w-[1280px] mx-auto items-center justify-center">
          <div className="text-center w-full md:w-2/3 lg:w-1/2 relative py-8">
            <Heading
              boldText="Financial Literacy Program!"
              regularText="About our "
            />
            <p className="text-base text-zinc-500 mt-8">
              At ABC, we believe that financial literacy is the foundation of
              financial well- being. Understanding how to manage money effectively
              can lead to better financial decisions, reduced stress, and
              long-term financial stability. However, we recognize that everyone
              learns differently, and thats why we have designed a diverse and
              inclusive learning experience to suit every preference and need.
            </p>
            <button className="border border-zinc-800 font-semibold px-6 py-2 max-md:mx-4 max-md:mt-8 rounded-full lg:absolute mt-0 top-0 -left-32">Finance</button>
            <button className="border border-zinc-800 font-semibold px-6 py-2 max-md:mx-4 max-md:mt-8 rounded-full lg:absolute mt-0 top-[50%] -left-40">Finance</button>
            <button className="border border-zinc-800 font-semibold px-6 py-2 max-md:mx-4 max-md:mt-8 rounded-full lg:absolute mt-0 top-[100%] -left-32">Finance</button>
            <button className="border border-zinc-800 font-semibold px-6 py-2 max-md:mx-4 max-md:mt-8 rounded-full lg:absolute mt-0 top-0 -right-32">Finance</button>
            <button className="border border-zinc-800 font-semibold px-6 py-2 max-md:mx-4 max-md:mt-8 rounded-full lg:absolute mt-0 top-[50%] -right-40">Finance</button>
            <button className="border border-zinc-800 font-semibold px-6 py-2 max-md:mx-4 max-md:mt-8 rounded-full lg:absolute mt-0 top-[100%] -right-32">Finance</button>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 max-w-[1440px] place-items-center w-full mx-auto pt-28">
            {[1, 1, 1, 1, 1].map((item, index) => {
              return (
                <Card
                  key={index}
                  // imageSrc="https://via.placeholder.com/400x300"
                  title="30K"
                  description="Total Registration"
                />
              );
            })}
          </div>
        </section>
      </MainContainer>

      {/* MattersWhy Financial Literacy */}
      <MainContainer className="bg-zinc-100 ">
        <section className="mb-20">
          <FinancialLiteracy />
        </section>
      </MainContainer>
      <MainContainer>
        <section className="">
          <div className="w-fit mx-auto text-center">
            <Heading regularText={AdvantageCardData.advantageCardHeading} />
            <div className="text-gray-500 ">{AdvantageCardData.advantageCardSubHeading}</div>
          </div>
          <div className="grid lg:grid-cols-5 md:grid-cols-3 grid-cols-2 gap-3 py-10">
            {_map(AdvantageCardData.advantageCardList, (card, index) => (
              <AdvantageCard cardDetail={card} key={index} />
            ))}
          </div>
        </section>
      </MainContainer>
      <MainContainer>
        <StepperDetails StepperDetailsData={StepperDetailsData} />
      </MainContainer>
      <MainContainer>
        <section className="space-y-8">
          <Heading boldText={"in the program"} regularText={"Key Modules covered "} className={"text-center"} />
          <p className="text-center text-lg text-zinc-600">Explore step by step modules designed to help you build financial confidebce, from bugeting basics to wealth-building strategies</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            {
              _map(accordionData, (item, index) => {
                return <Accordion key={index} index={index} title={item.title} isButton={true}
                  content={item.content} />
              })
            }
          </div>
        </section>
      </MainContainer>
      <MainContainer>
        <section className="bg-zinc-200 md:p-20 md:px-14 px-4 py-8 rounded-3xl space-y-14 ">
          <Heading regularText={"Plateforms"} boldText={" & Resurces"} />
          <div className="">
            <Slider />
          </div>
        </section>
      </MainContainer>
      <MainContainer className="bg-gray-100">
        <section className="">
          <VideoWithText />
        </section>
      </MainContainer>
      <MainContainer>
        <section className="max-w-[1440px] mx-auto">
          <Customcard />
        </section>
      </MainContainer>
      <MainContainer className="bg-gray-100">
        <section className="max-w-[1440px] mx-auto">
          <SuccessStoryCard/>
        </section>
      </MainContainer>
      <MainContainer>
        <section className="">
          <div className="flex justify-between items-center pb-10">
            <Heading regularText={HoverDetailCardSection?.hoverDetailCardHeading}/>
            {/* <h2 className="text-4xl">{HoverDetailCardSection?.hoverDetailCardHeading}</h2> */}
            <button className="border px-5 py-1.5 rounded-2xl text-nowrap">View All</button>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 md:grid-cols-3 grid-cols-1 gap-8">
            {HoverDetailCardSection?.hoverDetailCards.map((card, index) => (
              <HoverDetailCard key={index} cardDetail={card} />
            ))}
          </div>
        </section>
      </MainContainer>
      <MainContainer>
        <section className=" space-y-10 pb-10">
          <h2 className="text-3xl md:text-5xl text-center font-semibold">Frequently Asked <span className="font-extralight">Questions </span></h2>
          <div className="grid grid-cols-1 gap-6 md:gap-8 ">
            {
              _map(accordionData.slice(0, 5), (item, index) => {
                return <Accordion key={index} title={item.title} index={index}
                  content={item.content} />
              })
            }
          </div>
        </section>
      </MainContainer>
    </div>
  );
}
