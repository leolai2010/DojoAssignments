package com.leolai.dojo.controllers;

import java.util.List;

import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.leolai.dojo.models.Dojo;
import com.leolai.dojo.models.Ninja;
import com.leolai.dojo.services.DojoService;
import com.leolai.dojo.services.NinjaService;

@Controller
public class DojoNinjaController {
	private final DojoService dojoService;
	private final NinjaService ninjaService;
	public DojoNinjaController(DojoService dojoService, NinjaService ninjaService) {
		this.dojoService = dojoService;
		this.ninjaService = ninjaService;
	}
	@RequestMapping("/dojos")
	public String index(@ModelAttribute("newdojo") Dojo dojo) {
		return "/dojoninja/dojo.jsp";
	}
	@RequestMapping(value="/createdojo", method=RequestMethod.POST) 
//	@PostMapping("/createdojo") <-- Shortcut
	public String CreateDojo(@Valid @ModelAttribute("newdojo") Dojo dojo, BindingResult result) {
		if(result.hasErrors()) {
			return "/dojoninja/dojo.jsp";
		} else {
			dojoService.createDojo(dojo);
			return "redirect:/dojos/ninjas";
		}
	}
	@RequestMapping("/dojos/ninjas")
	public String portal(Model model, @ModelAttribute("newninja") Ninja ninja) {
		List<Dojo> newdojo2 = dojoService.allDojo();
		model.addAttribute("dojos", newdojo2);
		return "/dojoninja/ninja.jsp";
	}
	@RequestMapping(value="/createninja", method=RequestMethod.POST)
	public String CreateNinja(@Valid @ModelAttribute("newninja") Ninja ninja, BindingResult result) {
		if(result.hasErrors()) {
			return "dojoninja/ninja.jsp";
		} else {
			ninjaService.createNinja(ninja);
			return "redirect:/dojos";
		}
	}
	@RequestMapping("/dojos/ninjas/{id}")
	public String showing(@PathVariable("id") Long id, Model model) {
		Dojo dojo = dojoService.findDojo(id);
		model.addAttribute("dojo", dojo);
		return "/dojoninja/show.jsp";
	}
//	@GetMapping("/dojos/ninjas/{id}") <-- shortcut
//	public String showing(@PathVariable("id") Long id, Model model) {
//		Dojo dojo = dojoService.findDojo(id);
//		model.addAttribute("dojo", dojo);
//		return "/dojoninja/show.jsp";
//	}
}
