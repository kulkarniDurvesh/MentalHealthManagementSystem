package com.app.service;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import com.app.dao.DoctorRepository;
import com.app.dao.ImageRepository;
import com.app.pojos.Doctor;
import com.app.pojos.DoctorImage;

@Service
@Transactional
public class ImageServiceImpl implements IImageService {

	@Autowired
	private ImageRepository imageRepo;
	
	@Autowired
	private DoctorRepository doctorRepo;
	
	@Value("${image.upload.location}")
	private String location;
	
	@Override
	public String uploadImage(String userName,MultipartFile fileName) throws Exception {
		
		System.out.println(location);
		
		fileName.transferTo(new File(location, fileName.getOriginalFilename()));
		System.out.println(fileName.getOriginalFilename());
		
		DoctorImage dImage = new DoctorImage();
		
		dImage.setDoctorName(userName);
		dImage.setImage(fileName.getOriginalFilename());
		
		Doctor doctor = doctorRepo.findById(userName)
				.orElseThrow(()->new Exception("Doctor Not Found"));
		
		System.out.println(doctor);
		dImage.setDoctor(doctor);
		DoctorImage save = imageRepo.save(dImage);
		
		return "Image "+save.getImage()+" saved";
	}

	@Override
	public List<byte[]> getAllImages() throws IOException {
		
		List<DoctorImage> allImages = imageRepo.findAll();
		
		System.out.println(allImages);
		
		List<Path> paths = allImages.stream()
			.filter(i -> i.getDoctor().isVerified())
			.map(i -> i.getImage())
			.map(img -> Paths.get(location,img))
			.collect(Collectors.toList());
		
		List<byte[]> images = new ArrayList<byte[]>();
		
		for(Path path : paths) {
			images.add(Files.readAllBytes(path));
		}
			
		
		return images;
	}

	@Override
	public byte[] getImageByUserName(String userName) throws Exception {
		
		DoctorImage image = imageRepo.findById(userName)
			.orElseThrow(()->new Exception("image not found "));
		
		Path path = Paths.get(location,image.getImage());
		byte[] img = Files.readAllBytes(path);
		return img;
	}

}
