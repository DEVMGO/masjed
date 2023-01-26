import React from "react";
import Image from 'next/image'
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Pagination } from "swiper";
// Images
import Img1 from '@/public/assets/images/home/img2.jpg';
import Img2 from '@/public/assets/images/home/img1.jpg';
import Img3 from '@/public/assets/images/home/img3.jpg';
import Img4 from '@/public/assets/images/home/img4.jpg';

export default function SliderHome({ imagesList }) {
  return (
    <>
      <Swiper pagination={true} autoplay={{ delay: 2500, disableOnInteraction: false,}} modules={[Autoplay, Pagination]} className="mySwiper">
        {imagesList?.map((item, index) => (
            <SwiperSlide key={index + 'sliderhome'}>
                <Image src={item.image} alt={item.title} className="w-full h-full !object-fill" />
            </SwiperSlide>
        ))}
      </Swiper>
    </>
  );
}

SliderHome.defaultProps = {
    imagesList: [
        {
            image: Img1,
            title: 'slidImage'
        },
        {
            image: Img2,
            title: 'slidImage'
        },
        {
            image: Img3,
            title: 'slidImage'
        },
        {
            image: Img4,
            title: 'slidImage'
        },
    ]
}