package com.leolai.language.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.leolai.language.models.Language;
import com.leolai.language.services.LanguageService;

@RestController
public class LanguagesApi {
	private final LanguageService langService;
	public LanguagesApi (LanguageService langService) {
		this.langService = langService;
	}
	@RequestMapping("/api/books")
	public List<Language> index() {
		return langService.allLanguage();
	}
    @RequestMapping(value="/api/languages", method=RequestMethod.POST)
    public Language create(@RequestParam(value="name") String name, @RequestParam(value="creator") String creator, @RequestParam(value="version") Integer version) {
    	Language language = new Language(name, creator, version);
        return langService.createLang(language);
    }
    
    @RequestMapping("/api/languages/{id}")
    public Language show(@PathVariable("id") Long id) {
    	Language language = langService.findLang(id);
        return language;
    }
    @RequestMapping(value="/api/languages/{id}", method=RequestMethod.PUT)
    public Language update(@PathVariable("id") Long id, @RequestParam(value="name") String name, @RequestParam(value="creator") String creator, @RequestParam(value="version") Integer version) {
    	Language book = langService.updateLang(id, name, creator, version);
        return book;
    }
    @RequestMapping(value="/api/languages/{id}", method=RequestMethod.DELETE)
    public void destroy(@PathVariable("id") Long id) {
    	langService.deleteLang(id);
    }
}
