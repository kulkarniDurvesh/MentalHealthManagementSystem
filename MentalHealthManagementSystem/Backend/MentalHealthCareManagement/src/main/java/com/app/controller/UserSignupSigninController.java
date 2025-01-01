package com.app.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.AuthenticationRequest;
import com.app.dto.AuthenticationResponse;
import com.app.dto.SignUpRequest;
import com.app.pojos.User;
import com.app.service.IUserService;
import com.app.utils.JwtUtils;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:3000")
public class UserSignupSigninController {

	@Autowired
	private IUserService userService;
	
	@Autowired 
	private AuthenticationManager authManager;
	
	@Autowired
	private JwtUtils jwtUtils;
	
	@Value("${document.upload.location}")
	private String documentLocation;
	
	@PostMapping("/signup")
	public ResponseEntity<?> createNewUser(@RequestBody SignUpRequest request){
		
		System.out.println("in user signup");
		System.out.println(request);
		return ResponseEntity.ok(userService.createUserAccount(request));
	}
	
	@PostMapping("/signin")
	public ResponseEntity<?> authenticateUser(@RequestBody AuthenticationRequest request){
		
		System.out.println("in login "+request);
		try {
			
			Authentication authenticate = authManager.authenticate
					(new UsernamePasswordAuthenticationToken(request.getUserName(), request.getPassword()));
			
			System.out.println("auth successfull");
			
			User user = userService.findUserByUsername(request.getUserName());
			
			List<String> roles = user.getRoles().stream().map((i)-> i.getUserRoles().toString())
				.collect(Collectors.toList());
			
			return ResponseEntity.ok(new AuthenticationResponse(jwtUtils.generateJwtToken(authenticate),request.getUserName(),roles));
			
		}catch (Exception e) {
			e.printStackTrace();
			throw new RuntimeException("User authentication failed",e);
		}
		
	}
}
