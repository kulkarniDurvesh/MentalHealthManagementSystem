package com.app.dto;

import org.springframework.web.multipart.MultipartFile;

import lombok.NoArgsConstructor;
import lombok.ToString;

@NoArgsConstructor
@ToString
public class FileUploadDTO {

	private String userName;
	
	private MultipartFile fileName;

	public FileUploadDTO(String userName, MultipartFile fileName) {
		super();
		this.userName = userName;
		this.fileName = fileName;
		System.out.println(fileName);
	}

	public String getUserName() {
		return userName;
	}

	public void setUserName(String userName) {
		this.userName = userName;
	}

	public MultipartFile getFileName() {
		return fileName;
	}

	public void setFileName(MultipartFile fileName) {
		this.fileName = fileName;
	}
	
	
}
