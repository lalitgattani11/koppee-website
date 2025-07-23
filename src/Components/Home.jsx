import React from 'react'
import Navbar from './Navbar'
import About from './About';
import CarouselOnly from './CarouselOnly';
import Service from './Service';
import Offer from './Offer';
import Menu from './Menu';
import BookTable from './BookTable';
import Testimonials from './Testimonials';
import Footer from './Footer';

function Home() {
  return (
    <div>
        <Navbar/>
        <CarouselOnly/>
        <About/>
        <Service/>
        <Offer/>
        <Menu/>
        <BookTable/>
        <Testimonials/>
        <Footer/>
    </div>
  )
}

export default Home;
