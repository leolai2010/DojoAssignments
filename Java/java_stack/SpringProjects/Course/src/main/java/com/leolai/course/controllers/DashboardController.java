package com.leolai.course.controllers;

import java.util.List;

import javax.servlet.http.HttpSession;
import javax.validation.Valid;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.validation.BindingResult;
import org.springframework.web.bind.annotation.ModelAttribute;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.leolai.course.models.Course;
import com.leolai.course.models.User;
import com.leolai.course.services.CourseService;
import com.leolai.course.services.UserService;

@Controller
public class DashboardController {
	private final CourseService courseService;
	private final UserService userService;
	
	public DashboardController(CourseService courseService, UserService userService) {
	     this.courseService = courseService;
	     this.userService = userService;
	 }
	 @RequestMapping("/dashboard")
	 public String home(HttpSession session, Model model) {
		Long userId = (Long) session.getAttribute("userId");
		User user = userService.findUserById(userId);
		List<Course> allcourse  = courseService.allCourse();
		model.addAttribute("allcourse", allcourse);
        model.addAttribute("user", user);
        return "dashboard.jsp";
	 }
	 @RequestMapping("/new")
	 public String createcourse(Model model, HttpSession session, @ModelAttribute("newcourse") Course course) {
		 Long userId = (Long) session.getAttribute("userId");
		 User user = userService.findUserById(userId);
		 model.addAttribute("user", user);
		 return "new.jsp";
	 }
	 @RequestMapping("/newcourse")
	 public String newcourse(@Valid @ModelAttribute("newcourse") Course course, BindingResult result, HttpSession session) {
		 if(result.hasErrors()) {
			 return "new.jsp";
		 } else {
			 courseService.createCourse(course);
			 return "redirect:/dashboard";
		 }
	 }
	 @RequestMapping("/edit/{id}")
	 public String edit(@PathVariable("id") Long id, Model model, @ModelAttribute("editcourse") Course course) {
		 Course courseedit = courseService.findCourse(id);
		 model.addAttribute("courseedit", courseedit);
		 return "edit.jsp";
	 }
	 @RequestMapping(value="/edit/{id}", method=RequestMethod.PUT)
	 public String update(@Valid @ModelAttribute("editcourse") Course course, BindingResult result) {
		 if (result.hasErrors()) {
			 return "edit.jsp";
		 } else {
			 courseService.updateCourse(course);
			 return "redirect:/dashboard";
		 }
	 }
	 @RequestMapping(value="/delete/{id}")
	 public String destory(@PathVariable("id") Long id) {
		 courseService.deleteCourse(id);
		 return "redirect:/dashboard";
	 }
	 @RequestMapping("/join/{id}")
	 public String join(HttpSession session, @PathVariable("id") Long id) {
		 Long userId = (Long) session.getAttribute("userId");
		 User user = userService.findUserById(userId);
		 Course course = courseService.findCourse(id);
		 course.getUsers().add(user);
		 courseService.updateCourse(course);
		 return "redirect:/dashboard";
	 }
	 @RequestMapping("/cancel/{id}")
	 public String cancel(HttpSession session, @PathVariable("id") Long id) {
	     Long userId = (Long) session.getAttribute("userId");
	     User user = userService.findUserById(userId);
	     Course course = courseService.findCourse(id);
	     course.getUsers().remove(user);
		 courseService.updateCourse(course);
	     return "redirect:/show/"+id;
	 }
}
