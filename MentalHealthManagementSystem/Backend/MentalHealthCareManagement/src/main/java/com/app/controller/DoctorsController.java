package com.app.controller;

import java.util.List;
import java.util.stream.Collectors;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.multipart.MultipartFile;

import com.app.dto.DoctorProfileResponse;
import com.app.pojos.BookAppointment;
import com.app.service.IAppointmentService;
import com.app.service.IDoctorService;
import com.app.service.IDocumentService;
import com.app.service.IImageService;

@RestController
@RequestMapping("/doctors")
@CrossOrigin(origins = "http://localhost:3000")
public class DoctorsController {

	@Autowired
	private IImageService imageService;
	
	@Autowired
	private IDocumentService docService;
	
	@Autowired
	private IDoctorService doctorService;
	
	@Autowired
	private IAppointmentService appointmentService;
	
	@PostMapping("/upload/image")
	public ResponseEntity<?> uploadImage(@RequestParam MultipartFile imageFile,@RequestParam String userName) throws Exception
	{
		System.out.println(userName +" " + imageFile);
		
		return ResponseEntity.ok(imageService.uploadImage(userName, imageFile));
	}
	
	@PostMapping("/upload/documents")
	public ResponseEntity<?> uploadDocument(@RequestParam MultipartFile documentFile,@RequestParam String userName) throws Exception{
		
		return ResponseEntity.ok(docService.uploadDocument(userName, documentFile));
	}
	
	@GetMapping("/image/{userName}")
	public ResponseEntity<byte[]> fetchImageByUserName(@PathVariable String userName) throws Exception
	{
		byte[] image = imageService.getImageByUserName(userName);
		
		return ResponseEntity.ok(image);
				
	}
	
	@GetMapping("/patient/{userName}")
	public ResponseEntity<?> fetchPatientsForDoctor(@PathVariable String userName)
	{
		System.out.println("--------------------------------------");
		System.out.println(userName);
		
		List<BookAppointment> list = appointmentService.getPatientByDoctorsUserName(userName);
		
		System.out.println("------------------------------------------");
		
		List<DoctorProfileResponse> response = list.stream().map(i -> 
			new DoctorProfileResponse(i.getPatientName(),i.getDoctor().getDoctorName(),i.getAppointmentDate(),i.getTimeSlot()))
			.collect(Collectors.toList());
		
		return ResponseEntity.ok(response);
	}
	
	@GetMapping("/{userName}")
	public ResponseEntity<?> fetchDoctorByUserName(@PathVariable String userName){
	
		return ResponseEntity.ok(doctorService.findByUserName(userName));
	}
	
}
