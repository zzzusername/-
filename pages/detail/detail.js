//获取应用实例
const app = getApp()
wx.cloud.init()

Page({
  data: {
    motto: '欧若教育',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  onLoad: function () {

  },

})
