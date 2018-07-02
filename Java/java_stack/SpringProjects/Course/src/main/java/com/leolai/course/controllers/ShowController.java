package com.leolai.course.controllers;

import javax.servlet.http.HttpSession;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;

import com.leolai.course.models.User;
import com.leolai.course.services.UserService;
import com.leolai.course.models.Course;
import com.leolai.course.services.CourseService;

@Controller
public class ShowController {
	private final CourseService courseService;
	private final UserService userService;
	
	public ShowController(CourseService courseService, UserService userService) {
		this.courseService = courseService;
		this.userService = userService;
	}
	@RequestMapping("/show/{id}")
	public String show(HttpSession session, @PathVariable("id") Long id, Model model) {
		Course courseshow = courseService.findCourse(id);
		Long userId = (Long) session.getAttribute("userId");
		User user = userService.findUserById(userId);
		model.addAttribute("user", user);
		model.addAttribute("course",courseshow);
		java.util.Date date = new java.util.Date();
		model.addAttribute("date", date);
		model.addAttribute("people",courseService.howMany(id));
		return "show.jsp";
	}
}
