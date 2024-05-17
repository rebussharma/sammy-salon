package com.sammysbrow.backend.service.appointment.impl;

import com.sammysbrow.backend.dto.EmployeeDto;
import com.sammysbrow.backend.dto.appointment.AppointmentDetailsDateTimeDto;
import com.sammysbrow.backend.dto.appointment.AppointmentDetailsDto;
import com.sammysbrow.backend.entity.Employee;
import com.sammysbrow.backend.entity.appointment.AppointmentDetails;
import com.sammysbrow.backend.exception.ResourceNotFoundException;
import com.sammysbrow.backend.mapper.EmployeeMapper;
import com.sammysbrow.backend.mapper.appointment.AppointmentDetailsMapper;
import com.sammysbrow.backend.repository.EmployeeRepository;
import com.sammysbrow.backend.repository.appointment.AppointmentDetailsRepository;
import com.sammysbrow.backend.service.appointment.AppointmentDetailsService;
import com.sammysbrow.backend.service.appointment.projection.AppointmentDetailsDateTimeService;
import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;
import org.springframework.stereotype.Service;

import java.time.LocalDate;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class AppointmentDetailsDetailsServiceImpl implements AppointmentDetailsService {

    private AppointmentDetailsRepository appointmentDetailsRepository;

    @Override
    public AppointmentDetailsDto addAppointment(AppointmentDetailsDto appointmentDetailsDto) {
        AppointmentDetails appointmentDetails = AppointmentDetailsMapper.mapToAppointmentDetails(appointmentDetailsDto);
        AppointmentDetails savedAppointment = appointmentDetailsRepository.save(appointmentDetails);
        return AppointmentDetailsMapper.mapToAppointmentDetailsDto(savedAppointment);
    }

    @Override
    public AppointmentDetailsDto updateAppointment(Long appointmentId, AppointmentDetailsDto updatedAppointmentDetailsDto) {
        AppointmentDetails appointmentDetails = appointmentDetailsRepository.findById(appointmentId).orElseThrow(
                ()-> new ResourceNotFoundException("Appointment with id " + appointmentId + " not found")
        );
        appointmentDetails.setClientEmail(updatedAppointmentDetailsDto.getClientEmail());
        appointmentDetails.setClientName(updatedAppointmentDetailsDto.getClientName());
        appointmentDetails.setClientPhone(updatedAppointmentDetailsDto.getClientPhone());
        appointmentDetails.setAppointmentNotes(updatedAppointmentDetailsDto.getAppointmentNotes());
        appointmentDetails.setServiceType(updatedAppointmentDetailsDto.getServiceType());
        appointmentDetails.setArtist(updatedAppointmentDetailsDto.getArtist());
        appointmentDetails.setAppointmentDateTime(updatedAppointmentDetailsDto.getAppointmentDateTime());
        appointmentDetails.setAppointmentStatus(updatedAppointmentDetailsDto.getAppointmentStatus());
        AppointmentDetails updatedAppointment = appointmentDetailsRepository.save(appointmentDetails);
        return AppointmentDetailsMapper.mapToAppointmentDetailsDto(updatedAppointment);

    }


//    @Override
//    public AppointmentDetailsDto updateAppointment(AppointmentDetailsDto appointmentDetailsDto) {
//        return null;
//    }
//
//    @Override
//    public AppointmentDetailsDto deleteAppointment(AppointmentDetailsDto appointmentDetailsDto) {
//        return null;
//    }

    @Override
    public List<AppointmentDetailsDto> getAllAppointmentDetails() {
        List<AppointmentDetails> appointmentDetails = appointmentDetailsRepository.findAll();
        return appointmentDetails.stream().map(
                AppointmentDetailsMapper::mapToAppointmentDetailsDto
        ).collect(Collectors.toList());
    }




    //
//    @Override
//    public AppointmentDetailsDto getAppointmentById(int id) {
//        return null;
//    }
//
//    @Override
//    public List<AppointmentDetailsDto> getFutureAppointments() {
//        return List.of();
//    }
//
//    @Override
//    public AppointmentDetailsDto getAppointmentByDate(String date) {
//        return null;
//    }
//
//    @Override
//    public List<AppointmentDetailsDto> getAppointmentsByUserId(int userId) {
//        return List.of();
//    }
}
