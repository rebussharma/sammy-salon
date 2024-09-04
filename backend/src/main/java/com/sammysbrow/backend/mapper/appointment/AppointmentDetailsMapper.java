package com.sammysbrow.backend.mapper.appointment;

import com.sammysbrow.backend.dto.appointment.AppointmentDetailsDateTimeDto;
import com.sammysbrow.backend.dto.appointment.AppointmentDetailsDto;
import com.sammysbrow.backend.entity.appointment.AppointmentDetails;
import com.sammysbrow.backend.entity.appointment.ConfirmationCodeSequence;
import com.sammysbrow.backend.service.appointment.projection.AppointmentDetailsDateTimeService;

public class AppointmentDetailsMapper {
    public static AppointmentDetailsDto mapToAppointmentDetailsDto (AppointmentDetails appointmentDetails){
        return new AppointmentDetailsDto(
                appointmentDetails.getId(),
                appointmentDetails.getData_insertion_date(),
                appointmentDetails.getConfirmationCode().getId(),
                appointmentDetails.getAppointmentDateTime(),
                appointmentDetails.getServiceType(),
                appointmentDetails.getArtist(),
                appointmentDetails.getClientName(),
                appointmentDetails.getClientEmail(),
                appointmentDetails.getClientPhone(),
                appointmentDetails.getAppointmentNotes(),
                appointmentDetails.getAppointmentStatus()
        );
    }

    public static AppointmentDetails mapToAppointmentDetails (AppointmentDetailsDto appointmentDetailsDto){
        return new AppointmentDetails(
                appointmentDetailsDto.getId(),
                appointmentDetailsDto.getData_insertion_date(),
                new ConfirmationCodeSequence(appointmentDetailsDto.getConfirmationCode()),
                appointmentDetailsDto.getAppointmentDateTime(),
                appointmentDetailsDto.getServiceType(),
                appointmentDetailsDto.getArtist(),
                appointmentDetailsDto.getClientName(),
                appointmentDetailsDto.getClientEmail(),
                appointmentDetailsDto.getClientPhone(),
                appointmentDetailsDto.getAppointmentNotes(),
                appointmentDetailsDto.getAppointmentStatus()
        );
    }

    public static AppointmentDetailsDateTimeDto mapToAppointmentDetailsDateTimeDto (AppointmentDetails appointmentDetailsDateTimeService){
        return new AppointmentDetailsDateTimeDto(
                appointmentDetailsDateTimeService.getAppointmentDateTime()
        );
    }
}
