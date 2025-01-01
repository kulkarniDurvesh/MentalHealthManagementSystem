package com.app.controller;

import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpHeaders;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.app.dto.ResponseChartData;
import com.app.pojos.Document;
import com.app.service.IAppointmentService;
import com.app.service.IDoctorService;
import com.app.service.IDocumentService;

@RestController
@RequestMapping("/admin")
@CrossOrigin
public class AdminController {

	@Autowired
	private IDoctorService doctorService;
	
	@Autowired
	private IDocumentService docService;
	
	@Value("${document.upload.location}")
	private String documentLocation;
	
	@Autowired
	private IAppointmentService appService;
	
	@GetMapping("/doctors")
	public ResponseEntity<?> fetchAllDoctors()
	{
		return ResponseEntity.ok(doctorService.getAllDoctors());
	}
	
	@GetMapping("/verified/doctors")
	public ResponseEntity<?> fetchVerifiedDoctors()
	{
		return ResponseEntity.ok(doctorService.getAllVerifiedDoctors());
	}
	
	@GetMapping("/unverified/doctors") //http://localhost:9090/admin/unverified/doctors
	public ResponseEntity<?> fetchUnVerifiedDoctors()
	{
		return ResponseEntity.ok(doctorService.getAllUnVerifiedDoctors());
	}
	
	@GetMapping("/document/{userName}")
	public ResponseEntity<byte[]> fetchDoctorsDocument(@PathVariable String userName) throws IOException
	{
		System.out.println(userName);
		Document doc = docService.getDocumentById(userName);
		Path path = Paths.get(documentLocation,doc.getDocument());
		
		byte[] docFile = Files.readAllBytes(path);
		
		
		return ResponseEntity.ok()
				.header(HttpHeaders.CONTENT_DISPOSITION, "attachment; filename=\"" + doc.getDocument() + "\"")
				.body(docFile);
	}
	
	
	@PostMapping("/verify")
	public ResponseEntity<?> verifyDoctor(@RequestParam String userName) throws Exception{
		
		System.out.println(userName);
		return ResponseEntity.ok(doctorService.VerifyDoctor(userName));
	}
	
	@GetMapping("/patients")
	public ResponseEntity<?> fetchPatientDetails(){
		
		return ResponseEntity.ok(appService.getAllPatients());
	}
	
	@GetMapping("/doctors/comparision")
	public ResponseEntity<?> fetchDoctorsComparision()
	{
		ResponseChartData data = doctorService.getComparisionData();
		return ResponseEntity.ok(data);
	}
	
	@PostMapping("/delete")
	public ResponseEntity<?> deleteDoctor(@RequestParam String userName)
	{
		System.out.println(userName);
		
		return ResponseEntity.ok(doctorService.deleteDoctorByUserName(userName));
	}
	
}
