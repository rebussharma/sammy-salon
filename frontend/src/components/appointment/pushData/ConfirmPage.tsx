

import { Box, Button, Container, Grid, Paper, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import axios from "axios";
import React from "react";
import { Fade } from 'react-awesome-reveal';
import '../../../css/appointment/pushData/ConfirmPage.css';

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

  const apptDateTime = new Date(postDataConfirm.appointmentDateTime);

  return (
    <Container maxWidth="md" className="confirm-page">
      <Fade duration={700} direction="right">
        <StyledPaper elevation={3}>
          <Typography variant="h4" gutterBottom color="primary">
            Hi, {postDataConfirm.clientName}
          </Typography>
          <Typography variant="h5" gutterBottom color="secondary">
            Please Confirm Your Appointment
          </Typography>
          <Grid container spacing={2} className="confirm-details">
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <DetailTitle variant="subtitle1">
                  Your Appointment is set for:
                </DetailTitle>
                <DetailContent variant="body1">
                  {apptDateTime.toDateString()} at {apptDateTime.toLocaleString([], {
                    hour: '2-digit',
                    minute: '2-digit'
                  })}
                </DetailContent>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <DetailTitle variant="subtitle1">
                  Service Requested:
                </DetailTitle>
                <DetailContent variant="body1">
                  {postDataConfirm.serviceType}
                </DetailContent>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <DetailTitle variant="subtitle1">
                  Artist Requested:
                </DetailTitle>
                <DetailContent variant="body1">
                  {postDataConfirm.artist}
                </DetailContent>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <DetailTitle variant="subtitle1">
                  Your Phone:
                </DetailTitle>
                <DetailContent variant="body1">
                  {postDataConfirm.clientPhone}
                </DetailContent>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" alignItems="center">
                <DetailTitle variant="subtitle1">
                  Your Email:
                </DetailTitle>
                <DetailContent variant="body1">
                  {postDataConfirm.clientEmail}
                </DetailContent>
              </Box>
            </Grid>
            <Grid item xs={12}>
              <Box display="flex" flexDirection="column">
                <DetailTitle variant="subtitle1">
                  Message to Artist:
                </DetailTitle>
                <DetailContent variant="body1">
                  {postDataConfirm.appointmentNotes}
                </DetailContent>
              </Box>
            </Grid>
          </Grid>
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