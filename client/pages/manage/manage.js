// pages/manage/manage.js
var a, b, c, d, f, g, h, j, k;
Page({

  /**
   * 页面的初始数据
   */
  data: {
    listData: null,
    listData1: null,
    listData2: null,
    select_all: false,
    select_all1: false,
    select_all2: false,
    hiddenmodalput: true,
    hiddenmodalput1: true,
    hiddenmodalput2: true,
    hiddenmodalput3: true,
    hiddenmodalput4: true,
    hiddenmodalput5: true,
    chooseList: [],//要删除的项
    isSelect1: [],//是否选中收银员
    isSelect2: [],
    isSelect3: [],
  },

  cleanInput: function () {
    var setMessage = {
      sendInfo: this.data.userMessage
    }
    this.setData(setMessage)
  },

  //取消按钮
  cancel: function () {
    this.setData({
      hiddenmodalput: true,
      num: '',
      name: '',
      sex: '',
      age: ''
    });

  },
  cancel1: function () {
    this.setData({
      hiddenmodalput1: true,
      num1: '',
      name1: '',
      sex1: '',
      age1: ''
    });

  },
  cancel2: function () {
    this.setData({
      hiddenmodalput2: true,
      num2: '',
      name2: '',
      sex2: '',
      age2: ''
    });

  },
  cancel3: function () {
    this.setData({
      hiddenmodalput3: true,
      num3: '',
      name3: '',
      sex3: '',
      age3: ''
    });

  },
  cancel4: function () {
    this.setData({
      hiddenmodalput4: true,
      num4: '',
      name4: '',
      sex4: '',
      age4: ''
    });

  },
  cancel5: function () {
    this.setData({
      hiddenmodalput5: true,
      num5: '',
      name5: '',
      sex5: '',
      age5: ''
    });

  },
  //确认
  confirm: function (e) {
    var that = this
    var listData = this.data.listData
    var newd = [{ id: a, name: b, sex: c, age: d }]
    listData.push(newd[0])
    that.setData({
      hiddenmodalput: true,
      listData: listData,
      num: '',
      name: '',
      sex: '',
      age: ''
    })
    wx.request({
      url: 'http://192.168.43.185:8888/insertEmployee',
      data: {
        name: b,
        sex: c,
        job: "收银员",
        age: d,
        grade: 1
      },
      method: 'get',
      success: function (res) {
        // success
        console.log(res.data)

      }
    })
  },
  confirm1: function () {
    var that = this
    var listData = this.data.listData
    var newd = [{ id: a, name: b, sex: c, age: d }]
    listData.splice(f, 1, newd[0])
    that.setData({
      hiddenmodalput1: true,
      listData: listData,
      num1: '',
      name1: '',
      sex1: '',
      age1: ''
    })
    wx.request({
      url: 'http://192.168.43.185:8888/updataEmployeeByName',
      data: {
        name: b,
        sex: c,
        job: "收银员",
        age: d,
        grade: 1,
        id: h
      },
      method: 'get',
      success: function (res) {
        // success
        console.log(res.data)

      }
    })
  },
  confirm2: function (e) {
    var that = this
    var listData1 = this.data.listData1
    var newd = [{ id: a, name: b, sex: c, age: d }]
    listData1.push(newd[0])
    that.setData({
      hiddenmodalput2: true,
      listData1: listData1,
      num2: '',
      name2: '',
      sex2: '',
      age2: ''
    })
    wx.request({
      url: 'http://192.168.43.185:8888/insertEmployee',
      data: {
        name: b,
        sex: c,
        job: "客户经理",
        age: d,
        grade: 1
      },
      method: 'get',
      success: function (res) {
        // success
        console.log(res.data)

      }
    })
  },
  confirm3: function () {
    var that = this
    var listData1 = this.data.listData1
    var newd = [{ id: a, name: b, sex: c, age: d }]
    listData1.splice(f, 1, newd[0])
    that.setData({
      hiddenmodalput3: true,
      listData1: listData1,
      num3: '',
      name3: '',
      sex3: '',
      age3: ''
    })
    wx.request({
      url: 'http://192.168.43.185:8888/updataEmployeeByName',
      data: {
        name: b,
        sex: c,
        job: "客户经理",
        age: d,
        grade: 1,
        id: h
      },
      method: 'get',
      success: function (res) {
        // success
        console.log(res.data)

      }
    })
  },
  confirm4: function (e) {
    var that = this
    var listData2 = this.data.listData2
    var newd = [{ id: a, name: b, sex: c, age: d }]
    listData2.push(newd[0])
    that.setData({
      hiddenmodalput4: true,
      listData2: listData2,
      num4: '',
      name4: '',
      sex4: '',
      age4: ''
    })
    wx.request({
      url: 'http://192.168.43.185:8888/insertEmployee',
      data: {
        name: b,
        sex: c,
        job: "总经理",
        age: d,
        grade: 1
      },
      method: 'get',
      success: function (res) {
        // success
        console.log(res.data)

      }
    })
  },
  confirm5: function () {
    var that = this
    var listData2 = this.data.listData2
    var newd = [{ id: a, name: b, sex: c, age: d }]
    listData2.splice(f, 1, newd[0])
    that.setData({
      hiddenmodalput5: true,
      listData2: listData2,
      num5: '',
      name5: '',
      sex5: '',
      age5: ''
    })
    wx.request({
      url: 'http://192.168.43.185:8888/updataEmployeeByName',
      data: {
        name: b,
        sex: c,
        job: "总经理",
        age: d,
        grade: 1,
        id: h
      },
      method: 'get',
      success: function (res) {
        console.log(res.data)

      }
    })
  },
  btn_add: function () {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },
  btn_add1: function () {
    this.setData({
      hiddenmodalput2: !this.data.hiddenmodalput2
    })
  },
  btn_add2: function () {
    this.setData({
      hiddenmodalput4: !this.data.hiddenmodalput4
    })
  },
  btn_delete: function (e) {//删除按钮
    var that = this
    var listData = this.data.listData
    var remain = []
    var select = this.data.isSelect1
    var isSelect = []
    for (let i = 0; i < this.data.listData.length; i++) {
      isSelect.push(false)//初始化都没有选中
      if (!that.data.isSelect1[i]) {
        remain.push(listData[i])
      }
    }
    this.setData({
      listData: remain,
      isSelect1: isSelect
    })
    wx.request({
      url: 'http://192.168.43.185:8888/deleteEmployee',
      data: {
        id: h
      },
      method: 'get',
      success: function (res) {
        // success
        console.log(res.data)

      }
    })
  },
  btn_delete1: function (e) {//删除按钮
    var that = this
    var listData1 = this.data.listData1
    var remain = []
    var select = this.data.isSelect2
    var isSelect = []
    for (let i = 0; i < this.data.listData1.length; i++) {
      isSelect.push(false)//初始化都没有选中
      if (!that.data.isSelect2[i]) {
        remain.push(listData1[i])
      }
    }
    this.setData({
      listData1: remain,
      isSelect2: isSelect
    })
    wx.request({
      url: 'http://192.168.43.185:8888/deleteEmployee',
      data: {
        id: h
      },
      method: 'get',
      success: function (res) {
        // success
        console.log(res.data)
      }
    })
  },
  btn_delete2: function (e) {//删除按钮
    var that = this
    var listData2 = this.data.listData2
    var remain = []
    var select = this.data.isSelect3
    var isSelect = []
    for (let i = 0; i < this.data.listData2.length; i++) {
      isSelect.push(false)//初始化都没有选中
      if (!that.data.isSelect3[i]) {
        remain.push(listData2[i])
      }
    }
    this.setData({
      listData2: remain,
      isSelect3: isSelect
    })
    wx.request({
      url: 'http://192.168.43.185:8888/deleteEmployee',
      data: {
        id: h
      },
      method: 'get',
      success: function (res) {
        // success
        console.log(res.data)

      }
    })
  },
  btn_change: function () {
    this.setData({
      hiddenmodalput1: !this.data.hiddenmodalput1
    })
  },
  btn_change1: function () {
    this.setData({
      hiddenmodalput3: !this.data.hiddenmodalput3
    })
  },
  btn_change2: function () {
    this.setData({
      hiddenmodalput5: !this.data.hiddenmodalput5
    })
  },
  btn_search: function () {
    var that = this
    var listData = []
    wx.request({
      url: 'http://192.168.43.185:8888/findEmployeeByName',
      data: { name: g },
      method: 'get',
      success: function (res) {
        // success
        console.log(res.data)
        that.setData({
          listData: res.data
        })
      }
    })
  },
  btn_search1: function () {
    var that = this
    var listData = []
    wx.request({
      url: 'http://192.168.43.185:8888/findEmployeeByName',
      data: { name: g },
      method: 'get',
      success: function (res) {
        // success
        console.log(res.data)
        that.setData({
          listData1: res.data
        })
      }
    })
  },
  btn_search2: function () {
    var that = this
    var listData = []
    wx.request({
      url: 'http://192.168.43.185:8888/findEmployeeByName',
      data: { name: g },
      method: 'get',
      success: function (res) {
        // success
        console.log(res.data)
        that.setData({
          listData2: res.data
        })
      }
    })
  },
  inputsearch: function (e) {
    g = e.detail.value
  },
  inputsearch1: function (e) {
    g = e.detail.value
  },
  inputsearch2: function (e) {
    g = e.detail.value
  },
  select: function (e) {//单选
    var index = e.target.dataset.index//获取对应项的下标
    var select = this.data.isSelect1
    select[index] = !select[index]
    f = index//下标
    h = this.data.listData[f].id
    this.setData({
      isSelect1: select
    })
  },
  select1: function (e) {//单选
    var index1 = e.target.dataset.index//获取对应项的下标
    var select = this.data.isSelect2
    select[index1] = !select[index1]
    f = index1//下标
    h = this.data.listData1[f].id
    this.setData({
      isSelect2: select
    })
  },
  select2: function (e) {//单选
    var index2 = e.target.dataset.index//获取对应项的下标
    var select = this.data.isSelect3
    select[index2] = !select[index2]
    f = index2//下标
    h = this.data.listData2[f].id
    this.setData({
      isSelect3: select
    })
  },
  inputnum: function (e) {
    a = e.detail.value
  },
  inputname: function (e) {
    b = e.detail.value
  },
  inputsex: function (e) {
    c = e.detail.value
  },
  inputage: function (e) {
    d = e.detail.value
  },
  inputnum1: function (e) {
    a = e.detail.value
  },
  inputname1: function (e) {
    b = e.detail.value
  },
  inputsex1: function (e) {
    c = e.detail.value
  },
  inputage1: function (e) {
    d = e.detail.value
  },
  inputnum2: function (e) {
    a = e.detail.value
  },
  inputname2: function (e) {
    b = e.detail.value
  },
  inputsex2: function (e) {
    c = e.detail.value
  },
  inputage2: function (e) {
    d = e.detail.value
  },
  inputnum3: function (e) {
    a = e.detail.value
  },
  inputname3: function (e) {
    b = e.detail.value
  },
  inputsex3: function (e) {
    c = e.detail.value
  },
  inputage3: function (e) {
    d = e.detail.value
  },
  inputnum4: function (e) {
    a = e.detail.value
  },
  inputname4: function (e) {
    b = e.detail.value
  },
  inputsex4: function (e) {
    c = e.detail.value
  },
  inputage4: function (e) {
    d = e.detail.value
  },
  inputnum5: function (e) {
    a = e.detail.value
  },
  inputname5: function (e) {
    b = e.detail.value
  },
  inputsex5: function (e) {
    c = e.detail.value
  },
  inputage5: function (e) {
    d = e.detail.value
  },
  /*
   * 生命周期函数--监听页面加载
   */
  //顶部滑动
  bindchange: function (e) {
    const that = this;
    that.setData({
      currentData: e.detail.current
    })
  },
  //点击切换，滑块index赋值
  checkCurrent: function (e) {
    const that = this;

    if (that.data.currentData === e.target.dataset.current) {
      return false;
    } else {

      that.setData({
        currentData: e.target.dataset.current
      })
    }
  },
  selectall: function () {//全选与全不选
    var selects = []
    selects = this.data.isSelect1
    for (let i = 0; i < this.data.isSelect1.length; i++) {
      selects[i] = !selects[i]
    }
    this.setData({
      isSelect1: selects
    })
  },
  selectall1: function () {//全选与全不选
    var selects = []
    selects = this.data.isSelect2
    for (let i = 0; i < this.data.isSelect2.length; i++) {
      selects[i] = !selects[i]
    }
    this.setData({
      isSelect2: selects
    })
  },
  selectall2: function () {//全选与全不选
    var selects = []
    selects = this.data.isSelect3
    for (let i = 0; i < this.data.isSelect3.length; i++) {
      selects[i] = !selects[i]
    }
    this.setData({
      isSelect3: selects
    })
  },
  onLoad: function (options) {
    var that = this
    wx.request({
      url: 'http://192.168.43.185:8888/findEmployeeByJob',
      data: { job: '收银员' },
      method: 'get',
      success: function (res) {
        // success
        var isSelect = []
        for (let i = 0; i < res.data.length; i++) {
          isSelect.push(false)//初始化都没有选中
        }
        that.setData({
          listData: res.data,
          isSelect1: isSelect
        })
        console.log(res.data)
      }
    })
    wx.request({
      url: 'http://192.168.43.185:8888/findEmployeeByJob',
      data: { job: '客户经理' },
      method: 'get',
      success: function (res) {
        // success
        that.setData({
          listData1: res.data
        })
        console.log(res.data)
      }
    })
    wx.request({
      url: 'http://192.168.43.185:8888/findEmployeeByJob',
      data: { job: '总经理' },
      method: 'get',
      success: function (res) {
        // success
        that.setData({
          listData2: res.data
        })
        console.log(res.data)
      }
    })
    var that = this
    wx.request({
      url: 'http://192.168.43.185:8888/findEmployeeByName',
      data: { name: '要查询的名字' },
      method: 'get',
      success: function (res) {
        // success
        console.log(res.data)
      }
    })
  },
  //所有员工信息http: localhost: 8888/findAllEmploy
  //职位员工信息http:localhost:8888/findEmployeeByJob
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