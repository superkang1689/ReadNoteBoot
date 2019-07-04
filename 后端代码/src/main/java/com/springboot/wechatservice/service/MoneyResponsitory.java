package com.springboot.wechatservice.service;

import com.springboot.wechatservice.entity.Money;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface MoneyResponsitory extends JpaRepository<Money,Integer> {
    List<Money> findByNameAndBrand(String name,String Brand);//根据商品类别和品牌来查询数据
    List<Money> findAllByOrderByNumbersDesc();//根据销售量来获取排行
    List<Money> findAllByOrderByAllMoneyDesc();//根据销售额来获取排行



}
