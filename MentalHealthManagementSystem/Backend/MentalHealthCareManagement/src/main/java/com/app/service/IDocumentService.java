package com.app.service;

import org.springframework.web.multipart.MultipartFile;

import com.app.pojos.Document;

public interface IDocumentService {

	String uploadDocument(String userName,MultipartFile fileName) throws Exception;
	
	Document getDocumentById(String userName);
}
