// pages/config/config.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userName:'',
    userNum:'',
    passWord:'',
    ensurePassWord:'',
    Money:0//缴纳的钱数
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
  handleInputPhone:function(event){//获取用户名
    this.setData({
      userName:event.detail.value
    })
  },
  handleVerificationCode:function(event){//获取工号
    this.setData({
      userNum:event.detail.value
    })
  },
  handleNewChanges:function(event){//获取密码
    this.setData({
      passWord:event.detail.value
    })
  },
  handleNewChangesAgain:function(event){
    this.setData({
      ensurePassWord:event.detail.value
    })
  },
  submit:function(event){//提交注册信息
    if(this.data.Money<10){
      wx.showToast({
        title: '输入金额不足!',
        icon: 'none',
        duration: 2000
      })
      return
    }
    else if(this.data.Money>10){
      wx.showToast({
        title: '找零:'+(this.data.Money-10),
        icon: 'none',
        duration: 2000
      })
    }
    var that=this
    //初始化云开发环境
    wx.cloud.init({
      env: 'bjutenviron-ew7fn'
    })
    //连接到数据库
    const db = wx.cloud.database()
    //上传到对应的register数据库
    //判断两次输入的密码是否相等
    if(that.data.passWord===that.data.ensurePassWord){
      db.collection('Member').add({
        data: {
          userName: that.data.userName,
          passWord: that.data.passWord
        },
        success: function (res) {
          // res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
          console.log(res)
        }
      })
      //提示上传成功了
      wx.showToast({
        title: '成功',
        icon: 'success',
        duration: 2000
      })
    }
    else{
      wx.showToast({
        title: '注册失败，前后输入密码不一致',
        icon: 'none',
        duration: 2000
      })
    }

  }
  ,
  handleInputMoney:function(e){//输入钱数
    this.setData({
      Money: parseInt(e.detail.value) 
    })
  }
 
  

})