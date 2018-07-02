package com.leolai.flightheaded.repositories;

import java.util.List;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import com.leolai.flightheaded.models.Alcohol;

public interface AlcoholRepository extends CrudRepository<Alcohol, Long> {
	List<Alcohol> findAll();
	@Query("SELECT SUM(c.percentAlcohol) * SUM(c.servings) FROM Alcohol c")
	Double sumalcohol();
}
