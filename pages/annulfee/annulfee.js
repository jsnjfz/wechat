function t(t, n, e) {
  return n in t ? Object.defineProperty(t, n, {
    value: e,
    enumerable: !0,
    configurable: !0,
    writable: !0
  }) : t[n] = e,
    t
}
var n, e = require("../../utils/http.js");
Page((n = {
  data: {
    activeIndex: "all",
    datas: []
  },
  tagClick: function (t) {
    console.log(t.currentTarget.id),
      this.setData({
        activeIndex: t.currentTarget.id
      })
  },
  initData: function () {
    var t = this; (0, e.get)("/userBankCard/listAnnualFee/" + this.data.activeIndex + "/1").then(function (n) {
      200 == n.code && t.setData({
        datas: n.result.records
      })
    }).
      catch(function (t) { })
  },
  getTags: function () {
    var t = this; (0, e.get)("/userBankCardPacket/listPacket").then(function (n) {
      var e = {
        id: "all",
        name: "全部"
      };
      n.result.unshift(e),
        t.setData({
          tags: n.result
        })
    }).
      catch(function (t) { })
  }
},
  t(n, "tagClick",
    function (t) {
      console.log(t.currentTarget.id),
        this.setData({
          activeIndex: t.currentTarget.id
        }),
        this.initData()
    }), t(n, "onLoad",
      function (t) {
        this.getTags()
      }), t(n, "onReady",
        function () { }), t(n, "onShow",
          function () {
            this.initData()
          }), t(n, "onHide",
            function () { }), t(n, "onUnload",
              function () { }), t(n, "onPullDownRefresh",
                function () { }), t(n, "onReachBottom",
                  function () { }), t(n, "onShareAppMessage",
                    function () { }), n))