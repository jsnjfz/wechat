var t = require("../../utils/http.js"),
  n = require("../../utils/util");
Page({
  data: {},
  initData: function () {
    var i = this;
    n.showLoading(),
      (0, t.get)("/cardAlbum/cardAlbumHotList/" + this.data.id).then(function (t) {
        i.setData({
          hotCards: t.result
        }),
          n.hideLoading()
      }).
        catch(function (t) { })
  },
  onLoad: function (t) {
    wx.setNavigationBarTitle({
      title: t.name
    }),
      console.log(t),
      this.setData({
        id: t.id
      }),
      this.initData()
  },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
})