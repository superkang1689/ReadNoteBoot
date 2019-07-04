package com.springboot.wechatservice.controller;

import com.springboot.wechatservice.entity.Money;
import com.springboot.wechatservice.service.MoneyResponsitory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
public class MoneyController {
    @Autowired
    private MoneyResponsitory moneyResponsitory;

    //插入销售信息
    @GetMapping("insertIntoMoney")
    //http:localhost:8888/insertIntoMoney?name=牙刷&money=45&numbers=15&brand=中华
    public boolean insertIntoMoney(String name, float money, int numbers, String brand){
        Money money1=new Money(name,money,numbers,brand);
        moneyResponsitory.save(money1);
        return true;
    }

    //更新销售信息
    //http://localhost:8888/updataMoney
    @GetMapping("updataMoney")
    public  boolean updataMoney(String name, float money, int numbers, String brand,int id){
        Money money1=new Money(name,money,numbers,brand,id);
        moneyResponsitory.save(money1);
        return  true;
    }

    //查询商品的销售信息
    @GetMapping("findMoneyInfoByNameAndBrand")
    public List<Money> findMoneyInfoByNameAndBrand(String name,String brand){
        List<Money> monies=moneyResponsitory.findByNameAndBrand(name,brand);
        return  monies;
    }

    //按照销售量查询商品
    //http://localhost:8888/findGoodsBySales
    @GetMapping("findGoodsBySales")
    public List<Money> findGoodsBySales(){
        return  moneyResponsitory.findAllByOrderByNumbersDesc();
    }

    //按照销售额来查询商品
    //http://localhost:8888/findGoodsByMoney
    @GetMapping("findGoodsByMoney")
    public List<Money> findMoneyByAllMoney(){
        return moneyResponsitory.findAllByOrderByAllMoneyDesc();
    }

    //按照id来查询商品
    //http://localhost:8888/findMoneyById
    @GetMapping("findMoneyById")
    public Money findMoneyById(int id){
        return  moneyResponsitory.findOne(id);
    }

    



}
