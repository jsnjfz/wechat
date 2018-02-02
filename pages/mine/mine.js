var t = require("../../utils/http.js"),
  n = require("../../img/base64");
Page({
  data: {},
  initData: function () {
    var n = this; (0, t.get)("/currentUserInfo").then(function (t) {
      200 == t.code && n.setData({
        datas: t.result
      })
    }).
      catch(function (t) { })
  },
  onLoad: function (t) {
    this.setData({
      help: n.help,
      about: n.about,
      msg: n.msg,
      card: n.card,
      fee: n.fee
    })
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