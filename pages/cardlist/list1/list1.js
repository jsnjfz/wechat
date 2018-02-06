var n = require("../../../utils/http.js"),
  t = require("../../../utils/util");
Page({
  data: {
    // datas: []
    datas: [{ "antIcon": "https://pic.wankadi.com/bank/984c6483417a4a5fa88008cf47e4f1d7.png", "des": "", "id": 12, "name": "招商银行" }, { "antIcon": "https://pic.wankadi.com/bank/52fd54f66a11438d932a1609985e360c.png", "des": "", "id": 23, "name": "浦发银行" }, { "antIcon": "https://pic.wankadi.com/bank/8820d18e7a764f499f2a6826e2fd50d8.png", "des": "", "id": 11, "name": "中信银行" }, { "antIcon": "https://pic.wankadi.com/bank/9d819915324f4ddaaef8e511576d2a3e.png", "des": "", "id": 4, "name": "中国银行" }, { "antIcon": "https://pic.wankadi.com/bank/ce472867b7bf4bffaca21d082eadafd2.png", "des": "", "id": 18, "name": "工商银行" }, { "antIcon": "https://pic.wankadi.com/bank/dfe210823741442ab5f77670cc155f43.jpg", "des": "", "id": 2, "name": "交通银行" }, { "antIcon": "https://pic.wankadi.com/bank/2d44a4a4d7d54c48a6c9555bd25604ac.png", "des": "", "id": 8, "name": "广发银行" }, { "antIcon": "https://pic.wankadi.com/bank/972936358adb40368a373574d4a27a8c.png", "des": "", "id": 6, "name": "建设银行" }, { "antIcon": "https://pic.wankadi.com/bank/4b1fd39ff15d4c6fb13862441869d60a.png", "des": "", "id": 9, "name": "兴业银行" }, { "antIcon": "https://pic.wankadi.com/bank/dd1917efee9f4e22ab5577ba64bc593e.png", "des": "", "id": 13, "name": "民生银行" }, { "antIcon": "https://pic.wankadi.com/bank/825be7db840247cab378f2eafd5c2e77.png", "des": "", "id": 1, "name": "农业银行" }, { "antIcon": "https://pic.wankadi.com/bank/a7a2bbfb9c8c434c855aca87a6c565bd.png", "des": "", "id": 17, "name": "华夏银行" }, { "antIcon": "https://pic.wankadi.com/bank/ac2b3269548c4cfbadb87a3a1ffd32bc.png", "des": "", "id": 7, "name": "光大银行" }, { "antIcon": "https://pic.wankadi.com/bank/78d133b8f06e4e4bbcd9119d162fc70c.png", "des": "", "id": 19, "name": "平安银行" }, { "antIcon": "https://pic.wankadi.com/bank/8b9340aca8f441edac1040b936900cd6.png", "des": "", "id": 26, "name": "汇丰银行" }, { "antIcon": "https://pic.wankadi.com/bank/151b0e6660ef451ca2177ae9f525a4b5.png", "des": "", "id": 10, "name": "花旗银行" }, { "antIcon": "https://pic.wankadi.com/bank/2b4931797aaf48088450b3eef182b02f.png", "des": "", "id": 22, "name": "上海银行" }, { "antIcon": "https://pic.wankadi.com/bank/b457be5960234a0090ed9e5f74a752ce.png", "des": "", "id": 20, "name": "邮储银行" }, { "antIcon": "https://pic.wankadi.com/bank/ac3364b366fb4b26820573e792f4c989.png", "des": "", "id": 21, "name": "渣打银行" }, { "antIcon": "https://pic.wankadi.com/bank/8bb92007ce7945419d1b3ec7b16a30f0.png", "des": "", "id": 16, "name": "广州银行" }, { "antIcon": "https://pic.wankadi.com/bank/14aa663c2c2240bda68efe98e5d4dc61.png", "des": "", "id": 3, "name": "北京银行" }, { "antIcon": "https://pic.wankadi.com/bank/7d82bf1f65434ec08c5b4ef9f02c9b51.png", "des": "", "id": 15, "name": "浙商银行" }, { "antIcon": "https://pic.wankadi.com/bank/1e1fd0c9e99240e69d7cb5c2d6d061b5.png", "des": "", "id": 5, "name": "包商银行" }, { "antIcon": "https://pic.wankadi.com/bank/d39f9b0b5e2f4256a6c989463f2bc866.jpg", "des": "", "id": 25, "name": "渤海银行" }, { "antIcon": "https://pic.wankadi.com/bank/8356469d6c49496d97a370a026b36504.png", "des": "", "id": 14, "name": "重庆银行" }, { "antIcon": "https://pic.wankadi.com/bank/717f0dbb7c524cee9cad0283a2b7f7fd.jpg", "des": "", "id": 27, "name": "江苏银行" }, { "antIcon": "https://pic.wankadi.com/bank/b81e430240734d8394a689f0eebf7f6a.jpg", "des": "", "id": 30, "name": "微众银行" }]
  },
  initData: function () {
    // var t = this; (0, n.get)("/dictBank/listBank").then(function (n) {
    //   200 == n.code && t.setData({
    //     datas: n.result
    //   })
    // }).
    //   catch(function (n) { })
  },
  onLoad: function (n) {
    t.hideShareMenu()
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