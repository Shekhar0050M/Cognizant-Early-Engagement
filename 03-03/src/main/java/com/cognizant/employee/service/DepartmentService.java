package com.cognizant.employee.service;

import java.util.ArrayList;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.cognizant.employee.DAO.DepartmentDAO;
import com.cognizant.employee.model.Department;

@Service
public class DepartmentService {

	@Transactional
	public ArrayList<Department> getAllDepartments(){
		DepartmentDAO departmentDAO = new DepartmentDAO();
		return departmentDAO.getAllDepartments();
	}
}
