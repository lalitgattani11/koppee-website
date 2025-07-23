import React from "react";
import { FaTruck, FaCoffee, FaMedal, FaTable } from "react-icons/fa";

const services = [
  {
    image: "service-1.jpg",
    icon: <FaTruck size={20} className="text-white" />,
    title: "Fastest Door Delivery",
    desc: "Enjoy the fastest door delivery of your favorite coffee, hot and fresh, We ensure quick service right to your doorstep, anytime you crave a sip",
  },
  {
    image: "service-2.jpg",
    icon: <FaCoffee size={20} className="text-white" />,
    title: "Fresh Coffee Beans",
    desc: "Enjoy coffee made from handpicked, freshly roasted beans,Every sip delivers rich aroma and unbeatable freshness."
  },
  {
    image: "service-3.jpg",
    icon: <FaMedal size={20} className="text-white" />,
    title: "Best Quality Coffee",
    desc: "Crafted with premium beans and expert brewing,Taste the difference in every smooth, flavorful cup."
  },
  {
    image: "service-4.jpg",
    icon: <FaTable size={20} className="text-white" />,
    title: "Online Table Booking",
    desc: "Reserve your seat instantly from anywhere, anytime, Skip the queue and enjoy a hassle-free coffee experience."
  },
];

function Service() {
  return (
    <div id="service" className="bg-[#FFFBF2] w-full py-16 px-4 sm:px-8 md:px-16">
      {/* Section Heading */}
      <div className="flex flex-col items-center justify-center mb-10">
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
        <p className="text-yellow-300 font-semibold text-3xl sm:text-4xl mt-3 uppercase">
          Our Services
        </p>
      </div>

      <h2 className="text-center text-3xl sm:text-4xl md:text-5xl font-bold mb-12 leading-tight px-4">
        Fresh & Organic Beans
      </h2>

      {/* Services */}
      <div className="flex flex-col items-center gap-10">
        {services.map((service, index) => (
          <div
            key={index}
            className="w-full max-w-3xl flex flex-col sm:flex-row items-center gap-6"
          >
            <img
              src={`/images/${service.image}`}
              alt={service.title}
              className="w-full sm:w-40 h-52 sm:h-40 object-cover rounded"
            />
            <div className="text-center sm:text-left">
              <div className="flex items-center justify-center sm:justify-start gap-3 mb-2">
                <div className="bg-yellow-500 rounded-full w-8 h-8 flex items-center justify-center">
                  {service.icon}
                </div>
                <h3 className="text-lg sm:text-xl font-semibold text-[#1C1C1C]">
                  {service.title}
                </h3>
              </div>
              <p className="text-gray-600 text-sm sm:text-base px-2 sm:px-0">
                {service.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Service;
