package com.cognizant.employee.DAO;

import java.util.ArrayList;

import org.springframework.context.ApplicationContext;
import org.springframework.context.support.ClassPathXmlApplicationContext;
import org.springframework.stereotype.Component;

import com.cognizant.employee.model.Employee;

@Component
public class EmployeeDAO {

    private static ArrayList<Employee> EMPLOYEE_LIST ;
    private ApplicationContext context;

    @SuppressWarnings("unchecked")
	public EmployeeDAO(){
        context = new ClassPathXmlApplicationContext("employee.xml");
        EMPLOYEE_LIST = context.getBean("employeeList",ArrayList.class);

    }

    public ArrayList<Employee> getAllEmployees(){
        return EMPLOYEE_LIST;
    }

}
