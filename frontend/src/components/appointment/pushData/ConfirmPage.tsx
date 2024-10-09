import { Box, Button, Container, Paper, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from "@mui/material";

import { styled } from "@mui/material/styles";
import axios from "axios";
import dayjs from 'dayjs';
import advancedFormat from 'dayjs/plugin/advancedFormat'; // Import advancedFormat plugin for day suffixes
import React from "react";
import { Fade } from 'react-awesome-reveal';
import '../../../css/appointment/pushData/ConfirmPage.css';
dayjs.extend(advancedFormat);


const StyledPaper = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  marginTop: theme.spacing(8),
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'center',
}));

const ConfirmButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#bbde86',
  color: '#827676',
  border: '1px solid',
  '&:hover': {
    backgroundColor: '#324d12',
    fontWeight: 'bold',
    color: 'wheat',
  },
}));

const EditButton = styled(Button)(({ theme }) => ({
  backgroundColor: '#dcdcbb',
  color: '#827676',
  border: '1px solid',
  '&:hover': {
    backgroundColor: '#444433',
    fontWeight: 'bold',
    color: 'white',
  },
}));

const DetailTitle = styled(Typography)(({ theme }) => ({
  fontWeight: 'bold',
  color: theme.palette.primary.main,
}));

const DetailContent = styled(Typography)(({ theme }) => ({
  marginLeft: theme.spacing(2),
  color: theme.palette.text.secondary,
}));

interface Props {
  setAppointmentId(id: number): void;
  setConfirmationStatus(value: boolean): void;
  setEditStatus(value: boolean): void;
  postDataConfirm: any;
  setDataConfirm(data: any): void;
}

const ConfirmPage: React.FC<Props> = ({
  setAppointmentId,
  setConfirmationStatus,
  setEditStatus,
  postDataConfirm,
  setDataConfirm,
}) => {

  const handleConfirmation = () => {
    setConfirmationStatus(true);
    postDataConfirm.appointmentStatus = "confirmed";

    axios.post('http://localhost:8080/api/appointments', postDataConfirm)
      .then((response) => {
        console.log("Appointment Confirmed", response);
        setAppointmentId(response.data.id);
        setDataConfirm(response.data);
      })
      .catch((error) => {
        console.error("Error Booking Appointment", error);
        setAppointmentId(-1);
      });
  };

  const formatDateTime = (isoString:string) => {
    // Use dayjs to format the ISO string with the desired format
    return dayjs(isoString).format('dddd, Do MMM [at] h:mm A');
  };

  const details = [
    { title: 'Date & Time:', value: formatDateTime(postDataConfirm?.appointmentDateTime) },
    { title: 'Service Requested:', value: postDataConfirm.serviceType },
    { title: 'Artist:', value: postDataConfirm.artist },
    { title: 'Your Phone:', value: postDataConfirm.clientPhone },
    { title: 'Your Email:', value: postDataConfirm.clientEmail },
    { title: 'Message to Artist:', value: postDataConfirm.appointmentNotes || "No message provided" }
  ];
  
  
  
  return (
    <Container maxWidth="md" className="confirm-page">
      <Fade duration={700} direction="right">
        <StyledPaper elevation={3}>
          <Typography variant="h5" gutterBottom color="primary">
            {postDataConfirm.clientName}
          </Typography>
     <TableContainer component={Paper} className="confirm-details-container">
      <Box className="confirm-header">
        <Typography variant="h6" className="header-text">
          Please Confirm Your Appointment Details
        </Typography>
      </Box>
      <Table className="confirm-table">
        <TableBody>
          {details.map((detail, index) => (
            <TableRow
              key={index}
              className={`confirm-row ${index % 2 === 0 ? 'confirm-row-light' : 'confirm-row-dark'}`}
            >
              <TableCell className="confirm-cell-title">
                <Typography variant="subtitle1" className="title-text">
                  {detail.title}
                </Typography>
              </TableCell>
              <TableCell id="confirm-cell-content">
                <Typography variant="body1" className="content-text">
                  {detail.value}
                </Typography>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
          <Box mt={3} className="confirm-edit-btn">
            <ConfirmButton onClick={handleConfirmation} variant="contained" fullWidth>
              Confirm Appointment
            </ConfirmButton>
            <Box mt={2}>
              <EditButton onClick={() => setEditStatus(true)} variant="contained" fullWidth>
                Make Changes
              </EditButton>
            </Box>
          </Box>
        </StyledPaper>
      </Fade>
    </Container>
  );
};

export default ConfirmPage;