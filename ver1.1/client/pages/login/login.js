
Page({

  /**
   * 页面的初始数据
   */
  data: {
    items: [
      { name: 'Cashier', value: '收银员', checked: 'true' },
      { name: 'Manager', value: '经理' },
      { name: 'Member', value: '会员' },
      { name: 'Gover', value: '系统管理员' }
    ],
    choosed:'Cashier',
    userName:'',
    passWord:'',
    isenter:null

  },
  radioChange: function (e) {
    console.log('radio发生change事件，携带value值为：', e.detail.value)
    this.setData({
      choosed:e.detail.value
    })
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
    
  }
  ,
  goRegister:function(e){//跳转注册页面
    wx.navigateTo({
       url: '../../pages/reg/reg'
    })
  },
  submit:function(e){//提交校验登录
     var that=this
    var isSucessed = false//默认没有登录成功
    var that = this
    //初始化云开发环境
    wx.cloud.init({
      env: 'bjutenviron-ew7fn'
    })
    //连接到数据库
    const db = wx.cloud.database()
    if (that.data.choosed ==='Cashier'){
      db.collection('Cashier').where({
        userName:that.data.userName
      })
        .get({
          success: function (res) {
            // res.data 是包含以上定义的两条记录的数组
            console.log(res.data)
            if (res.data[0].passWord===that.data.passWord){
              wx.navigateTo({
                url: '../../pages/getMoney/getMoney'
              })
            }
            else{
              wx.showToast({
                title: '登录失败!,账号或密码不正确!',
                icon: 'none',
                duration: 2000
              })
            }
           
          }
        })
      // wx.navigateTo({
      //         url: '../../pages/getMoney/getMoney'
      // })
      
    }
    else if (that.data.choosed === 'Manager'){
      db.collection('Manager').where({
        userName: that.data.userName
      })
        .get({
          success: function (res) {
            // res.data 是包含以上定义的两条记录的数组
            console.log(res.data)
            if (res.data[0].passWord === that.data.passWord) {
              wx.navigateTo({
                url: '../../pages/goodsList/goodsList'
              })
            }
            else {
              wx.showToast({
                title: '登录失败!,账号或密码不正确!',
                icon: 'none',
                duration: 2000
              })
            }

          }
        })
      // wx.navigateTo({
      //   url: '../../pages/goodsList/goodsList'
      // })
    }
    else if (that.data.choosed ==='Member'){
      db.collection('Member').where({
        userName: that.data.userName
      })
        .get({
          success: function (res) {
            // res.data 是包含以上定义的两条记录的数组
            console.log(res.data)
            if (res.data[0].passWord === that.data.passWord) {
              wx.navigateTo({
                url: '../../pages/rec/rec'
              })
            }
            else {
              wx.showToast({
                title: '登录失败!,账号或密码不正确!',
                icon: 'none',
                duration: 2000
              })
            }

          }
        })
      // wx.navigateTo({
      //   url: '../../pages/rec/rec'
      // })
    }
    else if (that.data.choosed ==='Gover'){
      db.collection('Gover').where({
        userName: that.data.userName
      })
        .get({
          success: function (res) {
            // res.data 是包含以上定义的两条记录的数组
            console.log(res.data)
            if (res.data[0].passWord === that.data.passWord) {
              wx.navigateTo({
                url: '../../pages/manage/manage'
              })
            }
            else {
              wx.showToast({
                title: '登录失败!,账号或密码不正确!',
                icon: 'none',
                duration: 2000
              })
            }

          }
        })
      // wx.navigateTo({
      //   url: '../../pages/manage/manage'
      // })
    }
  }
  ,
  getUserName: function (e) {//获取用户名
    this.setData({
      userName:e.detail.value
    })
  }
  ,
  getPassWord:function(e){//获取密码
    this.setData({
      passWord: e.detail.value
    })
  }
})