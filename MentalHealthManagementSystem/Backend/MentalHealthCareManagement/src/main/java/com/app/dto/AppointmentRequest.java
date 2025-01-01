package com.app.dto;

import java.time.LocalDate;

import com.app.pojos.TimeSlot;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class AppointmentRequest {

	private String patientName,mobileNo,email,area,city,state,pinCode;
	private String doctorsUserName;
	private String orderId;
	private String userName;
	private TimeSlot timeSlot;
	private LocalDate appointMentDate;
	private String status;
}
