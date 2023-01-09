package com.cognizant.springlearn.controller;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import com.cognizant.springlearn.SpringLearnApplication;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HelloController {

	private final static Logger LOGGER = LoggerFactory.getLogger(SpringLearnApplication.class);

	@GetMapping("/hello")
	public String sayHello() {
		LOGGER.info("START");
		return "Hello World!!";
	}
}
