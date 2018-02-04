var t = require("../../utils/http.js"),
  n = require("../../wxParse/wxParse.js");
Page({
  data: {},
  initData: function (a) {
    var e = this; (0, t.get)("/cardPlayStrategy/cardPlayStrategy/" + a).then(function (t) {
      e.setData({
        tip: t.result
      });
      var a = t.result.content;
      n.wxParse("article", "html", a, e, 5)
    }).
      catch(function (t) { })
  },
  onLoad: function (t) {
    this.initData(t.id)
  },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
})