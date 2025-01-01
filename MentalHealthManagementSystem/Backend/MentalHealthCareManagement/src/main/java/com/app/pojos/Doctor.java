package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.Id;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;


@Entity
@Table(name="Doctors")
@NoArgsConstructor
@Data
@AllArgsConstructor
public class Doctor {
	
	@Id
	@Column(length=30, name="user_name",nullable = false)
	private String userName;
	
	@Column(length=30, name="full_name",nullable = false)
	private String doctorName;
	
	@Column(length=30, name="email_Id",nullable = false,unique = true)
	private String email;
	
	@Column(length =10, name="mobile_no",nullable = false)
	private String mobileNo;
	
	private boolean isVerified;
	
	
	@Enumerated(EnumType.STRING)
	@Column(nullable = false,length = 10)
	private Gender gender;
	

	@Enumerated(EnumType.STRING)
	@Column(nullable = false,length = 30)
	private Specialization specialization;
	
	
}
