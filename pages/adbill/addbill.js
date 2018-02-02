//index.js
//获取应用实例
var t = require("../../components/wux"),
  e = require("../../utils/http.js");
const app = getApp()

Page({
  data: {
    name: "",
    obj: {},
    repaymentAmount: "",
    start: (new Date).getFullYear() + "-01-01",
    end: (new Date).getFullYear() + "-12-31",
    date: "",
    dateVal: ""
  },
  bindDateChange: function (t) {
    console.log("picker发送选择改变，携带值为", t.detail.value);
    var e = t.detail.value,
      n = e.substr(5).replace("-", "月") + "日";
    this.setData({
      date: n,
      dateVal: e
    })
  },
  changeData: function (t) {
    this.setData(t),
      console.log("设置数据：", t)
  },
  addBill: function (n) {
    console.log("form发生了submit事件，携带数据为：", n);
    var a = this.data,
      o = a.dateVal.split("-"); (0, e.post)("/creditCardStatement/statement", {
        repaymentMonth: o[1],
        repaymentDay: o[2],
        repaymentAmount: a.repaymentAmount,
        userBankId: a.obj.id,
        formId: n.detail.formId,
        appId: "wx8d001aef31c6d06f"
      }).then(function (e) {
        200 == e.code ? (wx.showToast({
          title: e.msg,
          icon: "success"
        }), setTimeout(function () {
          wx.navigateBack()
        },
          600)) : t.$wuxToptips.show({
            timer: 3e3,
            text: e.msg || "请填写正确的字段"
          })
      })
  },
  setStart: function () { },
  getInput: function (t) {
    this.data.repaymentAmount = t.detail.value
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
