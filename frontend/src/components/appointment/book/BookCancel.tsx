
import { Box, Button, Container, Paper, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import React, { useContext } from 'react';
import '../../../css/appointment/book/BookCancel.css';
import { PopUpContext } from '../PopUp';
import Book from './Book';
import Cancel from './cancel/Cancel';

const StyledButton = styled(Button)(({ theme }) => ({
  color:"white",
  fontWeight:"bold", 
  border:"2px solid white",
  margin: theme.spacing(1),
  borderRadius: '25px',
  padding: '10px 20px',
  boxShadow: '0 4px 6px rgba(50, 50, 93, 0.11), 0 1px 3px rgba(0, 0, 0, 0.08)',
  transition: 'all 0.15s ease',
  '&:hover': {
    transform: 'translateY(-1px)',
    boxShadow: '0 7px 14px rgba(50, 50, 93, 0.1), 0 3px 6px rgba(0, 0, 0, 0.08)',
    backgroundColor: "grey"
  },
}));

const ContentPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
  gap: theme.spacing(3),
  backgroundColor: 'transparent',
  boxShadow: 'none',
}));
// ... (StyledButton and ContentPaper styled components remain the same)

const BookCancel: React.FC = () => {
  const { pushView } = useContext(PopUpContext);

  const handleBook = () => pushView(<Book />);
  const handleCancel = () => pushView(<Cancel />);

  return (
    <Container maxWidth="sm" className="book-cancel-container" id="book-cancel-container">
      <ContentPaper>
        <Typography variant="h4" gutterBottom sx={{ fontWeight: 'bold', color: '#333' }}>
          Appointment Management
        </Typography>
        <Box sx={{ display: 'flex', flexDirection: 'column', width: '100%', gap: 2 }}>
          <StyledButton variant="contained" color="primary" onClick={handleBook}>
            Book Appointment
          </StyledButton>
          <StyledButton variant="contained" color="secondary" onClick={handleCancel}>
            Cancel Appointment
          </StyledButton>
        </Box>
      </ContentPaper>
    </Container>
  );
};

export default BookCancel;