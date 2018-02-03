var t = require("../../utils/http.js");
Page({
  data: {
    show: !0,
    loading: !1
  },
  formSubmit: function (n) {
    console.log("form发生了submit事件，携带数据为：", n.detail.value);
    var a = n.detail.value;
    a.states ? a.states = 2 : a.states = 1,
      (0, t.post)("/userBankCardPacket/saveCardPacket", a).then(function (t) {
        200 == t.code && (wx.showToast({
          title: t.msg,
          icon: "success"
        }), setTimeout(function () {
          wx.navigateBack()
        },
          600))
      }).
        catch(function (t) { })
  },
  del: function () {
    var n = this;
    this.setData({
      loading: !0
    }),
      (0, t.del)("/userBankCardPacket/packet/" + this.data.id).then(function (t) {
        200 == t.code && (n.setData({
          loading: !1
        }), wx.showToast({
          title: t.msg,
          icon: "success"
        }), setTimeout(function () {
          wx.navigateBack()
        },
          600))
      }).
        catch(function (t) { })
  },
  onLoad: function (t) {
    console.log(t),
      void 0 == t.name ? this.setData({
        show: !1
      }) : this.setData({
        name: t.name,
        id: t.id,
        states: t.states
      })
  },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
})