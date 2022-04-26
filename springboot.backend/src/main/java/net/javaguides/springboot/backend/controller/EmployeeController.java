package net.javaguides.springboot.backend.controller;

import net.javaguides.springboot.backend.model.Employee;
import net.javaguides.springboot.backend.repository.EmployeeRepository;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.beans.factory.annotation.Autowired;

import java.util.List;

@RestController
@RequestMapping("/api/v1/")
public class EmployeeController {

    @Autowired
    private EmployeeRepository employeeRepository;

    // get all employees

    @GetMapping("/employees")
    private List<Employee> getAllEmployees() {
        return employeeRepository.findAll();
    }
}