import React from 'react';
import './App.css';
import About from './components/About';
import Contact from './components/Contact';
import Header from './components/Header';
import Home from './components/Home';
import NavBar from './components/NavBar';
import Services from './components/Services';

const App: React.FC = () => {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
      <Services></Services>
      <Contact></Contact>
      <Home></Home>
      <About></About>
    </div>
    
  );
}

export default App;
