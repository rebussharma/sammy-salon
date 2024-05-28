import Modal from '@mui/material/Modal';
import React from 'react';
import '../../css/appointment/PopUp.css';
import Book from './Book';

type PopUpBox = {
  popUp: boolean,
  setPopUp: (newType: boolean) => void
}

const defaultState:PopUpBox = {
  popUp:false,
  setPopUp:(newVal?:boolean) => {}
}
export const PopUpContext = React.createContext(defaultState);


// const style = {
//   position: 'absolute' as 'absolute',
//   top: '50%',
//   left: '40%',
//   height: '90vh',
//   transform: 'translate(-50%, -50%)',
//   width: '500px',
//   bgcolor: 'background.paper',
//   border: '2px solid #fff',
//   boxShadow: 24,
//   p: 4,
// };

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
            <Book></Book>
          </>
        </Modal>
      </PopUpContext.Provider>
    </div>
  );
}

export default PopUp