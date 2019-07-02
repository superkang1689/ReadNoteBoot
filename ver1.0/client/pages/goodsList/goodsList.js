
Page({

  data: {
    wHeight: 0,
    thStyle: 'position: absolute;top: 0;left: 0;',
    listData: [
      { "id": "xx", "name": "xxxxxxxxxxxxxxxxx", "num": "1", "qua": "t", "buy": "x", "last": "x", "today": "x", "brand": "x", "price": "x" },
      { "id": "xx", "name": "xxx", "num": "2", "qua": "t", "buy": "x", "last": "x", "today": "x", "brand": "x", "price": "x" },
      { "id": "xx", "name": "xxx", "num": "3", "qua": "t", "buy": "x", "last": "x", "today": "x", "brand": "x", "price": "x" },
      { "id": "xx", "name": "xxx", "num": "4", "qua": "t", "buy": "x", "last": "x", "today": "x", "brand": "x", "price": "x" },
      { "id": "xx", "name": "xxx", "num": "5", "qua": "t", "buy": "x", "last": "x", "today": "x", "brand": "x", "price": "x" },
      { "id": "xx", "name": "xxx", "num": "6", "qua": "t", "buy": "x", "last": "x", "today": "x", "brand": "x", "price": "x" },
      { "id": "xx", "name": "xxx", "num": "7", "qua": "t", "buy": "x", "last": "x", "today": "x", "brand": "x", "price": "x" },
      { "id": "xx", "name": "xxx", "num": "7", "qua": "t", "buy": "x", "last": "x", "today": "x", "brand": "x", "price": "x" },
      { "id": "xx", "name": "xxx", "num": "7", "qua": "t", "buy": "x", "last": "x", "today": "x", "brand": "x", "price": "x" },
      { "id": "xx", "name": "xxx", "num": "7", "qua": "t", "buy": "x", "last": "x", "today": "x", "brand": "x", "price": "x" },
      { "id": "xx", "name": "xxx", "num": "7", "qua": "t", "buy": "x", "last": "x", "today": "x", "brand": "x", "price": "x" },
      { "id": "xx", "name": "xxx", "num": "7", "qua": "t", "buy": "x", "last": "x", "today": "x", "brand": "x", "price": "x" }
    ],
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
  },
  scroll: function (e) {
    this.setData({
      thStyle: 'position: absolute;top:' + e.detail.scrollTop + 'px;left: 0;',
      leftThStyle: 'position: absolute;top:' + e.detail.scrollTop + 'px;left: 0;'
    })
  }

})