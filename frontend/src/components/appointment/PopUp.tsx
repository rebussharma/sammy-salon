import Modal from '@mui/material/Modal';
import React from 'react';
import '../../css/appointment/PopUp.css';
import MainBook from './book/MainBook';

type PopUpBox = {
  popUp: boolean,
  setPopUp: (newType: boolean) => void
}

const defaultState:PopUpBox = {
  popUp:false,
  setPopUp:(newVal?:boolean) => {}
}
export const PopUpContext = React.createContext(defaultState);


const PopUp:React.FC<PopUpBox> = ({
  popUp, setPopUp
}:PopUpBox) => {
  const [open, setOpen] = React.useState(popUp);  
  const handleClose = () => {
    setOpen(false);
    setPopUp(false);
  }
  
  return (
    <div className='popUp' id="popUp">
      <PopUpContext.Provider value={{popUp:popUp, setPopUp:handleClose}}>
        <Modal
          open={open}
          onClose={handleClose}
          aria-labelledby="modal-modal-title"
          aria-describedby="modal-modal-description"
          style={{ backdropFilter: "blur(5px)" }}      
        >
          <>
            <button className="close-modal-btn" onClick={handleClose}> X </button>
            <MainBook></MainBook>
          </>
        </Modal>
      </PopUpContext.Provider>
    </div>
  );
}

export default PopUp