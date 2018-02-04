var t = require("../../utils/http.js"),
  a = (getApp(), require("../../utils/util"));
Page({
  data: {
    bankId: null,
    bankList: [],
    bank: "",
    page: 1,
    pages: null,
    array: ["美国", "中国", "巴西", "日本"],
    index: 0,
    levelName: "卡级别",
    orgName: "卡组织",
    typeName: "卡类型",
    levelArr: [],
    orgArr: [],
    typeArr: [],
    levelVal: "",
    orgVal: "",
    typeVal: ""
  },
  switchLevel: function (t) {
    console.log("picker发送选择改变，携带值为", t),
      this.setData({
        levelName: this.data.levelArr[t.detail.value].name,
        levelVal: this.data.levelArr[t.detail.value].value,
        bankList: []
      }),
      this.initData(1)
  },
  switchOrg: function (t) {
    console.log("picker发送选择改变，携带值为", t),
      this.setData({
        orgName: this.data.orgArr[t.detail.value].name,
        orgVal: this.data.orgArr[t.detail.value].value,
        bankList: []
      }),
      this.initData(1)
  },
  switchType: function (t) {
    console.log("picker发送选择改变，携带值为", t),
      this.setData({
        typeName: this.data.typeArr[t.detail.value].name,
        typeVal: this.data.typeArr[t.detail.value].value,
        bankList: []
      }),
      this.initData(1)
  },
  initData: function (e) {
    var n = this;
    a.showLoading();
    var i = this.data.bankList;
    console.log(i),
      (0, t.post)("/dictBank/bankCardInfo", {
        bankId: this.data.bankId,
        current: e,
        level: this.data.levelVal,
        org: this.data.orgVal,
        type: this.data.typeVal
      }).then(function (t) {
        n.setData({
          pages: t.result.pages
        }),
          0 == t.result.records.length && console.log("暂无数据"),
          0 == n.data.bankList.length ? n.setData({
            bankList: t.result.records
          }) : n.setData({
            bankList: i.concat(t.result.records)
          }),
          a.hideLoading()
      })
  },
  getBankInfo: function (e) {
    var n = this; (0, t.get)("/dictBank/bankInfo/" + e).then(function (t) {
      n.setData({
        bank: t.result
      }),
        wx.setNavigationBarTitle({
          title: t.result.name
        }),
        a.hideLoading()
    }).
      catch(function (t) { })
  },
  getTags: function () {
    var a = this; (0, t.get)("/dictType/getDictByType/level,org,priority").then(function (t) {
      a.setData({
        levelArr: t.result.level,
        orgArr: t.result.org,
        typeArr: t.result.priority
      })
    }).
      catch(function (t) { })
  },
  onLoad: function (t) {
    this.setData({
      bankId: t.bankId
    }),
      this.initData(1),
      this.getBankInfo(t.bankId),
      this.getTags()
  },
  onReady: function () { },
  onShow: function () { },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () {
    console.log("到底了");
    var t = this.data.page + 1;
    this.setData({
      page: t
    }),
      t <= this.data.pages ? this.initData(t) : wx.showToast({
        title: "没有更多数据",
        duration: 1500
      })
  },
  onShareAppMessage: function () {
    var a = {
      shareDes: this.data.bank.name,
      sharePage: getCurrentPages()[getCurrentPages().length - 1].route,
      state: 0
    };
    return {
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