var t = require("../../utils/http.js");
require("../../utils/util");
Page({
  data: {},
  bindFormSubmit: function (n) {
    console.log(n),
      (0, t.post)("/bankActivity/activityInfoReport", {
        bankActiveId: this.data.id,
        type: n.detail.value.reason,
        des: n.detail.value.des,
        classify: 2
      }).then(function (t) {
        200 == t.code ? wx.redirectTo({
          url: "/pages/thanks/thanks"
        }) : wx.showToast({
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
    this.setData({
      id: t.cid,
      name: t.name
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