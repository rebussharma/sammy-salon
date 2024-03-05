import React from 'react';
import './App.css';
import Footer from './components/footer/Footer';
import Testimonials from './components/testimonials/Testimonials';


const App: React.FC = () => {
  return (
    <div className="App">
      {/* <Home></Home>  
      <Services></Services>
      <About></About>  */}
      {/* <Contact></Contact> */}
      <Testimonials></Testimonials>
      <Footer></Footer>
     </div>
  
  );
}

export default App;
