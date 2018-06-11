package com.pets.web.models;

public class Cat extends Animal implements Pet {

	public Cat(String name, String breed, Double weight) {
		super(name, breed, weight);// TODO Auto-generated constructor stub
	}
	@Override
	public String showAffection() {
		// TODO Auto-generated method stub
		return "Your " +getBreed()+ " cat, " +getName()+ " looked at you with some affection. You think." ;
	}

}
