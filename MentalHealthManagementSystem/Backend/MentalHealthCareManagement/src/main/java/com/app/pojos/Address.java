package com.app.pojos;

import javax.persistence.Column;
import javax.persistence.Embeddable;

import lombok.Data;

@Embeddable
@Data
public class Address {
	
	@Column(length=30, nullable = false)
	private String area;
	@Column(length=30, nullable = false)
	private String city;
	@Column(length=30, nullable = false)
	private String state;
	@Column(length=6, nullable = false)
	private String pincode;

}
