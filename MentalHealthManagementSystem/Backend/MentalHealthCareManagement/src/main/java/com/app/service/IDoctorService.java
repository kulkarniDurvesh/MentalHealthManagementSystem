package com.app.service;

import java.util.List;

import com.app.dto.ResponseChartData;
import com.app.pojos.Doctor;

public interface IDoctorService {

	List<Doctor> getAllDoctors();
	
	List<Doctor> getAllVerifiedDoctors();
	
	List<Doctor> getAllUnVerifiedDoctors();
	
	String VerifyDoctor(String userName) throws Exception;
	
	Doctor findByUserName(String userName);
	
	ResponseChartData getComparisionData();
	
	String deleteDoctorByUserName(String userName);
}
