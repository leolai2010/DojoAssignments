package com.leolai.countries.repositories;

import java.util.List;
import org.springframework.data.repository.CrudRepository;
import com.leolai.countries.models.Language;

public interface LanguageRepository extends CrudRepository<Language, Long> {
	List<Language> findAll();
}
