package com.sammysbrow.backend.controller.appointment;

import com.sammysbrow.backend.dto.appointment.AppointmentDetailsDateTimeDto;
import com.sammysbrow.backend.dto.appointment.AppointmentDetailsDto;
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

    @GetMapping("/relevant")
    public ResponseEntity<List<AppointmentDetailsDateTimeDto>> getRelevantAppointmentDetails() {

        List<AppointmentDetailsDateTimeService> appointmentDetailsDateTimeService = appointmentDetailsRepository.findByAppointmentDateTimeAfter(LocalDateTime.now());
        List<AppointmentDetailsDateTimeDto> details =  appointmentDetailsDateTimeService.stream().map(
                AppointmentDetailsMapper::mapToAppointmentDetailsDateTimeDto
        ).toList();

        return ResponseEntity.ok(details);
    }

//
//        List<AppointmentDetailsDateTimeService> appointmentDetailsDateTimeServices = appointmentDetailsRepository.findAllAppointmentDetailsDateTimeService();
//        List<AppointmentDetailsDateTimeDto> appointmentDetailsDateTimeDtos = new ArrayList<>();
//        for (AppointmentDetailsDateTimeService appointmentDetailsDateTimeService : appointmentDetailsDateTimeServices) {
//            appointmentDetailsDateTimeDtos.add(new AppointmentDetailsDateTimeDto(
//                    appointmentDetailsDateTimeService.getAppointmentDate(),
//                    appointmentDetailsDateTimeService.getAppointmentTime()
//            ));
//        }
//
//        return ResponseEntity.ok(appointmentDetailsDateTimeDtos);
//
//    }

}
