import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const slides = [
  {
    img: "/images/carousel-1.jpg",
    heading: "We Have Been Serving",
    title: "COFFEE",
    subtitle: "* SINCE 1950 *",
  },
  {
    img: "/images/carousel-2.jpg",
    heading: "Love Our Coffee",
    title: "FRESH BREW",
    subtitle: "* DAILY ROASTED *",
  },
];

const CarouselOnly = () => {
  return (
    <Swiper
      modules={[Navigation, Autoplay]}
      navigation
      autoplay={{ delay: 5000 }}
      loop={true}
      className="w-full"
    >
      {slides.map((slide, index) => (
        <SwiperSlide key={index}>
          <div id="home"
            className="w-full h-screen bg-cover bg-center relative"
            style={{ backgroundImage: `url(${slide.img})` }}
          >
            <div className="w-full h-full bg-black bg-opacity-50 flex items-center justify-center text-center px-4 sm:px-8">
              <div className="text-white max-w-3xl">
                <h1 className="text-yellow-300 text-2xl sm:text-3xl md:text-4xl font-semibold drop-shadow-md">
                  {slide.heading}
                </h1>
                <h2 className="text-white text-4xl sm:text-6xl md:text-7xl font-bold my-4 drop-shadow-md">
                  {slide.title}
                </h2>
                <h3 className="text-white text-xl sm:text-2xl md:text-3xl font-medium drop-shadow-md">
                  {slide.subtitle}
                </h3>
              </div>
            </div>
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
};

export default CarouselOnly;
