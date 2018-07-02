package com.leolai.countries.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.leolai.countries.models.City;
import com.leolai.countries.models.Country;
import com.leolai.countries.models.Language;
import com.leolai.countries.repositories.CityRepository;
import com.leolai.countries.repositories.CountryRepository;
import com.leolai.countries.repositories.LanguageRepository;

@Service
public class ApiService {
	private final CountryRepository countryRepo;
	private final CityRepository cityRepo;
	private final LanguageRepository langRepo;
	
	public ApiService(CountryRepository countryRepo, CityRepository cityRepo, LanguageRepository langRepo) {
		this.countryRepo = countryRepo;
		this.cityRepo = cityRepo;
		this.langRepo = langRepo;
	}
	public List<Country> allCountry() {
		return countryRepo.findAll();
	}
	public List<City> allCity() {
		return cityRepo.findAll();
	}
	public List<Language> allLanguage() {
		return langRepo.findAll();
	}
	public List<Object[]> Slovene() {
		List<Object[]> table = countryRepo.joinSlovene();
		return table;
	}
	public List<Object[]> Mexico() {
		List<Object[]> table = countryRepo.joinMexico();
		return table;
	}
	public List<Object[]> Cityjoin() {
		List<Object[]> table = countryRepo.joinCity();
		return table;
	}
	public List<Object[]> LangPopjoin() {
		List<Object[]> table = countryRepo.joinLangPop();
		return table;
	}
	public List<Object[]> OrderSnP() {
		List<Object[]> table = countryRepo.findSnP();
		return table;
	}
	public List<Object[]> gCLife() {
		List<Object[]> table = countryRepo.govCapLife();
		return table;
	}
	public List<Object[]> cDisPop() {
		List<Object[]> table = countryRepo.cityDisPop();
		return table;
	}
	public List<Object[]> rCCount() {
		List<Object[]> table = countryRepo.regionCCount();
		return table;
	}
}
