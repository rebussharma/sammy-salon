import { Button } from "@mui/material";
import React from "react";
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
        <Button 
          className="home-book-btn" 
          sx={{
            ':hover': {
                bgcolor: '#e7b791c4',
              },
          }}  
            href="https://book.sammysbrow.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book With Us
        </Button>

            
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