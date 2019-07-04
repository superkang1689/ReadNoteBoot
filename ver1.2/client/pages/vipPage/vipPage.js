// pages/vipPage/vipPage.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    userId:'',//用户名
    passWord:''//密码

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
  getId:function(e){
    this.setData({
      userId:e.detail.value
    })

  },
  getPassword:function(e){
    this.setData({
      passWord:e.detail.value
    })
  },
  login:function(e){//进行登录验证密码
  console.log(this.data.userId)
    console.log(this.data.passWord)
  var that=this
     wx.cloud.init({
      env: 'bjutenviron-ew7fn'
    })
    //连接到数据库
    const db = wx.cloud.database()
   db.collection('Member').where({
     userName: that.data.userId
    })
        .get({
          success: function (res) {
            // res.data 是包含以上定义的两条记录的数组
            
            console.log(res)
            if(res.data[0].passWord===that.data.passWord){
              console.log("登录成功!")
              wx.navigateTo({
                url: '../vipGetMoney/vipGetMoney',
              })
            }
            else if(res.data.length===0){
              wx.showToast({
                title: "账号不存在!",
                icon: 'none',
                duration: 2000
              })
            }
            else{
              wx.showToast({
                title: "账号或者密码不正确，登录失败!",
                icon: 'none',
                duration: 2000
              })
            }

          }
        })
  }

})