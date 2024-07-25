import { Button } from "@mui/material"
import { useState } from "react"
import "../../../css/appointment/book/MainBook.css"
import Book from "./Book"
import CancelPage from "./cancel/CancelMailer"

const MainBook = () => {
  const [bookingState, setBookingState] = useState<Number>(0)

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
        <CancelPage cancelStatus={0} appointmentId={undefined} confirmedData={undefined}></CancelPage>
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
        </div>
      )
    )

  )
}

export default MainBook