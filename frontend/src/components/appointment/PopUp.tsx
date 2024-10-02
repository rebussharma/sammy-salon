import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import CloseIcon from '@mui/icons-material/Close';
import { Box, Button, Fade, IconButton, Modal } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useCallback, useState } from 'react';
import BookCancel from './book/BookCancel';

type PopUpBox = {
  popUp: boolean;
  setPopUp: (newType: boolean) => void;
  pushView: (newComponent: React.ReactNode) => void;
};

type ViewState = {
  component: React.ReactNode;
  canGoBack: boolean;
};

const defaultState: PopUpBox = {
  popUp: false,
  setPopUp: () => {},
  pushView: () => {},
};

export const PopUpContext = React.createContext(defaultState);

const StyledModal = styled(Modal)(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const ModalContent = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 8px 32px 0 rgba(31, 38, 135, 0.37)',
  backdropFilter: 'blur(8px)',
  borderRadius: theme.shape.borderRadius,
  padding: '10px',
  outline: 'none',
  position: 'relative',
  maxWidth: '60vw',
  height: '85vh',
  maxHeight: '90vh',
  overflow: 'auto',
  border: '1px solid rgba(255, 255, 255, 0.18)',
  transform: 'translateY(20px)',
  transition: 'transform 0.3s ease-out',
  '&.MuiBox-root': {
    transform: 'translateY(0)',
  },
}));

const CloseButton = styled(IconButton)(({ theme }) => ({
  position: 'absolute',
  right: theme.spacing(1),
  top: theme.spacing(1),
  color: theme.palette.grey[500],
}));

const BackButton = styled(Button)(({ theme }) => ({
  position: 'absolute',
  left: theme.spacing(1),
  top: theme.spacing(1),
  color: theme.palette.primary.main,
}));

const PopUp: React.FC<Omit<PopUpBox, 'pushView'>> = ({ popUp, setPopUp }: Omit<PopUpBox, 'pushView'>) => {
  const [open, setOpen] = useState(popUp);
  const [viewStack, setViewStack] = useState<ViewState[]>([
    { component: <BookCancel />, canGoBack: false }
  ]);

  const handleClose = useCallback(() => {
    setOpen(false);
    setPopUp(false);
    setViewStack([{ component: <BookCancel />, canGoBack: false }]);
  }, [setPopUp]);

  const handleBack = useCallback(() => {
    setViewStack((prevStack) => prevStack.slice(0, -1));
  }, []);

  const pushView = useCallback((newComponent: React.ReactNode) => {
    setViewStack((prevStack) => [
      ...prevStack,
      { component: newComponent, canGoBack: true }
    ]);
  }, []);

  const currentView = viewStack[viewStack.length - 1];

  const contextValue: PopUpBox = {
    popUp,
    setPopUp: handleClose,
    pushView
  };

  return (
    <PopUpContext.Provider value={contextValue}>
      <StyledModal
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropProps={{
          timeout: 500,
          style: {
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            backdropFilter: 'blur(3px)',
          },
        }}
      >
        <Fade in={open}>
          <ModalContent>
            {currentView.canGoBack && (
              <BackButton 
                onClick={handleBack} 
                startIcon={<ArrowBackIcon />}
              >
                Back
              </BackButton>
            )}
            <CloseButton onClick={handleClose} aria-label="close">
              <CloseIcon />
            </CloseButton>
            {currentView.component}
          </ModalContent>
        </Fade>
      </StyledModal>
    </PopUpContext.Provider>
  );
};

export default PopUp;