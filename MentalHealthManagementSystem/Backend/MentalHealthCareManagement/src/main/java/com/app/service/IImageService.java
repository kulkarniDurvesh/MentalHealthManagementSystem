package com.app.service;

import java.io.IOException;
import java.util.List;

import org.springframework.web.multipart.MultipartFile;

public interface IImageService {

	String uploadImage(String userName,MultipartFile fileName) throws Exception;
	
	List<byte[]> getAllImages() throws IOException;
	
	byte[] getImageByUserName(String userName) throws Exception;
}
