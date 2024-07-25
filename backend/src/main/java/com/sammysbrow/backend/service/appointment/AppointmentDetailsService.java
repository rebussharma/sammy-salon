package com.sammysbrow.backend.service.appointment;

import com.sammysbrow.backend.dto.appointment.AppointmentDetailsDateTimeDto;
import com.sammysbrow.backend.dto.appointment.AppointmentDetailsDto;
import com.sammysbrow.backend.entity.appointment.ConfirmationCodeSequence;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.List;


public interface AppointmentDetailsService {
    AppointmentDetailsDto addAppointment(AppointmentDetailsDto appointmentDetailsDto);
    AppointmentDetailsDto updateAppointment(Long appointmentId, AppointmentDetailsDto updatedAppointmentDetailsDto);

    //    AppointmentDetailsDto updateAppointment(AppointmentDetailsDto appointmentDetailsDto);
//    AppointmentDetailsDto deleteAppointment(AppointmentDetailsDto appointmentDetailsDto);
    List<AppointmentDetailsDto> getAllAppointmentDetails();

    AppointmentDetailsDto getAppointmentById(Long id);
    AppointmentDetailsDto getAppointmentByConfirmationCode(ConfirmationCodeSequence code);


//    List<AppointmentDetailsDto> getAppointmentsByUserId(int userId);
}
