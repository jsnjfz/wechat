var e = require("../../utils/http.js"),
  t = require("../../components/wux");
Page({
  data: {
    feeType: [{
      name: "强制收取",
      value: 1
    },
    {
      name: "刷次数",
      value: 2
    },
    {
      name: "刷金额",
      value: 3
    },
    {
      name: "积分换",
      value: 4
    },
    {
      name: "有效期内免",
      value: 5
    },
    {
      name: "终身免年费",
      value: 6
    },
    {
      name: "其他",
      value: 7
    }],
    index: 0,
    cantClick: !0,
    dateDisable: !1,
    date: "",
    currentType: ""
  },
  initData: function () {
    var t = this; (0, e.get)("/userBankCard/getAnnualFee/" + this.data.id).then(function (e) {
      if (200 == e.code) {
        for (var a = e.result,
          n = t.data.feeType,
          i = 0; i < n.length; i++) n[i].value == a.nextAnnualFeeType && t.setData({
            index: i
          });
        t.setStates(a.nextAnnualFeeType),
          t.setData({
            datas: e.result,
            currentType: a.nextAnnualFeeType,
            newDate: null == a.annualFeeDate ? "" : t.formatTime(a.annualFeeDate),
            date: null == a.annualFeeDate ? "" : t.formatTime1(a.annualFeeDate),
            nextAnnualFeeCondition: a.nextAnnualFeeCondition,
            condition: "" == a.nextAnnualFeeCondition ? "" : a.nextAnnualFeeCondition + t.data.surfix
          })
      }
    }).
      catch(function (e) { })
  },
  formatTime: function (e) {
    var t = new Date(e);
    return t.getFullYear() + "年" + (t.getMonth() + 1) + "月"
  },
  formatTime1: function (e) {
    var t = new Date(e);
    return t.getFullYear() + "-" + (t.getMonth() + 1)
  },
  typeChange: function (e) {
    console.log(e);
    var t = e.detail.value,
      a = this.data.feeType[t].value;
    this.setData({
      index: t,
      currentType: a,
      date: "",
      nextAnnualFeeCondition: "",
      condition: "",
      surfix: "",
      newDate: ""
    });
    var n = this.data.feeType[t].value;
    this.setStates(n)
  },
  setStates: function (e) {
    switch (e) {
      case 1:
      case 5:
        this.setData({
          cantClick:
          !0,
          dateDisable: !1
        });
        break;
      case 6:
        this.setData({
          cantClick:
          !0,
          dateDisable: !0
        });
        break;
      case 2:
        this.setData({
          cantClick:
          !1,
          surfix: "次",
          dateDisable: !1
        });
        break;
      case 3:
        this.setData({
          cantClick:
          !1,
          surfix: "元",
          dateDisable: !1
        });
        break;
      case 4:
        this.setData({
          cantClick:
          !1,
          surfix: "分",
          dateDisable: !1
        });
        break;
      case 7:
        this.setData({
          cantClick:
          !1,
          dateDisable: !1
        })
    }
  },
  bindDateChange: function (e) {
    console.log("picker发送选择改变，携带值为", e.detail.value);
    var t = e.detail.value,
      a = t.replace(/-/, "年") + "月";
    console.log(a),
      this.setData({
        date: t,
        newDate: a
      })
  },
  now: function () {
    var e = new Date,
      t = e.getFullYear(),
      a = e.getMonth() + 1;
    this.setData({
      now: t + "-" + a
    })
  },
  showAlert: function () {
    var e = this;
    this.data.cantClick || t.$wuxDialog.prompt({
      title: "",
      content: "所需条件",
      fieldtype: "number",
      maxlength: 36,
      surfix: e.data.surfix,
      onConfirm: function (t) {
        var a = e.data.$wux.dialog.prompt.response;
        e.setData({
          condition: "" == a ? "" : a + e.data.surfix,
          nextAnnualFeeCondition: a
        }),
          console.log(a)
      }
    })
  },
  save: function () {
    (0, e.put)("/userBankCard/putAnnualFee", {
      id: this.data.id,
      nextAnnualFeeType: this.data.currentType,
      nextAnnualFeeCondition: this.data.nextAnnualFeeCondition,
      annualFeeDateString: this.data.newDate
    }).then(function (e) {
      200 == e.code ? (wx.showToast({
        title: e.msg
      }), setTimeout(function () {
        wx.navigateBack()
      },
        600)) : wx.showModal({
          title: "提示",
          content: e.msg,
          showCancel: !1,
          success: function (e) { }
        })
    }).
    catch(function (e) { })
  },
  onLoad: function (e) {
    this.setData({
      id: e.id
    }),
      this.initData(),
      this.now()
  },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
})