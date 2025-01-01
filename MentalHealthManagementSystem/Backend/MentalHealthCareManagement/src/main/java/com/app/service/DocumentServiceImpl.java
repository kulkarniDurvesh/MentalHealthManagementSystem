package com.app.service;

import java.io.File;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.dao.DoctorRepository;
import com.app.dao.DocumentRepository;
import com.app.pojos.Doctor;
import com.app.pojos.Document;

@Service
@Transactional
public class DocumentServiceImpl implements IDocumentService{

	@Autowired
	private DocumentRepository docRepo;
	
	@Autowired
	private DoctorRepository doctorRepo;
	
	@Value("${document.upload.location}")
	private String location;
	
	@Override
	public String uploadDocument(String userName, MultipartFile fileName) throws Exception {
		
		System.out.println(location);
		
		fileName.transferTo(new File(location, fileName.getOriginalFilename()));
		System.out.println(fileName.getOriginalFilename());
		
		Document document = new Document();
		document.setDoctorName(userName);
		document.setDocument(fileName.getOriginalFilename());
		
		Doctor doctor = doctorRepo.findById(userName)
				.orElseThrow(()->new Exception("Doctor Not Found"));
		
		System.out.println(doctor);
		document.setDoctor(doctor);
		Document document2 = docRepo.save(document);
		
		return "document "+document2.getDocument()+ " saved successfully";
	}

	@Override
	public Document getDocumentById(String userName) {
		
		Document doc = docRepo.getDocumentByUserName(userName);
		return doc;
	}

}
