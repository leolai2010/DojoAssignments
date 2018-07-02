package com.leolai.dl.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.leolai.dl.models.License;
import com.leolai.dl.models.Person;
import com.leolai.dl.services.LicenseService;
import com.leolai.dl.services.PersonService;

@Controller
public class DriverLicenseController {
	private final PersonService personService;
	private final LicenseService licenseService;
	public DriverLicenseController(PersonService personService, LicenseService licenseService) {
		this.personService = personService;
		this.licenseService = licenseService;
	}
	@RequestMapping("/")
	public String index(Model model, @ModelAttribute("newperson") Person person) {
		return "/driverlicense/pnew.jsp";
	}
	@RequestMapping(value="/createp", method=RequestMethod.POST)
	public String createp(@Valid @ModelAttribute("newperson") Person person, BindingResult result) {
		if (result.hasErrors()) {
			return "/driverlicense/pnew.jsp";
		} else {
			personService.createPerson(person);
			return "redirect:/license";
		}
	}
	@RequestMapping("/license")
	public String portal(Model model, @ModelAttribute("newlicense") License license) {
		List<Person> newperson = personService.allPeople();
		model.addAttribute("people", newperson);
		return "/driverlicense/lnew.jsp";
	}
	@RequestMapping(value="/createlicense", method=RequestMethod.POST)
	public String createl(@Valid @ModelAttribute("newlicense") License license, BindingResult result) {
		if (result.hasErrors()) {
			return "driverlicense/lnew.jsp";
		} else {
			licenseService.createLicense(license);
			return "redirect:/";
		}
	}
}
