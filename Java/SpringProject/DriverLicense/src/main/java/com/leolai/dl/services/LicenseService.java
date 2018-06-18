package com.leolai.dl.services;

import java.util.List;
import java.util.Optional;

import org.springframework.stereotype.Service;

import com.leolai.dl.models.License;
import com.leolai.dl.repositories.LicenseRepository;

@Service
public class LicenseService {
	private final LicenseRepository licenseRepo;
	private String licnum = "000001";
	
	public LicenseService(LicenseRepository licenseRepo) {
		this.licenseRepo = licenseRepo; 
	}
	public List<License> allLicenses() {
		return licenseRepo.findAll();
	}
	public License createLicense(License license) {
		license.setNumber(licnum);
		licnum = String.format("%60d", Integer.parseInt(licnum) + 1);
		return licenseRepo.save(license);
	}
	public License findLicense(Long id) {
		Optional<License> optionalLicense = licenseRepo.findById(id);
		if(optionalLicense.isPresent()) {
			return optionalLicense.get();
		} else {
			return null;
		}
	}
}
