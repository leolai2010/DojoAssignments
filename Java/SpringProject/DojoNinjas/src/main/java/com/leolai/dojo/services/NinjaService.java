package com.leolai.dojo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.leolai.dojo.models.Ninja;
import com.leolai.dojo.repositories.NinjaRepository;

@Service
public class NinjaService {
	private final NinjaRepository ninjaRepo;
	
	public NinjaService (NinjaRepository ninjaRepo) {
		this.ninjaRepo = ninjaRepo;
	}
	public List<Ninja> allNinja() {
		return ninjaRepo.findAll();
	}
	public Ninja createNinja(Ninja ninja) {
		return ninjaRepo.save(ninja);
	}
	public Ninja findNinja(Long id) {
		Optional<Ninja> optionalNinja = ninjaRepo.findById(id);
		if(optionalNinja.isPresent()) {
			return optionalNinja.get();
		} else {
			return null;
		}
	}
}
