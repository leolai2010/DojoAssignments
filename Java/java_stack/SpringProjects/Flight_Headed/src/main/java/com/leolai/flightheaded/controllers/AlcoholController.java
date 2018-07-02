package com.leolai.flightheaded.controllers;

import java.text.DecimalFormat;
import java.util.List;
import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import com.leolai.flightheaded.models.Alcohol;
import com.leolai.flightheaded.models.User;
import com.leolai.flightheaded.services.AlcoholService;
import com.leolai.flightheaded.services.UserService;

@Controller
public class AlcoholController {
	private final AlcoholService alcoholService;
	private final UserService userService;
	
	public AlcoholController(AlcoholService alcoholService, UserService userService) {
		this.alcoholService = alcoholService;
		this.userService = userService;
	}
	@RequestMapping("/calculator")
	public String calculator(@ModelAttribute("createalcohol")  Alcohol alcohol, @ModelAttribute("updatealcohol") Alcohol alcohole, Long id, HttpSession session, Model model) {
		Long userId = (Long) session.getAttribute("userId");
		User user = userService.findUserById(userId);
		List<Alcohol> alcoholshow = user.getBeers();
		model.addAttribute("alcohol", alcoholshow);
		model.addAttribute("user", user);
		model.addAttribute("userbacinfo", session.getAttribute("userbackinfo"));
	    return "calculator.jsp";
	}
	@RequestMapping(value="/createalcohol", method=RequestMethod.POST)
	public String createAlcohol(@ModelAttribute("createalcohol")  Alcohol alcohol, BindingResult result, RedirectAttributes redirectAttributes) {
		alcoholService.createAlcohol(alcohol);
		return "redirect:/calculator";

	}
	@RequestMapping(value="/delete/{id}")
	public String destory(@PathVariable("id") Long id) {
		 alcoholService.deleteAlcohol(id);
		 return "redirect:/calculator";
	}
	@RequestMapping("/edit/{id}")
	public String edit(@PathVariable("id") Long id, Model model, @ModelAttribute("updatealcohol") Alcohol alcohole) {
		 return "redirect:/calculator";
	}
	@RequestMapping(value="/edit/{id}", method=RequestMethod.PUT)
	public String update(@ModelAttribute("updatealcohol") Alcohol alcohole) {
		alcoholService.updateAlcohol(alcohole);
		return "redirect:/calculator";

	}
	@PostMapping("/calbac")
	public String calbac(@RequestParam("weight") Integer weight, @RequestParam("human") Double human, 
			@RequestParam("metarate") Double metarate, @RequestParam("hours") Integer hours, Model model, HttpSession session) {
		double userbacinfo = alcoholService.userinfocal(weight, human, metarate, hours);
		System.out.println(userbacinfo);
		session.setAttribute("userbacinfo", userbacinfo);
		return "redirect:/calculator";
	}
}
