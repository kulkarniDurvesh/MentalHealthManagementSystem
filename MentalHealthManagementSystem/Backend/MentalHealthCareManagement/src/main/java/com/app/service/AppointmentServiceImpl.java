package com.app.service;

import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.app.dao.BookAppointmentRepository;
import com.app.dao.DoctorRepository;
import com.app.dao.MyOrderRepository;
import com.app.dao.UserRepository;
import com.app.dto.AppointmentRequest;
import com.app.dto.PatientDetails;
import com.app.pojos.Address;
import com.app.pojos.BookAppointment;
import com.app.pojos.Doctor;
import com.app.pojos.MyOrder;
import com.app.pojos.User;

@Service
@Transactional
public class AppointmentServiceImpl implements IAppointmentService{

	@Autowired
	private BookAppointmentRepository appointmentRepo;
	
	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private DoctorRepository doctorRepo;
	
	@Autowired
	private MyOrderRepository orderRepo;
	
	@Override
	public String bookAppointment(AppointmentRequest request) {
		
		//set address from request form data
		Address address = new Address();
		address.setArea(request.getArea());
		address.setCity(request.getCity());
		address.setState(request.getState());
		address.setPincode(request.getPinCode());
		
		System.out.println("working 1 "+address);
		
		Doctor doctor = doctorRepo.findById(request.getDoctorsUserName())
			.orElseThrow(()->new RuntimeException("doctor not found"));
		
		System.out.println("working 2 "+doctor);
		
		MyOrder myOrder = orderRepo.findByOrderId(request.getOrderId());
		
		myOrder.setStatus(request.getStatus());
		
		System.out.println("working 3 "+myOrder);
		
		User user = userRepo.findByUserName(request.getUserName())
			.orElseThrow(()->new RuntimeException("user not found"));
		
		System.out.println("working 4 "+user);
		
		BookAppointment app = new BookAppointment();
		
		app.setPatientName(request.getPatientName());
		app.setMobileNo(request.getMobileNo());
		app.setAppointmentDate(request.getAppointMentDate());
		app.setTimeSlot(request.getTimeSlot());
		app.setAddress(address);
		app.setDoctor(doctor);
		app.setMyOrder(myOrder);
		app.setUser(user);
		
		System.out.println("working 5 "+app);
		
		appointmentRepo.save(app);
		
		System.out.println("working 6");
		
		return "Appointment Booked Successfully";
	}

	@Override
	public List<BookAppointment> getPatientByDoctorsUserName(String userName) {
		
		Doctor doctor = doctorRepo.findById(userName)
			.orElseThrow(()->new RuntimeException("doctor not found"));
		
		System.out.println(doctor);
		
		List<BookAppointment> list = appointmentRepo.findByDoctor(doctor);
		
		return list;
	}

	@Override
	public List<PatientDetails> getAllPatients() {
		
		 List<BookAppointment> list = appointmentRepo.findAll();
		
		 List<PatientDetails> patients = list.stream() //i.getMyOrder().getPaymentId()
		 .map(i -> new PatientDetails(i.getPatientName(),i.getMobileNo(),i.getMyOrder().getPaymentId(),i.getDoctor().getDoctorName(),i.getAppointmentDate()))
		 .collect(Collectors.toList());
		 
		return patients;
	}
}
