import React from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/footer/Footer';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';
import './css/appointment/animations.css'; // Add this line



const App: React.FC = () => {
  return (
    <div className="App">
      <Home></Home>  
      <Services></Services>
      <About></About>  
      <Testimonials></Testimonials>
      <Footer></Footer>
     </div>
  
  );
}

export default App;
