//获取应用实例
const app = getApp()

// var t = require("../../components/wux"),
//   a = require("../../utils/http.js"),
//   e = require("../../img/base64");
require("../../components/wux")
require("../../utils/http.js")
require("../../img/base64")

Page({
  data: {
    activeIndex: 0,
    ndatas: [{
      "cardStatementList": [{
        "cardName": "招商英雄联盟信用卡（LOGO卡）",
        "cardNo": "",
        "id": "3a53019016dc41419ef61bded2db7925",
        "repaymentAmount": 66.00,
        "repaymentAmountFact": 0.00,
        "repaymentStates": 1,
        "repaymentTime": null,
        "surplusAmount": 66.00
      }],
      "dictBank": {
        "antIcon": "https://pic.wankadi.com/bank/984c6483417a4a5fa88008cf47e4f1d7.png",
        "cardNo": "1234",
        "difDay": "15天",
        "name": "招商银行",
        "repaymentDate": "02/20",
        "totalAmount": 66.00
      }
    }, {
      "cardStatementList": [{
        "cardName": "浦发新玛特联名VISA金",
        "cardNo": "",
        "id": "b6dec3dbe69e40c2b413c11602ade2cb",
        "repaymentAmount": 333.00,
        "repaymentAmountFact": 0.00,
        "repaymentStates": 1,
        "repaymentTime": null,
        "surplusAmount": 333.00
      }],
      "dictBank": {
        "antIcon": "https://pic.wankadi.com/bank/52fd54f66a11438d932a1609985e360c.png",
        "cardNo": "8888",
        "difDay": "15天",
        "name": "浦发银行",
        "repaymentDate": "02/20",
        "totalAmount": 333.00
      }
    }],
    pdatas: [],
    obj: {},
    recentPay: ""
  },
  tabClick: function (t) {
    this.setData({
      activeIndex: t.currentTarget.id
    })
  },
  actionSheetTap: function (t) {
    this.setData({
      obj: t.currentTarget.dataset.obj
    });
    var a = t.currentTarget.dataset.obj.id,
      e = this,
      n = this.data.obj.cardName || "卡信息待补充";
    wx.showActionSheet({
      itemList: [n, "设为已还", "还部分", "编辑", "删除"],
      success: function (t) {
        switch (console.log(t.tapIndex), t.tapIndex) {
          case 1:
            e.payBack(- 1);
            break;
          case 2:
            e.payPart();
            break;
          case 3:
            e.editBill();
            break;
          case 4:
            e.delConfirm(a)
        }
        e.notPayData()
      }
    })
  },
  delTap: function (t) {
    var a = t.currentTarget.dataset.obj.billId;
    console.log(a);
    var e = this;
    wx.showActionSheet({
      itemList: ["删除"],
      success: function (t) {
        console.log(t.tapIndex),
          0 === t.tapIndex && e.delConfirm(a)
      }
    })
  },
  delConfirm: function (t) {
    var a = this;
    wx.showModal({
      title: "是否确认删除账单？",
      confirmText: "是",
      cancelText: "否",
      success: function (e) {
        console.log(e),
          e.confirm ? a.delBill(t) : console.log("用户点击辅助操作")
      }
    })
  },
  notPayData: function () {
    // var t = this; (0, a.get)("/creditCardStatement/listStatement/1").then(function (a) {
    //   200 == a.code && (a.result.records.map(function (t) {
    //   - 1 != t.dictBank.difDay.indexOf("到期") || "3天" == t.dictBank.difDay ? t.color = "orange" : -1 != t.dictBank.difDay.indexOf("逾期") ? t.color = "red" : t.color = "black"
    //   }), t.setData({
    //     ndatas: a.result.records
    //   }))
    // }).
    //   catch(function (t) { })
  },
  payedData: function () {
    // var t = this; (0, a.get)("/repaymentHistory/listRepayHistoryPage/1").then(function (a) {
    //   200 == a.code && t.setData({
    //     pdatas: a.result.records,
    //     recentPay: a.result.condition.repayHistoryByRecent
    //   })
    // }).
    //   catch(function (t) { })
  },
  payBack: function (t) {
    // var e = this,
    //   n = this.data; (0, a.post)("/creditCardStatement/repayment", {
    //     id: n.obj.id,
    //     amount: t
    //   }).then(function (t) {
    //     200 == t.code && (e.notPayData(), wx.showToast({
    //       title: t.msg,
    //       icon: "success"
    //     }))
    //   })
  },
  payPart: function () {
    // var a = this,
    //   e = this.data.obj;
    // t.$wuxDialog.prompt({
    //   title: "标记已还部分",
    //   content: "应还：" + e.repaymentAmount + "，已还：" + e.repaymentAmountFact + "，待还:" + e.surplusAmount,
    //   fieldtype: "digit",
    //   maxlength: 36,
    //   onConfirm: function (t) {
    //     var e = a.data.$wux.dialog.prompt.response;
    //     a.payBack(e)
    //   }
    // })
  },
  editBill: function () {
    // var e = this,
    //   n = this.data;
    // t.$wuxDialog.prompt({
    //   title: "编辑账单金额",
    //   content: " ",
    //   fieldtype: "digit",
    //   maxlength: 36,
    //   onConfirm: function (t) {
    //     var o = e.data.$wux.dialog.prompt.response; (0, a.put)("/creditCardStatement/statement", {
    //       id: n.obj.id,
    //       amount: o
    //     }).then(function (t) {
    //       200 == t.code && (e.notPayData(), wx.showToast({
    //         title: t.msg,
    //         icon: "success"
    //       }))
    //     })
    //   }
    // })
  },
  delBill: function (t) {
    // var e = this; (0, a.del)("/creditCardStatement/statement/" + t).then(function (t) {
    //   200 == t.code && (e.notPayData(), e.payedData(), wx.showToast({
    //     title: t.msg,
    //     icon: "success"
    //   }))
    // })
  },
  add: function () {
    wx.showActionSheet({
      itemList: ["选择卡片添加账单", "粘贴短信添加账单"],
      success: function (t) {
        console.log(t.tapIndex),
          0 == t.tapIndex && wx.navigateTo({
            url: "/pages/adbill/addbill"
          }),
          1 == t.tapIndex && wx.navigateTo({
            url: "/pages/sms/sms"
          })
      }
    })
  },
  onLoad: function (t) {
    // this.setData({
    //   bill: e.bill
    // });
    var a = this;
    setTimeout(function () {
      a.notPayData(),
        a.payedData()
    },
      )
  },
  onReady: function () { },
  onShow: function () {
    this.notPayData(),
      this.payedData()
  },
  onHide: function () { },
  onUnload: function () { },
  onPullDownRefresh: function () { },
  onReachBottom: function () { },
  onShareAppMessage: function () { }
})
