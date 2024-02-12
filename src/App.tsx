import React from 'react';
import './App.css';
import About from './components/About';
import Testimonials from './components/Testimonials';
import Footer from './components/footer/Footer';
import Contact from './components/footer/contact/Contact';
import Home from './components/home/Home';
import Services from './components/services/Services';


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
