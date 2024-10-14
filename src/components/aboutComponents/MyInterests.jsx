"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import Image from "next/image";
import "swiper/css";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./Carousel.css";
import { fadeIn } from "../../lib/framer";
import { motion } from "framer-motion";
import slide_image_1 from "@/public/Images/SliderImg.webp";
import slide_image_2 from "@/public/Images/SliderImg2.webp";
import slide_image_3 from "@/public/Images/SliderImg3.webp";
import slide_image_4 from "@/public/Images/SliderImg4.webp";
import slide_image_5 from "@/public/Images/SliderImg5.webp";
import slide_image_6 from "@/public/Images/SliderImg6.webp";
import slide_image_7 from "@/public/Images/SliderImg7.webp";
import slide_image_8 from "@/public/Images/SliderImg8.webp";
import slide_image_9 from "@/public/Images/SliderImg9.webp";
import slide_image_10 from "@/public/Images/SliderImg10.webp";

import {
  EffectCoverflow,
  Pagination,
  Navigation,
  Autoplay,
} from "swiper/modules";

function MyInterests() {
  return (
    <motion.div
      id="art"
      variants={fadeIn("up", 0.2)}
      initial="hidden"
      whileInView={"show"}
      viewport={{ once: false, amount: 0.1 }}
    >
      <Swiper
        effect={"coverflow"}
        grabCursor={true}
        centeredSlides={true}
        loop={true}
        slidesPerView={"auto"}
        coverflowEffect={{
          rotate: 0,
          stretch: 0,
          depth: 100,
          modifier: 2.5,
        }}
        pagination={{ el: ".swiper-pagination", clickable: true }}
        navigation={{
          nextEl: ".swiper-button-next",
          prevEl: ".swiper-button-prev",
          clickable: true,
        }}
        modules={[EffectCoverflow, Pagination, Navigation, Autoplay]}
        className="swiper_container"
        autoplay={{
          delay: 1500, // Adjust the delay as needed
          disableOnInteraction: false, // Keep autoplay running even after user interaction
        }}
      >
        <SwiperSlide>
          <Image src={slide_image_1} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_2} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_3} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_4} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_5} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_6} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_7} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_8} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_9} alt="slide_image" />
        </SwiperSlide>
        <SwiperSlide>
          <Image src={slide_image_10} alt="slide_image" />
        </SwiperSlide>

        <div className="slider-controler">
          <div className="swiper-button-prev slider-arrow">
            <ion-icon name="arrow-back-outline"></ion-icon>
          </div>
          <div className="swiper-button-next slider-arrow">
            <ion-icon name="arrow-forward-outline"></ion-icon>
          </div>
          <div className="swiper-pagination"></div>
        </div>
      </Swiper>
    </motion.div>
  );
}

export default MyInterests;
