package com.cognizant.employee.DAO;

import java.util.ArrayList;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Component;

import com.cognizant.employee.model.Department;

@Component
public class DepartmentDAO {

	private static ArrayList<Department> DEPARTMENT_LIST;
	private ApplicationContext context;

	@SuppressWarnings("unchecked")
	public DepartmentDAO() {
		context = new ClassPathXmlApplicationContext("employee.xml");
		DEPARTMENT_LIST = (ArrayList<Department>) context.getBean("departmentList");
	}

	public ArrayList<Department> getAllDepartments(){
		return DEPARTMENT_LIST;
	}
}
