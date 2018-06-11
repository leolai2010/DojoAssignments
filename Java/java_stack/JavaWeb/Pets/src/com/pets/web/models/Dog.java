package com.pets.web.models;

public class Dog extends Animal implements Pet{
	public Dog(String name, String breed, Double weight) {
		super(name, breed, weight);
		// TODO Auto-generated constructor stub
	}

	@Override
	public String showAffection() {
		// TODO Auto-generated method stub
		if (getWeight() < 30) {
			return getName()+ " hopped into your lap and cuddled you!";
		}
		else if (getWeight() >=30) {
			return getName()+ " curl up next to you!";
		}
		return null;
	}

}
