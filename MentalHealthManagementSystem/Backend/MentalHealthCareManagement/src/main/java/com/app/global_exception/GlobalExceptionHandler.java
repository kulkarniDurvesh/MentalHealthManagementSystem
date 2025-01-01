package com.app.global_exception;

import java.time.LocalDateTime;

import org.springframework.dao.DataIntegrityViolationException;
import org.springframework.dao.EmptyResultDataAccessException;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.web.bind.annotation.ControllerAdvice;
import org.springframework.web.bind.annotation.ExceptionHandler;
import org.springframework.web.servlet.mvc.method.annotation.ResponseEntityExceptionHandler;

import com.app.dto.ErrorResponse;

@ControllerAdvice //mandatory : to tell SC following class contains centralized exc handler method/s
public class GlobalExceptionHandler extends ResponseEntityExceptionHandler {

//How to tell SC : follo. method acts as the exc handling method
	@ExceptionHandler(EmptyResultDataAccessException.class)
	public ResponseEntity<?> handleEmptyDataExcetpion(EmptyResultDataAccessException e)
	{
		System.out.println("in handle empty result exc "+e);
		ErrorResponse resp=new ErrorResponse(e.getMessage(), LocalDateTime.now());
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(resp);
	}
	
	@ExceptionHandler(RuntimeException.class)
	public ResponseEntity<?> handleRuntimeException(RuntimeException e)
	{
		System.out.println("in handle run time exc "+e);
		ErrorResponse resp=new ErrorResponse(e.getMessage(), LocalDateTime.now());
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(resp);
	}
	
	@ExceptionHandler(UsernameNotFoundException.class)
	public ResponseEntity<?> handleUserNotFoundException(UsernameNotFoundException e)
	{
		System.out.println("in handle user not found exc "+e);
		ErrorResponse res = new ErrorResponse(e.getMessage(),LocalDateTime.now());
		return ResponseEntity.status(HttpStatus.NOT_FOUND).body(res);
	}

	@ExceptionHandler(DataIntegrityViolationException.class)
	public ResponseEntity<?> handleUniqueConstraintException(DataIntegrityViolationException e){
		
		ErrorResponse res = new ErrorResponse("Time Slot Full Please Book Another Slot",LocalDateTime.now());
		return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(res);
	}
	
	
}
