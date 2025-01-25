package com.example.service;

import java.util.List;

import org.springframework.http.ResponseEntity;

import com.example.model.employee; // Capitalized class name

public interface employeeService {
    ResponseEntity<employee> saveEmp(employee emp);
    ResponseEntity<List<employee>> getAllData();
    ResponseEntity<employee> getAllDataById(int eid);
    ResponseEntity<String> deleteDataById(int eid);
    ResponseEntity<employee> updateDataById(employee emp);
}
