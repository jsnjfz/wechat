var t = require("../../../utils/http.js"),
  n = require("../../../utils/util");
Page({
  data: {
    level: "",
    id: "",
    datas: []
  },
  onLoad: function (t) {
    console.log(t),
      this.setData({
        level: t.level,
        id: t.id
      }),
      n.hideShareMenu()
  },
  initData: function () {
    var n = this; (0, t.get)("/dictBank/listBankCards/" + this.data.id).then(function (t) {
      200 == t.code && n.setData({
        datas: t.result
      })
    }).
      catch(function (t) { })
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