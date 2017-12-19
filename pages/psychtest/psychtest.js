//action.js
//获取应用实例
var app = getApp()
Page({
  data: {
    
  },


  buttonClick: function (e) {
    wx.showModal({
      title: "敬请期待",
      content: "部分内容将在正式版开放,请耐心等待,谢谢!",
      showCancel: false,
      confirmText: "确定"
    })
  }

});