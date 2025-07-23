import React from 'react'

function Offer() {
  return (
    <div className="relative bg-[url('/images/bg.jpg')] bg-cover bg-center h-96 w-full">
  {/* Dark overlay */}
  <div className="absolute inset-0 bg-black bg-opacity-50"></div>

  {/* Content */}
  <div className="relative z-10 flex flex-col items-center justify-center h-full text-center px-4">
    <h1 className="text-yellow-300 text-5xl sm:text-7xl md:text-8xl font-bold">50% OFF</h1>
    <h2 className="text-white text-3xl sm:text-4xl md:text-5xl font-black mt-4">Sunday Special Offer</h2><br />
    <p className="text-white text-xl sm:text-2xl md:text-3xl font-semibold mt-2">
      Only for Sunday from 1st Aug to 30th Sep 2025
    </p>
  </div>
</div>

  )
}

export default Offer;