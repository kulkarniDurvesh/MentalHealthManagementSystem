package com.app.dto;

import java.util.HashSet;
import java.util.Set;

import com.app.pojos.Role;

import lombok.Getter;
import lombok.Setter;
import lombok.ToString;

@Getter
@Setter
@ToString
public class UserResponseDTO {

	private String userName;
	private String fullName;
	private String email;
	
	private Set<Role> roles = new HashSet<>();
}
