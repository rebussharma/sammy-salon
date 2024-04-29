import { Button } from "@mui/material";
import React, { useState } from "react";
import '../../css/home/Home.css';
import PopUp from "../appointment/PopUp";
import NavBar from "./navbar/NavBar";

const Home: React.FC = () => {
  const [bookPopUpHome, setBookPopUpHome] = useState(false)

  const handleBooking = () =>{
    setBookPopUpHome(true);
  }
  return (
    <div className="home" id="home">
      <NavBar></NavBar>
      <div className="text">
        <h1>You're Beautiful. Be Beautifuller</h1>
      </div>

      <div className="menu">
        {
          bookPopUpHome ? (
            <PopUp popUp={bookPopUpHome} setPopUp={setBookPopUpHome} />
          ):(
            <Button 
              className="home-book-btn" 
              sx={{
                ':hover': {
                    bgcolor: '#e7b791c4',
                  },
              }}  
              onClick={handleBooking}>
                Book With Us
            </Button>

            )
        }
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