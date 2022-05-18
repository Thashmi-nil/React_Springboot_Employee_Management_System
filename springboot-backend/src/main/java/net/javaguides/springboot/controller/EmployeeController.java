package net.javaguides.springboot.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import net.javaguides.springboot.repository.EmployeeRepository;
import net.javaguides.springboot.model.Employee;

@CrossOrigin(origins = "http://localhost:3000")
@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {
	
	@Autowired
	private EmployeeRepository employeeRepository;
	
	// get all employees
	
	@GetMapping("/employees")
	private List<Employee> getAllEmployees(){
		return employeeRepository.findAll();
	}

	// create employee rest
	@PostMapping("/employees")
	public Employee createEmployee(@RequestBody Employee employee) {
		return employeeRepository.save(employee);
	}
}