package com.app.service;

import org.springframework.security.core.userdetails.UsernameNotFoundException;

import com.app.dto.ChangePassword;
import com.app.dto.SignUpRequest;
import com.app.dto.UserProfile;
import com.app.dto.UserResponseDTO;
import com.app.pojos.User;

public interface IUserService {

	UserResponseDTO createUserAccount(SignUpRequest request);
	
	User findUserByUsername(String userName) throws UsernameNotFoundException;
	
	String updateUserProfile(UserProfile profile);
	
	String changePassword(ChangePassword request);
}
