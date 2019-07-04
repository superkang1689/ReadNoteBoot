package com.springboot.wechatservice.service;

import com.springboot.wechatservice.entity.Goods;

import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Date;
import java.util.List;

public interface GoodsRespository extends JpaRepository<Goods,Integer> {
    public Goods findByNameAndBrand(String name,String brand);//通过商品的名称来获取商品信息
    public List<Goods> findByIdEquals(int id);//通过商品的id来获取商品的对应信息
    public List<Goods> findByNumbersEquals(int numbers);//获取到已经卖空了的商品列表
    public List<Goods> findAllByOrderByNumbersDesc();//通过库存量
}
