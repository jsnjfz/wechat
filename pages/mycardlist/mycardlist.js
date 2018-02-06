var t = require("../../utils/http.js");
//获取应用实例
const app = getApp()

Page({
  data: {
    datas: [{
      "dictBank": {
        "antIcon": "https://pic.wankadi.com/bank/dd1917efee9f4e22ab5577ba64bc593e.png",
        "cardNum": 1,
        "interestHliDay": 14,
        "name": "民生银行",
        "repaymentDate": 20,
        "statementDate": 10,
        "totalAmount": 2222
      },
      "userBankVOList": [{
        "bid": 13,
        "cardNo": "4444",
        "cid": 2465,
        "des": "",
        "id": "76dc7751736445edbb6549a4381cb99f",
        "level": "白金卡",
        "logo": "https://pic.wankadi.com/bank/73bb43aabbc24ae5be059bb4c965b44d.jpg",
        "name": "民生女人花银联标准白金卡",
        "org": "银联",
        "org2": "",
        "packetId": 0,
        "packetName": "",
        "remind": 0,
        "repaymentDate": 20,
        "statementDate": 10
      }]
    }, {
      "dictBank": {
        "antIcon": "https://pic.wankadi.com/bank/984c6483417a4a5fa88008cf47e4f1d7.png",
        "cardNum": 2,
        "interestHliDay": 14,
        "name": "招商银行",
        "repaymentDate": 20,
        "statementDate": 10,
        "totalAmount": 99999
      },
      "userBankVOList": [{
        "bid": 12,
        "cardNo": "1234",
        "cid": 92,
        "des": "",
        "id": "3797d849c3144ebb8e13cbf0c557cbde",
        "level": "普卡",
        "logo": "https://pic.wankadi.com/bank/b86abbc3dd564370ba6233eef6cb7fc1.jpg",
        "name": "招商英雄联盟信用卡（LOGO卡）",
        "org": "银联",
        "org2": "",
        "packetId": 0,
        "packetName": "",
        "remind": 0,
        "repaymentDate": 20,
        "statementDate": 10
      }, {
        "bid": 12,
        "cardNo": "9999",
        "cid": 1536,
        "des": "",
        "id": "3f6d898164894e339a0d8fdeef8bcd13",
        "level": "金卡",
        "logo": "https://pic.wankadi.com/bank/c013156243794fc0ac34a512b7deaf69.jpg",
        "name": "招商ELLE联名VISA双币金卡（珍珠白·横版）",
        "org": "银联",
        "org2": "VISA",
        "packetId": 0,
        "packetName": "",
        "remind": 0,
        "repaymentDate": 20,
        "statementDate": 10
      }]
    }, {
      "dictBank": {
        "antIcon": "https://pic.wankadi.com/bank/52fd54f66a11438d932a1609985e360c.png",
        "cardNum": 1,
        "interestHliDay": 14,
        "name": "浦发银行",
        "repaymentDate": 20,
        "statementDate": 10,
        "totalAmount": 3456
      },
      "userBankVOList": [{
        "bid": 23,
        "cardNo": "8888",
        "cid": 2652,
        "des": "",
        "id": "960dd87561fd4435ae911b4778a6fdfc",
        "level": "金卡",
        "logo": "https://pic.wankadi.com/bank/71de03c991e24dc09f770097d59ee3aa.jpg",
        "name": "浦发新玛特联名VISA金",
        "org": "银联",
        "org2": "VISA",
        "packetId": 0,
        "packetName": "",
        "remind": 0,
        "repaymentDate": 20,
        "statementDate": 10
      }]
    }]
    // datas: {
    //   dictBank: [{
    //     "antIcon": "https://pic.wankadi.com/bank/984c6483417a4a5fa88008cf47e4f1d7.png",
    //     "cardNum": 1,
    //     "interestHliDay": 15,
    //     "name": "招商银行",
    //     "repaymentDate": 20,
    //     "statementDate": 10,
    //     "totalAmount": 666
    //   }, {
    //     "antIcon": "https://pic.wankadi.com/bank/52fd54f66a11438d932a1609985e360c.png",
    //     "cardNum": 1,
    //     "interestHliDay": 15,
    //     "name": "浦发银行",
    //     "repaymentDate": 20,
    //     "statementDate": 10,
    //     "totalAmount": 3456
    //   }],
    //   userBankVOList: [{
    //     "bid": 12,
    //     "cardNo": "1234",
    //     "cid": 92,
    //     "des": "",
    //     "id": "3797d849c3144ebb8e13cbf0c557cbde",
    //     "level": "普卡",
    //     "logo": "https://pic.wankadi.com/bank/b86abbc3dd564370ba6233eef6cb7fc1.jpg",
    //     "name": "招商英雄联盟信用卡（LOGO卡）",
    //     "org": "银联",
    //     "org2": "",
    //     "packetId": 0,
    //     "packetName": "",
    //     "remind": 0,
    //     "repaymentDate": 20,
    //     "statementDate": 10
    //   }, {
    //     "bid": 23,
    //     "cardNo": "8888",
    //     "cid": 2652,
    //     "des": "",
    //     "id": "960dd87561fd4435ae911b4778a6fdfc",
    //     "level": "金卡",
    //     "logo": "https://pic.wankadi.com/bank/71de03c991e24dc09f770097d59ee3aa.jpg",
    //     "name": "浦发新玛特联名VISA金",
    //     "org": "银联",
    //     "org2": "VISA",
    //     "packetId": 0,
    //     "packetName": "",
    //     "remind": 0,
    //     "repaymentDate": 20,
    //     "statementDate": 10
    //   }]
    // }
  },
  pick: function (t) {
    console.log(t);
    var n = t.currentTarget.dataset.obj,
      a = n.repaymentDate,
      e = new Date,
      o = e.getFullYear(),
      i = e.getMonth() + 1;
    console.log(t.currentTarget.dataset)
    e.getDate() > a && (i += 1);
    var c = i + "月" + a + "日",
      r = getCurrentPages(),
      u = (r[r.length - 1], r[r.length - 2]);
    console.log("前一页：", u),
      u.changeData({
        obj: n,
        date: c,
        dateVal: o + "-" + i + "-" + a
      }),
      wx.navigateBack({
        delta: 1
      })
  },
  initData: function () {
    // var n = this; (0, t.get)("/userBankCard/listCard/all/1").then(function (t) {
    //   200 == t.code && n.setData({
    //     datas: t.result.records
    //   })
    // }).
    //   catch(function (t) { })
  },
  onLoad: function (t) { },
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
