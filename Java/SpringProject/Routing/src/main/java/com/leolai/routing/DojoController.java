package com.leolai.routing;

import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
public class DojoController {
    @RequestMapping("/{location}")
    public String showLlocation(@PathVariable("location") String place){
    	if (place.equals("dojo")) {
    		return "The dojo is awesome!";
    	}
    	else if (place.equals("burbank-dojo")) {
    		return "Burbank Dojo is located in Southern California";
    	}
    	else if (place.equals("san-jose")) {
    		return "SJ dojo is the headquarters";
    	}
    	return place;
    }
}
