Page({
  data: {
    img: "https://pic.wankadi.com/bank/fee6dd40f76c45509d4b6ba30a272d8a.jpg"
  },
  save: function () {
    wx.showLoading({
      title: "下载中..."
    });
    wx.downloadFile({
      url: this.data.img,
      success: function (o) {
        var n = o.tempFilePath;
        wx.saveImageToPhotosAlbum ? wx.saveImageToPhotosAlbum({
          filePath: n,
          success: function () {
            wx.showToast({
              title: "保存成功",
              icon: "success"
            })
          },
          fail: function () {
            wx.hideLoading(),
              wx.showModal({
                title: "提示",
                content: "您拒绝了保存图片"
              })
          }
        }) : wx.showModal({
          title: "提示",
          content: "您的微信版本过低，请升级体验本功能"
        })
      }
    })
  },
  ok: function () {
    wx.navigateBack()
  },
  onLoad: function (o) { },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
})