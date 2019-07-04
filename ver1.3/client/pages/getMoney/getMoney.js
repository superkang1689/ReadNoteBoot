// pages/getMoney/getMoney.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    //订单数
    bookNum:0,
    //销售总额
    allMoney:0,
    sum:0,
    types:0

  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //获取对应信息
    var that = this
    wx.request({
      url: 'http://localhost:8888/findGoodsByMoney',
      method: 'get',
      success: function (res) {
        // success
        console.log(res.data)

        var Sum = 0//总和
        for (let i = 0; i < res.data.length; i++) {
          Sum += res.data[i].allMoney
        }
        that.setData({
          sum: Sum,
          types:res.data.length
        })
      }

    })
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
  gosale:function(e){//跳转到销售排行页面
    wx.navigateTo({
      url: '../sale/sale',
    })
  },
  gocashier:function(e){
    wx.navigateTo({
      url: '../cashier/cashier',
    })
  },
  returnGoods:function(e){
    wx.navigateTo({
      url: '../returnGoods/returnGoods',
    })
  },
  saleRank:function(e){
    wx.navigateTo({
      url: '../saleRank/saleRank',
    })
  },
  goVip:function(e){
    wx.navigateTo({
      url: '../vipPage/vipPage',
    })
  },
  goGoodsNum:function(e){
    wx.navigateTo({
      url: '../goGoodsNum/goGoodsNum',
    })
  }
})