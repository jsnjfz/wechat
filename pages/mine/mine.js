var t = require("../../utils/http.js"),
  n = require("../../img/base64");
Page({
  // data: {},
  data: {
    datas: {
      "bankNum": 2,
      "billAmount": "0.00",
      "billNum": 0,
      "cardNum": 2,
      "headImg": "https://pic.wankadi.com/user/939f028df45142a8838fae410b75f257.jpg",
      "id": "a0c2329746e040299dd8b5624571b4a2",
      "nickname": "逆袭的毛毛",
      "push": 1,
      "quotaNum": "4,122.00",
      "sex": 1,
      "subActivityNum": 0
    }
  },
  initData: function () {
    // var n = this; (0, t.get)("/currentUserInfo").then(function (t) {
    //   200 == t.code && n.setData({
    //     datas: t.result
    //   })
    // }).
    //   catch(function (t) { })
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