package com.springboot.wechatservice.entity;

import javax.persistence.*;

@Entity
@Table(name="Employee")
public class Employee {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;//编号

    private  String name;//姓名

    private  String sex;//性别

    private  String job;//职位

    private int  age;//年龄

    private int grade;//等级

   public Employee(){

   }

    public Employee(String name, String sex, String job, int age, int grade,int id) {
        this.name = name;
        this.sex = sex;
        this.job = job;
        this.age = age;
        this.grade = grade;
        this.id=id;
    }

    public Employee(int id){
       this.id=id;
    }

    public Employee(String name, String sex, String job, int age, int grade) {
        this.name = name;
        this.sex = sex;
        this.job = job;
        this.age = age;
        this.grade = grade;
    }

    public long getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public String getSex() {
        return sex;
    }

    public String getJob() {
        return job;
    }

    public int getAge() {
        return age;
    }

    public int getGrade() {
        return grade;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setSex(String sex) {
        this.sex = sex;
    }

    public void setJob(String job) {
        this.job = job;
    }

    public void setAge(int age) {
        this.age = age;
    }

    public void setGrade(int grade) {
        this.grade = grade;
    }
}
