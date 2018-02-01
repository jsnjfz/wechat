var t = require("../../utils/http.js");
//获取应用实例
const app = getApp()

Page({
  data: {
    datas: {
      dictBank: [{ name: '1' }, { name: '2' }],
      userBankVOList: [{ name: 'aaa', cardNo: '666' }, { name: 'ccc', cardNo: '444' }]
    }
  },
  pick: function (t) {
    console.log(t);
    var n = t.currentTarget.dataset.obj,
      a = n.repaymentDate,
      e = new Date,
      o = e.getFullYear(),
      i = e.getMonth() + 1;
    e.getDate() > a && (i += 1);
    var c = i + "月" + a + "日",
      r = getCurrentPages(),
      u = (r[r.length - 1], r[r.length - 2]);
    console.log("前一页：", u),
      u.changeData({
        obj: n,
        date: c,
        dateVal: o + "-" + i + "-" + a
      }),
      wx.navigateBack({
        delta: 1
      })
  },
  initData: function () {
    var n = this; (0, t.get)("/userBankCard/listCard/all/1").then(function (t) {
      200 == t.code && n.setData({
        datas: t.result.records
      })
    }).
      catch(function (t) { })
  },
  onLoad: function (t) { },
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
