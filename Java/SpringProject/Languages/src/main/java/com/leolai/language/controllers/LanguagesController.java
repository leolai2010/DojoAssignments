package com.leolai.language.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.leolai.language.models.Language;
import com.leolai.language.services.LanguageService;


@Controller
public class LanguagesController {
	public final LanguageService langService;
	
	public LanguagesController(LanguageService langService) {
		this.langService = langService;
	}
	@RequestMapping("/languages")
    public String index(Model model, @ModelAttribute("newlanguage") Language language) {
        List<Language> languages = langService.allLanguage();
        model.addAttribute("languages", languages);
        return "/languages/index.jsp";
    }
    @RequestMapping(value="/languages", method=RequestMethod.POST)
    public String create(@Valid @ModelAttribute("newlanguage") Language language, BindingResult result) {
        if (result.hasErrors()) {
            return "/languages/index.jsp";
        } else {
            langService.createLang(language);
            return "redirect:/languages";
        }
    }
    @RequestMapping("/languages/{id}")
    public String showing(@PathVariable("id") Long id, Model model) {
        Language language = langService.findLang(id);
        model.addAttribute("language", language);
        return "/languages/show.jsp";
    }
    @RequestMapping("/languages/{id}/edit")
    public String edit(@ModelAttribute("editlang") Language language, @PathVariable("id") Long id, Model model) {
        Language language1 = langService.findLang(id);
        model.addAttribute("language", language1);
        return "/languages/edit.jsp";
    }
    @RequestMapping(value="/languages/{id}", method=RequestMethod.PUT)
    public String update(@Valid @ModelAttribute("editlang") Language language, BindingResult result) {
        if (result.hasErrors()) {
            return "/languages/edit.jsp";
        } else {
            langService.updateLang(language);
            return "redirect:/languages";
        }
    }
    @RequestMapping(value="/languages/{id}", method=RequestMethod.DELETE)
    public String destroy(@PathVariable("id") Long id) {
        langService.deleteLang(id);
        return "redirect:/languages";
    }
}
