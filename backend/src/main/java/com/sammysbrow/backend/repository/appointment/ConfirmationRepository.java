package com.sammysbrow.backend.repository.appointment;

import com.sammysbrow.backend.entity.appointment.ConfirmationCodeSequence;
import org.springframework.data.jpa.repository.JpaRepository;

public interface ConfirmationRepository extends JpaRepository <ConfirmationCodeSequence, Long>{
}
