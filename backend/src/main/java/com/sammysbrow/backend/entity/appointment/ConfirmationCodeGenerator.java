package com.sammysbrow.backend.entity.appointment;

import org.hibernate.engine.spi.SharedSessionContractImplementor;
import org.hibernate.id.IdentifierGenerator;

import java.io.Serializable;

public class ConfirmationCodeGenerator implements IdentifierGenerator {

    private Long initialValue = 9999L;

    @Override
    public Serializable generate(SharedSessionContractImplementor session, Object object) {
        // Query to get the next value from your custom logic or table
        // For simplicity, increment a static variable
        return initialValue++;
    }
}
