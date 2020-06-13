package com.risingrhino.app.controller;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class HomeController {

	@GetMapping(value = "/welcome")
	public String getHome() {
		return "Welcome Aboard!";
	}

}
