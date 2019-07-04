package com.springboot.wechatservice.controller;

import com.springboot.wechatservice.entity.Employee;
import com.springboot.wechatservice.service.EmployeeRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class EmployController {
    @Autowired
    private EmployeeRepository employeeRepository;

    //插入员工信息
    //http://localhost:8888/insertEmployee?name=康玉健&sex=男&job=收银员&age=20&grade=1
    @GetMapping(value = "insertEmployee")
    public String insertEmployee(String name, String sex, String job, int age, int grade){
        Employee employee=new Employee(name,sex,job,age,grade);
        employeeRepository.save(employee);
        return "sucess";

    }

    //删除员工信息
    //http://localhost:8888/deleteEmployee?id=1
    @GetMapping(value = "deleteEmployee")
    public String deleteEmployee(Integer id){
        Employee employee=new Employee(id);
        employeeRepository.delete(employee);
        return "sucess";
    }

    //查询员工信息
    //http://localhost:8888/findEmployeeById?id=2
    @GetMapping(value="findEmployeeById")
    public Employee findEmployeeById(int id){

        Employee employee=employeeRepository.findOne(id);
        return employee;
    }
    //http:localhost:8888/findAllEmploy
    @GetMapping(value = "findAllEmploy")//查询所有的员工信息
    public List<Employee> findAllEmploy(){
        List<Employee> employeeList=employeeRepository.findAll();
        return employeeList;
    }

    //按照名称来查询对应的员工
    //http:localhost:8888/findEmployeeByName?name=康玉健
    @GetMapping(value = "findEmployeeByName")
    public List<Employee> findEmployeeByName(String name){
        return employeeRepository.findByNameLike(name);
    }

    //按照名称来修改对应员工
    //http:localhost:8888/updataEmployeeByName?name=康小健&sex=女&job=总经理&age=25&grade=10&id=1
    @GetMapping(value ="updataEmployeeByName")
    public boolean updataEmployeeByName(String name, String sex, String job, int age, int grade,int id){
        Employee employee=new Employee(name,sex,job,age,grade,id);
        employeeRepository.save(employee);
        return true;
    }
    //http:localhost:8888/findEmployeeByJob
    @GetMapping("findEmployeeByJob")//通过职位的名称来查询员工
    public List<Employee> findEmployeeByJob(String job){
        List<Employee> employeeList=employeeRepository.findByJobEquals(job);
        return employeeList;
    }



}
