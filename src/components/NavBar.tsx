import { Route, BrowserRouter as Router, Routes } from 'react-router-dom'
import About from './About'
import Book from './Book'
import Contact from './Contact'
import Home from './Home'
import RightNav from './RightNav'
import Services from './Services'

const NavBar = () => {
  return (
    <Router>
      <RightNav />
      <Routes>
        <Route path="/" element = {<Home />} />
        <Route path="/services" element = {<Services />} />
        <Route path="/about" element = {<About />} />
        <Route path="/contact" element = {<Contact />} />
        <Route path="/book" element = {<Book />} />

      </Routes>
    </Router>
  )
}

export default NavBar