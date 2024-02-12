import React from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Home from './components/Home';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/contact/Contact';


const App: React.FC = () => {
  return (
    <div className="App">
      <Home></Home>  
      <Services></Services>
      <About></About> 
      <Contact></Contact>
      <Testimonials></Testimonials>
      <Footer></Footer>
     </div>
  
  );
}

export default App;
