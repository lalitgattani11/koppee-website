import React from "react";
import Testimonial from "../Testimonials";
import Footer from "../Footer";

function TestimonialPage() {
  return (
    <div className="bg-[#FFFBF2] w-full">
      <div className="relative bg-[url('/images/bg.jpg')] bg-cover bg-center text-white h-96 pt-10">
        <div className="absolute inset-0 bg-[#2b1e1e] bg-opacity-80"></div>

        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h2 className="uppercase font-bold font-sans text-5xl text-center">
            Testimonial
          </h2>
          <br />
          <p>Home / Testimonial</p>
        </div>
      </div>
      <Testimonial />
      <Footer />
    </div>
  );
}

export default TestimonialPage;
