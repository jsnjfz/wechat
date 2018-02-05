var n = require("../../utils/http.js");
Page({
  // data: {},
  data: {
    datas: [{
      "content": "",
      "id": 1,
      "title": "添加信用卡"
    }, {
      "content": "",
      "id": 2,
      "title": "添加账单"
    }, {
      "content": "",
      "id": 15,
      "title": "小程序"
    }, {
      "content": "",
      "id": 34,
      "title": "强烈建议"
    }]
  },
  initData: function () {
    // var t = this; (0, n.get)("/helpList/2").then(function (n) {
    //   200 == n.code && t.setData({
    //     datas: n.result
    //   })
    // }).
    //   catch(function (n) { })
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