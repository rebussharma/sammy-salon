package com.sammysbrow.backend.entity.appointment;

import com.fasterxml.jackson.annotation.JsonFormat;
import jakarta.persistence.*;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;
import org.springframework.format.annotation.DateTimeFormat;

import java.time.LocalDateTime;


@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@Entity
@Table(name = "appointment_details")
public class AppointmentDetails {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long Id;

    @Column(name = "data_insertion_date")
    private LocalDateTime data_insertion_date;

    @OneToOne(fetch = FetchType.LAZY)
    @JoinColumn(name = "confirmation_code", referencedColumnName = "id")
    private ConfirmationCodeSequence confirmationCode;

    @Column (name = "appointment_date_time")
    @DateTimeFormat(pattern = "yyyy-MM-dd HH:mm", iso = DateTimeFormat.ISO.DATE_TIME)
    @JsonFormat(pattern = "YYYY-MM-dd HH:mm")
    private LocalDateTime appointmentDateTime;
    @Column (name = "service_type")
    private String serviceType;
    @Column(name = "artist")
    private String artist = "Sammy";
    @Column (name = "client_name")
    private String clientName;
    @Column (name = "client_email")
    private String clientEmail;
    @Column (name = "client_phone")
    private Long clientPhone;
    @Column (name = "appointment_notes")
    private String appointmentNotes;
    @Column (name = "appointment_status")
    private String appointmentStatus;
}

