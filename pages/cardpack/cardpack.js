var t = require("../../utils/http.js"),
  a = require("../../components/wux"),
  n = require("../../img/base64"),
  e = require("../../utils/util");
  
Page({
  data: {
    // datas: [],
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
    }],
    activeIndex: "all",
    tags: [{
        id: "all",
        name: "全部"
    }, { "id": 874, "name": "666", "states": 1 }]
  },
  initData: function () {
  // /userBankCard/listCard/all/1
  //   var a = this; (0, t.get)("/userBankCard/listCard/" + this.data.activeIndex + "/1").then(function (t) {
  //     wx.stopPullDownRefresh(),
  //       a.setData({
  //         datas: t.result.records
  //       }),
  //       e.hideLoading()
  //   }).
  //     catch(function (t) { })
  },
  getTags: function () {
    // var a = this; (0, t.get)("/userBankCardPacket/listPacket").then(function (t) {
    //   var n = {
    //     id: "all",
    //     name: "全部"
    //   };
    //   t.result.unshift(n),
    //     a.setData({
    //       tags: t.result
    //     })
    // }).
    //   catch(function (t) { })
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
    // e.showLoading(),
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