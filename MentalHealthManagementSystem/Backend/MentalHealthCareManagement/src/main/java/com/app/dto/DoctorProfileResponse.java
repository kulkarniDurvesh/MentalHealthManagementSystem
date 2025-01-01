package com.app.dto;

import java.time.LocalDate;

import com.app.pojos.TimeSlot;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class DoctorProfileResponse {

	private String patientName,doctorsName;
	private LocalDate appointmentDate;
	private TimeSlot timeSlot;
}
