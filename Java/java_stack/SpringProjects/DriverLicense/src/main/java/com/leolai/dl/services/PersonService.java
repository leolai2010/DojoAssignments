package com.leolai.dl.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.leolai.dl.models.Person;
import com.leolai.dl.repositories.PersonRepository;

@Service
public class PersonService {
	private final PersonRepository personRepo;
	
	public PersonService(PersonRepository licenseRepo) {
		this.personRepo = licenseRepo; 
	}
	public List<Person> allPeople() {
		return personRepo.findAll();
	}
	public Person createPerson(Person license) {
		return personRepo.save(license);
	}
	public Person findPerson(Long id) {
		Optional<Person> optionalPerson = personRepo.findById(id);
		if(optionalPerson.isPresent()) {
			return optionalPerson.get();
		} else {
			return null;
		}
	}
}
