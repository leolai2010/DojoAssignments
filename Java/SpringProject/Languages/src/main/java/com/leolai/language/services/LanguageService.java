package com.leolai.language.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.leolai.language.models.Language;
import com.leolai.language.repositories.LanguageRepository;

@Service
public class LanguageService {
	private final LanguageRepository langRepo;
	
	public LanguageService(LanguageRepository langRepo) {
		this.langRepo = langRepo;
	}
    // returns all the books
    public List<Language> allLanguage() {
        return langRepo.findAll();
    }
    // creates a book
    public Language createLang(Language b) {
        return langRepo.save(b);
    }
    // retrieves a book
    public Language findLang(Long id) {
        Optional<Language> optionalLang = langRepo.findById(id);
        if(optionalLang.isPresent()) {
            return optionalLang.get();
        } else {
            return null;
        }
    }
    public Language updateLang(Language language) {
    	return langRepo.save(language);
    }
    public Language updateLang(Long id, String name, String creator, Integer version) {
    	Language updateLanguage = langRepo.findById(id).get();
    	updateLanguage.setName(name);
    	updateLanguage.setCreator(creator);
    	updateLanguage.setVersion(version);
    	return langRepo.save(updateLanguage);
	}
    public void deleteLang(Long id) {
    	langRepo.deleteById(id);
    }
}
