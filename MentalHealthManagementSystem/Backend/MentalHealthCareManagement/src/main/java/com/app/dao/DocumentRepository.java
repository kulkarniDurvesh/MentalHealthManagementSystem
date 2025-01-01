package com.app.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.Document;

@Repository
public interface DocumentRepository extends JpaRepository<Document, String>{

	@Query("select doc from Document doc join fetch doc.doctor where doc.doctorName = :uname")
	Document getDocumentByUserName(@Param("uname") String userName);
}
