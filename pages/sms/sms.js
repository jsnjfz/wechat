require("../../utils/http.js");

Page({
  data: {
    sms: "",
    loading: !1
  },
  getClip: function () {
    var t = this;
    wx.getClipboardData({
      success: function (n) {
        console.log(n.data),
          t.setData({
            sms: n.data
          })
      }
    })
  },
  updateSms: function (t) {
    this.setData({
      sms: t.detail.value
    })
  },
  reset: function () {
    this.setData({
      sms: ""
    })
  },
  initData: function () { },
  submit: function () {
    var n = this;
    this.setData({
      loading: !0
    }),
      (0, t.post)("/userBankCard/smsAnalysis", {
        sms: this.data.sms
      }).then(function (t) {
        console.log(t),
          n.setData({
            loading: !1
          }),
          200 == t.code ? "账单已收录" == t.result ? (wx.showToast({
            title: t.result
          }), setTimeout(function () {
            wx.navigateBack({})
          },
            600)) : wx.showModal({
              title: "提示",
              content: t.result,
              showCancel: !1,
              success: function (t) { }
            }) : wx.showModal({
              title: "提示",
              content: t.msg,
              showCancel: !1,
              success: function (t) { }
            })
      }).
        catch(function (t) { }),
      console.log(this.data.sms)
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
