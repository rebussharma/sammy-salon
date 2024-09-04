package com.sammysbrow.backend.service.appointment.impl;
import com.sammysbrow.backend.dto.appointment.AppointmentDetailsDto;
import com.sammysbrow.backend.entity.appointment.AppointmentDetails;
import com.sammysbrow.backend.entity.appointment.ConfirmationCodeSequence;
import com.sammysbrow.backend.exception.ResourceNotFoundException;
import com.sammysbrow.backend.mapper.appointment.AppointmentDetailsMapper;
import com.sammysbrow.backend.repository.appointment.AppointmentDetailsRepository;
import com.sammysbrow.backend.repository.appointment.ConfirmationRepository;
import com.sammysbrow.backend.service.appointment.AppointmentDetailsService;
import lombok.AllArgsConstructor;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;
import java.util.stream.Collectors;

@Service
@AllArgsConstructor
public class AppointmentDetailsDetailsServiceImpl implements AppointmentDetailsService {

    private AppointmentDetailsRepository appointmentDetailsRepository;
    private ConfirmationRepository confirmationRepository;

    @Override
    public AppointmentDetailsDto addAppointment(AppointmentDetailsDto appointmentDetailsDto) {
        AppointmentDetails appointmentDetails = AppointmentDetailsMapper.mapToAppointmentDetails(appointmentDetailsDto);
        ConfirmationCodeSequence confirmationCodeSequence = new ConfirmationCodeSequence();
        ConfirmationCodeSequence savedConfirmCode = confirmationRepository.save(confirmationCodeSequence);
        appointmentDetails.setConfirmationCode(new ConfirmationCodeSequence(savedConfirmCode.getId()));

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

    @Override
    public List<AppointmentDetailsDto> getAllAppointmentDetails() {
        List<AppointmentDetails> appointmentDetails = appointmentDetailsRepository.findAll();
        return appointmentDetails.stream().map(
                AppointmentDetailsMapper::mapToAppointmentDetailsDto
        ).collect(Collectors.toList());
    }

    @Override
    public AppointmentDetailsDto getAppointmentById(Long id) {
        AppointmentDetails appointmentDetails = appointmentDetailsRepository.findById(id).orElseThrow(
                () -> new ResourceNotFoundException("Appointment with id: " + id + " not found")
        );
        return AppointmentDetailsMapper.mapToAppointmentDetailsDto(appointmentDetails);
    }

    @Override
    public AppointmentDetailsDto getAppointmentByConfirmationCode(ConfirmationCodeSequence code) {
        Optional<AppointmentDetails> appointmentDetails = Optional.ofNullable(appointmentDetailsRepository.findByConfirmationCode(code));
        return appointmentDetails.map(AppointmentDetailsMapper::mapToAppointmentDetailsDto).
        orElseThrow(
                () -> new ResourceNotFoundException("Appointment with confirmation code: " + code + " not found")
        );
    }

}
