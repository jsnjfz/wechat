var n = require("../../utils/http.js");
Page({
  data: {},
  initData: function () {
    var t = this; (0, n.get)("/helpList/2").then(function (n) {
      200 == n.code && t.setData({
        datas: n.result
      })
    }).
      catch(function (n) { })
  },
  onLoad: function (n) {
    this.initData()
  },
  onReady: function () { },
  onShow: function () {
    this.initData()
  },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
})