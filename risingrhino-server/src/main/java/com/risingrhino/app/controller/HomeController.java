package com.risingrhino.app.controller;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost:8080/", maxAge = 3600)
@RestController
public class HomeController {

	@GetMapping(value = "/welcome")
	public String getHome() {
		return "Welcome Aboard!";
	}

}
