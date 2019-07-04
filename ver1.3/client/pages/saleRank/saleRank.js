Page({

  /**
   * 页面的初始数据
   */
  data: {
    uhide: 0,
    goodsList:null,
    sum:0
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var that = this;

    var data = {
      "datas": [
        {
          "id": 1,
          "useDate": "A",
          "cx": "20元",
          "kind": "XX",
        },
        {
          "id": 2,
          "useDate": "B",
          "cx": "20元",
          "kind": "XX",
        },
        {
          "id": 3,
          "useDate": "C",
          "cx": "20元",
          "kind": "XX",
        },
        {
          "id": 4,
          "useDate": "D",
          "cx": "20元",
          "kind": "XX",
        },
        {
          "id": 5,
          "useDate": "E",
          "cx": "20元",
          "kind": "XX",
        },
        {
          "id": 6,
          "useDate": "F",
          "cx": "20元",
          "kind": "XX",
        },
        {
          "id": 7,
          "useDate": "G",
          "cx": "20元",
          "kind": "XX",
        },
        {
          "id": 8,
          "useDate": "H",
          "cx": "20元",
          "kind": "XX",
        },
        {
          "id": 9,
          "useDate": "I",
          "cx": "20元",
          "kind": "XX",
        },
        {
          "id": 10,
          "useDate": "J",
          "cx": "20元",
          "kind": "XX",
        },
        {
          "id": 11,
          "useDate": "K",
          "cx": "20元",
          "kind": "XX",
        },
        {
          "id": 12,
          "useDate": "L",
          "cx": "20元",
          "kind": "XX",
        },
        {
          "id": 13,
          "useDate": "M",
          "cx": "20元",
          "kind": "XX",
        }
      ]
    };
    //console.log(data.datas);
    //设置展示信息
    that.setData({
      carInfoData: data.datas
    })
    //获取销售额排行
    var that = this
    wx.request({
      url: 'http://localhost:8888/findGoodsByMoney',
      method: 'get',
      success: function (res) {
        // success
        console.log(res.data)
       
        var Sum=0//总和
        for(let i=0;i<res.data.length;i++){
          Sum+=res.data[i].allMoney
        }
        that.setData({
          goodsList: res.data,
          sum:Sum
        })
      }

    })
  },

  //切换隐藏和显示 
  toggleBtn: function (event) {
    var that = this;
    var toggleBtnVal = that.data.uhide;
    var itemId = event.currentTarget.id;
    if (toggleBtnVal == itemId) {
      that.setData({
        uhide: 0
      })
    } else {
      that.setData({
        uhide: itemId
      })
    }
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

  }
})