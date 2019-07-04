package com.springboot.wechatservice.service;

import com.springboot.wechatservice.entity.Employee;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface EmployeeRepository extends JpaRepository<Employee,Integer> {
    List<Employee> findByNameLike(String name);
    List<Employee> findByJobEquals(String job);
}
