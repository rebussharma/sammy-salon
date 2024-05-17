package com.sammysbrow.backend.dto.appointment;
import java.time.LocalDateTime;

import lombok.*;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class AppointmentDetailsDateTimeDto {
    private LocalDateTime appointmentDateTime;
}
