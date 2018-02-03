var t = require("../../utils/http.js"),
  n = require("../../utils/util");
Page({
  data: {
    datas: "",
    id: ""
  },
  initData: function () {
    var n = this; (0, t.get)("/userBankCard/card/" + this.data.id).then(function (t) {
      200 == t.code && n.setData({
        datas: t.result
      })
    }).
      catch(function (t) { })
  },
  toggleRemind: function (n) {
    var a = n.detail.value,
      i = "关闭成功";
    a && (i = "开启成功"),
      (0, t.get)("/userBankCard/setRemind/" + this.data.id + "/" + a).then(function (t) {
        200 == t.code && wx.showToast({
          title: i,
          icon: "success"
        })
      }).
        catch(function (t) { })
  },
  goToEdit: function (t) {
    var n = JSON.stringify(t.currentTarget.dataset.obj);
    wx.navigateTo({
      url: "/pages/cardedit/cardedit?obj=" + n
    })
  },
  goCardInfo: function (t) {
    console.log(t);
    var n = t.currentTarget.dataset.obj;
    n.dictBankCardinfoId && wx.navigateTo({
      url: "/pages/cardinfo/cardinfo?id=" + n.dictBankCardinfoId + "&bid=" + n.dictBankId
    })
  },
  onLoad: function (t) {
    this.setData({
      id: t.id
    }),
      n.hideShareMenu()
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