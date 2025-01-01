package com.app.service;

import java.util.List;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.DoctorRepository;
import com.app.dto.ResponseChartData;
import com.app.pojos.Doctor;
import com.app.pojos.Specialization;

@Service
@Transactional
public class DoctorServiceImpl implements IDoctorService{

	@Autowired
	private DoctorRepository doctorRepo;
	
	@Override
	public List<Doctor> getAllDoctors() {
		
		List<Doctor> doctors = doctorRepo.findAll();
		
		return doctors;
	}

	@Override
	public List<Doctor> getAllVerifiedDoctors() {
		
		List<Doctor> verifiedDoctors = doctorRepo.findByIsVerified();
		return verifiedDoctors;
	}

	@Override
	public List<Doctor> getAllUnVerifiedDoctors() {
		
		List<Doctor> unVerifiedDoctors = doctorRepo.findUnVerifiedDoctors();
		return unVerifiedDoctors;
	}

	@Override
	public String VerifyDoctor(String userName) throws Exception {
		
		 Doctor doctor = doctorRepo.findById(userName)
		 	.orElseThrow(()->new Exception("doctor not found exception"));
		 
		 doctor.setVerified(true);
		 doctorRepo.save(doctor);
		return "Doctor Verified Successfully";
	}

	@Override
	public Doctor findByUserName(String userName) {
		Doctor doctor = doctorRepo.findById(userName)
				.orElseThrow(()->new RuntimeException("doctor not found exception"));;
		return doctor;
	}

	@Override
	public ResponseChartData getComparisionData() {
		
		List<Doctor> doctors = doctorRepo.findByIsVerified();
		
		int md = (int)doctors.stream().filter(i-> i.getSpecialization() == Specialization.MD)
													.count();
		
		int psych = (int)doctors.stream().filter(i-> i.getSpecialization() == Specialization.PSYCHIATRIST)
				.count();
		
		int counsellor = (int)doctors.stream().filter(i-> i.getSpecialization() == Specialization.COUNSELLOR)
				.count();
		
		int therapist = (int)doctors.stream().filter(i-> i.getSpecialization() == Specialization.THERAPIST)
				.count();
		
		return new ResponseChartData(md,psych,counsellor,therapist);
	}

	@Override
	public String deleteDoctorByUserName(String userName) {
		
		Doctor doctor = doctorRepo.findById(userName)
			.orElseThrow(()-> new RuntimeException("Doctor not found"));
		
		doctorRepo.delete(doctor);
		return "doctor deleted successfully";
	}

	
}
