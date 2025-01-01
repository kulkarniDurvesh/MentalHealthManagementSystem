package com.app.service;

import java.util.List;

import com.app.dto.AppointmentRequest;
import com.app.dto.PatientDetails;
import com.app.pojos.BookAppointment;

public interface IAppointmentService {

	String bookAppointment(AppointmentRequest request);
	
	List<BookAppointment> getPatientByDoctorsUserName(String doctorUserName);
	
	List<PatientDetails> getAllPatients();
}
