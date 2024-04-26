import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useState } from "react";
import { Link } from 'react-scroll';
import '../../../css/home/navbar/NavElements.css';
import Header from "../Header";

import PopUp from '../../appointment/PopUp';

const NavElements: React.FC = () => {
  const [colorChange, setColorchange] = useState(false);
  const [bookPopUp, setBookPopUp] = useState(false)

  const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
          setColorchange(true);
      } else {
          setColorchange(false);
      }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const [showNavbar, setShowNavbar] = useState(false)

  const handleShowNavbar = () => {
    setShowNavbar(!showNavbar)
  }

  const handleBooking = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setBookPopUp(true); 
  }


////


////
  return (
    <nav className={colorChange ? "navElements scroll":"navElements"} id='navElements'>
      <Header></Header>
      <div className="container">
          <div className="hamburger-icon" onClick={handleShowNavbar}>
            <FontAwesomeIcon icon={faBars} style={{color: "#ffffff"}} />
          </div>
        <div className= {`menu-items  ${showNavbar && 'active'}`}>
          <ul>
            <li className='nav-items'>
              <Link to="services" spy={true} smooth={true} offset={-100} duration={500} onClick={handleShowNavbar}>Services</Link>
            </li>
            <li className='nav-items'>
              <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={handleShowNavbar}>Our Story</Link>
            </li>
            <li className='nav-items'>
              <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500} onClick={handleShowNavbar}>Testimonials</Link>
            </li>
            <li className='nav-items'>
              <Link to="contact" spy={true} smooth={true} offset={0} duration={500} onClick={handleShowNavbar}>Contact</Link>
            </li>
            <li className='nav-items'>
              {
                bookPopUp ? (
                  <PopUp popUp={bookPopUp} setPopUp={setBookPopUp}/>

                ):(
                  <button className='book-button' onClick={handleBooking}>Book</button>
                )
              }

            </li>
          </ul>
        </div>
      </div>
      
    </nav>
    
  )
}

export default NavElements

