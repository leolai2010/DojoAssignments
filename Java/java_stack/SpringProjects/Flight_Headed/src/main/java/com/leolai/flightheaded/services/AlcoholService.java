package com.leolai.flightheaded.services;

import java.util.List;
import java.util.Optional;
import org.springframework.stereotype.Service;
import com.leolai.flightheaded.models.Alcohol;
import com.leolai.flightheaded.repositories.AlcoholRepository;
import com.leolai.flightheaded.repositories.UserRepository;

@Service
public class AlcoholService {
	private final UserRepository userRepository;
	private final AlcoholRepository alcoholRepository;
    
    public AlcoholService(UserRepository userRepository, AlcoholRepository alcoholRepository) {
        this.userRepository = userRepository;
    	this.alcoholRepository = alcoholRepository;
    }
    public List<Alcohol> allAlcohol() {
    	return (List<Alcohol>) alcoholRepository.findAll();
    }
	public Alcohol createAlcohol(Alcohol alcohol) {
		return alcoholRepository.save(alcohol);
	}
    public Alcohol findAlcohol(Long id) {
    	Optional<Alcohol> optionalCourse = alcoholRepository.findById(id);
    	if(optionalCourse.isPresent()) {
    		return optionalCourse.get();
    	} else {
    		return null;
    	}
    }
    public Alcohol updateAlcohol(Alcohol alcohol) {
    	return alcoholRepository.save(alcohol);
    }
    public Alcohol updateAlcohol(Long id, String type, Double percentAlcohol, Double servings) {
    	Alcohol updateAlcohol = alcoholRepository.findById(id).get();
    	updateAlcohol.setType(type);
    	updateAlcohol.setPercentAlcohol(percentAlcohol);
    	updateAlcohol.setServings(servings);
    	return alcoholRepository.save(updateAlcohol);
    }
    public void deleteAlcohol(Long id) {
    	alcoholRepository.deleteById(id);
    }
	public Double userinfocal(Integer weight, Double human, Double metarate, Integer hours) {
		Double alcoholtotal = alcoholRepository.sumalcohol();
		Double alcoholresult = (alcoholtotal*0.01882816/(weight/2.2)*human)-(metarate*hours);
		return alcoholresult;
	}
 
}
