package com.springboot.wechatservice.entity;

import javax.persistence.*;
import java.util.Date;

@Entity
@Table(name="Goods")
public class Goods {
    @Id
    @GeneratedValue(strategy= GenerationType.AUTO)
    private int id;//该商品的id
    private String name;//名称
    private int numbers;//数目
    private Date qualityTime;//保质期
    private Date buyTime;//购买的时间
    private Date lastOutTime;//最近一次出库的时间
    private Date today;//今天日期
    private String brand;//品牌
    private float price;//单价
    //商品
    public  Goods(){

    }

    public Goods(int id,String name,int numbers,Date qualityTime,Date buyTime,Date lastOutTime,Date today,String brand,float price){
        this.id=id;
        this.name=name;
        this.qualityTime=qualityTime;
        this.buyTime=buyTime;
        this.lastOutTime=lastOutTime;
        this.today=today;
        this.brand=brand;
        this.price=price;
        this.numbers=numbers;
    }

    public Goods(String name,int numbers,Date qualityTime,Date buyTime,Date lastOutTime,Date today,String brand,float price){
        this.name=name;
        this.numbers=numbers;
        this.qualityTime=qualityTime;
        this.buyTime=buyTime;
        this.lastOutTime=lastOutTime;
        this.today=today;
        this.brand=brand;
        this.price=price;
    }

    public void setId(int id) {
        this.id = id;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setNumbers(int numbers) {
        this.numbers = numbers;
    }

    public void setQualityTime(Date qualityTime) {
        this.qualityTime = qualityTime;
    }

    public void setBuyTime(Date buyTime) {
        this.buyTime = buyTime;
    }

    public void setLastOutTime(Date lastOutTime) {
        this.lastOutTime = lastOutTime;
    }

    public void setToday(Date today) {
        this.today = today;
    }

    public int getId() {
        return id;
    }

    public String getName() {
        return name;
    }

    public int getNumbers() {
        return numbers;
    }

    public Date getQualityTime() {
        return qualityTime;
    }

    public Date getBuyTime() {
        return buyTime;
    }

    public Date getLastOutTime() {
        return lastOutTime;
    }

    public Date getToday() {
        return today;
    }

    public float getPrice(){
        return price;
    }

    public String getBrand(){
        return  brand;
    }

}
