isParams = {
  //=============1.数值=======================
  //暂存箱礼包id:分解钥匙数
  'chouGoods': {
      // 抽奖奖池
      5978034: [50],//传说幽瞳
      5978035: [30],//传说幽冥
      5978036: [15],//王者雷影
      5978037: [12],//王者风势
      5978038: [8],//M14EBR-玄武 音效卡
      5978039: [6],//Scar Light-马枪
      5978040: [4],//M4A1-黑龙
      5978041: [3],//麒麟刺
      5978042: [2],//沙鹰-天神
      5978043: [1],//B背包套装-手雷包
      5978046: [1],//属性抽取券
  },
  //item:兑换道具,积分
  'exchangeGoods': {
      '1': ['传说幽冥', 428],
      '2': ['王者雷影', 148],
      '3': ['王者风势', 128],
      '4': ['M14EBR-玄武 音效卡', 108],
      '5': ['Scar Light-马枪', 78],
      '6': ['M4A1-黑龙', 40],
      '7': ['麒麟刺', 28],
      '8': ['沙鹰-天神', 22],
      '9': ['B背包套装-手雷包', 15],
      '10': ['30000CF点', 30],
      '11': ['3000CF点', 3],
      '12': ['属性变更券x5', 2],
      '13': ['交易专用钥匙x5', 2],
  },
  //兑换道具,传说卡
  'exchangeCskGoods': {
      '1': [' 传说幽冥', 12],
  },
  //兑换道具,王者卡
  'exchangeWzkGoods': {
      '1': ['王者雷影', 48],
      '2': ['王者风势', 36],
  },
  //兑换道具,英雄卡
  'exchangeYxkGoods': {
      '1': ['M4A1-黑龙', 18],
      '2': ['麒麟刺', 12],
      '3': ['沙鹰-天神', 10],
  },
  //兑换道具,道具卡
  'exchangeDjkGoods': {
      '1': ['M14EBR-玄武 音效卡', 108],
      '2': ['Scar Light-马枪', 78],
      '3': ['B背包套装-手雷包', 15],
      '4': ['30000CF点', 30],
      '5': ['3000CF点', 3],
      '6': ['属性变更券x5', 2],
      '7': ['交易专用钥匙x5', 2],
  },
  //4种卡兑换为周年卡
  cardNum: {
      '1': ['传说卡', 1, 30],
      '2': ['王者卡', 1, 3],
      '3': ['英雄卡', 1, 2],
      '4': ['道具卡', 1, 1],
      '5': ['传说卡', 10, 300],
      '6': ['王者卡', 10, 30],
      '7': ['英雄卡', 10, 20],
      '8': ['道具卡', 10, 10],
  },
  //=============2.系统参数=======================
  //通用参数-流程id
  amsId: 694468,
  //道聚城购买-钥匙
  djcActId: 34808,
  //各流程
  'flowId': {
      commitBindAreaId: '28c949',
      queryBindAreaId: '02b151',
      queryBroadcastId: '6f0e8e',
      //自定义模块
      enterId: '7c6178',
      //自定义抽奖模块
      amsChouId: '2b1b2f',
      amsExchangeId: '64a832',
      amsZanFenId: 'd9c40b',
      amsZanQuId: '34bdde',
      amsHistoryListId: '7fe598',
      //自定义购买模块id
      amsBuyId: '979cdd',
  },
  //=============3.活动通用变量=======================
  //上报
  pageKey: 'a20250104csytdb',
  //qq互联登录
  iUseQQConnect: false,
  share: {
      "title": "穿越火线传说幽瞳",
      "pic": "https://game.gtimg.cn/images/actdaoju/act/a20250104csytdb/share.jpg",// 这里需要修改
      "content": "穿越火线传说幽瞳！",
      "shareUrl": 'https://app.daoju.qq.com/act/a20250104csytdb/index.html?plat_support=mqq',
      "h5Url": 'https://app.daoju.qq.com/act/a20250104csytdb/index.html?plat_support=mqq'
  },
  //=============4.方法=======================
  //登录
  toLogin: function () {
    console.log(isParams, 'isParams.iUseQQConnect)')
      if (isParams.iUseQQConnect) {
          window.iUseQQConnect = 1;
          if (isH5) {
              Milo.mobileLoginByQQConnect({
                  appId: '101491592',
                  scope: 'get_user_info',
                  state: 'STATE',
                  redirectUri: 'https://milo.qq.com/comm-htdocs/login/qc_redirect.html',
                  sUrl: '', //登录之后的跳转地址
              });
          } else {
              Milo.loginByQQConnect({
                  appId: "101491592",
                  scope: "get_user_info",
                  state: "STATE",
                  redirectUri: "https://milo.qq.com/comm-htdocs/login/qc_redirect.html",
                  sUrl: '',//登录之后的跳转地址
                  callback: null, //登录成功后的回调
              });
          }
      } else {
          //旧的
          if (Milo.isMobile()) {
              Milo.mobileLoginByQQ();
          } else {
              Milo.loginByQQ();
          }
      }
  },
  //流程失败回调
  failShow: function (res, callback = '') {
      console.log(res)
      if (res.iRet === 101 || res.iRet === '101') {
          // 登录态失效，需要重新调登录方法
          isParams.toLogin()
      } else if (res.iRet === 99998 || res.iRet === '99998') {
          // 调用提交绑定大区方法
          commitBindArea();
      } else {
          res = isParams.showErrMsg(res)
          $.isFunction(callback) && callback(res);
      }
  },
  showErrMsg: function (res) {
      if (res.sMsg) {
          if (res.sMsg == '取消关闭') {
              res.errMsg = ''
          } else {
              res.errMsg = res.sMsg
          }
      } else {
          if (typeof res.details.errMsg != 'undefined' && res.details.errMsg) {
              res.errMsg = res.details.errMsg
          } else {
              res.errMsg = ''
          }
      }
      return res
  },
  shareInit: function () {
      if (typeof HostApp != "undefined") {
          setTimeout(function () {
              var option = {
                  "title": isParams.share.title,
                  "pic": isParams.share.pic,
                  "content": isParams.share.content,
                  "share_url": isParams.share.shareUrl,
                  type: '1,2,3,4,5,6',
              }
              HostApp._registerShareInfo = $.param(option);
          }, 1000)
      } else {
          need("biz.mobileclient", function (mClient) {
              var obj = {
                  wx_appid: 'wxf8773b4d31a9a719', //微信公众号appid
                  title: isParams.share.title,// 分享标题，默认为活动页面标题（可手动调整）
                  desc: isParams.share.content, //分享活动简介
                  link: isParams.share.shareUrl, //分享链接
                  imgUrl: isParams.share.pic //分享后朋友看到的图标
              };
              mClient.shareAll(obj);
          })
      }
  },
  h5Share: function () {
      if (isDjcApp()) {
          if (milo.cookie.get("djc_appVersion") >= 131) {
              var data = {
                  "title": isParams.share.title,
                  "pic": isParams.share.pic,
                  "content": isParams.share.content,
                  "share_url": isParams.share.shareUrl,
              }
              data.type = "1,2,3,4,5,6"
              //新版本app
              HostApp.setJsCallBack('commonShareGroup', $.param(data), function (rsp) {
                  //alert('didClickShare response：' + rsp);
                  rsp = JSON.parse(rsp);
                  if (rsp.ret == 0) {
                      alert("分享成功")
                  }
              });
          } else {
              var option = {
                  title: isParams.share.title,
                  pic: isParams.share.pic,
                  content: isParams.share.content,
                  share_url: isParams.share.shareUrl,
                  type: '1,2,3,4,5,6'
              };
              HostApp._registerShareInfo = $.param(option);


              // var option = {
              //     "title": isParams.share.title,
              //     "pic": isParams.share.pic,
              //     "content": isParams.share.content,
              //     "share_url": isParams.share.shareUrl,
              //     "type": '1,2,3,4,5,6'
              // };
              // HostApp._registerShareInfo = $.param(option);
              // HostApp.setJsCallBack('didClickShare', $.param(option));

              setTimeout(function () {
                  $('#commonSharePop').show();
              }, 500)
          }

      } else {
          console.log('手q当前页面:' + location.href)
          console.log('手q实际分享路径:' + isParams.share.shareUrl)
          need("biz.mobileclient", function (mClient) {
              var obj = {
                  wx_appid: 'wxf8773b4d31a9a719', //微信公众号appid
                  title: isParams.share.title,// 分享标题，默认为活动页面标题（可手动调整）
                  desc: isParams.share.content, //分享活动简介
                  link: isParams.share.shareUrl, //分享链接
                  imgUrl: isParams.share.pic //分享后朋友看到的图标
              };
              mClient.shareAll(obj);
          })


          // TGMobileShare({
          //     shareTitle: isParams.share.title, //不设置或设置为空时，页面有title，则调取title
          //     shareDesc: isParams.share.content, //不设置或设置为空时，页面有Description，则调取Description
          //     shareImgUrl: isParams.share.pic, //分享图片尺寸200*200，且填写绝对路径
          //     shareLink: isParams.share.shareUrl, //分享链接要跟当前页面同域名(手Q分享有这个要求) ,不设置或设置为空时，默认调取当前URL
          //     actName: isParams.pageKey //点击流命名，用于统计分享量，专题一般采用目录名称如a20151029demo
          // });

          setTimeout(function () {
              $('#commonSharePop').show();
          }, 500)
      }
  },
  doSubmitCheckArea: function (flow) {
      if (typeof (isParams.bindInfo.sAreaName) != 'undefined' && isParams.bindInfo.sAreaName != '') {
          Milo.emit(flow);
      } else {
          commitBindArea()
      }
  },
  doSubmitNoCheck: function (flow) {
      Milo.emit(flow);
  },
  //倒计时-start
  timeOut: null,
  /**
   * 暂存箱领取，分解；兑换确认弹窗倒计时
   * @param timerDom
   * @param time
   */
  timePop: function (timerDom, btnDom, time) {
      timerDom.text(time).show();
      clearInterval(isParams.timeOut);
      isParams.timeOut = setInterval(() => {
          time--;
          console.log(time);
          timerDom.text(time);
          if (time == 0) {
              clearInterval(isParams.timeOut);
              btnDom.removeClass('gray');
          }
      }, 1000);
  },
  setClickTimePop: function () {
      // $('.second_time_sure_btn').off('click');
      // $('.second_time_sure_btn').on('click', function () {
      $('.time_sure_btn').addClass('gray')
      isParams.timePop($('#popTimeConfirm .timeout'), $('#popTimeConfirm .time_sure_btn'), 3)
      TGDialogS('popTimeConfirm')
      // });
  },
  popMsgAlert: function (msg, func) {
      $('.m-alert-msg').text(msg);
      $('.m-alert-close').off('click');
      $('.m-alert-close').on('click', function () {
          closeDialog()
          typeof func == "function" ? func() : console.log("no func")
      });

      TGDialogS('popMsgAlert');
  },
  popMsgConfirm: function (msg, closeFunc, sureFunc) {
      $('.m-confirm-msg').text(msg);
      $('.m-confirm-close').off('click');
      $('.m-confirm-close').on('click', function () {
          closeDialog()
          typeof closeFunc == "function" ? closeFunc() : console.log("no func")
      });

      $('.m-confirm-sure').off('click');
      $('.m-confirm-sure').on('click', function () {
          closeDialog()
          typeof sureFunc == "function" ? sureFunc() : console.log("no func")
      });

      TGDialogS('popMsgConfirm');
  },

  //倒计时-end

  //=============5.活动自定义变量=======================
  question: {
      '1': '',
      '2': '',
      '3': '',
      '4': '',
      '5': '',
      '6': '',
      '8': '',
      '9': '',
      '10': '',
  },
  //通用参数-通用变量
  //大区信息
  bindInfo: '',
  //抽奖锁定
  lockCj: false,
  //积分
  jfNum: [],
  //====幸运签信息
  //已中签数
  zqUsedNum: 0,
  //幸运签弹窗展示
  signList: [],
  iCurrPage: 1,
  iSignedCurrPage: 0,
  //订单列表
  iOrderPageNum: 1,
}
//======================= login =======================================================
milo.ready(function () {
  isH5 = location.hostname == "app.daoju.qq.com" ? true : false;
  isNei = milo.request('neiqian') != '' ? true : false;


  //调控使用pt
  if (milo.request("debug") == 1) {
      isParams.iUseQQConnect = false
  }

  if (isNei) {
      isParams.iUseQQConnect = false
  }

  if (milo.request('wegame') == 1) {
      isParams.iUseQQConnect = false
  }

  //正常逻辑
  if (isParams.iUseQQConnect) {
      window.iUseQQConnect = 1
  } else {
      window.iUseQQConnect = 0
  }


  //检查是否登录
  Milo.checkLogin({
      iUseQQConnect: isParams.iUseQQConnect, //如果当前活动使用的互联登录,请将改参数设置true
      success: function (user) {
          console.log('已登录：');
          console.log(user);
          $('#unlogin').hide();
          $('#logined').show();
          $("#userinfo").text(user.userInfo.userUin);
          //查询绑定
          queryBindArea();
      },
      fail: function (res) {
          console.log('未登录：', res);
          isParams.toLogin()
      }
  });

  $("#dologin").on("click", function () {
      isParams.toLogin()
  });
  $("#dologout").on("click", function () {
      Milo.logout({
          callback: function () {
              location.reload();
          }
      });
  });

  // 支付上报
  need("ams.daoju_buy_svr.appid", function (autoappid) {
      autoappid.init('cf', isParams.djcActId, function (final_appid) {
          if (final_appid == 8888) {
              window["final_appid_" + isParams.djcActId] = "1101";
          }
          // if (final_appid == 1101) {
          //     $('.foot-one').hide()
          //     $('.foot-two').show()
          // } else {
          //     $('.foot-one').show()
          //     $('.foot-two').hide()
          // }
      });
  });

  //轮播
  queryBroadcast()
  //初始化节点操作
  initDom()
});

//轮播
function queryBroadcast() {
  var flow = {
      actId: isParams.amsId,
      token: isParams.flowId.queryBroadcastId,
      time: 50, // 轮播时间
      sData: {},
      success: function (res) {
          console.log('查询轮播success', res);
      },
      fail: function (res) {
          console.log('查询轮播fail', res);
      }
  }
  isParams.doSubmitNoCheck(flow)
}


// 查询绑定大区
function queryBindArea() {
  var flow_query = {
      actId: isParams.amsId,
      token: isParams.flowId.queryBindAreaId,
      loading: true, // 开启loading浮层,默认不开启
      sData: {
          query: true
      },
      success: function (res) {
          if (isNei && top.location == location && milo.request('debug') != 1 && milo.request('noto') != 1) {
              var curHtmlUrl = window.location.href;
              if (curHtmlUrl.indexOf("hdnq.html") >= 0) {
              } else {
                  window.location.href = "https://cf.qq.com/act/a20160516ntclsacts/new_index.htm";
              }
          }

          if (res.data) {
              isParams.bindInfo = {
                  sArea: res.data.area,
                  sPartition: res.data.partition,
                  sPlatId: res.data.platId,
                  sRole: res.data.roleId,
                  sAreaName: res.data.areaName,
                  roleName: res.data.roleName
              };

              $("#userinfo").text(res.data.roleId);
              $('#unlogin').hide();
              $('#logined').show();
              $('#spanNotBind').hide();
              $('#spanBind').show();
              $('#area_info').text(res.data.areaName);
              $('#role_info').text(res.data.roleName);

              var sWhiteList = [
                  '1'
              ];
              if ($.inArray(isParams.bindInfo.sRole, sWhiteList) != -1) {
                  milo.loadScript("https://game.gtimg.cn/images/js/milo-utils/vConsole/3.15.0/vconsole.min.js", function () {
                      var vConsole = new window.VConsole();
                  }, 'utf-8');
              }

              //查询初始化页面信息
              enter(1, function () {
                  //生成幸运签
                  enter_lucky(1);
              });
              //查询我的邀请码和邀请我的人
              enter_code(1000)
          } else {
              commitBindArea()
          }
      },
      fail: function (res) {
          isParams.failShow(res)
      },
  };
  isParams.doSubmitNoCheck(flow_query);
}

// 提交绑定大区
function commitBindArea() {
  var flow_commit = {
      actId: isParams.amsId,
      token: isParams.flowId.commitBindAreaId,
      loading: true, // 开启loading浮层,默认不开启
      sData: {
          query: false
      },
      success: function (res) {
          //已绑定时的扩展处理
          location.reload();
      },
      fail: function (res) {
          isParams.showErrMsg(res)
      }
  };
  isParams.doSubmitNoCheck(flow_commit);
}

//======================= 绑定 end ==========================================================

//======================= 查询 start ==========================================================
// 查询积分
function enter(a, callback = '') {
  setTimeout(function () {
      var flow = {
          actId: isParams.amsId,
          token: isParams.flowId.enterId,
          loading: false, // 开启loading浮层,默认不开启
          sData: {},
          success: function (res) {
              console.log(res);
              // 3127/钥匙
              // 3128/金蛇卡
              // 3129/累计金蛇卡
              // 3130/特权
              // 3131/购买标识
              // 3132/金蛇幸运星
              // 3133/传说卡
              // 3134/王者卡
              // 3135/英雄卡
              // 3136/道具卡
              // 6846/超20幸运星领取

              var data = res.details.jData;
              //1.积分值处理
              var vals = {};
              vals["_2327"] = data.sOutValue1 //余额
              vals["_6846"] = data.sOutValue6 //累计超20已领取幸运星
              $.each(data.sOutValue2.split("|"), function (k, v) {
                  if (k > 0) {
                      v = v.split(" ");
                      vals["_" + v[2]] = parseInt(v[4]); //余额
                  }
              });
              var tmp = [2327, 3127, 3128, 3129, 3132, 3133, 3134, 3135, 3136];
              $.each(tmp, function (k, v) {
                  $(".jf_" + v + "").html(parseInt(vals["_" + v + ""]));
              });
              isParams.jfNum = vals

              //2.累计已领取
              $.each(data.sOutValue3.split(","), function (k, v) {
                  // console.log(".sumlq.sumlq" + (parseInt(k) + 1))

                  if (v > 0) {
                      $(".sumlq.sumlq" + (parseInt(k) + 1)).addClass('gray').html('<em>已领取</em>')
                  } else {
                      $(".sumlq.sumlq" + (parseInt(k) + 1)).removeClass('gray').html('<em>点击领取</em>')
                  }
              });

              var lqStarHold = parseInt(21 + parseInt(isParams.jfNum["_6846"]))
              $('.cur_lq_star_hold').html(lqStarHold)

              $('.sum_lq_extra').attr('href', 'javascript:amsLqSumExtra(' + lqStarHold + ')')


              //4.展示反馈使用情况-未消费或已使用
              var hold = data.sOutValue4.split(",")
              $('.btnFeedBack').removeClass('gray').attr('href', 'javascript:isParams.popMsgAlert(\'【请先参与本次活动】\')')
              if (isParams.jfNum['_3131'] > 0) {
                  if (hold[0] == 0) {
                      $('.btnFeedBack').removeClass('gray').attr('href', 'javascript:TGDialogS(\'popfank\')')
                  } else {
                      $('.btnFeedBack').addClass('gray').attr('href', 'javascript:isParams.popMsgAlert(\'【您已填写过】\')')
                  }
              }

              //领取奖励
              $('.btnLqFeedBack').addClass('gray')
              if (hold[1] == 0) {
                  $('.btnLqFeedBack').removeClass('gray')
              }

              //已中签消耗数-礼包记录
              isParams.zqUsedNum = data.sOutValue5

              //4.初始化抽奖状态
              isParams.lockCj = false
              $.isFunction(callback) && callback();
              return;
          },
          fail: function (res) {
              isParams.failShow(res, function (res) {
                  if (res.errMsg) {
                      // alert(res.errMsg)
                  }
              })
          }
      }
      //刷新积分
      isParams.doSubmitNoCheck(flow)
  }, a || 2000);
}

//======================= 查询 end ==========================================================

//======================= 购买 start ========================================================
function amsBuy(item) {
  var flow = {
      actId: isParams.amsId,
      token: isParams.flowId.amsBuyId,
      loading: true,
      sData: {
          item: item,
          gameId: "cf", // 业务简称
          djcActId: isParams.djcActId, // 道聚城活动id
          paytype: 2, // 1：点券 2：人民币 3：金币 4：点券+金币 5：金币2
      },
      // 支付弹框关闭回调
      onPayClose: function () {
          if (item == 3 || item == 4) {
              enter(2000);
          }
      },
      success: function (res) {
          console.log(res);
          enter(1500)
      },
      fail: function (res) {
          isParams.failShow(res, function (res) {
              if (res.iRet == -720232) {
                  alert('您点击的太快了，请稍后重试~')
              } else {
                  if (res.errMsg) {
                      alert(res.errMsg)
                  }
              }
          })
      }
  }
  //抵扣
  if (item == 3 || item == 4) {
      var tuBuy = function (user_price, jifen_amount) {
          var ext = {
              user_price: user_price,
              cur_price: user_price,
              item: item,
          }
          flow.sData.jifen_dikou = 1
          flow.sData.jifen_amount = jifen_amount
          flow.sData.appext = encodeURI(encodeURI(JSON.stringify(ext)))
          isParams.doSubmitNoCheck(flow)
      }

      var user_price = 0
      var jifen_amount = 0

      if (item == 4) {
          if (isParams.jfNum['_2327'] < 90) {
              TGDialogS('popNoDjq')
          } else {
              user_price = 1000
              jifen_amount = 90
              tuBuy(user_price, jifen_amount)
          }
      }

      if (item == 3) {
          if (isParams.jfNum['_2327'] >= 9) {
              user_price = 100
              jifen_amount = 9
          } else {
              user_price = 1000 - isParams.jfNum['_2327'] * 100
              jifen_amount = isParams.jfNum['_2327']
          }
          tuBuy(user_price, jifen_amount)
      }

  } else {
      flow.sData.jifen_dikou = 0
      flow.sData.jifen_amount = 0
      isParams.doSubmitNoCheck(flow)
  }
}


function amsBuyCard() {
  closeDialog()
  var code = $('.friendCode1').val().trim()
  if (code.indexOf('-') >= 0) {
      code = code.split("-")[1].trim();
  }
  var flow = {
      actId: isParams.amsId,
      token: '6cff9c',
      loading: true,
      sData: {
          gameId: "cf", // 业务简称
          // jifen_dikou: 0, // 是否使用积分抵扣1是 0否
          // jifen_amount: 0, // 用户传入的积分抵扣数量
          djcActId: isParams.djcActId, // 道聚城活动id
          paytype: 2, // 1：点券 2：人民币 3：金币 4：点券+金币 5：金币2
      },
      // 支付弹框关闭回调
      onPayClose: function () {
      },
      success: function (res) {
          console.log(res);
          enter(1500)
          enter_code(2000)
      },
      fail: function (res) {
          isParams.failShow(res, function (res) {
              if (res.iRet == -720232) {
                  alert('您点击的太快了，请稍后重试~')
              } else {
                  if (res.errMsg) {
                      alert(res.errMsg)
                  }
              }
          })
      }
  }


  if (code) {
      isParams.popMsgAlert('确定使用邀请码【' + code + '】购买吗？', function () {
          flow.sData.code = code
          isParams.doSubmitNoCheck(flow)
      })
  } else {
      isParams.popMsgConfirm('确认直接购买？（温馨提示：你将会错过使用好友邀请码购买获赠的金蛇幸运星）', '', function () {
          isParams.doSubmitNoCheck(flow)
      })
  }
}

//======================= 购买 end ==========================================================

//======================= 抽奖 start ==========================================================
//普通抽奖
function amsChou(item) {
  var flow = {
      actId: isParams.amsId,
      token: isParams.flowId.amsChouId,
      loading: true, // 开启loading浮层,默认不开启
      sData: {
          item: item
      },
      success: function (res) {
          console.log(res);
          var callbackObj = res.details.jData;
          if (item == 1) {
              $('#jlname').html(callbackObj.sPackageName)
              TGDialogS('popdc');
          } else {
              var obj = tenResultIde(callbackObj.iPackageIdCnt, callbackObj.sPackageName);
              $('#choulist').html('');
              $.each(obj, function (k, v) {
                  $('#choulist').append('<li><p>' + v.name + '</p></li>');
              })
              TGDialogS('popJl');
          }
          isParams.lockCj = false
      },
      fail: function (res) {

          isParams.failShow(res, function (res) {
              if (res.errMsg) {
                  isParams.popMsgAlert(res.errMsg, function () {
                      isParams.lockCj = false
                  })
              }
          })
      }
  }

  if (typeof (isParams.bindInfo.sAreaName) != 'undefined' && isParams.bindInfo.sAreaName != '') {
      if (!isParams.lockCj) {
          isParams.lockCj = true
          isParams.doSubmitNoCheck(flow)
      }
  } else {
      commitBindArea()
  }
}

// 【暂存箱】领取道具-第一次弹窗
function popZanQu(item, name) {
  //时间弹窗
  var msg = "确定领取 " + name + " 到【" + isParams.bindInfo.sAreaName + "】下的 【" + isParams.bindInfo.roleName + "】吗？【唯一性道具在同一大区内，游戏仓库无法重复到账，请谨慎选择】";
  $('.time_confirm_text').html(msg)
  $('.time_sure_btn').attr('href', 'javaScript:amsZanQu(' + item + ',\'' + name + '\')')

  //2次确认弹窗
  var secondMsg = "本次领取操作不可逆，无法撤回，请确认是否操作？"
  $('.second_time_confirm_text').html(secondMsg)
  $('.confirm_close_btn').attr('href', 'javaScript:closeDialog(); amsHistoryList(2, ' + isParams.pageNow + ')')
  TGDialogS('popSecondTimeConfirm')

}


// 【暂存箱】领取
function amsZanQu(item, name) {
  var flow = {
      actId: isParams.amsId,
      token: isParams.flowId.amsZanQuId,
      loading: true, // 开启loading浮层,默认不开启
      sData: {
          item: item
      },
      success: function (res) {
          console.log(res);
          var callbackObj = res.details.jData
          isParams.popMsgAlert(callbackObj.sMsg, function () {
              amsHistoryList(2, isParams.pageNow)
          });

      },
      fail: function (res) {
          isParams.failShow(res, function (res) {
              if (res.errMsg) {
                  isParams.popMsgAlert(res.errMsg)
              }
          })
      }
  }

  // confirm(msg, function () {
  isParams.doSubmitNoCheck(flow)
  // });
}

// 【暂存箱】分解钥匙-第一次弹窗
function popZanFen(item, name, key) {
  //时间弹窗
  var msg = "您确定分解【" + name + "】获得【" + key + "钥匙】到【" + isParams.bindInfo.sAreaName + "】下的 【" + isParams.bindInfo.roleName + "】吗？"
  $('.time_confirm_text').html(msg)
  $('.time_sure_btn').attr('href', 'javaScript:amsZanFen(' + item + ',\'' + name + '\',' + key + ')')

  //2次确认弹窗
  var secondMsg = "本次分解操作不可逆，无法撤回，请确认是否操作？"
  $('.second_time_confirm_text').html(secondMsg)
  $('.confirm_close_btn').attr('href', 'javaScript:closeDialog(); amsHistoryList(2, ' + isParams.pageNow + ')')
  TGDialogS('popSecondTimeConfirm')

}

// 【暂存箱】分解钥匙
function amsZanFen(item, name, key) {
  var flow = {
      actId: isParams.amsId,
      token: isParams.flowId.amsZanFenId,
      loading: true, // 开启loading浮层,默认不开启
      sData: {
          item: item
      },
      success: function (res) {
          console.log(res);
          var callbackObj = res.details.jData
          var num = callbackObj.iPackageIdCnt.split(":")[1]

          var msg = "恭喜您获得了礼包：" + callbackObj.sPackageName + "*" + num
          isParams.popMsgAlert(msg, function () {
              amsHistoryList(2, isParams.pageNow)
              enter(2000);
          });
      },
      fail: function (res) {
          isParams.failShow(res, function (res) {
              if (res.errMsg) {
                  isParams.popMsgAlert(res.errMsg)
              }
          })
      }
  }
  // confirm("确定分解 " + name + " 获得 " + key + " 钥匙吗？", function () {
  isParams.doSubmitNoCheck(flow)
  // });
}


// 兑换-第一次弹窗
function popExchange(item) {
  //时间弹窗
  var msg = "确定使用 【" + isParams.exchangeGoods[item][1] + " 个金蛇卡】兑换 【" + isParams.exchangeGoods[item][0] + "】 到【" + isParams.bindInfo.sAreaName + "】下的 【" + isParams.bindInfo.roleName + "】吗？【唯一性道具或角色在同一大区内，游戏仓库无法重复到账，请谨慎选择】";
  $('.time_confirm_text').html(msg)
  $('.time_sure_btn').attr('href', 'javaScript:amsExchange(' + item + ')')

  //2次确认弹窗
  var secondMsg = "本次兑换操作不可逆，无法撤回，请确认是否操作？"
  $('.second_time_confirm_text').html(secondMsg)
  $('.confirm_close_btn').attr('href', 'javaScript:closeDialog();')
  TGDialogS('popSecondTimeConfirm')

}

//兑换
function amsExchange(item) {
  var flow = {
      actId: isParams.amsId,
      token: isParams.flowId.amsExchangeId,
      loading: true, // 开启loading浮层,默认不开启
      sData: {
          item: item
      },
      success: function (res) {
          console.log(res);
          callbackObj = res.details.jData
          isParams.popMsgAlert(callbackObj.sMsg, function () {
              enter(1000);
          });
      },
      fail: function (res) {
          isParams.failShow(res, function (res) {
              if (res.errMsg) {
                  isParams.popMsgAlert(res.errMsg)
              }
          })
      }
  }


  // confirm(msg, function () {
  isParams.doSubmitNoCheck(flow)
  // });
}

// 兑换-第一次弹窗
function popExchangeCsk(item) {
  //时间弹窗
  var msg = "确定使用 【" + isParams.exchangeCskGoods[item][1] + " 个传说卡】兑换 【" + isParams.exchangeCskGoods[item][0] + "】 到【" + isParams.bindInfo.sAreaName + "】下的 【" + isParams.bindInfo.roleName + "】吗？【唯一性道具或角色在同一大区内，游戏仓库无法重复到账，请谨慎选择】";
  $('.time_confirm_text').html(msg)
  $('.time_sure_btn').attr('href', 'javaScript:amsExchangeCsk(' + item + ')')

  //2次确认弹窗
  var secondMsg = "本次兑换操作不可逆，无法撤回，请确认是否操作？"
  $('.second_time_confirm_text').html(secondMsg)
  $('.confirm_close_btn').attr('href', 'javaScript:closeDialog();')
  TGDialogS('popSecondTimeConfirm')

}

//兑换
function amsExchangeCsk(item) {
  var flow = {
      actId: isParams.amsId,
      token: 'eb88db',
      loading: true, // 开启loading浮层,默认不开启
      sData: {
          item: item
      },
      success: function (res) {
          console.log(res);
          callbackObj = res.details.jData
          isParams.popMsgAlert(callbackObj.sMsg, function () {
              enter(1000);
          });
      },
      fail: function (res) {
          isParams.failShow(res, function (res) {
              if (res.errMsg) {
                  isParams.popMsgAlert(res.errMsg)
              }
          })
      }
  }

  // var msg = "确定使用 【" + isParams.exchangeWzkGoods[item][1] + " 个王者卡】兑换 " + isParams.exchangeWzkGoods[item][0] + " 吗？当前大区【" + isParams.bindInfo.sAreaName + "】【唯一性道具或角色在同一大区内，游戏仓库无法重复到账，请谨慎选择】";
  // confirm(msg, function () {
  isParams.doSubmitNoCheck(flow)
  // });
}

// 兑换-第一次弹窗
function popExchangeWzk(item) {
  //时间弹窗
  var msg = "确定使用 【" + isParams.exchangeWzkGoods[item][1] + " 个王者卡】兑换 【" + isParams.exchangeWzkGoods[item][0] + "】 到【" + isParams.bindInfo.sAreaName + "】下的 【" + isParams.bindInfo.roleName + "】吗？【唯一性道具或角色在同一大区内，游戏仓库无法重复到账，请谨慎选择】";
  $('.time_confirm_text').html(msg)
  $('.time_sure_btn').attr('href', 'javaScript:amsExchangeWzk(' + item + ')')

  //2次确认弹窗
  var secondMsg = "本次兑换操作不可逆，无法撤回，请确认是否操作？"
  $('.second_time_confirm_text').html(secondMsg)
  $('.confirm_close_btn').attr('href', 'javaScript:closeDialog();')
  TGDialogS('popSecondTimeConfirm')

}

//兑换
function amsExchangeWzk(item) {
  var flow = {
      actId: isParams.amsId,
      token: 'ee0160',
      loading: true, // 开启loading浮层,默认不开启
      sData: {
          item: item
      },
      success: function (res) {
          console.log(res);
          callbackObj = res.details.jData
          isParams.popMsgAlert(callbackObj.sMsg, function () {
              enter(1000);
          });
      },
      fail: function (res) {
          isParams.failShow(res, function (res) {
              if (res.errMsg) {
                  isParams.popMsgAlert(res.errMsg)
              }
          })
      }
  }

  // var msg = "确定使用 【" + isParams.exchangeWzkGoods[item][1] + " 个王者卡】兑换 " + isParams.exchangeWzkGoods[item][0] + " 吗？当前大区【" + isParams.bindInfo.sAreaName + "】【唯一性道具或角色在同一大区内，游戏仓库无法重复到账，请谨慎选择】";
  // confirm(msg, function () {
  isParams.doSubmitNoCheck(flow)
  // });
}

// 兑换-第一次弹窗
function popExchangeYxk(item) {
  //时间弹窗
  var msg = "确定使用 【" + isParams.exchangeYxkGoods[item][1] + " 个英雄卡】兑换 【" + isParams.exchangeYxkGoods[item][0] + "】 到【" + isParams.bindInfo.sAreaName + "】下的 【" + isParams.bindInfo.roleName + "】吗？【唯一性道具或角色在同一大区内，游戏仓库无法重复到账，请谨慎选择】";
  $('.time_confirm_text').html(msg)
  $('.time_sure_btn').attr('href', 'javaScript:amsExchangeYxk(' + item + ')')

  //2次确认弹窗
  var secondMsg = "本次兑换操作不可逆，无法撤回，请确认是否操作？"
  $('.second_time_confirm_text').html(secondMsg)
  $('.confirm_close_btn').attr('href', 'javaScript:closeDialog();')
  TGDialogS('popSecondTimeConfirm')
}

//兑换
function amsExchangeYxk(item) {
  var flow = {
      actId: isParams.amsId,
      token: '8c0470',
      loading: true, // 开启loading浮层,默认不开启
      sData: {
          item: item
      },
      success: function (res) {
          console.log(res);
          callbackObj = res.details.jData
          isParams.popMsgAlert(callbackObj.sMsg, function () {
              enter(1000);
          });
      },
      fail: function (res) {
          isParams.failShow(res, function (res) {
              if (res.errMsg) {
                  isParams.popMsgAlert(res.errMsg)
              }
          })
      }
  }

  // var msg = "确定使用 【" + isParams.exchangeWzkGoods[item][1] + " 个王者卡】兑换 " + isParams.exchangeWzkGoods[item][0] + " 吗？当前大区【" + isParams.bindInfo.sAreaName + "】【唯一性道具或角色在同一大区内，游戏仓库无法重复到账，请谨慎选择】";
  // confirm(msg, function () {
  isParams.doSubmitNoCheck(flow)
  // });
}

// 兑换-第一次弹窗
function popExchangeDjk(item) {
  //时间弹窗
  var msg = "确定使用 【" + isParams.exchangeDjkGoods[item][1] + " 个道具卡】兑换 【" + isParams.exchangeDjkGoods[item][0] + "】 到【" + isParams.bindInfo.sAreaName + "】下的 【" + isParams.bindInfo.roleName + "】吗？【唯一性道具或角色在同一大区内，游戏仓库无法重复到账，请谨慎选择】";
  $('.time_confirm_text').html(msg)
  $('.time_sure_btn').attr('href', 'javaScript:amsExchangeDjk(' + item + ')')

  //2次确认弹窗
  var secondMsg = "本次兑换操作不可逆，无法撤回，请确认是否操作？"
  $('.second_time_confirm_text').html(secondMsg)
  $('.confirm_close_btn').attr('href', 'javaScript:closeDialog();')
  TGDialogS('popSecondTimeConfirm')
}

//兑换
function amsExchangeDjk(item) {
  var flow = {
      actId: isParams.amsId,
      token: 'e138b6',
      loading: true, // 开启loading浮层,默认不开启
      sData: {
          item: item
      },
      success: function (res) {
          console.log(res);
          callbackObj = res.details.jData
          isParams.popMsgAlert(callbackObj.sMsg, function () {
              enter(1000);
          });
      },
      fail: function (res) {
          isParams.failShow(res, function (res) {
              if (res.errMsg) {
                  isParams.popMsgAlert(res.errMsg)
              }
          })
      }
  }

  // var msg = "确定使用 【" + isParams.exchangeWzkGoods[item][1] + " 个王者卡】兑换 " + isParams.exchangeWzkGoods[item][0] + " 吗？当前大区【" + isParams.bindInfo.sAreaName + "】【唯一性道具或角色在同一大区内，游戏仓库无法重复到账，请谨慎选择】";
  // confirm(msg, function () {
  isParams.doSubmitNoCheck(flow)
  // });
}

//4种卡兑换为万能卡
function amsExchangeCard(item) {
  var flow = {
      actId: isParams.amsId,
      token: '0e2838',
      loading: true, // 开启loading浮层,默认不开启
      sData: {
          item: item
      },
      success: function (res) {
          console.log(res);
          var callbackObj = res.details.jData
          var num = callbackObj.iPackageIdCnt.split(":")[1]
          var msg = "恭喜您获得了礼包：" + callbackObj.sPackageName + "*" + num

          isParams.popMsgAlert(msg, function () {
              enter(2000, function () {
                  enter_lucky(1);
              });
          });
      },
      fail: function (res) {
          isParams.failShow(res, function (res) {
              if (res.errMsg) {
                  isParams.popMsgAlert(res.errMsg)
              }
          })
      }
  }

  var msg = '确认消耗' + isParams.cardNum[item][1] + '张“' + isParams.cardNum[item][0] + '”兑换' + isParams.cardNum[item][2] + '张“金蛇卡”吗？';
  isParams.popMsgConfirm(msg, '', function () {
      isParams.doSubmitNoCheck(flow)
  });
}

//领取累计奖励
function amsLqSum(item) {
  var flow = {
      actId: isParams.amsId,
      token: 'af056c',
      loading: true, // 开启loading浮层,默认不开启
      sData: {
          item: item
      },
      success: function (res) {
          console.log(res);
          var callbackObj = res.details.jData
          isParams.popMsgAlert(callbackObj.sMsg, function () {
              enter(1000)
          });
      },
      fail: function (res) {
          isParams.failShow(res, function (res) {
              if (res.errMsg) {
                  isParams.popMsgAlert(res.errMsg)
              }
          })
      }
  }

  isParams.doSubmitNoCheck(flow)
}

//领取累计奖励
function amsLqSumExtra(item) {
  var flow = {
      actId: isParams.amsId,
      token: 'ba12f1',
      loading: true, // 开启loading浮层,默认不开启
      sData: {
          item: item
      },
      success: function (res) {
          console.log(res);
          var callbackObj = res.details.jData
          isParams.popMsgAlert(callbackObj.sMsg, function () {
              enter(1000)
          });
      },
      fail: function (res) {
          isParams.failShow(res, function (res) {
              if (res.errMsg) {
                  isParams.popMsgAlert(res.errMsg)
              }
          })
      }
  }

  isParams.doSubmitNoCheck(flow)
}


/**
* 特权领取
*/
function amsTeq() {
  if (isH5) {
      var flow = {
          actId: isParams.amsId,
          token: 'fbea84',
          loading: true, // 开启loading浮层,默认不开启
          sData: {},
          success: function (res) {
              console.log(res);
              callbackObj = res.details.jData
              isParams.popMsgAlert(callbackObj.sMsg, function () {
                  enter(2000);
              });
          },
          fail: function (res) {
              isParams.failShow(res, function (res) {
                  if (res.errMsg) {
                      isParams.popMsgAlert(res.errMsg)
                  }
              })
          }
      }
      isParams.doSubmitNoCheck(flow);
  } else {
      isParams.popMsgAlert('在掌上道聚城购买后可领取')
  }
}

//================================抽奖 end ===========================================

//======================= 记录 start ========================================================

// 个人获奖记录
//1.普通 2.暂存箱  3.好友邀请 sextend5
function amsHistoryList(item, pageNow) {
  isParams.pageNow = pageNow;
  var flow = {
      actId: isParams.amsId,
      token: isParams.flowId.amsHistoryListId,
      loading: true, // 开启loading浮层,默认不开启
      sData: {},
      success: function (res) {
          //好友邀请
          if (item == 3) {
              if (res.details.jData.total == 0) {
                  var data = []
                  var total = 0
              } else {
                  var data = res.details.jData.list
                  var total = res.details.jData.total
              }

          } else {
              var data = res.data
              var total = res.total
          }


          //渲染数据
          $("#milo-lotteryRecordContainer" + item).html('');
          let tpl_html = $("#milo-lotteryRecordTpl" + item).html();
          // 渲染数据
          const _html = Milo.tpl().compile(tpl_html, data);
          $("#milo-lotteryRecordContainer" + item).html(_html);

          //如果查询第一页就没有数据
          $('#milo-paginator' + item).show()
          if (total == 0) {
              $('#milo-paginator' + item).hide()
          } else {
// 分页初始化
              Milo.pagination({
                  pages: total, // 总页数
                  currentPage: flow.sData.pageNow, // 当前页
                  element: '#milo-paginator' + item, // 分页容器id，用于渲染分页控件
// 切换页数时触发回调
                  callback: function (page) {
                      if (page !== flow.sData.pageNow) {
                          amsHistoryList(item, page);
                      }
                  }
              });
          }

//如果是查询的最后一页
          $("#milo-paginator" + item + " .my-page-next").show()
          if (total == flow.sData.pageNow) {
              $("#milo-paginator" + item + " .my-page-next").hide()
          }

          TGDialogS('showMyGiftContent' + item)
      },
      fail: function (res) {
          isParams.failShow(res, function (res) {
              if (res.errMsg) {
                  isParams.popMsgAlert(res.errMsg)
              }
          })
      }
  }
// 用于处理分页的变化
  if (pageNow) {
      flow.sData.pageNow = pageNow;
  } else {
      flow.sData.pageNow = 1;
  }
//尺寸
  if (isH5) {
      if (item === 1) {
          flow.sData.pageSize = 5;
      } else {
          flow.sData.pageSize = 8;
      }
  } else {
      if (item === 1) {
          flow.sData.pageSize = 8;
      } else {
          flow.sData.pageSize = 8;
      }
  }
  flow.sData.item = item;

  isParams.doSubmitNoCheck(flow)
}

//======================= 记录 end ========================================================


//==================================== public start ============================================
function initDom() {
  if (isZhApp()) {
      $('#dologout').css('display', 'none');
  }

  if (isDjcApp()) {
      $('#dologout').css('display', 'none');
  }

  //好友邀请码
  $('.friendCode1').on('input', function () {
      $('.friendCode2').val($(this).val());
  });

  // 当输入框 2 的内容变化时，更新输入框 1
  $('.friendCode2').on('input', function () {
      $('.friendCode1').val($(this).val());
  });


  //分享
  if (isH5) {
      isParams.shareInit()
  }
}

//购买邀请码 start  code=================================================
//复制功能
function copy_code() {
  if ($('#my_code').val() != "") {
      $('#inputCopyText').val("#CF传说幽瞳-" + $('#my_code').val());
      var my_code = document.getElementById('inputCopyText');
      my_code.select();
      if (document.execCommand("copy")) {
          isParams.popMsgAlert('已复制好，可粘贴');
      } else {
          isParams.popMsgAlert('请手动复制到剪贴板')
      }
  } else {
      isParams.popMsgAlert("您还没有邀请码");
  }
}

//获得大区名称
function getAreaName(area) {
  return CFServerSelect.zoneToName(area)
}

// 查询我的邀请码
function enter_code(a, callback = '') {
  setTimeout(function () {
      var flow = {
          actId: isParams.amsId,
          token: '6f1d31',
          loading: true, // 开启loading浮层,默认不开启
          sData: {},
          success: function (res) {
              console.log(res);
              var data = res.details.jData;
              if (data.sOutValue1) {
                  $('#my_code').val(data.sOutValue1)
              }
              var _html = ''
              if (data.list != 0 && data.list.length > 0) {
                  _html += '<tr>\n' +
                      '     <td>' + data.list[0].sRolename + '</td>\n' +
                      '     <td>' + getAreaName(data.list[0].sArea) + '</td>\n' +
                      '</tr>'
              }
              $('.invite_buy').html(_html)
              $.isFunction(callback) && callback();
              return;
          },
          fail: function (res) {
              isParams.failShow(res, function (res) {
                  if (res.errMsg) {
                      isParams.popMsgAlert(res.errMsg)
                  }
              })
          }
      }

      isParams.doSubmitNoCheck(flow);
  }, a || 2000);
}

//购买邀请码 end  code=================================================

//================================问卷 start =========================================
/**
*
* @param item  1-5
*/
function select_question1(order, item) {
  var width = [8, 29, 50, 71, 100][item - 1]
  $('.question' + order + '_progress').css('width', width + '%')
  $('.question' + order + '_btn').removeClass('cur')
  for (var i = 1; i <= 5; i++) {
      if (i <= item) {
          $('.question' + order + '_btn_' + i).addClass('cur')
      }
  }
  isParams.question[order] = item
}

/**
*
* @param item  1,-1
*/
function select_question2(order, item) {
  $('.question' + order + '_btn').removeClass('cur')
  $('.question' + order + '_btn_' + item).addClass('cur')
  isParams.question[order] = item
}

/**
*
* @param item  1-13
*/
function select_question3(item) {
  //初始化参数：问卷互斥选项id
  var order = 4
  var diffItem = 12
  var max = 5
  //
  var dom = $('.question' + order + '_btn_' + item)
  var domDiff = $('.question' + order + '_btn_' + diffItem)
  if (dom.hasClass('cur')) {
      //通用-去选项
      dom.removeClass('cur')
  } else {
      //增加选择
      if (item == diffItem) {
          //选择互斥选项
          $('.question' + order + '_btn').removeClass('cur')
          dom.addClass('cur')
      } else {
          domDiff.removeClass('cur')
          var len = isParams.question[order].split('|').length
          if (len >= max) {
              isParams.popMsgAlert('最多选择5个')
          } else {
              dom.addClass('cur')
          }
      }
  }
  getManySelect(order, diffItem)
}

function getManySelect(order, diffItem) {
  isParams.question[order] = ''
  var arr = []
  for (var i = 1; i <= diffItem; i++) {
      var dom = $('.question' + order + '_btn_' + i)
      if (dom.hasClass('cur')) {
          arr.push(i)
      }
  }
  isParams.question[order] = arr.join('|')
}

//问卷选择切换==========================================================end

//问卷填写结果提交
function amsFeedBack() {
  //验证
  if ($.inArray(isParams.question["1"], [1, 2, 3, 4, 5]) == -1) {
      isParams.popMsgAlert("请选择您对本次活动的满意度");
      return;
  }

  if ($.inArray(isParams.question["2"], [1, -1]) == -1) {
      isParams.popMsgAlert("请选择您认为本次活动的道具是否满意");
      return;
  }

  if ($.inArray(isParams.question["3"], [1, -1]) == -1) {
      isParams.popMsgAlert("请选择您认为本次活动奖池内是否有您想要的道具");
      return;
  }

  if (isParams.question["4"] == '') {
      isParams.popMsgAlert("请填写您最想要本次活动中哪些道具");
      return;
  }

  if ($.inArray(isParams.question["5"], [1, 2, 3, 4, 5]) == -1) {
      isParams.popMsgAlert("请选择您对本次活动首发的全新道具【传说幽瞳 无序列号版】满意度如何");
      return;
  }

  if ($.inArray(isParams.question["6"], [1, 2, 3, 4, 5]) == -1) {
      isParams.popMsgAlert("请选择您对本次活动首发的全新道具【传说幽冥 无序列号版】满意度如何");
      return;
  }

  if ($.inArray(isParams.question["7"], [1, 2, 3, 4, 5]) == -1) {
      isParams.popMsgAlert("请选择您对本次活动首发的全新道具【王者雷影】满意度如何");
      return;
  }
  if ($.inArray(isParams.question["8"], [1, 2, 3, 4, 5]) == -1) {
      isParams.popMsgAlert("请选择您对本次活动首发的全新道具【M14EBR-玄武音效卡】满意度如何");
      return;
  }
  //来源
  if ($.inArray(isParams.question["9"], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) == -1) {
      isParams.popMsgAlert("请选择您是从哪里获知本次活动的消息");
      return;
  }

  var question9_text = ''
  if (isParams.question["9"] == 10) {
      question9_text = $('#question9_text').val()
  } else {
      question9_text = ['掌上穿越火线', '贴吧/论坛/QQ群', '官网', 'Wegame广告', '游戏内活动中心', '视频平台，如B站、抖音、快手', '官方微信和官方微博', '朋友分享', '直播平台，如虎牙、斗鱼', '其他（请填写）'][isParams.question["9"] - 1]
  }

  if (question9_text == '') {
      isParams.popMsgAlert("请填写您是从哪里获知本次活动的消息");
      return;
  }

  if (question9_text.length > 50) {
      isParams.popMsgAlert("获知本次活动的消息来源过长，请重新填写");
      return;
  }

  isParams.question["10"] = $('#question10_text').val()

  if (isParams.question["10"] == '') {
      isParams.popMsgAlert("请填写您的建议或意见");
      return;
  }

  if (isParams.question["10"].length > 300) {
      isParams.popMsgAlert("建议或意见过长，请重新填写");
      return;
  }

  var flow = {
      actId: isParams.amsId,
      token: '18918c',
      loading: true, // 开启loading浮层,默认不开启
      sData: {
          sQuestion1: isParams.question["1"],
          sQuestion2: isParams.question["2"],
          sQuestion3: isParams.question["3"],
          sQuestion4: isParams.question["4"],
          sQuestion5: isParams.question["5"],
          sQuestion6: isParams.question["6"],
          sQuestion7: isParams.question["7"],
          sQuestion8: isParams.question["8"],
          sQuestion9: encodeURIComponent(question9_text),
          sQuestion10: encodeURIComponent(isParams.question["10"]),
      },
      success: function (res) {
          console.log(res);
          callbackObj = res.details.jData
          isParams.popMsgAlert('反馈成功~', function () {
              enter(1000);
              closeDialog()
          });

      },
      fail: function (res) {
          isParams.failShow(res, function (res) {
              if (res.errMsg) {
                  isParams.popMsgAlert(res.errMsg)
              }
          })
      }
  }

  isParams.doSubmitNoCheck(flow);
}

//领取奖励
function amsLqFeedBack() {
  var flow = {
      actId: isParams.amsId,
      token: 'eceb12',
      loading: true, // 开启loading浮层,默认不开启
      sData: {},
      success: function (res) {
          console.log(res);
          callbackObj = res.details.jData
          isParams.popMsgAlert(callbackObj.sMsg, function () {
              enter(1000)
          });

      },
      fail: function (res) {
          isParams.failShow(res, function (res) {
              if (res.errMsg) {
                  isParams.popMsgAlert(res.errMsg)
              }
          })
      }
  }

  isParams.doSubmitNoCheck(flow);
}


//================================幸运签 luckysign  start =========================================
//领取累计奖励
function get_has_signed_list(iPageNum = 0, iPageSize = 10) {
  if (iPageNum < 0) {
      iPageNum = 0
  }
  var flow = {
      actId: isParams.amsId,
      token: '5903fc',
      loading: true, // 开启loading浮层,默认不开启
      sData: {
          iPageNow: iPageNum,
          iPageSize: iPageSize
      },
      success: function (res) {
          console.log(res);
          if (res.details.jData.list.length > 0) {
              var _html = ''
              res.details.jData.list.forEach(function (v, index) {
                  _html += '<tr><td>' + v.sUin + '</td><td>' + v.sDay + '</td></tr>'
              })
              $("#has_signed_list").html(_html)
              //总页数
              var iPageSum = Math.ceil(res.details.jData.cnt / iPageSize);
              if (iPageSum == 0) {
                  iPageSum = 1
              }
              // 最后一页时隐藏下一页
              if (iPageSum == iPageNum + 1) {
                  $(".xyq_next_page").hide();
              } else {
                  $(".xyq_next_page").show();
              }

              //设置当前页的值
              isParams.iSignedCurrPage = iPageNum;
              $(".iSignedCurrPage").html((isParams.iSignedCurrPage + 1) + " / " + iPageSum);
              TGDialogS('div_has_signed_list')
          } else {
              if (iPageNum == 0) {
                  $("#has_signed_list").html("<tr style='text-align: center;'><td colspan='3'>暂无已中幸运签</td></tr>");
                  $("#has_signed_list_page").hide();
              } else {
                  $("#has_signed_list").html("<tr style='text-align: center;'><td colspan='3'>暂无更多已中幸运签</td></tr>");
                  $("#has_signed_list_page").show();
              }
              TGDialogS('div_has_signed_list')
          }
      },
      fail: function (res) {
          isParams.failShow(res, function (res) {
              if (res.errMsg) {
                  isParams.popMsgAlert(res.errMsg)
              }
          })
      }
  }

  isParams.doSubmitNoCheck(flow)
}


//type 1弹窗列表  2仅获取数据
function signList(type) {
  var flow = {
      actId: isParams.amsId,
      token: '983f3f',
      sData: {},
      success: function (res) {
          console.log(res);
          res = res.details.modRet
          if (type == 1) {
              if (res.jData._lucky_tag_list.length > 0) {
                  isParams.signList = res.jData._lucky_tag_list
                  showSignList(1)
                  // need("util.template", function (template) {
                  //     $("#lucky_list").html(template.parseDOMTemplate("lucky_item").process(res.jData._lucky_tag_list, "lucky_item"));
                  // });
                  //幸运玩家展示分页
                  // goPage(1, 7);
                  // setTimeout(function () {
                  //     TGDialogS('luck')
                  // }, 50);
              } else {
                  $("#lucky_list").html("<tr style='text-align: center;'><td colspan='3'>暂无幸运签</td></tr>");
                  $("#sign_list_page").hide();
                  TGDialogS('luck')
              }
          } else {
              var _ret_luck_num = 0;
              var _had_luck_num = 0;
              var _had_use_no_signed = 0
              if (res.jData._lucky_tag_list.length > 0) {
                  $.each(res.jData._lucky_tag_list, function (key, item) {
                      if (item.iStatus == '0') {
                          _ret_luck_num++;
                      }

                      if (item.iStatus == '1') {
                          _had_luck_num++;
                      }

                      if (item.iStatus == '2') {
                          _had_use_no_signed++;
                      }

                  })
              }
              $('._all_luck_num').html(res.jData._lucky_tag_num);
              $('._ret_luck_num').html(_ret_luck_num);
              $('._ret_hasluck_num').html(_had_luck_num - isParams.zqUsedNum);

              //是否已经使用过未中幸运签兑换限量
              if (_had_use_no_signed > 0) {
                  $('.had_use_no_signed').addClass('grey')
              } else {
                  $('.had_use_no_signed').removeClass('grey')
              }

          }
      },
      fail: function (res) {
          isParams.failShow(res, function (res) {
              if (type == 1) {
                  isParams.popMsgAlert(res.errMsg)
              }
          })
      }
  }

  if (type == 2) {
      flow.loading = false
  } else {
      flow.loading = true
  }
  isParams.doSubmitNoCheck(flow)
}


function showSignList(iPageNum = 1, iPageSize = 7) {
  // 总页数
  var iPageSum = Math.ceil(isParams.signList.length / iPageSize);
  //检验当前页
  if (iPageNum < 1) {
      iPageNum = 1;
  } else if (iPageNum > iPageSum) {
      iPageNum = iPageSum;
  }
  //设置当前页的值
  isParams.iCurrPage = iPageNum;
  var arr_tmp = isParams.signList.slice((iPageNum - 1) * iPageSize, iPageNum * iPageSize);
  need("util.template", function (template) {
      $("#lucky_list").html(template.parseDOMTemplate("lucky_item").process(arr_tmp, "lucky_item"));
      if (arr_tmp.length == 0) {
          $("#sign_list_page").hide();
      } else {
          $("#sign_list_page").show();
      }
      $("#sign_list_page .page-selnum").html(iPageNum + " / " + iPageSum);
      TGDialogS('luck')

  });
}


// function goPage(pno, psize) {
//     var itable = document.getElementById("lucky_list");
//     console.log(itable)
//     var num = itable.rows.length;//表格所有行数(所有记录数)
//     console.log(num);
//     var totalPage = 0;//总页数
//     var pageSize = psize;//每页显示行数
//     //总共分几页
//     if (num / pageSize > parseInt(num / pageSize)) {
//         totalPage = parseInt(num / pageSize) + 1;
//     } else {
//         totalPage = parseInt(num / pageSize);
//     }
//     // goPage(currentPage-1,psize);
//     var currentPage = pno;//当前页数
//     var startRow = (currentPage - 1) * pageSize + 1;//开始显示的行 31
//     var endRow = currentPage * pageSize;//结束显示的行  40
//     endRow = (endRow > num) ? num : endRow;  //40
//     console.log(endRow);
//     //遍历显示数据实现分页
//     for (var i = 1; i < (num + 1); i++) {
//         var irow = itable.rows[i - 1];
//         if (i >= startRow && i <= endRow) {
//             irow.style.display = "";
//         } else {
//             irow.style.display = "none";
//         }
//     }
//     var tempStr = "";
//     if (currentPage > 1) {
//         // tempStr += "<a href=\"#\" onClick=\"goPage("+(1)+","+psize+")\">首页</a>";
//         tempStr += '<a href="javascript:goPage(' + (currentPage - 1) + ',' + psize + ')" onclick="PTTSendClick(\'link\',\'prep3\',\'上一页\')" class="prep">上一页</a>';
//         // tempStr += "<a href=\"#\" onClick=\"goPage("+(currentPage-1)+","+psize+")\"><上一页</a>"
//     } else {
//         tempStr += '<a href="javascript:" onclick="PTTSendClick(\'link\',\'prep3\',\'上一页\')" class="luckprep">上一页</a>';
//     }
//     if (currentPage < totalPage) {
//         tempStr += '<a href="javascript:goPage(' + (currentPage + 1) + ',' + psize + ')" onclick="PTTSendClick(\'link\',\'next3\',\'上一页\')" class="lucknext">下一页</a>';
//     } else {
//         tempStr += '<a href="javascript:" onclick="PTTSendClick(\'link\',\'next3\',\'下一页\')" class="lucknext">下一页</a>';
//     }
//     document.getElementById("lucky_barcon").innerHTML = tempStr;
// }

// 兑换
function popLqSign(flowNo, item, tip) {
  //时间弹窗
  var msg = "确定使用【" + tip + "】兑换【传说幽瞳 无序列号版】到【" + isParams.bindInfo.sAreaName + "】下的 【" + isParams.bindInfo.roleName + "】吗？【唯一性道具或角色在同一大区内，游戏仓库无法重复到账，请谨慎选择】";
  $('.time_confirm_text').html(msg)
  $('.time_sure_btn').attr('href', 'javaScript:amsLqSign(' + flowNo + ',' + item + ',0)')

  //2次确认弹窗
  var secondMsg = "本次兑换操作不可逆，无法撤回，请确认是否操作？"
  $('.second_time_confirm_text').html(secondMsg)
  $('.confirm_close_btn').attr('href', 'javaScript:closeDialog();')
  TGDialogS('popSecondTimeConfirm')

}


//领取幸运签道具
function amsLqSign(flowNo, item, tip) {
  var flowId = ['62d1a6', '91a68f'][flowNo - 1];
  // var msg = "确定使用【" + tip + "】兑换【传说幽瞳 无序列号版】吗？当前大区【" + isParams.bindInfo.sAreaName + "】";
  var flow = {
      actId: isParams.amsId,
      token: flowId,
      loading: true, // 开启loading浮层,默认不开启
      sData: {
          item: item,
      },
      success: function (res) {
          console.log(res);
          callbackObj = res.details.modRet
          if (flowNo == 1) {
              var retmsg = callbackObj.sMsg
          } else {
              var retmsg = callbackObj.jData.msg
          }
          isParams.popMsgAlert(retmsg, function () {
              enter(2000, function () {
                  signList(2);
              });
              // if (flowNo == 2) {
              //消耗未中签数量，重新刷新页面展示
              // signList(2);
              // }
          });

      },
      fail: function (res) {
          isParams.failShow(res, function (res) {
              if (res.errMsg) {
                  isParams.popMsgAlert(res.errMsg)
              }
          })
      }
  }
  // isParams.popMsgConfirm(msg, '', function () {
  isParams.doSubmitNoCheck(flow);
  // });
}

// 查询积分
function enter_lucky(a, callback = '') {
  setTimeout(function () {
      var flow = {
          actId: isParams.amsId,
          token: '96e175',
          loading: false, // 开启loading浮层,默认不开启
          sData: {},
          success: function (res) {
              console.log(res);

              setTimeout(function () {
                  signList(2);
              }, 2000);
              return;
          },
          fail: function (res) {
              isParams.failShow(res, function (res) {
                  if (res.errMsg) {
                      // alert(res.errMsg)
                  }
                  signList(2);
              })
          }
      }
      //刷新积分
      isParams.doSubmitNoCheck(flow)
  }, a || 2000);
}

//================================幸运签 luckysign  end =========================================
function popDjq() {
  if (!isH5) {
      var url = "https://act.daoju.qq.com/act/a20190301yqrh/pop.html?sorce=pc"
      if (isParams.iUseQQConnect) {
          url += "&type=qc"
      }
      $("#pop4 .fc_boxg1").html('<iframe class="iframe1" frameborder="0" height="800px" id="cf_djq" src="' + url + '" width="810px"></iframe>');
      TGDialogS("pop4");
  } else {
      var url = "https://app.daoju.qq.com/act/a20190301yqrh/pop.html"
      if (isDjcApp()) {
          url += "?plat_support=mqq&type=qc";
      } else {
          if (isParams.iUseQQConnect) {
              url += "&type=qc"
          }
      }
      location.href = url;
  }
}


