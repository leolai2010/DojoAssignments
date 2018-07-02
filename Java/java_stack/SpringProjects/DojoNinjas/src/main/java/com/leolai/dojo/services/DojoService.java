package com.leolai.dojo.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.leolai.dojo.models.Dojo;
import com.leolai.dojo.repositories.DojoRepository;

@Service
public class DojoService {
	private final DojoRepository dojoRepo;
	
	public DojoService (DojoRepository dojoRepo) {
		this.dojoRepo = dojoRepo;
	}
	public List<Dojo> allDojo() {
		return (List<Dojo>) dojoRepo.findAll();
	}
	public Dojo createDojo(Dojo dojo) {
		return dojoRepo.save(dojo);
	}
	public Dojo findDojo(Long id) {
		Optional<Dojo> optionalDojo = dojoRepo.findById(id);
		if(optionalDojo.isPresent()) {
			return optionalDojo.get();
		} else {
			return null;
		}
	}
}
