var pointData = {}
var isPay = false
// const getInfoApi = `/y2025.${ctrlName}/getInfo` // 活动信息
const buyKeysApi = window.isDev ? `/api/event/addConsumableRecord` : `/event/addConsumableRecord` // 购买钥匙
const drawLotteryApi = window.isDev ? `/api/event/gachaItem` : `/event/gachaItem` // 抽奖接口
const getTankListsApi = window.isDev ? '/api/event/getTemporaryBoxRecord'  : `/event/getTemporaryBoxRecord`; // 暂存箱
// const tankHandleApi = `/y2025.${ctrlName}/tankHandle`; // 暂存箱操作
// const getPackListApi = `/y2025.${ctrlName}/getPackList`; // 礼包记录
const getAwardListsApi = `/json/getAwardLists.json`; // 获奖名单
const exchangeApi = window.isDev ? `/api/event/redeemEventItem` : `/event/redeemEventItem`; // 道具兑换
// const feedbackApi = `/y2025.${ctrlName}/feedback`; // 填写体验问卷
// const receiveApi = `/y2025.${ctrlName}/receive`; // 领取体验问卷奖励
const getConsumableQuantityApi = window.isDev ? `/api/event/getConsumableQuantity` : `/event/getConsumableQuantity`; // 查询剩余积分或者钥匙数量

eventId='1890742580912619522'
isParam = {
    bizCode: 'cf',
    _ams_id: "695080",
    _act_id: "34836",
    acctype: "",
    userInfo: {},
    isLogin: 0,
    isBind: 0,
    _2327: 0,
    _6759: 0,
    holdVote: 0,
    procType:0,
    weaponType:0,
    skinType:0,
    propIdArr: {
        1: ["960948", "恭喜您成功购买复活币x1，赠送抽奖钥匙x1"],
        2: ["960943", "恭喜您成功购买复活币x10，赠送抽奖钥匙x11"],
        3: ["960947", "恭喜您成功购买复活币x1，赠送抽奖钥匙x1"],
        4: ["960960", "恭喜您成功购买复活币x10，赠送抽奖钥匙x10"],
    },
    fjMap: {},
    dhMap: {},
    xydMap: {},
    cddhMap: {},
    question: {
        '1': '',
        '2': '',
        '3': '',
        '4': '',
        '5': '',
        '6': '',
        '8': '',
        '9': '',
    },
    // 里程碑奖励
    msNum:[0,200,450,600,900,1300],
    share: {
        title: '银翼出击 超导未来',
        desc: '全新首发QBZ191枪系',
        icon: 'https://game.gtimg.cn/images/actdaoju/cp/a20250108cfsilverwings/share.jpg',
        link: 'https://app.daoju.qq.com/cp/a20250108cfsilverwings/index.html?plat_support=mqq',
    },

};
//==================================== login ============================================================

var pageIndex = 1;
var totalPage = 0;

milo.ready(function () {
    //页面，弹窗使用
    window.alert = function (msg, callback, callback1) {
        $('#pop12 .msg').text(msg);

        window.alert_call = function () {
            closeDialog();
            $.isFunction(callback) && callback();
        }
        
        $('#pop12 a').attr("href", "javascript:window.alert_call();");
        TGDialogS('pop12');

        // need("util.modalDialog", function (Dialog) {
        //     Dialog.alert(msg, {
        //         onConfirm: function () {
        //             typeof callback == "function" ? callback() : console.log("no callback")
        //         },
        //         onClose: function () {
        //             typeof callback1 == "function" ? callback1() : console.log("no callback1")
        //         }
        //     });
        // })
    };
    window.confirm = function (msg, callback, ishow = false) {
        if (!ishow) {
            $("#pop11 .btn_pqd").removeClass('gray');
            $("#pop11 .p_time").hide();
            $("#pop11 .btn_pqd").attr("href", "javascript:window.confirm_call();");
        } else {
            $("#pop11 .p_time").html("倒计时："+  ishow).show();
            $("#pop11 .btn_pqd").attr('href','javascript:;');
            $("#pop11 .btn_pqd").addClass('gray');
            if (isParam.interval) {
                clearInterval(isParam.interval);
            }
            // 每秒更新倒计时
            isParam.interval = setInterval(() => {
                ishow--;
                $("#pop11 .p_time").html("倒计时："+ ishow);
                // 倒计时结束
                if (ishow === 0) {
                    $("#pop11 .btn_pqd").removeClass('gray');
                    $("#pop11 .btn_pqd").attr("href", "javascript:window.confirm_call();");
                    clearInterval(isParam.interval);
                }
            }, 1000);
        }
        $("#pop11 .confirmText").html(msg);
        window.confirm_call = function () {
            closeDialog();
            $.isFunction(callback) && callback();
        }
        
        TGDialogS('pop11');
    }

    //公共参数
    isParam.isH5 = location.hostname == "app.daoju.qq.com" ? true : false;
    isParam.isNei = milo.request('neiqian') != '' ? true : false;
    isParam.isWegame = milo.request('wegame') != '' ? true : false;

    //普通登录态
    // qq登录
    // $(".bind").hide();
    // $(".btndjqjl").show();

    $('#dologin').click(function () {
        Hx.toLogin();
    });
    $("#dologout").click(function () {
        Milo.logout({
            callback: function () {
                location.reload();
            }
        });
    });

    // ACT.dologin();

    // need("ams.daoju_buy_svr.appid", function (autoappid) {
    //     autoappid.init(isParam.bizCode, isParam._act_id, function (final_appid) {
    //         console.log("final_appid:" + final_appid);
    //         if (final_appid == 8888) {
    //             window["final_appid_" + isParam._act_id] = "1101";
    //         }
    //     });
    // });

    ACT.queryBroadcast(); // 数据轮播

    $(".buy-btn").click(function () {
        var type = $(this).attr('data-id');
        ACT.amsBuy(type);
    });

    setTimeout(function () {
        setShare();
    }, 500);
});

function setShare() {
    if (isParam.isH5) {
        need("daoju.ui.share", function (share) {
            if (typeof ek != "undefined") {
                //是腾讯动漫
                ek.share.setShare({
                    title: isParam.share.title,
                    img_url: isParam.share.icon,
                    desc: isParam.share.desc,
                    link: isParam.share.link,
                    callback: function () {
                        alert("分享成功！");
                    }
                });
            } else {
                //不是腾讯动漫
                share.setShare({
                    title: isParam.share.title,
                    icon: isParam.share.icon,
                    desc: isParam.share.desc,
                    link: isParam.share.link
                });
            }
        });
    }
}
// https://app.daoju.qq.com/cp/a20250108cfsilverwings/index.html
var Hx = {
    /**
     qq互联登录
     */
    iUseQQConnect: true,
    /**
     * 登录
     */
    toLogin: function () {
        if (Hx.iUseQQConnect) {
            if (Milo.isMobile()) {
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
            if (Milo.isMobile()) {
                Milo.mobileLoginByQQ();
            } else {
                Milo.loginByQQ();
            }
        }
    },
    //获得大区名称
    getAreaName: function (area, call) {
        var url = location.protocol + "//gameact.qq.com/comm-htdocs/js/game_area/cf_server_select.js";
        milo.loader.loadScript(url, function () {
            var _name = CFServerSelect.zoneToName(area);

            $.isFunction(call) && call(_name);
        })
    },

    /**
     * 分享图信息
     */
    imgArr: [],
    /**
     * 分享链接
     */
    share: {
        "shareUrl": 'https://act.daoju.qq.com/act/a20240220cfstore/index.html',
        "h5Url": 'https://app.daoju.qq.com/act/a20240220cfstore/index.html?plat_support=mqq'
    },



    //复制功能
    copyUrl: function () {
        // Hx.reportSelect()
        if ($('.shareUrl').val() != "") {
            var inp = document.getElementById('inp');
            inp.select();
            if (document.execCommand("copy")) {
                alert('已复制好，可粘贴');
            } else {
                alert('请手动复制到剪贴板')
            }
        } else {
            alert("未生成链接地址");
        }
    },
}

// 查询绑定大区
function queryBindArea() {
    var sData = {
        query: true
    }
    var flow_query = {
        actId: isParam._ams_id,
        token: 'bindinit',
        loading: true, // 开启loading浮层,默认不开启
        sData: sData,
        success: function (res) {
            if (isParam.isNei && top.location == location && milo.request('gc') != 1) {
                var curHtmlUrl = window.location.href;
                if (curHtmlUrl.indexOf("hdnq.html") >= 0) {
                } else {
                    window.location.href = "https://cf.qq.com/act/a20160516ntclsacts/new_index.htm";
                }
            }
            console.log('查询绑定大区', res);
            if (res.data) {
                var data = res.data;
                var details = res.details;
                isParam.userInfo.sArea = data.area;
                isParam.userInfo.sRole = data.roleId;
                
                if (!data.areaName) {
                    Hx.getAreaName(data.area, function (_name) {
                        isParam.userInfo.areaName = _name
                    })
                }
                isParam.userInfo.roleName = data.roleName;
                isParam.userInfo.uin = details.jData.bindarea.Fuin;

                console.log(isParam.userInfo);
                var areaName = decodeURIComponent(data.areaName);
                var iRoleName = decodeURIComponent(data.roleName);

                isParam.userInfo.areaName = areaName;

                isParam.isBind = 1;
                $("#userinfo").text(details.jData.bindarea.Fuin);
                $('#tlogin_qq_span').text(details.jData.bindarea.Fuin)
                $('#unlogin').hide();
                $('#logined').show();
                $("#milo-binded").show();
                $("#milo-unbind").hide();
                $("#milo-areaName").text(areaName);
                $("#milo-roleName").text(iRoleName);
                
                //查询
                ACT.enter(1500);
            } else {
                commitBindArea()
            }
        },
        fail: function (res) {
            ACT.fail(res);
        }
    };
    Milo.emit(flow_query);
}

// 提交绑定大区
function commitBindArea() {
    closeDialog()
    var flow_commit = {
        actId: isParam._ams_id,
        token: 'bind',
        loading: true, // 开启loading浮层,默认不开启
        sData: {
            query: false
        },
        success: function (res) {
            console.log('提交绑定大区', res);
            queryBindArea()
        },
        fail: function (res) {
            console.log('bind role fail:',res)
            // ACT.fail(res);
        }
    };
    Milo.emit(flow_commit);
}

//==================================== chou ============================================================
var ACT = {
    fail: function (res) {
        if (res.iRet === 101 || res.iRet === '101') {
            // 登录态失效，需要重新调登录方法
            Hx.toLogin();
        } else if (res.iRet === 99998 || res.iRet === '99998') {
            // 调用提交绑定大区方法
            queryBindArea();
        } else {
            alert(res.sMsg);
        }
    },
    dologin: function (call) {
        if (isParam.isNei || isParam.isWegame) {
            Hx.iUseQQConnect = false
        }
        //正常逻辑
        if (Hx.iUseQQConnect) {
            window.iUseQQConnect = 1
        } else {
            window.iUseQQConnect = 0
        }
        console.log(' window.iUseQQConnect ===',  window.iUseQQConnect )
        Milo.checkLogin({
            // iUseQQConnect: Hx.iUseQQConnect, //如果当前活动使用的互联登录,请将改参数设置true
            success: function (user) {
                console.log('已经登录',user)
                $('#unlogin').hide();
                $('#logined').show();
                isParam.isLogin = 1;
                isParam.acctype = user.userInfo.acctype;

                if (isParam.isBind != 1) {
                    queryBindArea();
                    return;
                }
                $.isFunction(call) && call();
            },
            fail: function (res) {
                console.log('未登录')
                Hx.toLogin();
            }
        });
    },
    logout: function () {
        Milo.logout({
            // 退出回调
            callback: function () {
                ACT.dologin();
            }
        });
    },
    //绑定大区
    bind: function (call) {
        if (checkUserStatus()) {
            $.isFunction(call) && call();
            return;
        }
        // if (milo.request('code') != 0) {
        //     if (isParam.userInfo.sArea > 0) {
        //         $.isFunction(call) && call();
        //     } else {
        //         alert("请先绑定角色~", function () {
        //             Hx.bindRole()
        //         })
        //     }
        // } else {
        //     ACT.dologin(function () {
        //         if (isParam.userInfo.sArea > 0) {
        //             $.isFunction(call) && call();
        //         } else {
        //             queryBindArea();
        //         }
        //     });
        // }

    },
    //初始化查询
    enter: function (a) {
        ACT.bind(function () {
            setTimeout(function () {
                var sData = {}
                var flow_1017401 = {
                    actId: isParam._ams_id,
                    token: 'init',
                    loading: true,
                    sData: sData,
                    success: function (res) {
                        console.log("初始化查询结果：", res)
                        var jData = res.details.jData;
                        console.log('初始化查询流水:' + res.sAmsSerial);

                        isParam.fjMap = jData.map.fjMap
                        isParam.dhMap = jData.map.dhMap
                        isParam.xydMap = jData.map.xydMap
                        isParam.cddhMap = jData.map.cddhMap

                        pointData = jData.jf_arr
                        var holdArr = jData.holdarr;

                        $('.zeroNum').text(pointData[6839]['ticket']) // 抽奖钥匙

                        // 每日领取
                        if(holdArr['daily_shard'].iUsedNum > 0){
                            $('.btn-getShard1').addClass('gray').attr('href','javascript:;').text('已领取')
                        }

                        if(holdArr['month_total_shard'].iUsedNum >= 8){
                            $('.btn-getShard1').addClass('gray').attr('href','javascript:;').text('已达每月上限')
                        }

                        // 每月首次
                        if(holdArr['month_first'].iUsedNum > 0){
                            $('.btn-getShard2').addClass('gray').attr('href','javascript:;').text('已领取')
                        }

                        // 使用零号击杀
                        if(holdArr['weapon_get_shard'].iUsedNum > 0){
                            $('.btn-getShard3').addClass('gray').attr('href','javascript:;').text('已领取')
                        }


                        $("._chou_num").text(pointData[6837]['ticket']);
                        
                        var hasPay = parseInt(pointData[6842]['total']);  // 反馈标识积分

                        isParam._2327 = parseInt(jData.jf_2327); // 代金券
                        isParam._6759 = parseInt(jData.jf_6759); // 代金券

                        $("._djq_num").text(isParam._2327);
                        $('.dhNum').text(pointData[6838]['ticket']) // 兑换积分
                        $('.cdBoxNum').text(pointData[6845]['ticket']) // 超值宝箱
                        $('.cdNum').text(pointData[6844]['ticket']) // 超导值
                        $('.wnCoinNum').text(parseInt(jData.jf_6759)) // 万能碎片
                        // 超导兑换
                        for(var i=1;i<=4;i++){
                            if(holdArr['cd_ex_'+ i].iUsedNum > 0){
                                $('.btn-cdEx'+ i).addClass('gray').attr('href','javascript:;').text('已兑换')
                            }
                        }
                        // 超导回馈
                        for(var i=1;i<=12;i++){
                            if(holdArr['has_prop_'+ i].iUsedNum > 0){
                                $('.btn-getPropGift'+ i).addClass('gray').attr('href','javascript:;').text('已领取')
                            }
                        }

                        // 展示反馈使用情况-未消费或已使用
                        $('.btnFeedBack').attr('href', 'javascript:alert(\'【请先参与本次活动】\')');
                        if (hasPay > 0) {
                            if (parseInt(jData.holdarr.fankui.iUsedNum) == 0) {
                                $('.btnFeedBack').removeClass('gray').attr('href', 'javascript:TGDialogS(\'pop15\')');
                            } else {
                                $('.btnFeedBack').addClass('gray').attr('href', 'javascript:;'); // 已填写
                            }
                        }

                        // 反馈奖励
                        if (parseInt(jData.holdarr.fankuilq.iUsedNum) == 0) {
                            $('.btn_getFkGfit').removeClass('gray').attr('href', 'javascript:ACT.amsSayLq()');
                        } else {
                            $('.btn_getFkGfit').addClass('gray').attr('href', 'javascript:;').text('已领取'); // 已填写
                        }

                        return
                    },
                    fail: function (res) {
                        console.log(res);
                    }
                };
                Milo.emit(flow_1017401);
            }, a || 2000);
        })
    },
    
    //购买
    amsBuy: function (type) {
        // if(isPay){
        //     return
        // }

        // ACT.bind(function () {
        //     var flow = {
        //         actId: isParam._ams_id,
        //         token: "buykey",
        //         sData: {
        //             // sPlatId: -1,
        //             // appext: encodeURI(JSON.stringify(ext)),
        //             // propid: isParam.propIdArr[type][0],
        //             sid:type,
        //             gameId: isParam.bizCode, // 业务简称
        //             buyNum: 1,
        //             // jifen_dikou: jifen_dikou, // 是否使用积分抵扣1是 0否
        //             // jifen_amount: jifen_amount, // 用户传入的积分抵扣数量
        //             djcActId: isParam._act_id, // 道聚城活动id
        //             paytype: 2, // 1：点券 2：人民币 3：金币 4：点券+金币 5：金币2
        //         },
        //         // 支付弹框关闭回调
        //         onPayClose: function () {
        //             isPay = false
        //             if (type == 3 || type == 4) {
        //                 ACT.enter(2000);
        //             }
        //         },
        //         success: function (res) {
        //             console.log("购买成功信息：" + JSON.stringify(res));
        //             isPay = false
        //             ACT.enter(2000);
        //         },
        //         fail: function (res) {
        //             isPay = false
        //             console.log("购买错误信息流水：" + JSON.stringify(res));
        //             if (res.iRet == -720232) {
        //                 alert('您点击的太快了，请稍后重试~')
        //                 ACT.enter(2000);

        //             } else {
        //                 if (res.sMsg) {
        //                     alert(res.sMsg)
        //                 }
        //             }
        //         }
        //     };

        //     flow.sData.jifen_dikou = 0;
        //     flow.sData.jifen_amount = 0;

        //     if(type == 3){
        //         // 折扣券购买
        //         var cut_price = {user_price: 1000}; //实付
        //         flow.sData.jifen_channel = 2327 // 是否使用积分抵扣1是 0否

        //         if(parseInt(isParam._2327) >= 9){
        //             flow.sData.jifen_dikou = 1;
        //             // flow.sData.jifen_amount = 9;
        //             cut_price = {user_price: 100}; //实付
        //         }

        //         if(parseInt(isParam._2327) > 0 && parseInt(isParam._2327) < 9){
        //             flow.sData.jifen_dikou = 1;
        //             // flow.sData.jifen_amount = isParam._2327;
        //             var _price = 1000 - parseInt(isParam._2327) * 100
        //             cut_price = {user_price: _price}; //实付
        //         }
                
        //         flow.sData.appext = encodeURIComponent(encodeURI(JSON.stringify(cut_price)))
        //     }

        //     if(type == 4){
        //         var cut_price = {user_price: 10000}; //实付
        //         flow.sData.jifen_channel = 2327 // 是否使用积分抵扣1是 0否

        //         if(parseInt(isParam._2327) >= 90){
        //             flow.sData.jifen_dikou = 1;
        //             // flow.sData.jifen_amount = 90;
        //             cut_price = {user_price: 1000}; //实付
        //         }else{
        //             alert('抱歉，拥有的代金券不足~')
        //             return
        //         }
                
        //         flow.sData.appext = encodeURIComponent(encodeURI(JSON.stringify(cut_price))) 
        //     }
        //     isPay = true
        //     Milo.emit(flow);
        // });
      const arr = [{
        name: '复活币',
        quantity: 1,
        operationName: "购买复活币",
        countType: 1
      }, {
        name: '复活币',
        quantity: 10,
        operationName: "购买复活币",
        countType: 1
      }, {
        name: '复活币',
        quantity: 1,
        operationName: "购买复活币",
        countType: 1
      }, {
        name: '复活币',
        quantity: 10,
        operationName: "购买复活币",
        countType: 1
      }]
        // 检测用户状态
        if (!checkUserStatus()) return false;
        const index = parseInt(type) - 1
        // if (index > 2) return alert('抱歉，不支持使用代金券购买钥匙');
        console.log(type, index)
        const params = {
          eventId: eventId,
          ...arr[index]
        }
        console.log(buyKeysApi, params)
        request(buyKeysApi, 'post', params).then(res => {
            if (res.code == 0) getInfo();
            alert(res.msg)
        })

    },
    // 抽奖
    amsChou: function (num) {
        // ACT.bind(function () {
        //     var flow_1017567 = {
        //         actId: isParam._ams_id,
        //         token: 'lottery',
        //         sData: {
        //             num: num
        //         },
        //         loading: true, // 开启loading浮层,默认不开启
        //         success: function (res) {
        //             // pop3 pop15
        //             console.log("抽奖结果：", res);
        //             var callbackObj = res.details.jData;

        //             var obj = tenResult(callbackObj.iPackageIdCnt, callbackObj.sPackageName);
        //             Prize(obj)

        //             ACT.enter(500);
        //             return
        //         },
        //         fail: function (res) {
        //             ACT.fail(res);
        //         }
        //     };
        //     Milo.emit(flow_1017567);
        // })

        // 检测用户状态
        if (!checkUserStatus()) return false;
        request(drawLotteryApi, 'post', {
          eventId: eventId,
          pool: "主奖池",
          gachaCount: num,
          consumableName: "钥匙",
          consumableQuantity: num
        }).then(res => {
            if (res.code == 0) {
                // getInfo()
                // const arr = res.data
                // if (arr.length == 1) {
                //     $('#poplot2 .p_txt2').empty().html(`<p style="letter-spacing: 1px">${res.data[0].name}${res.data[0].quantity > 1 ? 'x' + res.data[0].quantity : ''}</p>`)
                //     TGDialogS('poplot2')
                // } else {
                //     var sHtml = '';
                //     $.each(arr, function (k, v) {
                //         sHtml += '<p style="letter-spacing: 1px">' + v.name + `${v.quantity > 1 ? 'x' + v.quantity : ''}` + '</p>'
                //     })
                //     $('#poplot1 .multi-lot-result').html(sHtml);
                //     TGDialogS('poplot1')
                // }

                    console.log("抽奖结果：", res);
                    var callbackObj = res.data || []
                    let iPackageIdCnt = ''
                    let sPackageName = ''
                    if (!callbackObj.length) return false
                    if (callbackObj.length == 1) {
                        iPackageIdCnt = callbackObj[0].id
                        sPackageName = callbackObj[0].name
                    } else {
                        callbackObj.forEach((d, idx) => {
                            !idx && (iPackageIdCnt = callbackObj[0].id) && (sPackageName = callbackObj[0].name)
                            iPackageIdCnt += ',' + callbackObj[idx].id
                            sPackageName += ',' + callbackObj[idx].name
                        })	
                    }

                    var obj = tenResult(iPackageIdCnt, sPackageName);
                    Prize(obj)

                    ACT.enter(500);
            getInfo()
            } else {
                alert(res.msg)
            }
        })
    },
    // 领取记录
    queryLotteryRecord(item) {
        var _str = ''
        if(item == 1){
            _str = 'record'
        }

        if(item == 2){
            _str = 'zcx'
        }

        if(_str == ''){
            return
        }
        ACT.bind(function () {
            var flow_1017608 = {
                actId: isParam._ams_id,
                token: 'gift',
                sData: {
                    str :_str
                },
                success: function (res) {
                    if ($("#milo-lotteryRecordContainer"+ item).length > 0) {
                        $("#milo-lotteryRecordContainer"+ item).html('');
                    }
                    console.log("抽奖记录:", res)
                    var history = res.details.jData.lottery
                    totalPage = history.result.pageTotal;
                    if (totalPage == 0) {
                        pageIndex = 0;
                    }
                    $('.now_page').text(pageIndex);
                    $('.total_page').text(totalPage);
                    //渲染数据
                    $("#milo-lotteryRecordContainer" + item).html('');
                    let tpl_html = $("#milo-lotteryRecordTpl" + item).html();
                    // 渲染数据
                    const _html = Milo.tpl().compile(tpl_html, history.myGiftList);
                    $("#milo-lotteryRecordContainer" + item).html(_html);
                    
                    if(item == 1){
                        TGDialogS('pop1')
                    }
                    if(item == 2){
                        TGDialogS('pop2')
                    }
                },
                fail: function (res) {
                    ACT.fail(res);
                }
            };

            if (pageIndex > totalPage) {
                pageIndex = totalPage;
            }
    
            if (pageIndex < 1) {
                pageIndex = 1;
            }
    
            flow_1017608.sData.iPageNow = pageIndex;
            console.log(flow_1017608, pageIndex, 123123)
            if(item == 1){
                if (isParam.isH5) {
                    flow_1017608.sData.iPageSize = 10;//礼包记录个数
                } else {
                    flow_1017608.sData.iPageSize = 10;//礼包记录个数
                }
            }else{
                if (isParam.isH5) {
                    flow_1017608.sData.iPageSize = 6;//礼包记录个数
                } else {
                    flow_1017608.sData.iPageSize = 8;//礼包记录个数
                }
            }

            Milo.emit(flow_1017608);
        });
        // const cb = 
        // cb()
    },
    // 积分兑换
    amsExchange: function (groupId) {
        closeDialog();
        ACT.bind(function () {
            var flow_1017608 = {
                actId: isParam._ams_id,
                token: 'dhlq',
                sData: {},
                loading: true, // 开启loading浮层,默认不开启
                success: function (res) {
                    console.log(res);
                    alert(res.sMsg);
                    ACT.enter();
                },
                fail: function (res) {
                    ACT.fail(res);
                }
            };

            var dhConfig = isParam.dhMap[groupId];
            var msg = "您确定消耗【兑换积分x" + dhConfig[0] + "】兑换【" + dhConfig[1] + "】到【" + isParam.userInfo.areaName + "】吗？"
            confirm('本次兑换操作不可逆，无法撤回，请确认是否操作',function(){
                confirm(msg, function () {
                    flow_1017608.sData.item = groupId 
                    Milo.emit(flow_1017608);
                },3)
            })
        });
    },
    // 2327代金券记录
    djqRecord: function () {
        if (isParam.isH5) {
            window.open('//app.daoju.qq.com/act/a20190301yqrh/pop.html?plat_support=mqq&type=qc', '_self');
        } else if (isParam.isNei || isParam.isWegame) {
            $('.codedjc').attr('src', "//act.daoju.qq.com/act/a20190301yqrh/pop.html?sorce=pc")
            TGDialogS('pop16')
        } else {
            $('.codedjc').attr('src', "//act.daoju.qq.com/act/a20190301yqrh/pop.html?sorce=pc&type=qc")
            TGDialogS('pop16')
        }
    },
    // 暂存箱领取
    amsZanQu: function (zid, packageName,packageId) {
        ACT.bind(function () {
            
            var flow_1017606 = {
                actId: isParam._ams_id,
                token: 'zcxlq',
                sData: {},
                loading: true, // 开启loading浮层,默认不开启
                success: function (res) {
                    console.log("暂存箱领取结果：", res);
                    alert(res.sMsg, function () {
                        ACT.queryLotteryRecord(2);
                    });
                },
                fail: function (res) {
                    ACT.fail(res);
                }
            };

            var msg = '您确定领取【' + packageName + '】到【' + isParam.userInfo.areaName + '】下的【' + isParam.userInfo.roleName + '】吗？唯一性道具在同一大区内，游戏仓库无法重复到账，请谨慎选择'
            confirm('本次领取操作不可逆，无法撤回，请确认是否操作',function(){
                confirm(msg, function () {
                    flow_1017606.sData.sid = zid 
                    Milo.emit(flow_1017606);
                },3)
            })
        });
    },
    // 暂存箱分解
    amsZanFen: function (zid, packageName, key) {
        ACT.bind(function () {
            var flow_1017607 = {
                actId: isParam._ams_id,
                token: 'zcxfj',
                sData: {},
                loading: true, // 开启loading浮层,默认不开启
                success: function (res) {
                    console.log("暂存箱分解：", res);
                    // var msg = '恭喜获得 积分x' + res.details.jData.iPackageNum;
                    var msg = res.sMsg
                    var pkgNum = res.details.jData.lottery.iPackageIdCnt.split(':')[1]
                    if(parseInt(pkgNum) == 1){
                        msg = res.sMsg + ' 1个'
                    }

                    alert(msg, function () {
                        ACT.queryLotteryRecord(2);
                        ACT.enter(1000);
                    });
                },
                fail: function (res) {
                    ACT.fail(res);
                }
            };
            var jfNum = isParam.fjMap[key][0]
            var msg = "您确定分解【" + packageName + "】 获得 【抽奖钥匙x" + jfNum + "】 吗？"
            confirm('本次分解操作不可逆，无法撤回，请确认是否操作',function(){
                confirm(msg, function () {
                    flow_1017607.sData.sid = zid 
                    Milo.emit(flow_1017607);
                },3)
            })
        });
    },
    // 查询收集进度
    getCollectStatus: function () {
        closeDialog();
        ACT.bind(function () {
            var flow_1017608 = {
                actId: isParam._ams_id,
                token: '467b02',
                sData: {},
                success: function (res) {
                    console.log(res);
                    alert(res.sMsg);
                },
                fail: function (res) {
                    ACT.fail(res);
                }
            };

            Milo.emit(flow_1017608);
        });
    },
    // 超导值回馈
    hasPropGift: function (item) {
        ACT.bind(function () {
            var flow_1017607 = {
                actId: isParam._ams_id,
                token: '85d06c',
                sData: {
                    item:item,
                },
                loading: true, // 开启loading浮层,默认不开启
                success: function (res) {
                    console.log("超导值回馈", res);
                    alert(res.sMsg, function () {
                        ACT.enter(500);
                    });
                },
                fail: function (res) {
                    ACT.fail(res);
                }
            };
            var msg = "您确定领取超导值×5"+ "到 【" + isParam.userInfo.areaName + "】 吗？"
            confirm(msg, function () {
                Milo.emit(flow_1017607);
            })
        });
    },
    // 超导值兑换
    wnExchangeGift: function (item) {
        closeDialog();
        ACT.bind(function () {
            var flow_1017608 = {
                actId: isParam._ams_id,
                token: 'a6d258',
                sData: {
                    item:item
                },
                success: function (res) {
                    console.log(res);
                    alert(res.sMsg, function () {
                        ACT.enter(500);
                    });
                },
                fail: function (res) {
                    ACT.fail(res);
                }
            };
            
            var _config = isParam.xydMap[item]
            var msg = "您确定消耗"+ _config[0] +"万能碎片兑换【"+ _config[1] +"】到 【" + isParam.userInfo.areaName + "】 吗？"
            confirm(msg, function () {
                Milo.emit(flow_1017608);
            })
        });
    },
    // 超导值兑换
    cdExchangeGift: function (item) {
        closeDialog();
        ACT.bind(function () {
            var flow_1017608 = {
                actId: isParam._ams_id,
                token: '637659',
                sData: {},
                success: function (res) {
                    console.log(res);
                    alert(res.sMsg, function () {
                        ACT.enter(500);
                    });
                },
                fail: function (res) {
                    ACT.fail(res);
                }
            };
            
            var _config = isParam.cddhMap[item]
            var msg = "您确定消耗"+ _config[0] +"超导值兑换【"+ _config[1] +"】到 【" + isParam.userInfo.areaName + "】 吗？"
            confirm(msg, function () {
                flow_1017608.sData.item = item
                Milo.emit(flow_1017608);
            })
        });
    },
    // 超导宝箱自选奖励
    getCdBoxGift: function (item) {
        if(parseInt(pointData[6845]['ticket']) < 1){
           alert('请先获取超导宝箱');
           return 
        }

        ACT.bind(function () {
            var flow_1017607 = {
                actId: isParam._ams_id,
                token: 'e8beed',
                sData: {},
                loading: true, // 开启loading浮层,默认不开启
                success: function (res) {
                    console.log("超导自选奖励领取结果", res);
                    // var msg = '恭喜获得 积分x' + res.details.jData.iPackageNum;
                    alert(res.sMsg, function () {
                        ACT.enter(500);
                    });
                },
                fail: function (res) {
                    ACT.fail(res);
                }
            };
            var _map = {
                1:'超导值x3',
                2:'王者之石x1',
                3:'2025万能碎片x3'
            }
            var msg = "您确定领取【"+ _map[item] +"】到 【" + isParam.userInfo.areaName + "】 吗？"
            confirm(msg, function () {
                flow_1017607.sData.item = item
                Milo.emit(flow_1017607);
            })
        });
    },

     // 领取零号碎片
     getZeroShardGift: function (item) {
        ACT.bind(function () {
            var flow_1017607 = {
                actId: isParam._ams_id,
                token: '92e999',
                sData: {},
                loading: true, // 开启loading浮层,默认不开启
                success: function (res) {
                    console.log("超导自选奖励领取结果", res);
                    // var msg = '恭喜获得 积分x' + res.details.jData.iPackageNum;
                    alert(res.sMsg, function () {
                        ACT.enter(500);
                    });
                },
                fail: function (res) {
                    ACT.fail(res);
                }
            };
            var _map = {
                1:'碎片x5',
                2:'QBZ191-零号（30天）',
                3:'碎片x10'
            }
            var msg = "您确定领取【"+ _map[item] +"】到 【" + isParam.userInfo.areaName + "】 吗？"
            confirm(msg, function () {
                flow_1017607.sData.item = item
                Milo.emit(flow_1017607);
            })
        });
    },
     // 兑换零号道具
     getZeroGift: function (item) {
        if(parseInt(pointData[6839]['ticket']) < 100){
           alert('抱歉，碎片不足');
           return 
        }

        ACT.bind(function () {
            var flow_1017607 = {
                actId: isParam._ams_id,
                token: '915db1',
                sData: {},
                loading: true, // 开启loading浮层,默认不开启
                success: function (res) {
                    console.log("超导自选奖励领取结果", res);
                    // var msg = '恭喜获得 积分x' + res.details.jData.iPackageNum;
                    alert(res.sMsg, function () {
                        ACT.enter(500);
                    });
                },
                fail: function (res) {
                    ACT.fail(res);
                }
            };
            
            var msg = "您确定消耗【100】碎片兑换QBZ191-零号到 【" + isParam.userInfo.areaName + "】 吗？"
            confirm('本次兑换操作不可逆，无法撤回，请确认是否操作',function(){
                confirm(msg, function () {
                    flow_1017607.sData.item = item
                    Milo.emit(flow_1017607);
                },3)
            })
        });
    },
    // 抽奖轮播功能初始化
    queryBroadcast: function () {
        var flow_1017569 = {
            actId: isParam._ams_id,
            token: 'lunbo',
            loading: true, // 开启loading浮层,默认不开启
            time: 50, // 轮播时间
            sData: {
                // query: false
            },
            customDom: {
                broadcastId: 'milo-broadcast1103979',
                broadcastContentId: 'milo-broadcast-container1103979'
            },
            success: function (res) {
                console.log('查询轮播success', res);
            },
            fail: function (res) {
                console.log('查询轮播fail', res);
            }
        };
        console.log('轮播初始化', flow_1017569);
        Milo.emit(flow_1017569);
    },

    // 【玩家反馈】数据记录
    amsSaySave: function () {
        ACT.bind(function () {
            if ($.inArray(isParam.question["1"], [1, 2, 3, 4, 5]) == -1) {
                alert("请选择您对本次活动的满意度");
                return;
            }

            if ($.inArray(isParam.question["2"], [1, -1]) == -1) {
                alert("请选择您对本次活动道具的满意度");
                return;
            }

            if ($.inArray(isParam.question["3"], [1, -1]) == -1) {
                alert("请选择您是否获得了想要的道具");
                return;
            }

            if (isParam.question["4"] == "") {
                alert("请填写您最想要本次活动中哪些道具");
                return;
            }

            if ($.inArray(isParam.question["5"], [1, 2, 3, 4, 5]) == -1) {
                alert("请填写您对本次活动首发的全新道具【QBZ191-银翼】满意度");
                return;
            }

            if ($.inArray(isParam.question["6"], [1, 2, 3, 4, 5]) == -1) {
                alert("请选择您对本次活动首发的全新道具【研】满意度");
                return;
            }

            if ($.inArray(isParam.question["7"], [1, 2, 3, 4, 5]) == -1) {
                alert("请选择您对本次活动限时返场【金色蔷薇-量子蔷薇 皮肤】满意度");
                return;
            }

            //来源
            if ($.inArray(isParam.question["8"], [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]) == -1) {
                alert("请选择您是从哪里获知本次活动的消息");
                return;
            }
            var question8_text = ""
            if (isParam.question["8"] == 10) {
                question8_text = $('#question8_text').val()
            } else {
                question8_text = ['掌上穿越火线', '贴吧/论坛/QQ群', '官网', 'Wegame广告', '游戏内活动中心', '视频平台，如B站、抖音、快手', '官方微信和官方微博', '朋友分享', '直播平台，如虎牙、斗鱼', '其他（请填写）'][isParam.question["8"] - 1]
            }
            if (question8_text == '') {
                alert("请填写您是从哪里获知本次活动的消息");
                return;
            }
            if (question8_text.length > 50) {
                alert("获知本次活动的消息来源过长，请重新填写");
                return;
            }

            isParam.question["9"] = $('#question9_text').val()
            if (isParam.question["9"] == '') {
                alert("请填写您对本次活动的建议或意见");
                return;
            }
            if (isParam.question["9"].length > 300) {
                alert("建议或意见过长，请重新填写");
                return;
            }

            closeDialog();
            var sData = {
                iQuestion1: isParam.question["1"],
                iQuestion2: isParam.question["2"],
                iQuestion3: isParam.question["3"],
                sQuestion4: isParam.question["4"],
                iQuestion5: isParam.question["5"],
                iQuestion6: isParam.question["6"],
                iQuestion7: isParam.question["7"],
                sQuestion8: encodeURIComponent(question8_text),
                sQuestion9:encodeURIComponent(isParam.question["9"]),
            }
            var flow_1017610 = {
                actId: isParam._ams_id,
                token: 'fankui',
                sData: sData,
                success: function (res) {
                    alert('反馈成功~');
                    ACT.enter(1000);
                },
                fail: function (res) {
                    ACT.fail(res);
                }
            };
            Milo.emit(flow_1017610);
        });
    },
    // 【玩家反馈】领取
    amsSayLq: function () {
        ACT.bind(function () {
            var flow_1017827 = {
                actId: isParam._ams_id,
                token: 'fklq',
                sData: {},
                success: function (res) {
                    alert(res.sMsg);
                    ACT.enter(1000);
                },
                fail: function (res) {
                    ACT.fail(res);
                }
            };
            Milo.emit(flow_1017827);
        });
    }
};

/**
 * @param item  1-5 【5星选择】
 */
function select_question1(order, item) {
    var width = [8, 29, 50, 75, 100][item - 1];
    $('.question' + order + '_progress').css('width', width + '%');
    $('.question' + order + '_btn').removeClass('on');
    for (var i = 1; i <= 5; i++) {
        if (i <= item) {
            $('.question' + order + '_btn_' + i).addClass('on');
        }
    }
    isParam.question[order] = item;
}

/**
 * @param item  1,0 【是否选择】
 */
function select_question2(order, item) {
    $(".wj" + order + '_btn').removeClass("on");
    $(".wj" + order + "_" + item).addClass("on");
    isParam.question[order] = item;
}

// 问卷
function select_radio(order, item) {
    $(".wj" + order).removeClass("on");
    $(".wj" + order + "_" + item).addClass("on");
    isParam.question[order] = item;
}
function select_star(order, item) {
    var width = [7, 26, 48, 70, 100][item - 1];
    $(".wj" + order + "_jdt").css("width", width + "%");
    for (var i = 1; i <= 5; i++) {
        if (i <= item) {
            $(".wj" + order + "_" + i).addClass("on");
        } else {
            $(".wj" + order + "_" + i).removeClass("on");
        }
    }
    isParam.question[order] = item;
}

/**
 * @param item  1-13 【多选择】
 */
function select_question3(item) {
    //初始化参数：问卷互斥选项id
    var order = 4
    var diffItem = 15
    var max = 5
    //
    var dom = $('.wj' + order + '_' + item)
    var domDiff = $('.wj' + order + '_' + diffItem)
    if (dom.hasClass('on')) {
        //通用-去选项
        dom.removeClass('on')
    } else {
        //增加选择
        if (item == diffItem) {
            //选择互斥选项
            $('.wj' + order +'_btn').removeClass('on')
            dom.addClass('on')
        } else {
            domDiff.removeClass('on')
            var len = isParam.question[order].split('|').length
            if (len >= max) {
                alert('最多选择5个')
            } else {
                dom.addClass('on')
            }
        }
    }
    getManySelect(order, diffItem)
}

function getManySelect(order, diffItem) {
    isParam.question[order] = '';
    var arr = [];
    for (var i = 1; i <= diffItem; i++) {
        var dom = $('.wj' + order + '_' + i);
        if (dom.hasClass('on')) {
            arr.push(i);
        }
    }
    isParam.question[order] = arr.join('|');
}


//============================================= fun ==================================================
//道聚城app判断
function isDJApp() {
    var result = milo.cookie.get("djc_appVersion") != null || typeof HostApp != 'undefined' || milo.request("djc_appVersion");
    return result;
}

//判断ios
function isIOS() {
    var u = navigator.userAgent;
    var result = !!u.match(/\(i[^;]+;( U;)? CPU.+Mac OS X/);
    return result;
}

//对连抽数据结果处理
function tenResult(iPackageIdCnt, sPackageName) {
    console.log('tenResult====',iPackageIdCnt)
    console.log('tenResult====',sPackageName)
    // var idArr = iPackageIdCnt.substring(0, iPackageIdCnt.length - 1).split(",");
    var idArr = iPackageIdCnt.split(",");
    var nameArr = sPackageName.split(",");
    var obj = [];

    $.each(idArr, function (k, v) {
        tmp = {
            id: v.split(":")[0],
            name: nameArr[k]
        }

        if(tmp.id != '5831207'){
            num = v.split(":")[1];
            for (var i = 0; i < num; i++) {
                obj.unshift(tmp)
            }
        }
    })
    console.log(obj, 'obj0')
    return obj;
}


//抽奖弹窗
function Prize(par = []) {
    console.log('lotterResult====',par)
    var num = par.length === 1 ? 1 : 10;
    var sHtml = '';

    for (var i = 0; i < num; i++) {
        var iPackageId = parseInt(par[i]['id']);
        var name = par[i]['name'];

        if(num == 1){
            $('#pop3 .p_txt2').text(name)
        }

        if(num == 10){
            sHtml += '<tr>'
			sHtml += '<td>'+ name +'</td>'
			sHtml += '</tr>'
        }
    }

    if(num == 1){
        TGDialogS('pop3')
    }else{
        $('#pop10 .multi-lot-result').html(sHtml);
        TGDialogS('pop10')
    }
    
}

// 活动信息
function getInfo() {
    // 检测用户状态
    if (!checkUserStatus()) return false;
    queryConsumableQuantity('钥匙', $('._chou_num'))
    // queryConsumableQuantity('星辰币', $('.dhNum'))
    // queryConsumableQuantity('星耀宝箱', $('.cdBoxNum'))
    // request(getInfoApi, 'get', {}, false).then(res => {
    //     if (res.code == 200) {
    //         const data = res.data
    //         // 我的星辰币
    //         $('.dhNum').text(data.points)
    //         // 星耀宝箱
    //         $('.cdBoxNum').text(data.box_num)
    //         // 抽奖钥匙
    //         $('._chou_num').text(data.keys_num)
    //         if (data.is_fill == 1) {
    //             $(".btnFeedBack").attr("href", "javascript:alert('已反馈过了');").addClass("gray");
    //         }
    //         if (data.is_reward == 1) {
    //             $(".btn_getFkGfit").addClass("gray");
    //         }
    //     }
    // })
    return JSON.parse(sessionStorage.getItem('login'))
}
getInfo()


// 查询剩余积分或者钥匙数量
function queryConsumableQuantity(name, ele) {
    request(getConsumableQuantityApi, 'post', {eventId, name}).then(res => {
      if (res.code == 0) {
        // 抽奖钥匙
        ele.text(res.data)
      }
      // alert(res.msg)
  })
  }