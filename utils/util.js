function t(t) {
  return (t = t.toString())[1] ? t : "0" + t
}
module.exports = {
  formatTime: function (e) {
    var n = e.getFullYear(),
      o = e.getMonth() + 1,
      i = e.getDate();
    e.getHours(),
      e.getMinutes(),
      e.getSeconds();
    return [n, o, i].map(t).join("/")
  },
  showLoading: function () {
    try {
      wx.canIUse("showLoading") ? wx.showLoading({
        title: "加载中..."
      }) : wx.showToast({
        title: "加载中",
        icon: "loading"
      })
    } catch (t) {
      wx.showToast({
        title: "加载中",
        icon: "loading"
      })
    }
  },
  hideLoading: function () {
    try {
      wx.canIUse("hideLoading") ? wx.hideLoading() : wx.hideToast()
    } catch (t) {
      wx.hideToast()
    }
  },
  hideShareMenu: function () {
    try {
      wx.canIUse("hideShareMenu") && wx.hideShareMenu()
    } catch (t) { }
  }
};