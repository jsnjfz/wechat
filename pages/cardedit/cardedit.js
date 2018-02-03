function e(e, t, a) {
  return t in e ? Object.defineProperty(e, t, {
    value: a,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : e[t] = a,
    e
}
var t, a = require("../../components/wux"),
  n = require("../../utils/http.js"),
  i = require("../../utils/util");
Page({
  data: (t = {
    name: "页面的初始数据页面的初始数据页面的初始数据",
    days0: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    days1: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31],
    id: ""
  },
    e(t, "name", ""), e(t, "billDate", null), e(t, "repayDate", null), e(t, "quota", ""), e(t, "dictBankId", ""), e(t, "cardNo", ""), e(t, "des", ""), e(t, "dictBankCardinfoId", ""), e(t, "index", 0), t),
  bindPickerChange0: function (e) {
    console.log("picker发送选择改变，携带值为", e),
      this.setData({
        billDate: Number(e.detail.value)
      })
  },
  bindPickerChange1: function (e) {
    console.log("picker发送选择改变，携带值为", e),
      this.setData({
        repayDate: Number(e.detail.value)
      })
  },
  changeData: function (e) {
    this.setData(e),
      console.log("设置数据：", e)
  },
  editCard: function () {
    var e = this.data; (0, n.put)("/userBankCard/card", {
      cardNo: e.cardNo,
      id: e.id,
      dictBankCardinfoId: e.dictBankCardinfoId,
      quota: e.quota,
      statementDate: e.billDate + 1,
      repaymentDate: e.repayDate + 1,
      des: e.des,
      packetName: 0 == e.index ? "" : e.packets[e.index]
    }).then(function (e) {
      200 == e.code ? (wx.showToast({
        title: e.msg,
        icon: "success"
      }), setTimeout(function () {
        wx.navigateBack()
      },
        600)) : a.$wuxToptips.show({
          timer: 3e3,
          text: e.msg || "请填写正确的字段"
        })
    })
  },
  delCard: function () {
    (0, n.del)("/userBankCard/card/" + this.data.id).then(function (e) {
      200 == e.code ? (wx.showToast({
        title: e.msg,
        icon: "success"
      }), setTimeout(function () {
        wx.navigateBack({
          delta: 2
        })
      },
        600)) : a.$wuxToptips.show({
          timer: 3e3,
          text: e.msg || "删除失败"
        })
    }).
    catch(function (e) { })
  },
  bindPickerChange: function (e) {
    console.log("picker发送选择改变，携带值为", e.detail.value),
      this.setData({
        index: e.detail.value
      })
  },
  getCardNo: function (e) {
    this.data.cardNo = e.detail.value
  },
  getQuota: function (e) {
    this.data.quota = e.detail.value
  },
  getDes: function (e) {
    this.data.des = e.detail.value
  },
  onLoad: function (e) {
    console.log(e.obj);
    var t = JSON.parse(e.obj);
    if (console.log(t), t.packets) {
      t.packets.unshift("无");
      for (var a = 0; a < t.packets.length; a++) t.packets[a] == t.packetName && this.setData({
        index: a
      })
    } else t.packets = ["无"];
    this.setData({
      billDate: t.statementDate - 1,
      repayDate: t.repaymentDate - 1,
      id: t.id,
      name: t.dictBankCardinfoName,
      quota: t.quota,
      dictBankId: t.dictBankId,
      cardNo: t.cardNo,
      des: t.des,
      dictBankCardinfoId: t.dictBankCardinfoId,
      packets: t.packets
    }),
      console.log("dddddddddddd", t),
      i.hideShareMenu()
  },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
})