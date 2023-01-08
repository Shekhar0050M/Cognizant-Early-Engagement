package com.cognizant.springlearn;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;

@SpringBootApplication
public class SpringLearnApplication {

	private static final Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

	public static void main(String[] args) {
		SpringApplication.run(SpringLearnApplication.class, args);
		displayDate();
		displayCountry();
		displayCountries();
	}

	public static void displayDate() {
		LOGGER.info("START");
		ApplicationContext context = new ClassPathXmlApplicationContext("date-format.xml");
		SimpleDateFormat format = context.getBean("dateFormat", SimpleDateFormat.class);
		Date date;
		try {
			date = format.parse("31/12/2018");
			System.out.println(date);
			LOGGER.debug(date.toString());
		} catch (ParseException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		LOGGER.info("END");
	}

	public static void displayCountry() {
		LOGGER.info("START");
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		Country country = (Country) context.getBean("country", Country.class);
		LOGGER.debug("Country : {}", country.toString());
		LOGGER.info("END");
	}

	public static void displayCountries() {
		LOGGER.info("START");
		ApplicationContext context = new ClassPathXmlApplicationContext("country.xml");
		ArrayList<Country> countries = (ArrayList<Country>) context.getBean("countryList", ArrayList.class);
		for (int i = 0; i < countries.size(); i++) {
			LOGGER.debug(countries.get(i).getName());
		}
		LOGGER.info("END");
	}

}
