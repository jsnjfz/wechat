var n = require("../../../utils/http.js"),
  t = require("../../../utils/util");
Page({
  data: {
    datas: []
  },
  initData: function () {
    var t = this; (0, n.get)("/dictBank/listBank").then(function (n) {
      200 == n.code && t.setData({
        datas: n.result
      })
    }).
      catch(function (n) { })
  },
  onLoad: function (n) {
    t.hideShareMenu()
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