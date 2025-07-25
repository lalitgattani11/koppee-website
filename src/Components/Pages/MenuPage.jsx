import React from 'react'
import Menu from '../Menu'
import Footer from '../Footer'

function MenuPage() {
  return (
     <div className="bg-[#FFFBF2] w-full">
      {/* Hero Section */}
      <div className="relative bg-[url('/images/bg.jpg')] bg-cover bg-center text-white h-96 pt-10">
        {/* Overlay */}
        <div className="absolute inset-0 bg-[#2b1e1e] bg-opacity-80"></div>

        {/* Centered Heading */}
        <div className="relative z-10 flex flex-col items-center justify-center h-full">
          <h2 className="uppercase font-bold font-sans text-5xl text-center">
            Menu
          </h2>
          <br />
          <p>Home / Menu</p>
        </div>
      </div>

      <Menu/>
      <Footer/>
    </div>
  )
}

export default MenuPage;