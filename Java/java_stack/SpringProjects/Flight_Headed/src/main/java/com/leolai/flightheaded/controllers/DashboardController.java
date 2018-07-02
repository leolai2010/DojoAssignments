package com.leolai.flightheaded.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.RequestMapping;

import com.leolai.flightheaded.models.Alcohol;
import com.leolai.flightheaded.models.User;
import com.leolai.flightheaded.services.AlcoholService;
import com.leolai.flightheaded.services.UserService;

@Controller
public class DashboardController {
	private final AlcoholService alcoholService;
	private final UserService userService;
		
	public DashboardController(AlcoholService alcoholService, UserService userService) {
		this.alcoholService = alcoholService;
		this.userService = userService;
	}
	@RequestMapping("/dashboard")
	public String home(HttpSession session, Model model) {
		Long userId = (Long) session.getAttribute("userId");
		User user = userService.findUserById(userId);
		model.addAttribute("user", user);
	    return "dashboard.jsp";
	}
	@RequestMapping("/logout")
	public String logout(HttpSession session) {
    session.invalidate();
    return "redirect:/";
    }
	@RequestMapping("/application")
	public String application(HttpSession session, Model model) {
		Long userId = (Long) session.getAttribute("userId");
		User user = userService.findUserById(userId);
		model.addAttribute("user", user);
	    return "application.jsp";
	}
	@RequestMapping("/about")
	public String about(HttpSession session, Model model) {
		Long userId = (Long) session.getAttribute("userId");
		User user = userService.findUserById(userId);
		model.addAttribute("user", user);
	    return "about.jsp";
	}
}
