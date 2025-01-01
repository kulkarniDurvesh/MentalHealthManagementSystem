package com.app.service;

import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;

import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.app.dao.DoctorRepository;
import com.app.dao.RoleRepository;
import com.app.dao.UserRepository;
import com.app.dto.ChangePassword;
import com.app.dto.SignUpRequest;
import com.app.dto.UserProfile;
import com.app.dto.UserResponseDTO;
import com.app.pojos.Doctor;
import com.app.pojos.Role;
import com.app.pojos.User;
import com.app.pojos.UserRoles;

@Service
@Transactional
public class UserServiceImpl implements IUserService{

	@Autowired
	private UserRepository userRepo;
	
	@Autowired
	private RoleRepository roleRepo;
	
	@Autowired
	private DoctorRepository doctorRepo;
	
	@Autowired 
	private PasswordEncoder encoder;
	 
	@Autowired 
	private AuthenticationManager authManager;
	
	@Override
	public UserResponseDTO createUserAccount(SignUpRequest request) {
		
		User usr = userRepo.findByUserName(request.getUserName())
			.orElse(null);
		
		if(usr != null) {
			throw new RuntimeException("Username Already Exists");
		}
		
		User user = new User();
		user.setUserName(request.getUserName());
		user.setEmail(request.getEmail());
		user.setFullName(request.getFullName());
		user.setMobileNo(request.getMobileNo());
		user.setPassword(encoder.encode(request.getPassword()));
		
		System.out.println("working 1");
		
		Set<Role> roles = request.getRoles().stream()
				.map(roleNames -> roleRepo.findByUserRoles(UserRoles.valueOf(roleNames)).get())
				.collect(Collectors.toSet());
		
		Doctor doctor = new Doctor();
		List<String> list = roles.stream().map(role-> role.getUserRoles().toString()).collect(Collectors.toList());
		if(list.contains("ROLE_DOCTOR")) {
			doctor.setUserName(request.getUserName());
			doctor.setEmail(request.getEmail());
			doctor.setMobileNo(request.getMobileNo());
			doctor.setDoctorName(request.getFullName());
			doctor.setGender(request.getGender());
			doctor.setSpecialization(request.getSpecialization());
			doctor.setVerified(false);
			
			doctorRepo.save(doctor);
		}
		

		System.out.println("working 2");
		user.setRoles(roles);
		User user2 = userRepo.save(user);
		UserResponseDTO dto = new UserResponseDTO();
		BeanUtils.copyProperties(user2, dto);
		return dto;
	}

	@Override
	public User findUserByUsername(String userName) throws UsernameNotFoundException{
		
		User user = userRepo.findByUserName(userName)
				.orElseThrow(()->new UsernameNotFoundException("user not found"));
		
		return user;
	}

	@Override
	public String updateUserProfile(UserProfile profile) {
		
		User user = userRepo.findByUserName(profile.getUserName())
				.orElseThrow(()->new UsernameNotFoundException("user not found"));
		
		user.setFullName(profile.getFirstName()+" "+profile.getLastName());
		user.setEmail(profile.getEmail());
		user.setMobileNo(profile.getMobileNo());
		
		
		return user.getUserName()+": profile Updated Successfully";
	}

	@Override
	public String changePassword(ChangePassword request) {
		
		authManager.authenticate
				(new UsernamePasswordAuthenticationToken(request.getUserName(), request.getOldPassword()));
		
		System.out.println("Authenticated successfully");
		
		User user = userRepo.findByUserName(request.getUserName())
				.orElseThrow(()->new UsernameNotFoundException("user not found"));
		
		user.setPassword(encoder.encode(request.getNewPassword()));
		
		return "Password Changed Successfully";
	}

}
