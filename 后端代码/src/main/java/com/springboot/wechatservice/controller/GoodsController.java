package com.springboot.wechatservice.controller;

import com.springboot.wechatservice.entity.Goods;
import com.springboot.wechatservice.service.GoodsRespository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RestController;

import java.util.Date;
import java.util.List;

@RestController
public class GoodsController {

    @Autowired
    private GoodsRespository goodsRespository;

    //返回所有商品的信息
    //http://192.168.43.185:8888/getAllGoods
    @GetMapping("getAllGoods")
    public List<Goods> getAllGoods(){
        return goodsRespository.findAll();
    }

    //插入商品信息
    //http://localhost:8888/insertGoodsInfo?name=小明&numbers=10&qualityTime=2019-07-01 19:14:33&buyTime=2019-07-05 19:14:33&//
    @GetMapping("insertGoodsInfo")
    public boolean insertGoodsInfo(String name, int numbers, Date qualityTime, Date buyTime, Date lastOutTime, Date today,String brand,float price){
        Goods goods=new Goods(name,numbers,qualityTime,buyTime,lastOutTime,today,brand,price);
        goodsRespository.save(goods);
        return true;
    }

    //按照类查询查询商品的信息
    //http://localhost:8888/findGoodsInfoByName?name=牙膏&brand=中华
    @GetMapping("findGoodsInfoByName")
    public Goods findGoodsInfoByName(String name,String brand){
        Goods goods=goodsRespository.findByNameAndBrand(name,brand);
        return goods;
    }

    //按照商品的id查询商品的信息
    @GetMapping("findGoodsById")
    public List<Goods> findGoodsById(int id){
        List <Goods> goods=goodsRespository.findByIdEquals(id);
        return goods;
    }

    //按照id删除对应的商品信息
    @GetMapping("deleteGoodsById")
    public boolean deleteGoodsById(int id){
        goodsRespository.delete(id);
        return true;
    }


    //更新对应的商品信息
    @GetMapping("updataGoods")
    public boolean updataGoods(int id,String name,int numbers,Date qualityTime,Date buyTime,Date lastOutTime,Date today,String brand,float price) {
        Goods goods=new Goods(id,name,numbers,qualityTime,buyTime,lastOutTime,today,brand,price);
        goodsRespository.save(goods);
        return true;
    }

    //返回所有到期的商品
    @GetMapping("findAllOutOfTimeGoods")

    public List<Goods>   findAllOutOfTimeGoods()
    {
        Date today=new Date();
       List<Goods> goods=goodsRespository.findAll();
       for(Goods good:goods){
           if(good.getToday().compareTo(today)==1){
               goods.remove(good);
           }
       }
       return goods;
    }

    //返回所有销售空了的商品
    @GetMapping("findAllEmptyGoods")
    public List<Goods> findAllEmptyGoods(){
        List<Goods> goods=goodsRespository.findByNumbersEquals(0);
        return goods;
    }

    //商品出库，商品对应的数量对应减少
    //http://localhost:8888/goodOutOfLibrary?name=牙膏&brand=中华&outNumber=3
    @GetMapping("goodOutOfLibrary")
    boolean goodOutOfLibrary(String name,String brand,int outNumber)//商品的名称、商品的品牌、出库的数目
    {
        Goods goods=goodsRespository.findByNameAndBrand(name,brand);
        int remainNumbers=goods.getNumbers()-outNumber;
        if(goods==null||remainNumbers<0){
            return  false;
        }
        else{
            //int id,String name,int numbers,Date qualityTime,Date buyTime,Date lastOutTime,Date today,String brand,float price
            int id=goods.getId();
            String names=goods.getName();
            int numbers=goods.getNumbers();
            Date qualityTime=goods.getQualityTime();
            Date buyTime=goods.getBuyTime();
            Date lastOutTime=goods.getLastOutTime();
            Date today=goods.getToday();
            String brands=goods.getBrand();
            float price=goods.getPrice();

            Goods upGoodInfo=new Goods(id,names, remainNumbers,qualityTime,buyTime,lastOutTime,today,brand,price);
            System.out.println(upGoodInfo.getNumbers());
            goodsRespository.save(upGoodInfo);
            return true;
        }

    }

    @GetMapping("getGoodsInfoByRemainNumDesc")//按照库存排行来返回对应的信息
    public List<Goods> getGoodsInfoByRemainNum(){
        return goodsRespository.findAllByOrderByNumbersDesc();
    }




}
