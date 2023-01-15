package com.cognizant.employee.service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.employee.DAO.EmployeeDAO;
import com.cognizant.employee.model.Employee;

@Service
public class EmployeeService {

    @Transactional
    public ArrayList<Employee> getAllEmployees(){
        EmployeeDAO employeeDAO = new EmployeeDAO();
        return employeeDAO.getAllEmployees();
    }
}
