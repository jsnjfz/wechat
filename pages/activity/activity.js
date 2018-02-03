var t = require("../../utils/http.js"),
  a = require("../../img/base64"),
  e = require("../../utils/util");
Page({
  data: {
    activeIndex: 0,
    array: ["美国", "中国", "巴西", "日本"],
    index: 0,
    myLists: [],
    allLists: [],
    page: 1,
    bankName: "选择银行",
    actType: "活动类型",
    states: "完成状态",
    bankName1: "选择银行",
    actType1: "活动类型",
    order: "排序",
    bankVal: "",
    typeVal: "",
    statesVal: "",
    bankVal1: "",
    typeVal1: "",
    orderVal: "",
    bankData: null,
    typeData: null,
    only: !1,
    statesData: [{
      name: "全部",
      value: ""
    },
    {
      name: "已完成",
      value: "1"
    },
    {
      name: "未完成",
      value: "0"
    }],
    orderData: [{
      name: "全部",
      value: ""
    },
    {
      name: "关注数",
      value: "sub_num"
    },
    {
      name: "时间",
      value: "start_time"
    }]
  },
  tabClick: function (t) {
    this.setData({
      activeIndex: t.currentTarget.id
    }),
      2 == t.currentTarget.id ? this.getAllAct() : (this.setData({
        bankName: "选择银行",
        bankVal: "",
        actType: "活动类型",
        typeVal: "",
        states: "完成状态",
        statesVal: "",
        myLists: []
      }), this.initData())
  },
  gofind: function () {
    this.setData({
      activeIndex: 2
    }),
      this.getAllAct()
  },
  initData: function () {
    var a = this,
      i = "";
    0 == this.data.activeIndex && (i = "Today"),
      (0, t.post)("/bankActivity/listMyBankActivity" + i, {
        bankId: this.data.bankVal,
        prizeType: this.data.typeVal,
        states: this.data.statesVal
      }).then(function (t) {
        200 == t.code && (a.setData({
          myLists: t.result
        }), e.hideLoading())
      }).
        catch(function (t) { })
  },
  getAllAct: function (a) {
    var i = this,
      n = a || 1; (0, t.post)("/bankActivity/listBankActivity", {
        bankId: this.data.bankVal1,
        prizeType: this.data.typeVal1,
        orderBy: this.data.orderVal,
        current: n,
        only: this.data.only
      }).then(function (t) {
        if (200 == t.code) {
          for (var a = t.result.records,
            n = 0; n < a.length; n++) a[n].startTime = i.date(a[n].startTime),
              a[n].endTime = i.date(a[n].endTime);
          i.setData({
            allLists: a
          }),
            e.hideLoading()
        }
      }).
        catch(function (t) { })
  },
  getFilters: function () {
    var a = this; (0, t.get)("/dictType/getDictByType/bank,activityType").then(function (t) {
      if (200 == t.code) {
        var e = {
          name: "全部",
          value: ""
        };
        t.result.bank.unshift(e),
          t.result.activityType.unshift(e),
          a.setData({
            bankData: t.result.bank,
            typeData: t.result.activityType
          })
      }
    }).
      catch(function (t) { })
  },
  switchBank: function (t) {
    console.log(t),
      this.setData({
        bankName: "全部" == this.data.bankData[t.detail.value].name ? "选择银行" : this.data.bankData[t.detail.value].name,
        bankVal: this.data.bankData[t.detail.value].value,
        myLists: []
      }),
      e.showLoading(),
      this.initData()
  },
  switchType: function (t) {
    this.setData({
      actType: "全部" == this.data.typeData[t.detail.value].name ? "活动类型" : this.data.typeData[t.detail.value].name,
      typeVal: this.data.typeData[t.detail.value].value,
      myLists: []
    }),
      e.showLoading(),
      this.initData()
  },
  switchStates: function (t) {
    this.setData({
      states: "全部" == this.data.statesData[t.detail.value].name ? "完成状态" : this.data.statesData[t.detail.value].name,
      statesVal: this.data.statesData[t.detail.value].value,
      myLists: []
    }),
      e.showLoading(),
      this.initData()
  },
  switchBank1: function (t) {
    this.setData({
      bankName1: "全部" == this.data.bankData[t.detail.value].name ? "选择银行" : this.data.bankData[t.detail.value].name,
      bankVal1: this.data.bankData[t.detail.value].value,
      allLists: []
    }),
      e.showLoading(),
      this.getAllAct()
  },
  switchType1: function (t) {
    this.setData({
      actType1: "全部" == this.data.typeData[t.detail.value].name ? "活动类型" : this.data.typeData[t.detail.value].name,
      typeVal1: this.data.typeData[t.detail.value].value,
      allLists: []
    }),
      e.showLoading(),
      this.getAllAct()
  },
  switchOrder: function (t) {
    this.setData({
      order: "全部" == this.data.orderData[t.detail.value].name ? "完成状态" : this.data.orderData[t.detail.value].name,
      orderVal: this.data.orderData[t.detail.value].value,
      allLists: []
    }),
      e.showLoading(),
      this.getAllAct()
  },
  checking: function (a) {
    var e = this;
    console.log(a);
    var i = a.currentTarget.dataset.id,
      n = this.data.myLists; (0, t.get)("/bankActivity/overDayBankActivity/" + i).then(function (t) {
        if (200 == t.code) for (var a = 0; a < n.length; a++) for (var s = 0; s < n[a].bankActiveVO.length; s++) n[a].bankActiveVO[s].id == i && (n[a].bankActiveVO[s].states = t.result.states, e.setData({
          myLists: n
        }))
      }).
        catch(function (t) { })
  },
  checkboxChange: function (t) {
    console.log(t)
  },
  date: function (t) {
    return e.formatTime(new Date(t))
  },
  seeMy: function (t) {
    this.setData({
      only: t.detail.value
    }),
      this.getAllAct()
  },
  onLoad: function (t) {
    this.setData({
      bell: a.bell
    }),
      this.getFilters(),
      this.getAllAct()
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