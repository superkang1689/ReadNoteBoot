package com.springboot.wechatservice.entity;

import javax.persistence.*;

@Entity
@Table(name = "Money")
public class Money {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private  int id;//商品的销售情况id
    private String name;//商品购买的名字
    private float money;//该类商品的销售额
    private int numbers;//该类商品的销售量
    private String brand;//商品的品牌
    private float allMoney;//该商品的总价

    public Money(String name, float money, int numbers, String brand,int id) {
        this.name = name;
        this.money = money;
        this.numbers = numbers;
        this.brand = brand;
        this.id=id;
        this.allMoney=this.money*this.numbers;
    }

    public Money(String name, float money, int numbers, String brand) {
        this.name = name;
        this.money = money;
        this.numbers = numbers;
        this.brand = brand;
        this.allMoney=this.money*this.numbers;
    }

    public Money(){

    }

    public String getName() {
        return name;
    }

    public float getMoney() {
        return money;
    }

    public int getNumbers() {
        return numbers;
    }

    public String getBrand() {
        return brand;
    }

    public int getId(){
        return  id;
    }

    public float getAllMoney(){
        return allMoney;
    }



    public void setName(String name) {
        this.name = name;
    }

    public  void setId(int id){
        this.id=id;
    }


    public void setMoney(float money) {
        this.money = money;
    }

    public void setNumbers(int numbers) {
        this.numbers = numbers;
    }

    public void setBrand(String brand) {
        this.brand = brand;
    }

    public void setAllMoney(float allMoney){
        this.allMoney=allMoney;
    }



}
