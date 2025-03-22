import { faBars } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useRef, useState } from "react";
import { Link } from 'react-scroll';
import '../../../css/home/navbar/NavElements.css';
import Header from "../Header";

const NavElements: React.FC = () => {
  const [colorChange, setColorchange] = useState(false);
  const openHamburgerRef = useRef<HTMLDivElement>(null)
  const [openHamburger, setOpenHanburger] = useState(false)

  const closeOpenMenus = (e: MouseEvent):any=>{
    if(openHamburger && !openHamburgerRef.current?.contains(e.target as Node)){
      setOpenHanburger(false)
    }
  }

  const changeNavbarColor = () => {
      if (window.scrollY >= 80) {
          setColorchange(true);
      } else {
          setColorchange(false);
      }
  };
  window.addEventListener("scroll", changeNavbarColor);

  const handleHamburger = () => {
    setOpenHanburger(!openHamburger)
  }

  const handleBooking = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    e.preventDefault();
    setOpenHanburger(!openHamburger)
  }

  document.addEventListener("mousedown", closeOpenMenus)

  return (
    <nav className={colorChange ? "navElements scroll":"navElements"} id='navElements'>
      <Header></Header>
      <div className="container"  ref={openHamburgerRef}>
          <div className="hamburger-icon" onClick={handleHamburger}>
            <FontAwesomeIcon icon={faBars} style={{color: "#ffffff"}} />
          </div>
        <div className= {`menu-items  ${openHamburger && 'active'}`}>
          <ul>
            <li className='nav-items'>
              <Link to="services" spy={true} smooth={true} offset={-100} duration={500} onClick={handleHamburger}>Services</Link>
            </li>
            <li className='nav-items'>
              <Link to="about" spy={true} smooth={true} offset={-100} duration={500} onClick={handleHamburger}>Our Team</Link>
            </li>
            <li className='nav-items'>
              <Link to="testimonials" spy={true} smooth={true} offset={-100} duration={500} onClick={handleHamburger}>Testimonials</Link>
            </li>
            <li className='nav-items'>
              <Link to="contact" spy={true} smooth={true} offset={0} duration={500} onClick={handleHamburger}>Contact</Link>
            </li>
            <li className='nav-items'>
              <a className='book-button' 
              href="https://book.sammysbrow.com"
              target="_blank"
              rel="noopener noreferrer"
              >Book</a>
            </li>
          </ul>
        </div>
      </div>
      
    </nav>
    
  )
}

export default NavElements

