var t = require("../../utils/http.js"),
  a = require("../../utils/util"),
  e = require("../../wxParse/wxParse.js");
  
Page({
  data: {
    tabs: ["权益", "积分", "攻略"],
    activeIndex: 0,
    sliderOffset: 0,
    sliderLeft: 0,
    btnTxt: "放入卡包"
  },
  initData: function (e) {
    var i = this;
    a.showLoading(),
      (0, t.get)("/dictBank/dictBankCardInfo/" + e).then(function (t) {
        i.setData({
          cardinfo: t.result
        }),
          wx.setNavigationBarTitle({
            title: t.result.name
          }),
          a.hideLoading()
      }).
        catch(function (t) { })
  },
  getRights: function (e) {
    var i = this;
    a.showLoading(),
      (0, t.get)("/cardInfoEquityItems/list/" + e).then(function (t) {
        i.setData({
          rightsData: t.result
        }),
          a.hideLoading()
      }).
        catch(function (t) { })
  },
  getPoints: function (i, n) {
    var s = this;
    console.log("iiiiiiiiiiiid", i),
      a.showLoading(),
      (0, t.get)("/dictCardPoints/list?bid=" + i + "&cid=" + n).then(function (t) {
        s.setData({
          pointsData: t.result
        });
        var i = t.result.otherList[0].content;
        e.wxParse("others", "html", i, s, 5);
        for (var n = t.result.onlineList,
          o = [], c = 0; c < n.length; c++) for (var r in n[c]) if ("" != n[c][r]) {
            switch (console.log(r), console.log(n[c][r]), r) {
              case "alipay":
                o.push({
                  name:
                  "支付宝",
                  value: n[c][r]
                });
                break;
              case "applepay":
                o.push({
                  name:
                  "ApplePay",
                  value: n[c][r]
                });
                break;
              case "baidupay":
                o.push({
                  name:
                  "百度支付",
                  value: n[c][r]
                });
                break;
              case "jdpay":
                o.push({
                  name:
                  "京东支付",
                  value: n[c][r]
                });
                break;
              case "qqpay":
                o.push({
                  name:
                  "QQ支付",
                  value: n[c][r]
                });
                break;
              case "tentcentpay":
                o.push({
                  name:
                  "微信/财付通支付",
                  value: n[c][r]
                });
                break;
              case "unionpay":
                o.push({
                  name:
                  "银联支付",
                  value: n[c][r]
                })
            }
            s.setData({
              pay: o
            })
          }
        a.hideLoading()
      }).
        catch(function (t) { })
  },
  getTips: function (a, e) {
    var i = this; (0, t.get)("/cardPlayStrategy/list?bid=" + a + "&cid=" + e).then(function (t) {
      i.setData({
        tipsData: t.result
      })
    }).
      catch(function (t) { })
  },
  tabClick: function (t) {
    console.log(t),
      this.setData({
        sliderOffset: t.currentTarget.offsetLeft,
        activeIndex: t.currentTarget.id
      })
  },
  advertise: function (a, e) {
    var i = this; (0, t.get)("/generalizeLinkShort?bid=" + a + "&cid=" + e).then(function (t) {
      var a;
      a = t.result.own ? "已持有" : "放入卡包",
        i.setData({
          ad: t.result.cardConversionLink,
          btnTxt: a,
          own: t.result.own
        })
    }).
      catch(function (t) { })
  },
  doihave: function () {
    var a = this;
    this.data.own ? wx.showModal({
      title: "提示",
      content: "已持有此卡，若需删除，请到卡包中删除",
      showCancel: !1
    }) : (0, t.post)("/userBankCard/addUserBankCardBySimple", {
      dictBankCardinfoId: this.data.cid,
      dictBankId: this.data.bid
    }).then(function (t) {
      200 == t.code && (a.setData({
        own: !0,
        btnTxt: "已持有"
      }), wx.showModal({
        title: "提示",
        content: "添加成功，请到卡包中补充信息",
        showCancel: !1
      }))
    }).
      catch(function (t) { })
  },
  onLoad: function (t) {
    var a = this;
    this.initData(t.id),
      this.getRights(t.id),
      this.getPoints(t.bid, t.id),
      this.getTips(t.bid, t.id),
      this.advertise(t.bid, t.id),
      this.setData({
        cid: t.id,
        bid: t.bid
      }),
      wx.getSystemInfo({
        success: function (t) {
          a.setData({
            sliderLeft: (t.windowWidth / a.data.tabs.length - 96) / 2,
            sliderOffset: t.windowWidth / a.data.tabs.length * a.data.activeIndex
          })
        }
      })
  },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () {
    var a = {
      shareDes: this.data.cardinfo.name,
      sharePage: getCurrentPages()[getCurrentPages().length - 1].route,
      state: 0
    };
    return {
      title: this.data.cardinfo.name,
      success: function (e) {
        a.state = 1,
          (0, t.shareLog)(a)
      },
      fail: function (e) {
        (0, t.shareLog)(a)
      }
    }
  }
})