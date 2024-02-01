import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
// import { NavHashLink as Link } from 'react-router-hash-link';
import { Link } from 'react-scroll';
import '../css/NavElements.css';
import Header from "./Header";



const NavElements: React.FC = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleBooking = () => {
    alert("Sorry we're still wokring on that")
  }
  return (
    <nav className="navElements">
      <Header></Header>
      <div className="container">
          <div className="hamburger-icon" onClick={handleShowNavbar}>
            <FontAwesomeIcon icon={faBars} style={{color: "#ffffff",}} />
          </div>
        <div className= {`menu-items  ${showNavbar && 'active'}`}>
          <ul>
            <li className='nav-items'>
              <Link to="services" spy={true} smooth={true} offset={0} duration={500}>Services</Link>
            </li>
            <li className='nav-items'>
              <Link to="about" spy={true} smooth={true} offset={0} duration={500}>Our Story</Link>
            </li>
            <li className='nav-items'>
              <Link to="contact" spy={true} smooth={true} offset={0} duration={500}>Contact</Link>
            </li>
            <li className='nav-items'>
              <Link to="testimonials" spy={true} smooth={true} offset={0} duration={500}>Testimonials</Link>
            </li>
            <li>
              <a href='/' onClick={handleBooking}>Book</a>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
    
  )
}

export default NavElements

