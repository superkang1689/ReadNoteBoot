// pages/cashier/cashier.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    goodsName:'',//商品的名称
    goodsNum:0,//商品数量
    total:0,//总价
    getSucess:false,//是否成功
    brand:'',//品牌
    price:0,//单价
    goodInfo:null,//商品的信息
    bookList:[]
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
  getGoodsName:function(e){//获取商品的名称
    this.setData({
     goodsName:e.detail.value
    })
  }
  ,
  getGoodsNumbers:function(event){//获取商品的数目
    var snum=event.detail.value
    var num=parseInt(snum)
    this.setData({
      goodsNum:num
    })
  },
  multiplication:function(){
    //获取商品单价
    var that = this
    wx.request({
      url: 'http://localhost:8888/findGoodsInfoByName',
      data: { 
        name:that.data.goodsName,
        brand:that.data.brand
       },
      method: 'get',
      success: function (res) {
        // success
       console.log(res.data)
       //获取商品列表
       var goodsList=[]
       goodsList=that.data.bookList
       //添加商品
       var good=[]
       good.push(res.data.name)//商品名称
       good.push(that.data.goodsNum)//商品数目
       good.push(res.data.price)//商品的单价
       good.push(res.data.price * that.data.goodsNum)//总计价格
       goodsList.push(good)

       var all=that.data.total+res.data.price*that.data.goodsNum
       that.setData({
        total:all,
        bookList:goodsList
       })
       console.log(that.data.total)
       //添加订单信息

      }
    })
    //计算总价
   
 
 

  },
  getGoodsbrand:function(e){
    this.setData({
      brand:e.detail.value
    })
  },
  order:function(e){
    console.log(this.data.bookList)
  }
  
})