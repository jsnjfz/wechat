var t = require("../../utils/http.js"),
  n = require("../../utils/util");
Page({
  data: {
    datas: []
  },
  initData: function (n) {
    var i = this; (0, t.get)("/repaymentHistory/listRepayHistory/" + n).then(function (t) {
      200 == t.code && i.setData({
        datas: t.result
      })
    }).
      catch(function (t) { })
  },
  onLoad: function (t) {
    var i = t.id;
    this.initData(i),
      n.hideShareMenu()
  },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
})