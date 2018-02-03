var o = require("../../components/wux");
Page({
  data: {},
  previewImage: function () {
    wx.canvasToTempFilePath({
      canvasId: "qrcode",
      success: function (o) {
        wx.previewImage({
          urls: [o.tempFilePath]
        })
      }
    })
  },
  saveQr: function () {
    wx.canvasToTempFilePath({
      canvasId: "qrcode",
      success: function (o) {
        wx.saveImageToPhotosAlbum ? wx.saveImageToPhotosAlbum({
          filePath: o.tempFilePath,
          success: function (o) {
            console.log(o),
              wx.showToast({
                title: "保存成功"
              })
          }
        }) : wx.showModal({
          title: "提示",
          content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
        })
      }
    })
  },
  copyUrl: function () {
    var o = this;
    wx.setClipboardData ? wx.setClipboardData({
      data: o.data.url,
      success: function (o) {
        wx.showToast({
          title: "复制成功"
        })
      }
    }) : wx.showModal({
      title: "提示",
      content: "当前微信版本过低，无法使用该功能，请升级到最新微信版本后重试。"
    })
  },
  randomColor: function () {
    var o = Math.floor(16777215 * Math.random()).toString(16).toUpperCase();
    o.length;
    return "#" + "000000".substring(0, 6 - o.length) + o
  },
  renderQrcode: function (t, e, n) {
    var a = "极速申请“" + n + "”";
    o.$wuxQrcode.init(t, e, {
      fgColor: "#02c863",
      width: 230,
      height: 230,
      text: a
    })
  },
  onLoad: function (o) {
    var t = "",
      e = this;
    wx.getStorage({
      key: "nickName",
      success: function (o) {
        t = "?u=" + encodeURI(o.data),
          console.log(t)
      },
      complete: function () {
        e.setData({
          url: o.url + t
        }),
          e.renderQrcode("qrcode", o.url + t, o.bankName)
      }
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