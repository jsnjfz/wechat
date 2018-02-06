var t = require("../../../utils/http.js"),
  n = require("../../../utils/util");
Page({
  data: {
    level: "",
    id: "",
    datas: [{ "antImg": "https://pic.wankadi.com/bank/81f1d061026b4f0ebba0a9d563c641c5.jpg", "id": 24, "name": "招商英雄联盟信用卡" }, { "antImg": "https://pic.wankadi.com/bank/d1665305d26f4f5e98afa67819bd015b.jpg", "id": 85, "name": "招商银行白金卡" }, { "antImg": "https://pic.wankadi.com/bank/a7de11b6333e4a909f0e3a4d7476a5b8.jpg", "id": 597, "name": "招商ELLE联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/6f6aa28227c244c78cfafe0ff75aad79.jpg", "id": 716, "name": "招商世纪金花联名卡" }, { "antImg": "https://pic.wankadi.com/bank/067c5f8e02c8466c83e12bd42e6c8295.jpg", "id": 1232, "name": "招商兴华联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/fd79e1fc69e942849c5e515af50b09aa.jpg", "id": 39, "name": "招商HelloKitty粉丝卡" }, { "antImg": "https://pic.wankadi.com/bank/cdefbbaccfd042f983eb3d37cb8a81de.jpg", "id": 601, "name": "招商美罗商城联名卡" }, { "antImg": "https://pic.wankadi.com/bank/ac52016bf04f433486f522221ad12b36.jpg", "id": 1231, "name": "招商富客斯联名卡" }, { "antImg": "https://pic.wankadi.com/bank/a946e23a4df945c3b19ca9fafbbc9516.jpg", "id": 600, "name": "招商芒果旅行卡" }, { "antImg": "https://pic.wankadi.com/bank/afed13051968437f8838137272def6bd.jpg", "id": 639, "name": "招商南昌百大集团联名卡" }, { "antImg": "https://pic.wankadi.com/bank/58e0a4aa082db.jpg", "id": 2058, "name": "招商银行30周年纪念版和卡" }, { "antImg": "https://pic.wankadi.com/bank/96ed78eca16446bba84ee41e508a5d83.jpg", "id": 1312, "name": "招商温莎联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/4be5b6d872b44b40b94164a9f5fc08cc.jpg", "id": 769, "name": "招商壹基金爱心信用卡" }, { "antImg": "https://pic.wankadi.com/bank/12ef339931b24a918fa448a246e69e6b.jpg", "id": 1323, "name": "招商合肥百大集团联名卡" }, { "antImg": "https://pic.wankadi.com/bank/9a316e0bb72142d9a9aac4e647ed12cd.jpg", "id": 734, "name": "招商NBA联名卡" }, { "antImg": "https://pic.wankadi.com/bank/528778b4eedf494bb08002ca6b0bd420.jpg", "id": 1229, "name": "招商凡客联名卡" }, { "antImg": "https://pic.wankadi.com/bank/429af5d624dc4deb9c4d16ef55736d79.jpg", "id": 22, "name": "招商银行标准信用卡" }, { "antImg": "https://pic.wankadi.com/bank/2a0ed27c0fc64e5eb3265613730ab6ac.jpg", "id": 593, "name": "招商我爱重庆城市卡" }, { "antImg": "https://pic.wankadi.com/bank/6fb3765453aa4b80838cde6febf8c387.jpg", "id": 11, "name": "招商Young卡" }, { "antImg": "https://pic.wankadi.com/bank/86fa65ea35054d2c9793b5e877e3bdc2.jpg", "id": 727, "name": "招商天河城联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/0b54530b57ab4a12bb68454996b0e085.jpg", "id": 1217, "name": "招商大连浪漫之都卡" }, { "antImg": "https://pic.wankadi.com/bank/c63629ca3ab5474ebc92463f1d1cb77b.jpg", "id": 1227, "name": "招商读者银联标准联名卡" }, { "antImg": "https://pic.wankadi.com/bank/ce235f5489c347658990d1fb40a587d6.jpg", "id": 1218, "name": "招商大连新玛特联名卡" }, { "antImg": "https://pic.wankadi.com/bank/f4472986f461433da272befccf0947d1.jpg", "id": 115, "name": "招商魔兽世界联名卡" }, { "antImg": "https://pic.wankadi.com/bank/9f26823238924c9e986de105a8c15377.jpg", "id": 728, "name": "招商广州力美健联名卡" }, { "antImg": "https://pic.wankadi.com/bank/904a4d1cc6de4093b019fe8d71e2d940.png", "id": 95, "name": "招商全币种国际信用卡" }, { "antImg": "https://pic.wankadi.com/bank/03c7d49586ae4ac2baf4080fe742d0e9.jpg", "id": 695, "name": "招商远大联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/7d7be51953574ec8a6e5de68208e780c.jpg", "id": 1267, "name": "招商真爱联名卡" }, { "antImg": "https://pic.wankadi.com/bank/898457dcc7ba4c2e91bd4d56b9b23787.jpg", "id": 616, "name": "招商苏州大洋联名卡" }, { "antImg": "https://pic.wankadi.com/bank/be90a366d0b54e58b2ec83ac8050068d.jpg", "id": 1226, "name": "招商东航联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/26f3061d9d3647df892c0c7c43da9f33.jpg", "id": 1310, "name": "招商三星联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/9471ffed25964597ad74decd2d75992d.jpg", "id": 618, "name": "招商铁臂阿童木信用卡" }, { "antImg": "https://pic.wankadi.com/bank/05ddfbec9aa149da9ab4d457cf5befa6.jpeg", "id": 47, "name": "招商银行火影忍者信用卡" }, { "antImg": "https://pic.wankadi.com/bank/533437ceb8f74b319e1ab05cb6b4e2bb.jpg", "id": 1228, "name": "招商多样屋联名卡" }, { "antImg": "https://pic.wankadi.com/bank/ea31943ffb9b4cf0a9acba414ee424c5.jpg", "id": 1324, "name": "招商财政公务卡" }, { "antImg": "https://pic.wankadi.com/bank/f444a3b6ab734c48978432facadd31ee.jpg", "id": 1212, "name": "招商百盛购物信用卡" }, { "antImg": "https://pic.wankadi.com/bank/1ff9bb47447f41ddb18d4966fcda6bb6.jpg", "id": 102, "name": "招商微博达人信用卡" }, { "antImg": "https://pic.wankadi.com/bank/ad7c9f2bbd8a4836b78d3b2ef4b5dccf.jpg", "id": 110, "name": "招商樱桃小丸子卡" }, { "antImg": "https://pic.wankadi.com/bank/faa697ff275e4fc89dd7f0bbc67b6757.jpg", "id": 613, "name": "招商厦航白鹭联名卡" }, { "antImg": "https://pic.wankadi.com/bank/4c94b98c374741f78f6bb25eb57b471c.jpg", "id": 582, "name": "招商华宇集团联名卡" }, { "antImg": "https://pic.wankadi.com/bank/446bc4a4dbbb4e9886a02a7826de0b5a.jpg", "id": 569, "name": "招商QQ会员联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/4b9ab8bc43df44eab64a592c35b9cbbb.jpg", "id": 119, "name": "招商哆啦A梦粉丝信用卡" }, { "antImg": "https://pic.wankadi.com/bank/8a4df06d94254754b25b139046981e59.jpg", "id": 1185, "name": "招商南京大洋百货联名卡" }, { "antImg": "https://pic.wankadi.com/bank/7d556636cdeb4f568fd9d08b828a5e47.png", "id": 1325, "name": "招商银座联名卡" }, { "antImg": "https://pic.wankadi.com/bank/6fce46314ac84680847f122cf8c76b2c.jpg", "id": 1268, "name": "招商正佳广场联名卡" }, { "antImg": "https://pic.wankadi.com/bank/6501338c1b7a4be88a7da8627dc74d28.jpg", "id": 630, "name": "招商置地广场联名卡" }, { "antImg": "https://pic.wankadi.com/bank/032f429183bd4b85836e43d2a02c5dd0.jpg", "id": 1225, "name": "招商东方商城联名卡" }, { "antImg": "https://pic.wankadi.com/bank/40ea931121704b8cbab2306ec6c211d4.jpg", "id": 768, "name": "招商携程旅行信用卡" }, { "antImg": "https://pic.wankadi.com/bank/f93122eb247642879196bd889eaa3354.jpg", "id": 1219, "name": "招商地下城勇士信用卡" }, { "antImg": "https://pic.wankadi.com/bank/c654c6df3ed8431ba9482e3f619c10f2.jpg", "id": 1224, "name": "招商亚克西卡" }, { "antImg": "https://pic.wankadi.com/bank/1abc019b3f2342a5aa249170b47d264d.jpg", "id": 1214, "name": "招商成都耍卡" }, { "antImg": "https://pic.wankadi.com/bank/adbe96dc0441408ea6ff9520931884d4.jpg", "id": 1211, "name": "招商百脑汇联名卡" }, { "antImg": "https://pic.wankadi.com/bank/be5b5f411e064d7dbabd713f66b38276.jpg", "id": 90, "name": "招商美国运通卡" }, { "antImg": "https://pic.wankadi.com/bank/90f5659469044287a28e8a8eaa2fea9d.jpg", "id": 621, "name": "招商武汉大洋百货联名卡" }, { "antImg": "https://pic.wankadi.com/bank/38c0cfe868174d819acb0b837cc015bc.jpg", "id": 614, "name": "招商商之都联名卡" }, { "antImg": "https://pic.wankadi.com/bank/78031fc6cb744e2aa48079181409a33a.jpg", "id": 622, "name": "招商武汉广场联名卡" }, { "antImg": "https://pic.wankadi.com/bank/00ab8692ef0740abbac0fe76c311088e.jpg", "id": 585, "name": "招商合肥金鹰联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/3d6a00a188654651861469f5949748b3.jpg", "id": 629, "name": "招商至尊租车联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/6a97778bdfbf454f96e2c3abf018402d.jpg", "id": 1289, "name": "招商腾讯游戏联名卡" }, { "antImg": "https://pic.wankadi.com/bank/a47913cd890344038762b82624164e80.jpg", "id": 1188, "name": "招商俏江南联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/bb664e92a4cf472ba47f6e8cde4bc8df.jpg", "id": 1207, "name": "招商Miss Kitty香水卡" }, { "antImg": "https://pic.wankadi.com/bank/f3e8be803abf4f96810e5187122b3693.jpg", "id": 606, "name": "招商南航明珠信用卡" }, { "antImg": "https://pic.wankadi.com/bank/c1ba6a7229fa48d48d31995399fc835d.jpg", "id": 570, "name": "招商TomandJerry粉丝卡" }, { "antImg": "https://pic.wankadi.com/bank/1e3db6b18d124d3a8969acae7e734d2b.jpg", "id": 1191, "name": "招商清华校友认同卡" }, { "antImg": "https://pic.wankadi.com/bank/bd4e399a6240481c98ed222587d4b94e.jpg", "id": 1195, "name": "招商深圳鹏峰汽车联名卡" }, { "antImg": "https://pic.wankadi.com/bank/d9d2d6b3933f4ca5895e030e6b87b43f.jpg", "id": 108, "name": "招商GQ联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/30d8559b032d4acf907501d747ccc20c.jpg", "id": 594, "name": "招商7天连锁酒店联名卡" }, { "antImg": "https://pic.wankadi.com/bank/450680ad72b640d39995a4a38c026ca2.jpg", "id": 620, "name": "招商无锡福卡" }, { "antImg": "https://pic.wankadi.com/bank/7dbf3d890d054c258e3ef96ee4007613.png", "id": 598, "name": "招商凯莱酒店集团联名卡" }, { "antImg": "https://pic.wankadi.com/bank/0f289b45b32245e9b8835a1243821a36.jpg", "id": 1184, "name": "招商南京博爱之都信用卡" }, { "antImg": "https://pic.wankadi.com/bank/8da7a920d4f448a8a8aa7778a6f98d59.jpg", "id": 724, "name": "招商西安交通大学联名卡" }, { "antImg": "https://pic.wankadi.com/bank/5e86c95f9cfe4294b70f1b58c0f29ae5.jpg", "id": 583, "name": "招商欢唱联名卡" }, { "antImg": "https://pic.wankadi.com/bank/77ab06bfaa3b4f00babdf4ee8927bf01.jpg", "id": 1196, "name": "招商时代广场购物中心联名卡" }, { "antImg": "https://pic.wankadi.com/bank/35d4d28a21914edf99c580632ffbb695.jpg", "id": 576, "name": "招商大众书局联名卡" }, { "antImg": "https://pic.wankadi.com/bank/0082de21fd174dacb210e86ce370d268.jpg", "id": 1187, "name": "招商七彩云南信用卡" }, { "antImg": "https://pic.wankadi.com/bank/7b7cd77a83e4445c9177277c8e5ebffb.jpg", "id": 575, "name": "招商我爱深圳·大运会纪念版卡" }, { "antImg": "https://pic.wankadi.com/bank/07d80d79431548e58d60d824fde4ed82.jpg", "id": 619, "name": "招商万象城联名卡" }, { "antImg": "https://pic.wankadi.com/bank/0e1c16699bed457e89f6d99cf0c18a14.jpg", "id": 595, "name": "招商ANA CARD全日空信用卡" }, { "antImg": "https://pic.wankadi.com/bank/95f196910b4943cd893e00dfe62a2605.png", "id": 1326, "name": "招商银行钻石卡" }, { "antImg": "https://pic.wankadi.com/bank/d50d668dd6734e4b8758396984c1a9c2.jpg", "id": 1230, "name": "招商福州大洋百货联名卡" }, { "antImg": "https://pic.wankadi.com/bank/9c70c1fad0054a01a869055fd4e502a9.jpg", "id": 1210, "name": "招商VOGUE钛金信用卡" }, { "antImg": "https://pic.wankadi.com/bank/15d88deaf25643239d0797bbeb48bcef.jpg", "id": 1183, "name": "招商南昌城市主题卡" }, { "antImg": "https://pic.wankadi.com/bank/6dfdb424f9b04a23a2e622f2b586111f.png", "id": 67, "name": "招商\b梦幻西游信用卡" }, { "antImg": "https://pic.wankadi.com/bank/35e6860f486b43c890ec9f96b11749db.jpg", "id": 1311, "name": "招商振华集团联名卡" }, { "antImg": "https://pic.wankadi.com/bank/08f06b2d0eaa4d7998dd4e7019a516c0.jpg", "id": 584, "name": "招商建国汽车联名卡" }, { "antImg": "https://pic.wankadi.com/bank/9157211cbbd94e44965c5851e490f4dd.jpg", "id": 52, "name": "招商ONE PIECE航海王信用卡" }, { "antImg": "https://pic.wankadi.com/bank/0882549d13314b02bcfa3499a480b388.jpg", "id": 1215, "name": "招商成都万达影城联名卡" }, { "antImg": "https://pic.wankadi.com/bank/220e63c8012f483aa60942800401be10.jpg", "id": 617, "name": "招商天虹商场联名卡" }, { "antImg": "https://pic.wankadi.com/bank/0ca66e8e50864e7095f39b859ada710e.jpg", "id": 628, "name": "招商盈众汽车联名卡" }, { "antImg": "https://pic.wankadi.com/bank/a2d89f72db9a4416bbaa3415d99b9bc4.jpg", "id": 586, "name": "招商开心信用卡" }, { "antImg": "https://pic.wankadi.com/bank/32d4c886c5a84776b9a5a6470447eb1c.jpg", "id": 178, "name": "招商国航知音信用卡" }, { "antImg": "https://pic.wankadi.com/bank/20a9cb40d8d4475380f0f308efed8bb6.jpg", "id": 596, "name": "招商CRAYONSHINCHAN卡" }, { "antImg": "https://pic.wankadi.com/bank/3e663f7336474fdd8a727b364ffc25d5.jpg", "id": 1209, "name": "招商ThinkPad联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/44e5ea849d724fac903b00a769c0a6c9.jpg", "id": 1186, "name": "招商平和堂联名卡" }, { "antImg": "https://pic.wankadi.com/bank/89010d1ae23d40549456b3d4016ab053.jpg", "id": 1213, "name": "招商北京京彩卡" }, { "antImg": "https://pic.wankadi.com/bank/ddc272dd239144ffa2988b14cf435c49.jpg", "id": 1208, "name": "招商MTV耍酷卡" }, { "antImg": "https://pic.wankadi.com/bank/e95091e4e9fc434d838f4a0fbc672003.jpg", "id": 615, "name": "招商深业汽车联名卡" }, { "antImg": "https://pic.wankadi.com/bank/057c537155a54cd9a89ecd53faaa8018.jpg", "id": 1189, "name": "招商青岛巴黎春天联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/b3a43018dcba43a585265f2d00cdf5fc.jpg", "id": 1206, "name": "招商HOLA特力屋联名卡" }, { "antImg": "https://pic.wankadi.com/bank/0dbf359fb06247a7a7a3f4454e9a55dc.jpg", "id": 568, "name": "招商QQVIP联名卡" }, { "antImg": "https://pic.wankadi.com/bank/ab5cca6064654481860a3c3cc5c97844.jpg", "id": 1182, "name": "招商利泰集团联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/7de17d0cbc3a4a018f1250b794105ac5.png", "id": 87, "name": "招商银行Booking.com缤客全币种联名卡" }, { "antImg": "https://pic.wankadi.com/bank/a61f3d242ad94bd688c004bc76580d76.jpg", "id": 1192, "name": "招商泉州大洋联名卡" }, { "antImg": "https://pic.wankadi.com/bank/cb9c9ff5dec7437d99299d9a5a9003e6.gif", "id": 1194, "name": "招商深圳城市主题卡" }, { "antImg": "https://pic.wankadi.com/bank/7befd658ac2748ce8cfb2daa8e5843ce.jpg", "id": 574, "name": "招商辰野联名卡" }, { "antImg": "https://pic.wankadi.com/bank/b4256693bc144997988f4d42efcac27a.jpg", "id": 573, "name": "招商保利广场联名卡" }, { "antImg": "https://pic.wankadi.com/bank/119adde2770e4860af6629b7486bd687.jpg", "id": 571, "name": "招商VISA MINI信用卡" }, { "antImg": "https://pic.wankadi.com/bank/07a14dc0bcf84f2fa53faf812b28040b.jpg", "id": 1216, "name": "招商大连安盛购物广场联名卡" }, { "antImg": "https://pic.wankadi.com/bank/e589ba3c6166451a8926329dd18ce78c.jpg", "id": 572, "name": "招商爱阮厦门信用卡" }, { "antImg": "https://pic.wankadi.com/bank/d2ef95d06df548dfbbda58f107d8fb4d.jpg", "id": 1190, "name": "招商青岛帆船之都卡" }, { "antImg": "https://pic.wankadi.com/bank/3d214864d16843ecb2368f645d894dd3.jpg", "id": 599, "name": "招商昆明金鹰购物中心联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/3280b6803c9d4e33a8bbeba32cae644e.jpg", "id": 1269, "name": "招商郑州中卡" }, { "antImg": "https://pic.wankadi.com/bank/87deaf9eae26487cbd2d288b1eeb6f66.jpg", "id": 1193, "name": "招商如家酒店连锁联名卡" }, { "antImg": "https://pic.wankadi.com/bank/3f176be779c24a118b23a184a699b942.png", "id": 733, "name": "招商银行滴滴出行联名卡" }, { "antImg": "https://pic.wankadi.com/bank/8e973f80c9eb458c99a31a67b2d61684.jpg", "id": 745, "name": "招行美国运通Blue全币种国际信用卡" }, { "antImg": "https://pic.wankadi.com/bank/c83207f444354e6cb131f21c2c98390d.jpg", "id": 1345, "name": "招商银行唯品会联名卡" }, { "antImg": "https://pic.wankadi.com/bank/ea3182f800c44c0fa87baa2edc66c096.jpg", "id": 731, "name": "招行运通百夫长黑金卡" }, { "antImg": "https://pic.wankadi.com/bank/0540936e393244eb837183b3c9473110.jpg", "id": 756, "name": "招商银联尊尚白金分期信用卡" }, { "antImg": "https://pic.wankadi.com/bank/8f7dc38a12f74e38b1913b4b2bece40c.jpg", "id": 775, "name": "招商新版和卡" }, { "antImg": "https://pic.wankadi.com/bank/45b71c02f2a14fe3885897e8aeabe5ab.jpg", "id": 1288, "name": "招商CarCard汽车信用卡" }, { "antImg": "https://pic.wankadi.com/bank/755b3e6dbb7846018ad2d1113e951aaf.jpg", "id": 1307, "name": "招商汉庭联名卡" }, { "antImg": "https://pic.wankadi.com/bank/06bba2b3ec1548db8c34fb8c89f56819.jpg", "id": 2086, "name": "招商银行摩拜联名信用卡" }, { "antImg": "", "id": 2092, "name": "招商银行王者荣耀联名卡" }, { "antImg": "https://pic.wankadi.com/bank/318f4b4aba0d46059d22560bbc8b88e6.jpg", "id": 2101, "name": "招商银行网易云音乐联名卡 " }, { "antImg": "https://pic.wankadi.com/bank/58fb14379d134786bd7793f26779d88d.jpg", "id": 1334, "name": "招商银行QQ手游联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/c96bea3e397d4b73aec17224246b406f.jpg", "id": 577, "name": "招商东方购物联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/16a1c84885af42f1900ad9fcb4f5e476.jpg", "id": 578, "name": "招商福州海西信用卡" }, { "antImg": "https://pic.wankadi.com/bank/e333416322ac4d329264a2509424d91f.jpg!m", "id": 2114, "name": "招行 visa全币种国际信用卡奥运纪念版 " }, { "antImg": "https://pic.wankadi.com/bank/c2ddb184599544d183a4dc25c8b97e09.png", "id": 579, "name": "招商海航联名卡" }, { "antImg": "https://pic.wankadi.com/bank/76d0371a96c1480b95ab12184758c4c3.jpg", "id": 580, "name": "招商合肥咱卡" }, { "antImg": "https://pic.wankadi.com/bank/d43da6fe882d455aa2bee24b136aa5c5.jpg", "id": 2116, "name": "招商银行金葵花理财卡" }, { "antImg": "https://pic.wankadi.com/bank/a0f6f6ba98fd4bac86e8c1d3a6a4ecad.jpg", "id": 581, "name": "招商花园城联名卡" }, { "antImg": "https://pic.wankadi.com/bank/85884f4d907f4a57bc55a7c21d56679f.jpg", "id": 2140, "name": "招商金葵花卡" }, { "antImg": "https://pic.wankadi.com/bank/00411089600e47e097a372351a820121.jpg", "id": 607, "name": "招商欧亚联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/2876f73c181d4306b81931f1bc945983.jpg", "id": 608, "name": "招商盘锦湿地联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/595bf7c55fdb476c9fa8ef89567078de.jpg", "id": 609, "name": "招商千色店联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/af95c0e21ec4498e83921444e8ccab1c.png", "id": 610, "name": "招商人人联名卡" }, { "antImg": "https://pic.wankadi.com/bank/26d986fd8d244450a3042f6d32c2b00b.jpg", "id": 611, "name": "招商瑞景商业联名卡" }, { "antImg": "https://pic.wankadi.com/bank/aeb86a761966477299f1cb317ba1c868.jpg", "id": 612, "name": "招商瑞丽联名卡" }, { "antImg": "https://pic.wankadi.com/bank/1b84e7df3bd649deaaa22dc9241bac32.jpg", "id": 623, "name": "招商新奇特联名卡" }, { "antImg": "https://pic.wankadi.com/bank/795b204fab6f4f96b09cce3daff45add.jpg", "id": 624, "name": "招商新影联联名卡" }, { "antImg": "https://pic.wankadi.com/bank/497500901bdd48258729e108edcc17af.jpg", "id": 625, "name": "招商新中关联名卡" }, { "antImg": "https://pic.wankadi.com/bank/a1ba2add49fa49a2a30498b752a84eaa.jpg", "id": 626, "name": "招商迅雷VIP卡" }, { "antImg": "https://pic.wankadi.com/bank/a5f1e43268584afbac135a5667a151b9.jpg", "id": 627, "name": "招商一汽丰田汽车联名卡" }, { "antImg": "https://pic.wankadi.com/bank/55594d23465545d5ab1d67e77af2ba7e.gif", "id": 2172, "name": "招商秦时明月信用卡" }, { "antImg": "https://pic.wankadi.com/bank/d5ba583e91064001b91c94a3a687493a.gif", "id": 2173, "name": "招商银行ELLE联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/dd85c58305574b99b238abc1c3cddde6.jpg", "id": 2185, "name": "浙商银行\"飞牛网\"联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/1933cbdbef9543fab1a600ab3d26c908.gif", "id": 2192, "name": "招商银行三国杀联名卡水墨龙纹版" }, { "antImg": "https://pic.wankadi.com/bank/1de970bcf6fc4ed2b8df0872c3f9fb83.jpg", "id": 2195, "name": "招商银行悦跑圈联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/7670ca2ed89c408dad03ce321bce6478.jpg", "id": 1172, "name": "招商广州绿茵阁联名卡" }, { "antImg": "https://pic.wankadi.com/bank/e2499a0fa5784188b31efa77c580dec4.jpg", "id": 1173, "name": "招商国芳百货联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/9b3578a5760b41a8bd3d9314d2e108be.jpg", "id": 1174, "name": "招商哈尔滨冰雪之都卡" }, { "antImg": "https://pic.wankadi.com/bank/ce1add2930b04835a87d8df6213841a8.jpg", "id": 1175, "name": "招商海岸城联名卡" }, { "antImg": "https://pic.wankadi.com/bank/4a47d16ab5524f7db2a28a2cb4406c35.jpg", "id": 1176, "name": "招商海信广场联名卡" }, { "antImg": "https://pic.wankadi.com/bank/7c28c184bd2c4bed9f124f74f8ce5d5e.jpg", "id": 1177, "name": "招商金陵连锁酒店联名卡" }, { "antImg": "https://pic.wankadi.com/bank/faefa93748634133b5a4192c5966ee21.gif", "id": 2201, "name": "招商银行泰迪珍藏信用卡" }, { "antImg": "https://pic.wankadi.com/bank/b0778945375e4908b84d484dd87a2e7e.jpg", "id": 1178, "name": "招商京城老字号联名卡" }, { "antImg": "https://pic.wankadi.com/bank/a731104621564c2fac0e105b90b88dcd.jpg", "id": 1179, "name": "招商精英公务卡" }, { "antImg": "https://pic.wankadi.com/bank/0869087036904a6aae4df81dfd2664e3.jpg", "id": 1180, "name": "招商久游网联名卡" }, { "antImg": "https://pic.wankadi.com/bank/bbf560e5790e4db78fae7cc9d0328cff.gif", "id": 1181, "name": "招商蜡笔小新粉丝信用卡" }, { "antImg": "https://pic.wankadi.com/bank/b47e64e9f7df4bcb81799523f2fa1afe.jpg", "id": 1197, "name": "招商太百购物联名卡" }, { "antImg": "https://pic.wankadi.com/bank/86afc12352fc4fe692f966625660b770.jpg", "id": 1198, "name": "招商天和百货联名卡" }, { "antImg": "https://pic.wankadi.com/bank/ab6526702334433f81775eff4a8b98a0.jpg", "id": 1199, "name": "招商天津哏儿卡" }, { "antImg": "https://pic.wankadi.com/bank/f842c186c4354880b213c65a2c7cba44.jpg", "id": 1200, "name": "招商外婆家联名卡" }, { "antImg": "https://pic.wankadi.com/bank/31b6457e5ec6425882b1b3a0e1a6d073.jpg", "id": 1201, "name": "招商完美世界联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/808ca772333c46c89cbd395d1282580e.jpg", "id": 1202, "name": "招商万家福商城联名信用卡" }, { "antImg": "https://pic.wankadi.com/bank/613d1221bfc84c3d84d943c724402f7a.jpg", "id": 1220, "name": "招商我的e家联名卡" }, { "antImg": "https://pic.wankadi.com/bank/58d1dc906ab341568b36fee2943248a3.jpg", "id": 1221, "name": "招商银行VISA无限信用卡" }, { "antImg": "https://pic.wankadi.com/bank/cd01df747091408f8f09222172567ad9.jpg", "id": 1222, "name": "招商五环体育联名卡" }, { "antImg": "https://pic.wankadi.com/bank/c1b8a25b4e2a4477815de6655c8520c5.jpg", "id": 1223, "name": "招商西安真爱星座卡" }, { "antImg": "https://pic.wankadi.com/bank/30a091e8dac9450bb34a67770ecf4258.jpg", "id": 755, "name": "招商银行天天酷跑联名卡校园版" }]
  },
  onLoad: function (t) {
    console.log(t),
      this.setData({
        level: t.level,
        id: t.id
      }),
      n.hideShareMenu()
  },
  initData: function () {
    // var n = this; (0, t.get)("/dictBank/listBankCards/" + this.data.id).then(function (t) {
    //   200 == t.code && n.setData({
    //     datas: t.result
    //   })
    // }).
    //   catch(function (t) { })
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