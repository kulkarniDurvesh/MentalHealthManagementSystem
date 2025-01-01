package com.app.pojos;

import java.time.LocalDate;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Embedded;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.OneToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

import lombok.Getter;
import lombok.Setter;

@Entity
@Table(name="book_appointment",uniqueConstraints = 
			@UniqueConstraint(columnNames = {"app_date","time_slot"}) )
@Getter
@Setter
public class BookAppointment {
	
	
	
	public BookAppointment() {
		// TODO Auto-generated constructor stub
	}
	


	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private Integer id;
	
	@Column(length=30, name="patient_name",nullable = false)
	private String patientName;
	
	@Column(length=10, name="mobile_no",nullable = false)
	private String mobileNo;
	
	@Column(name="app_date",nullable = false)
	private LocalDate appointmentDate;
	
//	@Column(nullable = false)
//	private String description;
//	
//	@Column(length=30, name="file_name",nullable = false)
//	private String fileName;
	
	@Enumerated(EnumType.STRING)
	@Column(length = 20,name = "time_slot")
	private TimeSlot timeSlot;
	
	@Embedded
	private Address address;

	
	@OneToOne
	@JoinColumn(name = "my_order_id")
	private MyOrder myOrder;
	
	@ManyToOne
	@JoinColumn(name = "user_name")
	private User user;
	
	@ManyToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "doctors_user_name")
	private Doctor doctor;
	
	public BookAppointment(int id, String patientName, String mobileNo, LocalDate appointmentDate,Address address) {
		super();
		this.id = id;
		this.patientName = patientName;
		this.mobileNo = mobileNo;
		this.appointmentDate = appointmentDate;
		this.address = address;
	}

	@Override
	public String toString() {
		return "BookAppointment [id=" + id + ", patientName=" + patientName + ", mobileNo=" + mobileNo
				+ ", appointmentDate=" + appointmentDate + ", address=" + address + "]";
	}
	
	
}
