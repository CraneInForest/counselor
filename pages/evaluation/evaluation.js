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

  bindSchoolChange: function (e) {
    console.log("school : " + e.detail.value)
    
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
  },
  buttonClick: function(e)
  {
    wx.showModal({
      title: "敬请期待",
      content: "部分内容将在正式版开放,请耐心等待,谢谢!",
      showCancel: false,
      confirmText: "确定"
    })
  },

  requestPayment: function () {
    console.log("requestPayment!")
    var self = this

    self.setData({
      loading: true
    })
    // 此处需要先调用wx.login方法获取code，然后在服务端调用微信接口使用code换取下单用户的openId
    // 具体文档参考https://mp.weixin.qq.com/debug/wxadoc/dev/api/api-login.html?t=20161230#wxloginobject
    app.getUserOpenId(function (err, openid) {
      if (!err) {
        wx.request({
          url: "paymentUrl",
          data: {
            openid
          },
          method: 'POST',
          success: function (res) {
            console.log('unified order success, response is:', res)
            var payargs = res.data.payargs
            wx.requestPayment({
              timeStamp: payargs.timeStamp,
              nonceStr: payargs.nonceStr,
              package: payargs.package,
              signType: payargs.signType,
              paySign: payargs.paySign
            })

            self.setData({
              loading: false
            })
          }
        })
      } else {
        console.log('err:', err)
        self.setData({
          loading: false
        })
      }
    })
  }
})
