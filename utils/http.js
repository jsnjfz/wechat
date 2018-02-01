function e() {
  function t() {
    wx.getSetting({
      success: function (n) {
        n.authSetting["scope.userInfo"] ? r(c, a) : wx.showModal({
          title: "提示",
          content: "你拒绝了授权，将无法正常使用产品功能，请点击授权允许。",
          confirmText: "授权",
          success: function (n) {
            n.confirm && wx.openSetting({
              success: function (n) {
                console.log("授权", n),
                  n.authSetting["scope.userInfo"] && e()
              }
            })
          }
        })
      }
    })
  }
  function r(e, n) {
    wx.request({
      url: s + "/regUserInfo",
      method: "POST",
      header: {
        "Content-Type": "application/x-www-form-urlencoded",
        Authorization: n
      },
      data: {
        rawData: e.rawData,
        signature: e.signature,
        encryptedData: e.encryptedData,
        iv: e.iv,
        appId: "wx8d001aef31c6d06f"
      },
      success: function (e) {
        200 == (e = e.data).code && (console.log("settokennnnnnnnnnnnn", e), wx.setStorage({
          key: "token_1",
          data: e.result.token
        }), wx.setStorage({
          key: "nickName",
          data: e.result.nickName
        }), wx.reLaunch({
          url: "/pages/cardpack/cardpack"
        }))
      },
      fail: function () { }
    })
  }
  wx.getSystemInfo({
    success: function (e) {
      o = e
    }
  }),
    wx.getUserInfo({
      lang: "zh_CN",
      success: function (e) {
        c = e
      },
      complete: function () {
        wx.login({
          success: function (e) {
            e.code ? (console.log("res:", e), n("/onLogin", {
              code: e.code,
              appId: "wx8d001aef31c6d06f",
              model: o.model,
              pixelRatio: o.pixelRatio,
              screenWidth: o.screenWidth,
              screenHeight: o.screenHeight,
              windowWidth: o.windowWidth,
              windowHeight: o.windowHeight,
              language: o.language,
              version: o.version,
              system: o.system,
              platform: o.platform,
              sdkVersion: o.SDKVersion
            }).then(function (e) {
              200 == e.code && (a = e.result.token, e.result.sign ? (wx.setStorage({
                key: "token_1",
                data: e.result.token
              }), wx.setStorage({
                key: "nickName",
                data: e.result.nickName
              }), wx.reLaunch({
                url: "/pages/cardpack/cardpack"
              })) : t())
            })) : console.log("获取用户登录态失败！" + e.errMsg)
          }
        })
      }
    })
}
function n(e, n) {
  return t("POST", e, n, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
    "Content-Type": "application/x-www-form-urlencoded"
  })
}
function t(n, t, o) {
  var a = arguments.length > 3 && void 0 !== arguments[3] ? arguments[3] : {
    "Content-Type": "application/json"
  },
    c = void 0,
    r = void 0;
  try {
    var i = wx.getStorageSync("token_1");
    i && (a.Authorization = i)
  } catch (e) { }
  return new Promise(function (i, u) {
    wx.request({
      url: s + t,
      method: n,
      header: a,
      data: o || {},
      success: function (n) {
        c = n.data,
          i(n.data),
          401 == c.code && (wx.clearStorage(), e())
      },
      fail: function (e) {
        r = e,
          u(e)
      },
      complete: function () {
        console.info("==============>请求开始<=============="),
          o && console.warn("参数：", o),
          c ? console.warn("返回成功：", c) : console.warn("返回失败：", r),
          console.info("==============>请求结束<==============")
      }
    })
  })
}
Object.defineProperty(exports, "__esModule", {
  value: !0
}),
  exports.login = e,
  exports.shareLog = function (e) {
    n("/shareLog", {
      shareDes: e.shareDes,
      sharePage: e.sharePage,
      destination: "朋友",
      state: e.state,
      app: "wx8d001aef31c6d06f"
    }).then(function (e) { }).
      catch(function (e) { })
  },
  exports.get = function (e, n, o) {
    return t("GET", e, n, o)
  },
  exports.del = function (e, n, o) {
    return t("DELETE", e, n, o)
  },
  exports.put = function (e, n) {
    return t("PUT", e, n, arguments.length > 2 && void 0 !== arguments[2] ? arguments[2] : {
      "Content-Type": "application/x-www-form-urlencoded"
    })
  },
  exports.post = n,
  exports.request = t;
var o, a, c, s = exports.rootUrlProduce = "https://x.wankadi.com";
