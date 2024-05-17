package com.sammysbrow.backend.repository.appointment;
import com.sammysbrow.backend.entity.appointment.AppointmentDetails;

import com.sammysbrow.backend.service.appointment.projection.AppointmentDetailsDateTimeService;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;

import java.awt.print.Pageable;
import java.time.LocalDate;
import java.time.LocalDateTime;
import java.time.LocalTime;
import java.util.List;


public interface AppointmentDetailsRepository extends JpaRepository <AppointmentDetails, Long> {
//    String FIND_RELEVANT_APPOINTMENTS = "SELECT appointment_date, appointment_time FROM appointment_details";
//    @Query(value = FIND_RELEVANT_APPOINTMENTS, nativeQuery = true)
    List<AppointmentDetailsDateTimeService> findByAppointmentDateTimeAfter(LocalDateTime now);
}
