package com.leolai.countries.controller;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

import com.leolai.countries.services.ApiService;

@Controller
public class CountriesApi {
	private final ApiService apiService;
	public CountriesApi(ApiService apiService) {
		this.apiService = apiService;
	}
	@RequestMapping("/")
	public String index(Model model) {
		model.addAttribute("slovene", apiService.Slovene());
		model.addAttribute("city", apiService.Cityjoin());
		model.addAttribute("mexico", apiService.Mexico());
		model.addAttribute("langpop", apiService.LangPopjoin());
		model.addAttribute("SnP", apiService.OrderSnP());
		model.addAttribute("gcl", apiService.gCLife());
		model.addAttribute("cdp", apiService.cDisPop());
		model.addAttribute("rcc", apiService.rCCount());
		return "/index.jsp";
	}
}
