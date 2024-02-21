import { Button } from "@mui/material";
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { Link } from 'react-scroll';
import '../../css/home/Home.css';
import NavBar from "./navbar/NavBar";

const Home: React.FC = () => {
  return (
    <div className="home" id="home">
      <NavBar></NavBar>
      <div className="text">
        <h1>You're Beautiful. Be Beautifuller</h1>
      </div>

      <div className="menu">
        <BrowserRouter>
          <Button 
            sx={{
              ':hover': {
              bgcolor: '#e7b791c4',
              },
          }} 
            variant="outlined" 
            id="home-services">
            <Link to="services" smooth={true}>Our Service Menu</Link>
          </Button>
        </BrowserRouter>
        <Button sx={{
              ':hover': {
              bgcolor: '#e7b791c4',
              },
          }} 
          href='tel:832-935-0587' variant="outlined" id="home-phone">Give Us a Call
        </Button >
      </div>

    </div>
  )
}

export default Home