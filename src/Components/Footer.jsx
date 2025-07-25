import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhone } from "react-icons/fa6";
import { CiMail } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { IoLogoGithub } from "react-icons/io";

function Footer() {
  return (
    <div className="relative bg-[url('/images/bg.jpg')] bg-cover bg-center text-white w-full">
      <div className="absolute inset-0 bg-[#2b1e1e] bg-opacity-80"></div>

      <div className="relative z-10 flex flex-col lg:flex-row justify-center items-center gap-20 text-center lg:text-left py-20 px-4">
        <div className="w-full sm:w-2/3 lg:w-auto">
          <h2 className="text-3xl uppercase font-bold tracking-wide mb-4">
            Get In Touch
          </h2>
          <div className="space-y-3 text-lg">
            <a
              href="https://www.google.com/maps/search/?api=1&query=72/203,+Mansarovar,+Jaipur"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center lg:justify-start gap-2 hover:text-yellow-500"
            >
              <FaMapMarkerAlt className="text-xl" />
              72/203, Mansarovar, Jaipur
            </a>

            <a
              href="tel:9024450935"
              className="flex items-center justify-center lg:justify-start gap-2 hover:text-yellow-500"
            >
              <FaPhone className="text-xl" />
              9024450935
            </a>

            <a
              href="mailto:laitgattani139@gmail.com"
              className="flex items-center justify-center lg:justify-start gap-2 hover:text-yellow-500"
            >
              <CiMail className="text-xl" />
              laitgattani139@gmail.com
            </a>
          </div>
        </div>
        <div className="w-full sm:w-2/3 lg:w-auto">
          <h2 className="text-3xl uppercase font-bold tracking-wide mb-2">
            Follow Us
          </h2>
          <p className="text-lg">Follow us on social media</p>
          <div className="flex justify-center lg:justify-start gap-6 items-center mt-5 text-3xl">
            <a
              href="https://www.instagram.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors border p-2 hover:bg-white"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors border p-2 hover:bg-white"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://www.github.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-black transition-colors border p-2 hover:bg-white"
            >
              <IoLogoGithub />
            </a>
          </div>
        </div>

        <div className="w-full sm:w-2/3 lg:w-auto">
          <h2 className="text-3xl uppercase font-bold tracking-wide mb-4">
            Open Hours
          </h2>
          <div className="text-lg space-y-4">
            <div>
              <p className="font-semibold">Monday - Friday</p>
              <p>8:00 AM – 8:00 PM</p>
            </div>
            <div>
              <p className="font-semibold">Saturday - Sunday</p>
              <p>2:00 PM – 8:00 PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="relative z-10 border-t border-yellow-900 mt-5 px-4">
        <p className="mt-5 text-center text-white text-sm sm:text-base pb-5">
          Copyright © <span className="text-yellow-300">Koppee</span>. All
          Rights Reserved.
        </p>
      </div>
    </div>
  );
}

export default Footer;
