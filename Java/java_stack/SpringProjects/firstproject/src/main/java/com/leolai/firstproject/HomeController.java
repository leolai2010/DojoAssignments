package com.leolai.firstproject;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
//import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
//import org.springframework.web.bind.annotation.RequestParam;
//import org.springframework.web.bind.annotation.RestController;

//@RestController
@Controller
public class HomeController {
	@RequestMapping("/")
	public String home(Model model) {
		model.addAttribute("dojoName", "Burbank");
		return "index.jsp";
	}
//	@RequestMapping("/")
//	public String index(@RequestParam(value="q", required=false) String searchQuery) {
//		if(searchQuery == null) {
//			return "You searched for: Nothing";
//		} else {
//		return "You Searched for: " + searchQuery;
//		}
//	}
//    @RequestMapping("/m/{track}/{module}/{lesson}")
//    public String showLesson(@PathVariable("track") String track, @PathVariable("module") String module, @PathVariable("lesson") String lesson){
//    	return "Track: " + track + ", Module: " + module + ", Lesson: " + lesson;
//    }
}
