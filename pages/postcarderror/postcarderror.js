var t = require("../../utils/http.js");
require("../../utils/util");
Page({
  data: {
    bankName: "请选择 >",
    bankId: ""
  },
  getBanks: function () {
    var n = this; (0, t.get)("/dictBank/listBank").then(function (t) {
      200 == t.code && n.setData({
        banks: t.result
      })
    }).
      catch(function (t) { })
  },
  switchBank: function (t) {
    console.log(t.detail.value),
      this.setData({
        bankName: this.data.banks[t.detail.value].name,
        bankId: this.data.banks[t.detail.value].id
      })
  },
  bindFormSubmit: function (n) {
    console.log(n),
      (0, t.post)("/bankActivity/submitNewActivity", {
        bankId: this.data.bankId,
        bankName: this.data.bankName,
        url: n.detail.value.url,
        des: n.detail.value.des
      }).then(function (t) {
        200 == t.code ? (wx.showToast({
          title: "感谢反馈！",
          icon: "success",
          duration: 2e3
        }), setTimeout(function () {
          wx.navigateBack()
        },
          1e3)) : wx.showToast({
            title: t.msg,
            icon: "success",
            duration: 1e3
          })
      }).
        catch(function (t) {
          wx.showToast({
            title: "提交失败！",
            icon: "success",
            duration: 2e3
          })
        })
  },
  onLoad: function (t) {
    this.getBanks()
  },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
})