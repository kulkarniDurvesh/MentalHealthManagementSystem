package com.app.pojos;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.OneToOne;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Entity
@Table(name = "doctors_documents")
@NoArgsConstructor
@AllArgsConstructor
@Data
public class Document {

	@Id
	@Column(length = 30)
	private String doctorName;
	
	@Column(length = 100,nullable = false)
	private String document;
	
	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "user_name")
	private Doctor doctor; 
	
}
