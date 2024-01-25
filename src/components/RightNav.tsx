import { useState } from "react";
import { NavLink } from "react-router-dom";
import { ReactComponent as Hamburger } from '../assets/hamburger.svg';
import logo from '../assets/logo.png';
import '../css/RightNav.css';

const RightNav = () => {
  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  return (
    <nav className="rightnav">
      <div className="container">
        <div className="logo">
          <img  className = "logo_img" src={logo} alt="fireSpot"/>
        </div>
        <div className="menu-icon" onClick={handleShowNavbar}>
          <Hamburger />
        </div>
        <div className={`nav-elements  ${showNavbar && 'active'}`}>
          <ul>
            <li>
              <NavLink to="/">Home</NavLink>
            </li>
            <li>
              <NavLink to="/services">Services</NavLink>
            </li>
            <li>
              <NavLink to="/about">Our Story</NavLink>
            </li>
            <li>
              <NavLink to="/contact">Contact</NavLink>
            </li>
            <li>
              <NavLink to="/book">Book</NavLink>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
    
  )
}

export default RightNav

