package com.leolai.dojosurvey;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import javax.servlet.http.HttpSession;

@Controller
public class HomeController {
	@RequestMapping("/")
	public String index() {
		return "index.jsp";
	}
    @RequestMapping(value="/result", method=RequestMethod.POST)
    public String survey(HttpSession session, @RequestParam(value="firstname") String name, @RequestParam(value="country") String country , @RequestParam(value="language") String language, @RequestParam(value="subject") String comment) {
    	session.setAttribute("name", name);
    	session.setAttribute("country", country);
    	session.setAttribute("language", language);
    	session.setAttribute("comment", comment);
    	return "redirect:/result";
    }
	@RequestMapping("/result")
	public String result(HttpSession session) {
		return "result.jsp";
	}
}
