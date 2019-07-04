// pages/cashier/cashier.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsName: '',//商品的名称
    goodsNum: 0,//商品数量
    total: 0,//总价
    getSucess: false,//是否成功
    brand: '',//品牌
    price: 0,//单价
    goodInfo: null,//商品的信息
    bookList: []

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },

  multiplication: function (event) {//计算当前的总价

  }
  ,
  getGoodsName: function (e) {//获取商品的名称
    this.setData({
      goodsName: e.detail.value
    })
  }
  ,
  getGoodsNumbers: function (event) {//获取商品的数目
    var snum = event.detail.value
    var num = parseInt(snum)
    this.setData({
      goodsNum: num
    })
  },
  multiplication: function () {
    //获取商品单价
    var that = this
    wx.request({
      url: 'http://localhost:8888/findGoodsInfoByName',
      data: {
        name: that.data.goodsName,
        brand: that.data.brand
      },
      method: 'get',
      success: function (res) {
        // success
        console.log(res.data)
        var all = that.data.total + res.data.price * that.data.goodsNum*0.90

        if (isNaN(all)) {

          wx.showToast({
            title: '商品名称不正确，或者该商品不在库中!',
            icon: 'none',
            duration: 2000
          })

          //添加订单信息
        }
        else {
          //获取商品列表
          var goodsList = []
          goodsList = that.data.bookList
          //添加商品

          var good = []
          good.push(res.data.name)//商品名称
          good.push(that.data.goodsNum)//商品数目
          good.push(res.data.price*0.90)//商品的单价
          good.push(res.data.price *0.90* that.data.goodsNum)//总计价格
          good.push(res.data.id)//商品的id
          good.push(res.data.brand)//商品的品牌
          goodsList.push(good)


          console.log("all=" + all)
          that.setData({
            total: all,
            bookList: goodsList
          })
          console.log(that.data.total)
        }


      }
    })
    //计算总价




  },
  getGoodsbrand: function (e) {
    this.setData({
      brand: e.detail.value
    })
  },
  order: function (e) {//生成对应订单
    //向云端发送订单的信息
    var that = this
    wx.cloud.init({//初始化云环境
      env: 'bjutenviron-ew7fn'
    })
    const db = wx.cloud.database()//连接到云端数据库
    db.collection('bookList').add({
      data: {
        bookList: that.data.bookList
      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
      }
    })
    //修改数据库中的销售记录
    //查询是否已经存在该销售记录
    for (let i = 0; i < that.data.bookList.length; i++) {
      //添加销售记录
      //查询该商品的销售记录是否存在
      wx.request({
        url: 'http://localhost:8888/findMoneyInfoByNameAndBrand',
        data:
        {
          name: that.data.bookList[i][0],
          brand: that.data.bookList[i][5]
        },
        method: 'get',
        success: function (res) {
          // success
          if (res.data.length === 0) {//如果该商品销售记录不存在的话
            //添加销售记录
            wx.request({
              url: 'http://localhost:8888/insertIntoMoney',
              data: {
                name: that.data.bookList[i][0],
                money: that.data.bookList[i][2]/0.9,//防止其修改数据库中的交易价格
                numbers: that.data.bookList[i][1],
                brand: that.data.bookList[i][5],
              },
              method: 'get',
              success: function (res) {
                // success
                console.log("res=" + res.data)
              }
            })
            //商品出库
            wx.request({
              url: 'http://localhost:8888/goodOutOfLibrary',
              data: {
                name: that.data.bookList[i][0],
                brand: that.data.bookList[i][5],
                outNumber: that.data.bookList[i][1]
              },
              method: 'get',
              success: function (res) {
                // success
                if (res.data) {//出库成功输出提示
                  wx.showToast({
                    title: '商品出库成功!',
                    icon: 'none',
                    duration: 2000
                  })
                }
                else {//出库失败输出提示
                  wx.showToast({
                    title: that.data.bookList[i][0] + "货量不足!",
                    icon: 'none',
                    duration: 2000
                  })
                }
              }
            })

          }
          else {//如果以前已经有该类型商品的销售记录的情况下
            //更新已经售出的数量
            wx.request({
              url: 'http://localhost:8888/updataMoney',//更新对应的商品售出条目
              data: {
                name: that.data.bookList[i][0],
                money: that.data.bookList[i][2]/0.9,
                numbers: that.data.bookList[i][1] + res.data[0].numbers,//问题可能出在这里了
                brand: that.data.bookList[i][5],
                id: res.data[0].id

              },
              method: 'get',
              success: function (res) {
                // success
                console.log(res.data)
              }
            })
            //商品出库
            wx.request({
              url: 'http://localhost:8888/goodOutOfLibrary',
              data: {
                name: that.data.bookList[i][0],
                brand: that.data.bookList[i][5],
                outNumber: that.data.bookList[i][1]
              },
              method: 'get',
              success: function (res) {
                // success
                if (res.data) {//如果出库成功
                  wx.showToast({
                    title: '商品出库成功!',
                    icon: 'none',
                    duration: 2000
                  })
                }
                else {//如果出库失败
                  wx.showToast({
                    title: that.data.bookList[i][0] + "货量不足!",
                    icon: 'none',
                    duration: 2000
                  })
                }
              }
            })
          }
        }
      })
    }




  }

})