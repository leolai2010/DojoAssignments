package com.leolai.counter;

import javax.servlet.http.HttpSession;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;

@Controller
public class Counter {
	@RequestMapping("/")
    public String index(HttpSession session){
        Integer count = (Integer) session.getAttribute("count");
        if(count == null) {
			count = 0;
		}
		else {
			count += 1;
		}
        session.setAttribute("count", count);
        return "index.jsp";
    }
}
