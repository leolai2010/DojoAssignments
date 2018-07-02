package com.leolai.countries.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.stereotype.Repository;

import com.leolai.countries.models.Country;

@Repository
public interface CountryRepository extends CrudRepository<Country, Long> {
	List<Country> findAll();
	//1
	@Query("SELECT c.name, t.language, t.percentage FROM Country c JOIN c.languages t WHERE t.language='Slovene' ORDER BY t.percentage DESC")
	List<Object[]> joinSlovene();
	//2
	@Query("SELECT c.name, COUNT(l.name) FROM Country c JOIN c.cities l GROUP BY c.name ORDER BY c.name")
	List<Object[]> joinCity();
	//3
	@Query("SELECT l.population, l.name FROM Country c JOIN c.cities l WHERE c.name='Mexico' AND l.population > 500000 ORDER BY l.population DESC")
	List<Object[]> joinMexico();
	//4
	@Query("SELECT c.name, t.language, t.percentage FROM Country c JOIN c.languages t WHERE t.percentage > 89 ORDER BY c.population DESC")
	List<Object[]> joinLangPop();
	//5
	@Query("SELECT c.name, c.surface_area, c.population FROM Country c WHERE c.population > 100000 AND c.surface_area <501")
	List<Object[]> findSnP();
	//6
	@Query("SELECT c.name, c.government_form, c.life_expectancy FROM Country c WHERE c.government_form='Constitutional Monarchy' AND c.capital > 200 AND c.life_expectancy >75")
	List<Object[]> govCapLife();
	//7
	@Query("SELECT c.name, l.name, l.district, l.population FROM Country c JOIN c.cities l WHERE c.name='Argentina' AND l.district='Buenos Aires' AND l.population > 500000")
	List<Object[]> cityDisPop();
	//8
	@Query("SELECT c.region, COUNT(c.name) FROM Country c GROUP BY c.region ORDER BY c.region")
	List<Object[]> regionCCount();
}
