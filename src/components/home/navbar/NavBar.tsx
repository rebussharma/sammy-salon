import { Route, BrowserRouter as Router, Routes } from 'react-router-dom';
import '../../../css/home/navbar/NavBar.css';
import Blog from '../Blog';
import NavElements from './NavElements';

const NavBar:React.FC = () => {
  return (
    <div className='navbar' id='navbar'>
      <Router>
        <NavElements />
        <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
      </Router>
    </div>
  )
}

export default NavBar