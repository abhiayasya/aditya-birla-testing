"use client";
import React, { useRef, useState } from "react";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import "./Slider.css";

// import required modules
import { Navigation, Pagination } from "swiper/modules";
import SliderCard from "./SliderCard";

export default function Slider() {
  return (
    <>
      <Swiper
        slidesPerView={5}
        spaceBetween={30}
        navigation={true}
        // pagination={{
        //   clickable: true,
        // }}
        modules={[Navigation]}
        className="mySwiper"
        breakpoints={{

          // Below xsm (<= 320) -> 1 slide per view
          320: {
            slidesPerView: 1,
          },
          // Below xsm (<= 640) -> 2 slide per view
          640: {
            slidesPerView: 2,
          },
          // Below md (<= 768px) -> 3 slide per view
          768: {
            slidesPerView: 3,
          },
          // Below lg (<= 1024px) -> 4 slides per view
          1024: {
            slidesPerView: 4,
          },
          // Below xl (<= 1280px) -> 5 slides per view
          1280: {
            slidesPerView: 5,
          },
        }}
      >
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
        <SwiperSlide>
          <SliderCard />
        </SwiperSlide>
      </Swiper>
    </>
  );
}
