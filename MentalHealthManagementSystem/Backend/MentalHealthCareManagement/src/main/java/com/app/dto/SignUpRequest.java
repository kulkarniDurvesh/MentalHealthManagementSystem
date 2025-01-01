package com.app.dto;

import java.util.HashSet;
import java.util.Set;

import com.app.pojos.Gender;
import com.app.pojos.Specialization;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class SignUpRequest {

	private String userName,fullName,email,password,mobileNo;
	private Gender gender;
	private Specialization specialization; 
	private Set<String> roles = new HashSet<String>();
}
