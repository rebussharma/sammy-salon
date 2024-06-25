package com.sammysbrow.backend.controller.appointment;

import com.sammysbrow.backend.dto.appointment.AppointmentDetailsDateTimeDto;
import com.sammysbrow.backend.dto.appointment.AppointmentDetailsDto;
import com.sammysbrow.backend.entity.appointment.AppointmentDetails;
import com.sammysbrow.backend.mapper.appointment.AppointmentDetailsMapper;
import com.sammysbrow.backend.repository.appointment.AppointmentDetailsRepository;
import com.sammysbrow.backend.service.appointment.AppointmentDetailsService;
import com.sammysbrow.backend.service.appointment.projection.AppointmentDetailsDateTimeService;
import lombok.AllArgsConstructor;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;

@RestController
@RequestMapping("/api/appointments")
@AllArgsConstructor
@CrossOrigin(origins = "http://localhost:3000")
public class AppointmentDetailsController {

    private AppointmentDetailsService appointmentDetailsService;
    private AppointmentDetailsRepository appointmentDetailsRepository;

    @PostMapping
    public ResponseEntity<AppointmentDetailsDto> addAppointment(@RequestBody AppointmentDetailsDto appointmentDetailsDto) {
        AppointmentDetailsDto savedAppointment = appointmentDetailsService.addAppointment(appointmentDetailsDto);
        return new ResponseEntity<>(savedAppointment, HttpStatus.CREATED);
    }

    @PutMapping("{id}")
    public ResponseEntity<AppointmentDetailsDto> updateAppointment(@PathVariable("id") Long appointmentId, @RequestBody AppointmentDetailsDto updatedAppointmentDto) {
        AppointmentDetailsDto updatedAppointment = appointmentDetailsService.updateAppointment(appointmentId, updatedAppointmentDto);
        return ResponseEntity.ok(updatedAppointment);
    }
    @GetMapping
    @CrossOrigin(origins = "http://localhost:3000")
    public ResponseEntity<List<AppointmentDetailsDto>> getAllAppointmentDetails() {
        List<AppointmentDetailsDto> appointmentDetailsDto = appointmentDetailsService.getAllAppointmentDetails();
        return ResponseEntity.ok(appointmentDetailsDto);
    }

    @GetMapping("/confirmed/upcoming")
    public ResponseEntity<List<AppointmentDetailsDateTimeDto>> getFutureConfirmedAppointmentDetails() {

        List<AppointmentDetailsDateTimeService> appointmentDetailsDateTimeService = appointmentDetailsRepository.findByAppointmentDateTimeAfterAndAppointmentStatus(LocalDateTime.now(), "confirmed");
        List<AppointmentDetailsDateTimeDto> details =  appointmentDetailsDateTimeService.stream().map(
                AppointmentDetailsMapper::mapToAppointmentDetailsDateTimeDto
        ).toList();

        return ResponseEntity.ok(details);
    }

    @GetMapping("/cancelled/upcoming")
    public ResponseEntity<List<AppointmentDetailsDateTimeDto>> getFutureCancelledAppointmentDetails() {

        List<AppointmentDetailsDateTimeService> appointmentDetailsDateTimeService = appointmentDetailsRepository.findByAppointmentDateTimeAfterAndAppointmentStatus(LocalDateTime.now(), "cancelled");
        List<AppointmentDetailsDateTimeDto> details =  appointmentDetailsDateTimeService.stream().map(
                AppointmentDetailsMapper::mapToAppointmentDetailsDateTimeDto
        ).toList();

        return ResponseEntity.ok(details);
    }

    @GetMapping("/confirmed")
    public ResponseEntity<List<AppointmentDetailsDto>> getAllConfirmedAppointmentDetails() {

        List<AppointmentDetails> appointmentDetailsList = appointmentDetailsRepository.findByAppointmentStatus("confirmed");
        List<AppointmentDetailsDto> details =  appointmentDetailsList.stream().map(
                AppointmentDetailsMapper::mapToAppointmentDetailsDto
        ).toList();

        return ResponseEntity.ok(details);
    }

    @GetMapping("/cancelled")
    public ResponseEntity<List<AppointmentDetailsDto>> getAllCancelledAppointmentDetails() {

        List<AppointmentDetails> appointmentDetailsList = appointmentDetailsRepository.findByAppointmentStatus("cancelled");
        List<AppointmentDetailsDto> details =  appointmentDetailsList.stream().map(
                AppointmentDetailsMapper::mapToAppointmentDetailsDto
        ).toList();

        return ResponseEntity.ok(details);
    }



}
