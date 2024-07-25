package com.sammysbrow.backend.repository.appointment;
import com.sammysbrow.backend.entity.appointment.AppointmentDetails;

import com.sammysbrow.backend.entity.appointment.ConfirmationCodeSequence;
import com.sammysbrow.backend.service.appointment.AppointmentDetailsService;
import com.sammysbrow.backend.service.appointment.projection.AppointmentDetailsDateTimeService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import javax.swing.text.html.Option;
import java.awt.print.Pageable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;
import java.util.Optional;


public interface AppointmentDetailsRepository extends JpaRepository <AppointmentDetails, Long> {
//    String FIND_RELEVANT_APPOINTMENTS = "SELECT appointment_date, appointment_time FROM appointment_details";
//    @Query(value = FIND_RELEVANT_APPOINTMENTS, nativeQuery = true)
    //might have to use template and return both type AppointmentDetailsDateTimeService & AppointmentDetails for function below
   // List<AppointmentDetailsDateTimeService> findByAppointmentDateTimeAfterAndAppointmentStatus(LocalDateTime now, String status);
    List<AppointmentDetails> findByAppointmentDateTimeAfterAndAppointmentStatus(LocalDateTime now, String status);

    List<AppointmentDetails> findByAppointmentStatus(String status);
    AppointmentDetails findByConfirmationCode(ConfirmationCodeSequence confirmationCode);
}
