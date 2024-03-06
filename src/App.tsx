import React from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/footer/Footer';
import Contact from './components/footer/contact/Contact';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';


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
