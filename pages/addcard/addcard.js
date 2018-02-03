function t(t, a, e) {
  return a in t ? Object.defineProperty(t, a, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[a] = e,
    t
}
var a, e = require("../../components/wux"),
  n = require("../../utils/http.js");
getApp();
Page({
  data: (a = {
    name: "页面的初始数据页面的初始数据页面的初始数据",
    days0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    days1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    billDate: null,
    repayDate: null,
    dictBankCardinfoId: ""
  },
    t(a, "name", ""), t(a, "cardNo", ""), t(a, "dictBankId", ""), t(a, "des", ""), t(a, "quota", ""), a),
  bindPickerChange0: function (t) {
    var a = t.detail.value,
      e = Number(a) - 10;
    e < 0 ? e += 30 : 0 == e && (e = 1),
      this.setData({
        billDate: a,
        repayDate: e
      })
  },
  bindPickerChange1: function (t) {
    console.log("picker发送选择改变，携带值为", t),
      this.setData({
        repayDate: t.detail.value
      })
  },
  getNum: function (t) {
    this.data.cardNo = t.detail.value
  },
  getMoney: function (t) {
    this.data.quota = t.detail.value
  },
  getDes: function (t) {
    this.data.des = t.detail.value
  },
  changeData: function (t) {
    this.setData(t),
      console.log("设置数据：", t)
  },
  addCard: function (t) {
    var a = this.data; (0, n.post)("/userBankCard/card", {
      cardNo: a.cardNo,
      dictBankId: a.dictBankId,
      dictBankCardinfoId: a.dictBankCardinfoId,
      quota: a.quota,
      statementDate: Number(a.billDate) + 1,
      repaymentDate: Number(a.repayDate) + 1,
      des: a.des,
      formId: t.detail.formId,
      appId: "wx8d001aef31c6d06f"
    }).then(function (t) {
      200 == t.code ? (wx.showToast({
        title: t.msg,
        icon: "success"
      }), setTimeout(function () {
        wx.navigateBack()
      },
        600)) : e.$wuxToptips.show({
          timer: 3e3,
          text: t.msg || "请填写正确的字段"
        })
    })
  },
  onLoad: function (t) { },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
})