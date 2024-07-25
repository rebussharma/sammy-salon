package com.sammysbrow.backend.dto.appointment;
import com.sammysbrow.backend.entity.appointment.ConfirmationCodeSequence;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentDetailsDto {
    private Long Id;
    private Long confirmationCode;
    private LocalDateTime appointmentDateTime;
    private String serviceType;
    private String artist = "Sammy";
    private String clientName;
    private String clientEmail;
    private Long clientPhone;
    private String appointmentNotes;
    private String appointmentStatus;


}
