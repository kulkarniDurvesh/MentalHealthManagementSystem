package com.app.service;

import java.util.Collection;
import java.util.stream.Collectors;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

import com.app.pojos.User;

import lombok.AllArgsConstructor;
import lombok.NoArgsConstructor;

@NoArgsConstructor
@AllArgsConstructor
public class CustomUserDetails implements UserDetails{

	/**
	 * 
	 */
	private static final long serialVersionUID = 1L;
	
	private User user;
	
	@Override
	public Collection<? extends GrantedAuthority> getAuthorities() {
		
		System.out.println("in get authority ");
		System.out.println(user);
		return user.getRoles().stream().map(r -> new SimpleGrantedAuthority(r.getUserRoles().name()))
				.collect(Collectors.toList());
	}

	@Override
	public String getPassword() {
		// TODO Auto-generated method stub
		return user.getPassword();
	}

	@Override
	public String getUsername() {
		// TODO Auto-generated method stub
		return user.getUserName();
	}

	@Override
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}

	@Override
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		System.out.println("in is enabled");
		return true;
	}

}
