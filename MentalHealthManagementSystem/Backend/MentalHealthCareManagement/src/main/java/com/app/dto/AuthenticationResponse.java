package com.app.dto;

import java.util.List;

public class AuthenticationResponse {

	private final String jwt;
	private List<String> roles;
	private String userName;
	
	public AuthenticationResponse(String jwt,String userName,List<String> roles) {
		super();
		this.jwt = jwt;
		this.userName = userName;
		this.roles = roles;
	}

	public String getJwt() {
		return jwt;
	}

	public List<String> getRoles() {
		return roles;
	}

	public String getUserName() {
		return userName;
	}
	
	
}
