const app = getApp()

Page({
  data: {
    arraykemu: ['理科', '文科'],
    arrayshengfen: ['安徽', '澳门', '北京', '重庆', '福建', '甘肃', '广东', '广西', '贵州', '海南', '河北', '河南', '黑龙江', '湖北', '湖南','吉林','江苏','江西','辽宁','内蒙古','宁夏','青海','山东','山西','陕西','上海','四川','台湾','天津','西藏', '香港', '新疆', '云南', '浙江'],
    arraypici: ['本科一批', '本科二批', '本科三批', '专科'],
    index: 0,
    index1: 0,
    index2: 0,
    numbervalue:0,
    date: '2016-09-01',
    time: '12:01',
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },

  //科目
  bindPickerChange: function(e) {
    //console.log(e.detail.value)
    this.setData({
      index: e.detail.value
    })

    wx.setStorageSync("kemu", e.detail.value)
  },

  //高考省份
  bindPickerChange1: function (e) {
    this.setData({
      index1: e.detail.value
    })

    wx.setStorageSync("shengfen", e.detail.value)
  },

  //目标批次
  bindPickerChange2: function (e) {
    this.setData({
      index2: e.detail.value
    })

    wx.setStorageSync("pici", e.detail.value)
  },
  bindDateChange: function(e) {
    this.setData({
      date: e.detail.value
    })
  },
  bindTimeChange: function(e) {
    this.setData({
      time: e.detail.value
    })
  },
  bindNumberChange: function (e) {
    //console.log("number : " + e.detail.value)
    wx.setStorageSync("fenshu", e.detail.value)
  },
  
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    wx.getUserInfo({
      success: res => {
        app.globalData.userInfo = res.userInfo
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    })

    console.log("storage value : " + wx.getStorageSync("key1"))

    if (wx.getStorageSync("kemu") == "") {
      wx.setStorageSync("kemu", 0)
    }
    if (wx.getStorageSync("shengfen") == "") {
      wx.setStorageSync("shengfen", 0)
    }
    if (wx.getStorageSync("pici") == "") {
      wx.setStorageSync("pici", 0)
    }
    if (wx.getStorageSync("fenshu") == "") {
      wx.setStorageSync("fenshu", 0)
    }

    this.setData({
      index: wx.getStorageSync("kemu"),
      index1: wx.getStorageSync("shengfen"),
      index2: wx.getStorageSync("pici"),
      numbervalue: wx.getStorageSync("fenshu")
    })
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  }
})
