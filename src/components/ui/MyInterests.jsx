import React from "react";
import img1 from "/public/Images/SliderImg.webp";
import img2 from "/public/Images/SliderImg2.webp";
import img3 from "/public/Images/SliderImg3.webp";
import img4 from "/public/Images/SliderImg4.webp";
import img5 from "/public/Images/SliderImg5.webp";
import img6 from "/public/Images/SliderImg6.webp";
import img7 from "/public/Images/SliderImg7.webp";
import img8 from "/public/Images/SliderImg8.webp";
import img9 from "/public/Images/SliderImg9.webp";
import img10 from "/public/Images/SliderImg10.webp";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import Autoplay from "embla-carousel-autoplay";

const images = [img1, img2, img3 /* ...other images */];

export default function MyInterests() {
  return (
    <div>
      <div>
        <h1 className="font-bold text-3xl pb-4">My Interests</h1>
      </div>
      <div>
        <Carousel
          className="w-full max-w-lg"
          plugins={[
            Autoplay({
              delay: 2000,
            }),
          ]}
        >
          <CarouselContent className="">
            <CarouselItem>
              <Image src={img1} />
            </CarouselItem>
            <CarouselItem>
              <Image src={img2} />
            </CarouselItem>
            <CarouselItem>
              <Image src={img3} />
            </CarouselItem>
            <CarouselItem>
              <Image src={img4} />
            </CarouselItem>
            <CarouselItem>
              <Image src={img5} />
            </CarouselItem>
            <CarouselItem>
              <Image src={img6} />
            </CarouselItem>
            <CarouselItem>
              <Image src={img7} />
            </CarouselItem>
            <CarouselItem>
              <Image src={img8} />
            </CarouselItem>
            <CarouselItem>
              <Image src={img9} />
            </CarouselItem>
            <CarouselItem>
              <Image src={img10} />
            </CarouselItem>
          </CarouselContent>
        </Carousel>
      </div>
    </div>
  );
}
