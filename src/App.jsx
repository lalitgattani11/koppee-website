import './index.css';
import Home from './Components/Home'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import AboutPage from './Components/Pages/AboutPage';
import Navbar from './Components/Navbar';
import ServicePage from './Components/Pages/ServicePage';
import MenuPage from './Components/Pages/MenuPage';
import Reservation from './Components/Pages/Reservation';
import TestimonialPage from './Components/Pages/TestimonialPage';
import ContactPage from './Components/Pages/ContactPage';

function App() {

  return (
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path='/about' element = {<AboutPage/>} />
        <Route path='/services' element = {<ServicePage/>} />
        <Route path='/menu' element = {<MenuPage/>} />
        <Route path='/reservation' element = {<Reservation/>} />
        <Route path='/testimonial' element = {<TestimonialPage/>} />
        <Route path='/contact' element = {<ContactPage/>} />
      </Routes>
    </Router>
  )
}

export default App;
