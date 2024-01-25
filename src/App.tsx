import React from 'react';
import './App.css';
import Header from './components/Header';
import NavBar from './components/NavBar';


const App: React.FC = () => {
  return (
    <div className="App">
      <Header></Header>
      <NavBar></NavBar>
    </div>
    
  );
}

export default App;
