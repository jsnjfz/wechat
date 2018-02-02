var t = require("../../utils/http.js"),
  n = (getApp(), require("../../utils/util"));
Page({
  data: {
    hotCards: [],
    hotTheme: [],
    allBanks: []
  },
  initData: function () {
    var i = this;
    n.showLoading(),
      (0, t.get)("/equityHome/home").then(function (t) {
        i.setData({
          hotCards: t.result[0].cardAlbumListList,
          hotTheme: t.result[1],
          allBanks: t.result[2]
        }),
          n.hideLoading()
      }).
        catch(function (t) { }),
      (0, t.get)("/miniAppList/wx5a9a7d00de14f9c4").then(function (t) {
        i.setData({
          appList: t.result
        }),
          n.hideLoading()
      }).
        catch(function (t) { })
  },
  jumpApp: function (t) {
    console.log(t),
      wx.navigateToMiniProgram({
        appId: t.currentTarget.dataset.appid,
        success: function (t) {
          console.log(t)
        }
      })
  },
  onLoad: function (t) {
    var n = this;
    setTimeout(function () {
      n.initData()
    },
      600)
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