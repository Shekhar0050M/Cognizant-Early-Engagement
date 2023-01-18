package com.cognizant.springlearn.controller;

import java.util.ArrayList;

import javax.validation.Valid;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.cognizant.springlearn.model.Country;
import com.cognizant.springlearn.service.CountryService;
import com.cognizant.springlearn.service.exception.CountryNotFoundException;

@RestController
public class CountryController {

	private static Logger LOGGER = LoggerFactory.getLogger(CountryController.class);

	@Autowired
	CountryService countryService;

	@RequestMapping("/country")
	public Country getCountryIndia() {
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		Country country = (Country) context.getBean("in");
		return country;
	}

	@GetMapping("/countries")
	public ArrayList<Country> getAllCountries() {
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		@SuppressWarnings("unchecked")
		ArrayList<Country> countries = (ArrayList<Country>) context.getBean("countryList");
		return countries;
	}

	@GetMapping("countries/{code}")
	public Country testGetCountry(@PathVariable("code") String code) throws CountryNotFoundException {
		countryService = new CountryService();
		return countryService.getCountry(code);
	}

	@PostMapping("/countries")
	public Country addCountry(@RequestBody @Valid Country country) {
		LOGGER.info("START");
		LOGGER.debug(country.toString());

		// // Create validator factory
		// ValidatorFactory factory = Validation.buildDefaultValidatorFactory();
		// Validator validator = factory.getValidator();
		// // Validation is done against the annotations defined in country bean
		// Set<ConstraintViolation<Country>> violations = validator.validate(country);
		// List<String> errors = new ArrayList<String>();
		// // Accumulate all errors in an ArrayList of type String
		// for (ConstraintViolation<Country> violation : violations) {
		// errors.add(violation.getMessage());
		// }
		// // Throw exception so that the user of this web service receives appropriate
		// // error message
		// if (violations.size() > 0) {
		// throw new ResponseStatusException(HttpStatus.BAD_REQUEST, errors.toString());
		// }

		return country;
	}
}
