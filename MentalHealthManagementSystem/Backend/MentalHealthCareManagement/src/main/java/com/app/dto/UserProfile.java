package com.app.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
@Data
public class UserProfile {

	private String firstName,lastName,email,mobileNo;
	private String userName;
	
}
