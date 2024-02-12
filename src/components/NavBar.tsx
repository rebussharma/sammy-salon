import { BrowserRouter as Router } from 'react-router-dom';
import '../css/NavBar.css';
import NavElements from './NavElements';

const NavBar:React.FC = () => {
  return (
    <div className='navbar' id='navbar'>
      <Router>
        <NavElements />
      </Router>
    </div>
  )
}

export default NavBar