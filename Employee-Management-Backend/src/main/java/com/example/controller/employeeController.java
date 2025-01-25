package com.example.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import com.example.model.employee; // Capitalized class name
import com.example.service.employeeService; // Capitalized class name

@RestController  
@CrossOrigin("*")
public class employeeController {

    @Autowired
    private employeeService service;

    @GetMapping("/greet")
    public String greet() {
        return "Welcome to Spring Boot Project";
    }

    @PostMapping("/")
    public ResponseEntity<employee> saveEmp(@RequestBody employee emp) {
        return service.saveEmp(emp);
    }

    @GetMapping("/")
    public ResponseEntity<List<employee>> getAllData() {
        return service.getAllData();
    }

    @GetMapping("/{eid}")
    public ResponseEntity<employee> getDataById(@PathVariable int eid) {
        return service.getAllDataById(eid);
    }

    @DeleteMapping("/{eid}")
    public ResponseEntity<String> deleteDataById(@PathVariable int eid) {
        return service.deleteDataById(eid);
    }

    @PutMapping("/")
    public ResponseEntity<employee> updateDataById(@RequestBody employee emp) {
        return service.updateDataById(emp);
    }
}
