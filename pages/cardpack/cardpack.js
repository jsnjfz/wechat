var t = require("../../utils/http.js"),
  a = require("../../components/wux"),
  n = require("../../img/base64"),
  e = require("../../utils/util");
  
Page({
  data: {
    datas: [],
    activeIndex: "all"
  },
  initData: function () {
    var a = this; (0, t.get)("/userBankCard/listCard/" + this.data.activeIndex + "/1").then(function (t) {
      wx.stopPullDownRefresh(),
        a.setData({
          datas: t.result.records
        }),
        e.hideLoading()
    }).
      catch(function (t) { })
  },
  getTags: function () {
    var a = this; (0, t.get)("/userBankCardPacket/listPacket").then(function (t) {
      var n = {
        id: "all",
        name: "全部"
      };
      t.result.unshift(n),
        a.setData({
          tags: t.result
        })
    }).
      catch(function (t) { })
  },
  goCardInfo: function (t) {
    console.log(t);
    var a = t.currentTarget.dataset.obj;
    a.cid && wx.navigateTo({
      url: "/pages/cardinfo/cardinfo?id=" + a.cid + "&bid=" + a.bid
    })
  },
  tagClick: function (t) {
    console.log(t.currentTarget.id),
      this.setData({
        activeIndex: t.currentTarget.id
      }),
      this.initData()
  },
  longTap: function (t) {
    console.log(t),
      wx.navigateTo({
        url: "/pages/managetags/managetags"
      })
  },
  add: function () {
    var t = this;
    wx.showActionSheet({
      itemList: ["添加卡片", "添加卡包"],
      success: function (a) {
        console.log(a.tapIndex),
          0 == a.tapIndex && wx.navigateTo({
            url: "/pages/addcard/addcard"
          }),
          1 == a.tapIndex && t.addTag()
      }
    })
  },
  addTag: function () {
    var n = this;
    this.data;
    a.$wuxDialog.prompt({
      title: "输入卡包名称",
      content: " ",
      fieldtype: "text",
      maxlength: 6,
      onConfirm: function (a) {
        var e = n.data.$wux.dialog.prompt.response; (0, t.post)("/userBankCardPacket/packet", {
          name: e
        }).then(function (t) {
          200 == t.code && (n.getTags(), wx.showToast({
            title: t.msg,
            icon: "success"
          }))
        }),
          console.log(e)
      }
    })
  },
  onLoad: function (t) {
    e.showLoading(),
      this.setData({
        bell: n.bell
      })
  },
  onReady: function () { },
  onShow: function () {
    this.initData(),
      this.getTags()
  },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () {
    console.log("refresh"),
      this.initData()
  },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
})