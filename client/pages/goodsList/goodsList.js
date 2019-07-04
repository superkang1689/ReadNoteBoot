var a, b, c, d, f, g, h, i, j, k, l, m, n;
Page({

  data: {


    wHeight: 0,
    thStyle: 'position: absolute;top: 0;left: 0;',
    goodInfo: null,//商品信息
    selected: [],//是否选中该项
    isSelect1: [],
    chooseList: [],
    hiddenmodalput: true,
    hiddenmodalput1: true,
    hiddenmodalput2: true,









  },
  btn_change: function () {
    this.setData({
      hiddenmodalput1: !this.data.hiddenmodalput1
    })
  },
  //取消按钮
  cancel: function () {
    this.setData({
      hiddenmodalput: true
    });
  },
  //确认
  cancel1: function () {
    this.setData({
      hiddenmodalput1: true
    });
  },
  btn_delete: function (e) {//删除按钮
    var that = this
    var goodInfo = this.data.goodInfo
    var remain = []
    var select = this.data.isSelect1
    var isSelect = []
    for (let i = 0; i < this.data.goodInfo.length; i++) {
      //初始化都没有选中
      if (!that.data.isSelect1[i]) {
        remain.push(goodInfo[i])
        isSelect.push(false)
      }

    }
    this.setData({
      goodInfo: remain,
      isSelect1: isSelect
    })

  },


  btn_search: function () {
    this.setData({
      hiddenmodalput2: !this.data.hiddenmodalput2
    });

  },



  cancel2: function () {
    this.setData({
      hiddenmodalput2: true
    });
  },

  inputsearch: function (e) {
    l = e.detail.value
  },


  inputsearch1: function (e) {
    m = e.detail.value
  },

  selectItem: function (e) {//单选
    console.log(e)
    var index = e.target.dataset.index//获取对应项的下标
    var select = this.data.isSelect1
    select[index] = !select[index]
    k = index
    this.setData({
      isSelect1: select
    })

  },






  confirm: function (e) {
    var that = this
    var listData = this.data.goodInfo
    var newd = [{ id: a, name: b, numbers: c, qualityTime: d, buyTime: f, lastOutTime: g, today: h, brand: i, price: j }]
    listData.push(newd[0])

    this.setData({
      hiddenmodalput: true,
      goodInfo: listData,
      id: '',
      name: '',
      numbers: '',
      qualityTime: '',
      buyTime: '',
      lastOutTime: '',
      today: '',
      brand: '',
      price: '',
    })
  },


  confirm1: function (e) {
    var that = this
    var listData = this.data.goodInfo
    var newd = [{ id: a, name: b, numbers: c, qualityTime: d, buyTime: f, lastOutTime: g, today: h, brand: i, price: j }]
    listData.splice(k, 1, newd[0])

    this.setData({
      hiddenmodalput1: true,
      goodInfo: listData,
      id: '',
      name: '',
      numbers: '',
      qualityTime: '',
      buyTime: '',
      lastOutTime: '',
      today: '',
      brand: '',
      price: '',
    })
  },

  inputid: function (e) {
    console.log(e)
    a = e.detail.value

  },
  inputname: function (e) {

    b = e.detail.value

  },
  inputnumbers: function (e) {

    c = e.detail.value

  },
  inputqualityTime: function (e) {

    d = e.detail.value

  },
  inputbuyTime: function (e) {

    f = e.detail.value

  },
  inputlastOutTime: function (e) {
    g = e.detail.value

  },
  inputtoday: function (e) {

    h = e.detail.value

  },
  inputbrand: function (e) {

    i = e.detail.value

  },
  inputprice: function (e) {

    j = e.detail.value

  },




  inputid1: function (e) {
    console.log(e)
    a = e.detail.value

  },
  inputname1: function (e) {

    b = e.detail.value

  },
  inputnumbers1: function (e) {

    c = e.detail.value

  },
  inputqualityTime1: function (e) {

    d = e.detail.value

  },
  inputbuyTime1: function (e) {

    f = e.detail.value

  },
  inputlastOutTime1: function (e) {
    g = e.detail.value

  },
  inputtoday1: function (e) {

    h = e.detail.value

  },
  inputbrand1: function (e) {

    i = e.detail.value

  },
  inputprice1: function (e) {

    j = e.detail.value

  },






  btn_add: function () {
    this.setData({
      hiddenmodalput: !this.data.hiddenmodalput
    })
  },



  onLoad: function () {
    var that = this
    wx.getSystemInfo({
      success: function (res) {
        that.setData({
          wHeight: (res.windowHeight - 40)
        })
      }
    })


    wx.request({
      url: 'http://192.168.43.185:8888/getAllGoods',
      method: 'get',
      success: function (res) {
        // success
        Date.prototype.Format = function (fmt) {
          //author:wangweizhen
          var o = {
            "M+": this.getMonth() + 1,                 //月份   
            "d+": this.getDate(),                    //日
            "h+": this.getHours(),                   //小时   
            "m+": this.getMinutes(),                 //分   
            "s+": this.getSeconds(),                 //秒   
            "q+": Math.floor((this.getMonth() + 3) / 3), //季度   
            "S": this.getMilliseconds()             //毫秒   
          };
          if (/(y+)/.test(fmt))
            fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
          for (var k in o)
            if (new RegExp("(" + k + ")").test(fmt))
              fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
          return fmt;
        };

        for (let i = 0; i < res.data.length; i++) {
          var date1 = new Date(res.data[i].buyTime)
          var date2 = new Date(res.data[i].lastOutTime)
          var date3 = new Date(res.data[i].qualityTime)
          var date4 = new Date(res.data[i].today)
          date1.Format("yyyy-MM-dd hh:mm:ss")
          date2.Format("yyyy-MM-dd hh:mm:ss")
          date3.Format("yyyy-MM-dd hh:mm:ss")
          date4.Format("yyyy-MM-dd hh:mm:ss")
          res.data[i].buyTime = date1.toLocaleDateString()
          res.data[i].lastOutTime = date2.toLocaleDateString()
          res.data[i].qualityTime = date3.toLocaleDateString()
          res.data[i].today = date4.toLocaleDateString()
        }
        //生成选择对应的数组
        var isSelect = []
        for (let i = 0; i < res.data.length; i++) {
          isSelect.push(false)
        }

        that.setData({
          goodInfo: res.data,
          isSelect1: isSelect

        })
      }

    })
  },
  scroll: function (e) {
    this.setData({
      thStyle: 'position: absolute;top:' + e.detail.scrollTop + 'px;left: 0;',
      leftThStyle: 'position: absolute;top:' + e.detail.scrollTop + 'px;left: 0;'
    })
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






})