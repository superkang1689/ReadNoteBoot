// pages/getMoney/getMoney.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

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
  }
})