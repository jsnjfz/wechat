var n = require("../../utils/http.js");
Page({
  data: {},
  getTags: function () {
    var t = this; (0, n.get)("/userBankCardPacket/listPacket").then(function (n) {
      t.setData({
        tags: n.result
      })
    }).
      catch(function (n) { })
  },
  onLoad: function (n) { },
  onReady: function () { },
  onShow: function () {
    this.getTags()
  },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
})