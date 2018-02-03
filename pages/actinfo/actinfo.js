var t = require("../../utils/http.js"),
  e = require("../../img/base64"),
  i = require("../../utils/util"),
  a = require("../../wxParse/wxParse.js");
Page({
  data: {},
  initData: function (e) {
    var n = this;
    i.showLoading(),
      (0, t.get)("/bankActivity/detailBankActivity/" + e).then(function (t) {
        if (200 == t.code) {
          var e = t.result;
          e.startTime = n.date(e.startTime),
            e.endTime = n.date(e.endTime),
            n.setData({
              datas: e,
              sub: e.sub,
              subWx: e.subWx,
              isRemind: 1 == e.remind && 1 == e.subWx
            });
          var s = t.result.content;
          a.wxParse("content", "html", s, n, 5);
          var r = t.result.regulation;
          a.wxParse("regulation", "html", r, n, 5);
          var o = t.result.howPlay;
          a.wxParse("howPlay", "html", o, n, 5),
            i.hideLoading()
        }
      }).
        catch(function (t) { })
  },
  getReletive: function (e, i) {
    var a = this; (0, t.post)("/bankActivity/listBankActivity", {
      bankId: e,
      id: i,
      current: 1
    }).then(function (t) {
      if (200 == t.code) {
        for (var e = t.result.records,
          i = 0; i < e.length; i++) e[i].startTime = a.date(e[i].startTime),
            e[i].endTime = a.date(e[i].endTime);
        a.setData({
          reletives: e
        })
      }
    }).
      catch(function (t) { })
  },
  flow: function () {
    var e = this; (0, t.get)("/bankActivity/subBankActivity/" + this.data.id).then(function (t) {
      200 == t.code && (e.setData({
        sub: t.result.sub
      }), 1 == e.data.sub && 0 != e.data.datas.reminderType && e.remindMe())
    }).
      catch(function (t) { })
  },
  remindMe: function () {
    var e = this;
    0 == this.data.subWx ? this.alert() : (0, t.get)("/bankActivity/remindBankActivity/" + this.data.id).then(function (t) {
      200 == t.code && e.setData({
        isRemind: 1 == t.result.remind
      })
    }).
      catch(function (t) { })
  },
  alert: function () {
    var t = this;
    0 == this.data.subWx && wx.showModal({
      title: "提示",
      content: "你尚未关注微信公众号「玩卡帝」，关注后才能开启活动提醒噢~",
      showCancel: !1,
      success: function (e) {
        e.confirm && (t.setData({
          isRemind: !1
        }), console.log("用户点击确定"))
      }
    })
  },
  date: function (t) {
    return i.formatTime(new Date(t))
  },
  onLoad: function (t) {
    this.setData({
      bell: e.bell,
      err: e.err,
      cam: e.cam,
      id: t.id
    }),
      this.initData(t.id),
      this.getReletive(t.bankId, t.id)
  },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () {
    var e = {
      shareDes: this.data.datas.title,
      sharePage: getCurrentPages()[getCurrentPages().length - 1].route,
      state: 0
    };
    return {
      success: function (i) {
        e.state = 1,
          (0, t.shareLog)(e)
      },
      fail: function (i) {
        (0, t.shareLog)(e)
      }
    }
  }
})