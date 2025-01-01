package com.app.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpMethod;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.config.http.SessionCreationPolicy;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

import com.app.filters.JwtRequestFilter;

@EnableWebSecurity // Tells SC that this class contains web security config.
public class WebSecurityConfig extends WebSecurityConfigurerAdapter {

	@Autowired
	private UserDetailsService userDetailsService;

	@Autowired
	private JwtRequestFilter jwtFilter;

	// for configuring authentication , override below method
	@Override
	protected void configure(AuthenticationManagerBuilder auth) throws Exception {
		System.out.println(1);
		// since there is no out-of-box imple for JPA based auth , u have to create a
		// custom class implementation of UserDetailsService n pass it here.
		// javadocs : Add authentication based upon the custom UserDetailsService that
		// is passed in.
		// It then returns a DaoAuthenticationConfigurer to allow customization of the
		// authentication.
		auth.userDetailsService(userDetailsService);
	}

	// for configuring authorization , override below method
	@Override
	protected void configure(HttpSecurity http) throws Exception {
		System.out.println(3);
		// specify our own config
		// enable cors n disable CSRF
		http.cors().and().csrf().disable().

				authorizeRequests()// authorize all requests

			
				// NOTE : argument of hasRole should NOT start with "ROLE_" as this is
				// automatically inserted.
				.antMatchers("/admin/**").hasRole("ADMIN").
				antMatchers("/users/**").hasRole("USER").
				antMatchers("/doctors/**").hasRole("DOCTOR").
			//	antMatchers("/student/**").hasRole("STUDENT")
		//		.antMatchers("/faculty/**").hasRole("FACULTY")
				// .antMatchers("/","static/js","static/css").permitAll()
				antMatchers("/", "/api/**").permitAll().
				//allow any HTTP OPTIONS request (which is typically a pre flight request coming from react like
				//front end : it's not required for testing it with postman
				antMatchers(HttpMethod.OPTIONS, "/**").permitAll().and().			
				// To tell Spring Security NEVER create an HttpSession &DO NOT use HttpSession to obtain the
				// SecurityContext
				sessionManagement().sessionCreationPolicy(SessionCreationPolicy.STATELESS);
		// adding custom jwt filter before a filter for processing an authentication
		// form submission.
		http.addFilterBefore(jwtFilter, UsernamePasswordAuthenticationFilter.class);

	}

	// From Spring sec 5 onwards MUST configure a password encoder bean , otherwise
	// : java.lang.IllegalArgumentException: There is no PasswordEncoder mapped
	@Bean // To configure a spring bean (return type of this method will be a spring bean
	// after configuring password encoder bean : u will have to supply encoded
	// password in auth config
	// o.w : Encoded password does not look like BCrypt : warning (& authentication
	// does not work
	// : equivalent to <bean id ...> tag in xml)
	public PasswordEncoder encoder() {
		System.out.println(2);
		return new BCryptPasswordEncoder();
	}
	// below code is required from Spring Boot 2.x onwards , earlier it used to
	// inject automatically AuthenticationManager created from
	// configure(AuthenticationManagerBuilder) method
	// Now MUST override this method to expose the AuthenticationManager from
	// configure(AuthenticationManagerBuilder) to be exposed as a Bean.

	@Override
	@Bean
	public AuthenticationManager authenticationManagerBean() throws Exception {

		return super.authenticationManagerBean();
	}

}
