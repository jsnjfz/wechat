var n = require("../../utils/http.js");
Page({
  data: {},
  flow: function () {
    wx.redirectTo({
      url: "/pages/flowus/flowus"
    })
  },
  ok: function () {
    wx.navigateBack()
  },
  initData: function () {
    var t = this; (0, n.get)("/isSubscribe").then(function (n) {
      200 == n.code && t.setData({
        isSubscribe: n.result
      })
    }).
      catch(function (n) { })
  },
  onLoad: function (n) {
    this.initData()
  },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
})