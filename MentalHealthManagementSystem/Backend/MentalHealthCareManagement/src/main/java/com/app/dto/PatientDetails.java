package com.app.dto;

import java.time.LocalDate;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class PatientDetails {

	private String patientName,mobileNo,paymentId,doctorsName;
	private LocalDate appointmentDate;
}
