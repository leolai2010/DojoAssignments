package com.leolai.flightheaded.repositories;

import org.springframework.data.repository.CrudRepository;
import com.leolai.flightheaded.models.User;

public interface UserRepository extends CrudRepository<User, Long>{
	User findByEmail(String email);
}
