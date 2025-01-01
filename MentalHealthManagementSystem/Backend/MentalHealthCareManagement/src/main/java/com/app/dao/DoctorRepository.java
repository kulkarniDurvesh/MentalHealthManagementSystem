package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.app.pojos.Doctor;

@Repository
public interface DoctorRepository extends JpaRepository<Doctor,String>{

	@Query("select d from Doctor d where d.isVerified = true")
	List<Doctor> findByIsVerified();
	
	@Query("select d from Doctor d where d.isVerified = false")
	List<Doctor> findUnVerifiedDoctors();
}
