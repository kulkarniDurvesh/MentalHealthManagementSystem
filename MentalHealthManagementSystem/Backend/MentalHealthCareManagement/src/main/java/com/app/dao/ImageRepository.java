package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.app.pojos.DoctorImage;

@Repository
public interface ImageRepository extends JpaRepository<DoctorImage, String>{

}
