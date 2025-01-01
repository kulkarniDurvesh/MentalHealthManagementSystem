package com.app.dao;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.app.pojos.User;

@Repository
public interface UserRepository extends JpaRepository<User,String>{

	//using @Query to write custom jpql query
	//because fetching the user roles in one query
	@Query("select distinct u from User u left outer join fetch u.roles where u.userName=:nm")
	Optional<User> findByUserName(@Param("nm") String userName);
}
