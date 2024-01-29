import { useState } from "react";
import { NavHashLink as Link } from 'react-router-hash-link';
import { ReactComponent as Hamburger } from '../assets/hamburger.svg';
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
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`menu-items  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <Link smooth to="#services">Services</Link>
            </li>
            <li>
              <Link smooth to="#about">Our Story</Link>
            </li>
            <li>
              <Link smooth to="#contact">Contact</Link>
            </li>
            <li>
              <Link smooth to="#testimonials">Testimonials</Link>
            </li>
            <li>
              <Link to="" onClick={handleBooking}>Book</Link>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
    
  )
}

export default NavElements

