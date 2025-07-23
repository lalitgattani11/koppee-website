import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";

const testimonials = [
  {
    image: "/images/testimonial-1.jpg",
    name: "Client Name",
    profession: "Profession",
    review:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita",
  },
  {
    image: "/images/testimonial-2.jpg",
    name: "Client Name",
    profession: "Profession",
    review:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita",
  },
  {
    image: "/images/testimonial-3.jpg",
    name: "Client Name",
    profession: "Profession",
    review:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita",
  },
  {
    image: "/images/testimonial-4.jpg",
    name: "Client Name",
    profession: "Profession",
    review:
      "Sed ea amet kasd elitr stet, stet rebum et ipsum est duo elitr eirmod clita lorem. Dolor tempor ipsum sanct clita",
  },
];

function Testimonial() {
  return (
    <div id="testimonial" className="bg-[#FFFBF2] px-5 md:px-20 py-16 text-center mb-5">
      {/* Header */}
      <div className="flex flex-col items-center justify-center">
        <svg
          className="h-24 w-[2px] text-yellow-300"
          viewBox="0 0 2 100"
          xmlns="http://www.w3.org/2000/svg"
        >
          <line
            x1="1"
            y1="0"
            x2="1"
            y2="100"
            stroke="currentColor"
            strokeWidth="2"
          />
        </svg>
        <p className="text-yellow-300 font-semibold uppercase font-sans text-3xl sm:text-4xl mb-3">
          Testimonial
        </p>
      </div>

      <h2 className="text-4xl sm:text-5xl font-extrabold text-[#1e1e1e] mb-10">
        Our Clients Say
      </h2>

      {/* Swiper Slider */}
      <Swiper
        modules={[Pagination]}
        spaceBetween={25}
        slidesPerView={3}
        grabCursor={true}
        loop={true}
        speed={600}
        pagination={{
          el: ".custom-pagination",
          clickable: true,
          bulletClass: "swiper-pagination-bullet",
          bulletActiveClass: "swiper-pagination-bullet-active",
        }}
        breakpoints={{
          0: { slidesPerView: 1 },
          640: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {testimonials.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white p-6 rounded-lg shadow-md text-left transition-all duration-700 ease-in-out hover:scale-[1.02]">
              <div className="flex items-center mb-4">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-16 h-16 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="text-lg font-bold text-[#1e1e1e]">
                    {item.name}
                  </h3>
                  <p className="text-sm italic text-gray-500">
                    {item.profession}
                  </p>
                </div>
              </div>
              <p className="text-[#333] text-sm">{item.review}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Pagination Dots */}
      <div className="custom-pagination flex justify-center mt-6 gap-2" />
    </div>
  );
}

export default Testimonial;
