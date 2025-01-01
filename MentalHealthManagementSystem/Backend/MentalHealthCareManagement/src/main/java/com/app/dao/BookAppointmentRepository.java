package com.app.dao;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.app.pojos.BookAppointment;
import com.app.pojos.Doctor;

@Repository
public interface BookAppointmentRepository extends JpaRepository<BookAppointment, Integer>{

	List<BookAppointment> findByDoctor(Doctor doctor);
}
