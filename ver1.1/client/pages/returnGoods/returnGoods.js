// pages/returnGoods/returnGoods.js
Page({

  /**
  * 页面的初始数据
  */
  data: {
    texts: "至少5个字",
    min: 5,//最少字数
    max: 100, //最多字数 
    reson:'',//退货的理由
    name:'',//货物的名称
    numbers:0,//货物的数量
    price:0
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
  inputs: function (e) {
    // 获取输入框的内容
    var value = e.detail.value;
    // 获取输入框内容的长度
    var len = parseInt(value.length);

    //最少字数限制
    if (len <= this.data.min)
      this.setData({
        texts: "最低五个字"
      })
    else if (len > this.data.min)
      this.setData({
        texts: " "
      })

    //最多字数限制
    if (len > this.data.max) return;
    // 当输入框内容的长度大于最大长度限制（max)时，终止setData()的执行
    this.setData({
      currentWordNumber: len,//当前字数
      reson:value
    });
  },
  getName:function(e){//获取名称
    this.setData({
      name:e.detail.value
    })
  },
  getNumbers:function(e){//获取数量
    var numbers=e.detail.value
    var num=parseInt(numbers)
    this.setData({
      numbers:num
    })
  },
  returnGoods:function(e){//确定退货
    //向云端发送数据
    var that=this
    wx.cloud.init({//初始化云环境
      env: 'bjutenviron-ew7fn'
    })
    const db = wx.cloud.database()//连接到云端数据库
    db.collection('ReturnGoodsList').add({
      data: {
        name:that.data.name,
        numbers:that.data.numbers,
        reason: that.data.reson

      },
      success: function (res) {
        // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
        console.log(res)
        wx.showToast({
          title: '信息已经上报！',
          icon: 'none',
          duration: 2000
        })
      }
    })
  },
  getPrice:function(e){//获取单价
    var price=parseInt(e.detail.value)
    this.setData({
      price:price
    })
  }

})