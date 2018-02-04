var t = require("../../../components/wux"),
  a = require("../../../utils/http.js"),
  n = require("../../../utils/util");
Page({
  data: {
    backto: 0,
    id: "",
    datas: [],
    inputShowed: !0,
    inputVal: ""
  },
  pick: function (t) {
    var n = t.currentTarget.dataset.obj,
      e = n.bankId,
      i = getCurrentPages(),
      o = (i[i.length - 1], i[i.length - this.data.backto - 1]),
      s = this.data; (0, a.get)("/userBankCard/cardDefault/" + e).then(function (t) {
        200 == t.code && (o.changeData({
          dictBankCardinfoId: n.id,
          name: n.name,
          billDate: t.result.statementDate - 1,
          repayDate: t.result.repaymentDate - 1,
          quota: t.result.quota,
          dictBankId: n.bankId
        }), wx.navigateBack({
          delta: s.backto
        }))
      }).
        catch(function (t) { })
  },
  initData: function () {
    var t = this; (0, a.get)("/dictBank/listBankCardInfo/" + this.data.id).then(function (a) {
      200 == a.code && t.setData({
        datas: a.result
      })
    }).
      catch(function (t) { })
  },
  showInput: function () {
    this.setData({
      inputShowed: !0
    })
  },
  hideInput: function () {
    this.setData({
      inputVal: "",
      inputShowed: !1
    })
  },
  clearInput: function () {
    this.setData({
      inputVal: ""
    })
  },
  inputTyping: function (t) {
    this.setData({
      inputVal: t.detail.value
    })
  },
  search: function () {
    var t = this,
      n = this.data; (0, a.post)("/dictBank/searchCardInfo/", {
        bankId: n.id,
        name: n.inputVal
      }).then(function (a) {
        200 == a.code && t.setData({
          datas: a.result
        })
      })
  },
  postcardTap: function () {
    var a = this;
    t.$wuxDialog.prompt({
      title: "",
      content: "提交卡片",
      fieldtype: "text",
      placeholder: "请输入卡片名称，我们将会尽快补充卡片信息",
      maxlength: 36,
      onConfirm: function (t) {
        var n = a.data.$wux.dialog.prompt.response;
        a.postcard(n)
      }
    })
  },
  postcard: function (t) {
    var n = this.data; (0, a.post)("/userBankCard/feedbackCard", {
      cardName: t,
      id: n.bid
    }).then(function (t) {
      200 == t.code && wx.redirectTo({
        url: "/pages/thanks/thanks"
      })
    })
  },
  onLoad: function (t) {
    if (console.log("进来了", t), this.setData({
      bid: t.bid
    }), t.level && (2 == (a = Number(t.level)) && this.setData({
      backto: 2,
      id: t.id
    }), 1 == a && this.setData({
      backto: 3,
      id: t.id
    }), this.initData()), t.back) {
      var a = Number(t.back);
      2 == t.back ? this.setData({
        backto: 2,
        id: t.id
      }) : this.setData({
        backto: 3,
        id: t.id
      })
    }
    1 == t.search && this.setData({
      search: !0
    }),
      n.hideShareMenu()
  },
  onReady: function () { },
  onShow: function () {
    console.log(this.data.datas)
  },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
})