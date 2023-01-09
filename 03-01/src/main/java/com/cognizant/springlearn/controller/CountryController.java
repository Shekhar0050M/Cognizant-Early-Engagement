package com.cognizant.springlearn.controller;

import java.util.ArrayList;	

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.service.CountryService;
import com.cognizant.springlearn.service.exception.CountryNotFoundException;

@RestController
public class CountryController {
	
	@RequestMapping("/country")
	public Country getCountryIndia() {
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		Country country = (Country) context.getBean("in");
		return country;	
	}
	
	@GetMapping("/countries")
	public ArrayList<Country> getAllCountries(){
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		@SuppressWarnings("unchecked")
		ArrayList<Country> countries = (ArrayList<Country>) context.getBean("countryList");
		return countries;
	}
	
	@GetMapping("countries/{code}")
	public Country testGetCountry(@PathVariable("code") String code) throws CountryNotFoundException {
		CountryService countryService = new CountryService();
		return countryService.getCountry(code);	
	}
}
