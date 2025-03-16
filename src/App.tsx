import React from 'react';
import { Route, Routes } from 'react-router';
import { BrowserRouter as Router } from 'react-router-dom';

import './App.css';
import About from './components/About';
import Footer from './components/footer/Footer';
import Blog from './components/home/Blog';
import Home from './components/home/Home';
import Services from './components/services/Services';
import Testimonials from './components/testimonials/Testimonials';

const App: React.FC = () => {
  return (
    <div className="App">
      <Router>
      <Routes>
        <Route path="/blog" element={<Blog />} />
      </Routes>
      </Router>
      <Home></Home>  
      <Services></Services>
      <About></About>  
      <Testimonials></Testimonials>
      <Footer></Footer>
     </div>
  
  );
}

export default App;
