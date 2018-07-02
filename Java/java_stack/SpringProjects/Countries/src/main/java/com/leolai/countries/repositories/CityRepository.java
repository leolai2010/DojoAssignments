package com.leolai.countries.repositories;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.leolai.countries.models.City;

public interface CityRepository extends CrudRepository<City, Long> {
	List<City> findAll();
}