import React from "react";

function About() {
  return (
    <div id="about" className="bg-[#FFFBF2] w-full py-16 px-4 sm:px-8 md:px-16">
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
        <p className="text-yellow-300 font-semibold font-sans text-3xl sm:text-4xl mb-3 uppercase">
          About Us
        </p>
      </div>

      <h2 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-12">
        Serving Since 1950
      </h2>

      <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
        {/* Our Story */}
        <div className="w-full md:w-1/2">
          <h1 className="font-bold text-3xl sm:text-4xl mb-4">Our Story</h1>
          <h2 className="font-semibold text-xl mb-4">
            From Beans to Brew, Born of Passion
          </h2>
          <p className="text-base sm:text-lg mb-6 text-gray-800">
            Our story began with a simple love for good coffee and a dream to
            bring people together over a perfect cup. What started as
            home-roasted beans in a tiny kitchen turned into a journey of
            sourcing ethically, roasting locally, and brewing passionately.
            Today, our coffee is more than just a drink — it's a story in every
            cup.
          </p>
          <button className="bg-gray-900 hover:bg-black text-white font-semibold px-5 py-2 rounded-md">
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="w-full md:w-1/3">
          <img
            className="w-full h-auto object-cover rounded-xl"
            src="/images/about.png"
            alt="About"
          />
        </div>

        {/* Our Vision */}
        <div className="w-full md:w-1/2">
          <h1 className="font-bold text-3xl sm:text-4xl mb-4">Our Vision</h1>
          <h2 className="font-semibold text-xl mb-4">
            Crafting Connection Through Every Cup
          </h2>
          <p className="text-base sm:text-lg mb-6 text-gray-800">
            We envision a world where coffee is more than a morning ritual —
            it's a reason to pause, to connect, and to feel grounded. Our
            mission is to become a symbol of quality, sustainability, and
            soulful living, inspiring communities through every cup we serve.
          </p>
          <button className="bg-yellow-300 hover:bg-yellow-500 px-5 py-2 font-semibold rounded-md">
            Learn More
          </button>
        </div>
      </div>
    </div>
  );
}

export default About;
