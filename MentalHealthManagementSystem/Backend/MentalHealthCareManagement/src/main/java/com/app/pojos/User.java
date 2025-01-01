package com.app.pojos;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

import javax.persistence.CascadeType;
import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@Table(name="Users")
@NoArgsConstructor
@Getter
@Setter
@AllArgsConstructor
public class User {
	
	@Id
	@Column(length=30, name="user_name")
	private String userName;
	
	@Column(length=30, name="full_name",nullable = false)
	private String fullName;
	
	@Column(length=30, name="email_Id",nullable = false,unique = true)
	private String email;
	
	@Column(name="password",nullable = false)
	private String password;
	
	@Column(length =10, name="mobile_no",nullable = false)
	private String mobileNo;
	
	@ManyToMany(fetch = FetchType.EAGER)
	@JoinTable(name="user_roles",joinColumns = @JoinColumn(name = "user_name")
	,inverseJoinColumns = @JoinColumn(name="role_id"))
	private Set<Role> roles = new HashSet<>();
	
	@OneToMany(mappedBy = "user", cascade = CascadeType.ALL, orphanRemoval = true ,fetch = FetchType.EAGER )
	private List<BookAppointment> appointment = new ArrayList<>();

	@Override
	public String toString() {
		return "User [userName=" + userName + ", fullName=" + fullName + ", email=" + email + ", password=" + password
				+ ", mobileNo=" + mobileNo + ", roles=" + roles + "]";
	}
	
	

}
