package com.cognizant.springlearn.service;

import java.util.ArrayList;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Service;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.service.exception.CountryNotFoundException;

@Service
public class CountryService {
	public Country getCountry(String code) throws CountryNotFoundException{
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		@SuppressWarnings("unchecked")
		ArrayList<Country> country = (ArrayList<Country>) context.getBean("countryList",ArrayList.class);
		for(int i=0;i<country.size();i++) {
			if(code.equalsIgnoreCase(country.get(i).getCode())){
				return (Country) context.getBean(code);
			}
		}
		throw new CountryNotFoundException("Country not found");
	}
}
