import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';

import './HeaderCarousel.css';

// import required modules
import { Pagination,Autoplay } from 'swiper/modules';
import HeaderCarouselCard from './HeaderCarouselCard';

export default function HeaderCarousel({children}) {
  return (
    <>
      <Swiper pagination={true} modules={[Pagination,Autoplay]} className="mySwiper" autoplay={{
          delay: 2500,
          disableOnInteraction: false,
        }}>
            {[1,1,1].map((data,index)=>(
                <SwiperSlide key={index} className='text-left'>
                    {children}
                </SwiperSlide>
            ))}
      </Swiper>
    </>
  );
}
