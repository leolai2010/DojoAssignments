package com.leolai.displaydate;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Timecontroller {
	@RequestMapping("/")
	public String home() {
		return "index.jsp";
	}
	@RequestMapping("/date")
	public String date(Model model) {
		java.util.Date date = new java.util.Date();
		model.addAttribute("date", date);
		return "date.jsp";
	}
	@RequestMapping("/time")
	public String time(Model model) {
		java.util.Date date = new java.util.Date();
		model.addAttribute("time", date);
		return "time.jsp";
	}
}