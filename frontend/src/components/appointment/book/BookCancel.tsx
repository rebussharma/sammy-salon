import { Button } from "@mui/material"
import { useContext, useState } from "react"
import "../../../css/appointment/book/BookCancel.css"
import { PopUpContext } from '../PopUp'
import Book from "./Book"
import Cancel from "./cancel/Cancel"


const BookCancel = () => {
  const [bookingState, setBookingState] = useState<Number>(0)
  const {popUp, setPopUp} = useContext(PopUpContext)

  const handleBook = () => {
    setBookingState(1)
  } 

  const handleCancel = () => {
    setBookingState(-1)
  }
  return (
    bookingState === 1 ?
    (
      <Book setGoback={setBookingState}></Book>
    )
    :
    (
      bookingState === -1 ?
      (
        <Cancel setGoback={setBookingState}></Cancel>
      )
      :
      (
        <div className="main-book">
            <div className="main-book-container">
                <div className="book-appt">
                    <Button onClick={handleBook}> Book Appointment</Button>
                </div>
                <div className="cancel-appt">
                    <Button onClick={handleCancel}> Cancel Appointment </Button>
                </div>
            </div>
            <div className="go-back">
              <Button className="go-back-btn" onClick={() => setPopUp(false)}> Go Back </Button>
            </div>
        </div>
      )
    )

  )
}

export default BookCancel