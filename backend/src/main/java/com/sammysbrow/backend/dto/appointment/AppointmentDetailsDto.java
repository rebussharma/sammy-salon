package com.sammysbrow.backend.dto.appointment;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import java.time.LocalDateTime;
import java.time.format.DateTimeFormatter;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentDetailsDto {
    private Long Id;
    private LocalDateTime data_insertion_date = LocalDateTime.parse(LocalDateTime.now().format(DateTimeFormatter.ofPattern("yyyy-MM-dd'T'HH:mm:ss")));
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
