const ctrlName = 'shine2502'
const getInfoApi = `/y2025.${ctrlName}/getInfo` // 活动信息
const buyKeysApi = window.isDev ? `/api/event/addConsumableRecord` : `/event/addConsumableRecord` // 购买钥匙
const drawLotteryApi = window.isDev ? `/api/event/gachaItem` : `/event/gachaItem` // 抽奖接口
const getTankListsApi = window.isDev ? '/api/event/getTemporaryBoxRecord'  : `/event/getTemporaryBoxRecord`; // 暂存箱
const tankHandleApi = window.isDev ?  `/api/event/claimTemporaryBoxItem` : `/event/claimTemporaryBoxItem`; // 暂存箱领取操作
const tankHandleFJApi = window.isDev ?  `/api/event/disassembleTemporaryBoxItem` : `/event/disassembleTemporaryBoxItem`; // 暂存箱分解操作
const getPackListApi = `/y2025.${ctrlName}/getPackList`; // 礼包记录
const getAwardListsApi = `/json/getAwardLists.json`; // 获奖名单
const exchangeApi = window.isDev ? `/api/event/redeemEventItem` : `/event/redeemEventItem`; // 道具兑换
const feedbackApi = `/y2025.${ctrlName}/feedback`; // 填写体验问卷
const receiveApi = `/y2025.${ctrlName}/receive`; // 领取体验问卷奖励
const getConsumableQuantityApi = window.isDev ? `/api/event/getConsumableQuantity` : `/event/getConsumableQuantity`; // 查询剩余积分或者钥匙数量
const getClaimApi = window.isDev ? `/api/reward/claim` : `/reward/claim`; // 设置道具领取状态接口

var pointData = {}
const eventId = getEventIdFromUrl(window.location.href) || '1894775959430959106'
var isPay = false
isParam = {
    bizCode: 'cf',
    _ams_id: "697988",
    _act_id: "34917",
    acctype: "",
    userInfo: {
        areaName: $('#milo-areaName').text(),
        roleName: $('#milo-roleName').text(),
    },
    isLogin: 0,
    isBind: 0,
    _2327: 0,
    _6759: 0,
    holdVote: 0,
    procType: 0,
    weaponType: 0,
    skinType: 0,
    propIdArr: {
        1: ["1015975", "恭喜您成功购买复活币x1，赠送抽奖钥匙x1"],
        2: ["1015973", "恭喜您成功购买复活币x10，赠送抽奖钥匙x11"],
        3: ["1018605", "恭喜您成功购买复活币x50，赠送抽奖钥匙x55"],
        4: ["1015974", "恭喜您成功购买复活币x1，赠送抽奖钥匙x1"],
        5: ["1015972", "恭喜您成功购买复活币x10，赠送抽奖钥匙x10"],
    },
    fjMap: {},
    dhMap: {
        "3712676": [
            1188,
            "Kar98K-星神"
        ],
        "3712677": [
            958,
            "幻神-星耀 皮肤"
        ],
        "3712678": [
            758,
            "Kar98K-星神音效卡（不可交易）"
        ],
        "3712679": [
            958,
            "星际战将"
        ],
        "3712680": [
            758,
            "毁灭-星耀 皮肤"
        ],
        "3712681": [
            558,
            "屠龙-星耀 皮肤"
        ],
        "3712687": [
            278,
            "AN94-超新星"
        ],
        "3712688": [
            248,
            "AK12-天启"
        ],
        "3712689": [
            198,
            "炼狱-星空"
        ],
        "3712690": [
            108,
            "羊驼玩偶"
        ],
        "3712692": [
            15,
            "交易专用钥匙x5"
        ],
        "3712726": [
            15,
            "属性变更券x5"
        ],
        "3712727": [
            3,
            "交易专用钥匙x1"
        ],
        "3712728": [
            3,
            "属性变更券x1"
        ]
    },
    xydMap: {
        "3712780": [
            10, '游戏内王者夺宝红宝石x1'
        ],
        "3712791": [
            10, '游戏内王者轮回蓝宝石x1'
        ],
        "3712792": [
            10, '游戏内王者许愿黄宝石x1'
        ],
        "3712793": [
            10, '本活动抽奖钥匙x1'
        ],
    },
    cddhMap: {
        "3712762": [108, '星际战将'],
        "3712763": [108, '幻神-星耀 皮肤'],
        "3712764": [88, '毁灭-星耀 皮肤'],
        "3712765": [68, '屠龙-星耀 皮肤'],
        "3712766": [48, '道聚城通用代金券x50'],
    },
    // 里程碑奖励
    // msNum:[0,200,450,600,900,1300],
    share: {
        title: '星辰所向，耀芒航道',
        desc: '幻神-星耀，毁灭-星耀，星际战将，全新首发！',
        icon: 'https://game.gtimg.cn/images/actdaoju/cp/a20250116cfstar/share.jpg',
        link: 'https://app.daoju.qq.com/cp/a20250116cfstar/index.html?plat_support=mqq',
    },

};
//==================================== login ============================================================

var pageIndex = 1;
var totalPage = 0;

milo.ready(function () {
    //页面，弹窗使用
    window.alert = function (msg, callback, callback1) {
        $('#poptips3 .msg').text(msg);

        window.alert_call = function () {
            closeDialog();
            $.isFunction(callback) && callback();
        }

        $('#poptips3 .btn_pqd').attr("href", "javascript:window.alert_call();");
        TGDialogS('poptips3');

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
    window.confirm = function (msg, callback, ishow = false, cancelCallback) {
        if (!ishow) {
            $("#poptips4 .btn_pqd").removeClass('gray');
            $("#poptips4 .p_time").hide();
            $("#poptips4 .btn_pqd").attr("href", "javascript:window.confirm_call();");
        } else {
            $("#poptips4 .p_time").html("倒计时：" + ishow).show();
            $("#poptips4 .btn_pqd").attr('href', 'javascript:;');
            $("#poptips4 .btn_pqd").addClass('gray');
            if (isParam.interval) {
                clearInterval(isParam.interval);
            }
            // 每秒更新倒计时
            isParam.interval = setInterval(() => {
                ishow--;
                $("#poptips4 .p_time").html("倒计时：" + ishow);
                // 倒计时结束
                if (ishow === 0) {
                    $("#poptips4 .btn_pqd").removeClass('gray');
                    $("#poptips4 .btn_pqd").attr("href", "javascript:window.confirm_call();");
                    clearInterval(isParam.interval);
                }
            }, 1000);
        }
        $("#poptips4 .confirmText").html(msg);

        // 取消按钮事件
        $("#poptips4 .popbtn2").attr("href", "javascript:window.confirm_cancel_call();");
        window.confirm_call = function () {
            closeDialog();
            $.isFunction(callback) && callback();
        }

        window.confirm_cancel_call = function () {
            closeDialog();
            $.isFunction(cancelCallback) && cancelCallback();
        }

        TGDialogS('poptips4');
    }

    //公共参数
    isParam.isH5 = location.hostname == "app.daoju.qq.com" ? true : false;
    isParam.isNei = milo.request('neiqian') != '' ? true : false;
    isParam.isWegame = milo.request('wegame') != '' ? true : false;

    $(".buy-btn").click(function () {
        var type = $(this).attr('data-id');
        ACT.amsBuy(type);
    });

    //星耀宝箱精选
    $('.popxanzbx a').click(function () {
        $(this).addClass('on').siblings().removeClass('on')
        var _idx = $(this).data('idx')
        console.log('choose==', _idx)
        $('#popzix  .popget1').attr('href', 'javascript:ACT.getCdBoxGift(' + _idx + ',1);')
        $('#popzix  .popget5').attr('href', 'javascript:ACT.getCdBoxGift(' + _idx + ',5);')
    })
});

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
        "shareUrl": 'https://act.daoju.qq.com/cp/a20250116cfstar/index.html',
        "h5Url": 'https://app.daoju.qq.com/cp/a20250116cfstar/index.html?plat_support=mqq'
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
            if (isParam.isNei && top.location == location) {
                // todo 上线前加上
                // var curHtmlUrl = window.location.href;
                // if (curHtmlUrl.indexOf("hdnq.html") >= 0) {
                // } else {
                //     window.location.href = "https://cf.qq.com/act/a20160516ntclsacts/new_index.htm";
                // }
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
                $('#unlogin').hide();
                $('#logined').show();
                $("#milo-binded").show();
                $("#milo-unbind").hide();
                $("#milo-areaName").text(areaName);
                $("#milo-roleName").text(iRoleName);
                // $("#tlogin_qq_span").text(details.jData.bindarea.Fuin);
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
            console.log('bind role fail:', res)
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
        console.log(' window.iUseQQConnect ===', window.iUseQQConnect)
        Milo.checkLogin({
            iUseQQConnect: Hx.iUseQQConnect, //如果当前活动使用的互联登录,请将改参数设置true
            success: function (user) {
                console.log('已经登录', user)
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
        if (milo.request('code') != 0) {
            if (isParam.userInfo.sArea > 0) {
                $.isFunction(call) && call();
            } else {
                alert("请先绑定角色~", function () {
                    Hx.bindRole()
                })
            }
        } else {
            ACT.dologin(function () {
                if (isParam.userInfo.sArea > 0) {
                    $.isFunction(call) && call();
                } else {
                    queryBindArea();
                }
            });
        }

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

                        $("._chou_num").text(pointData[6860]['ticket']);

                        var hasPay = parseInt(pointData[6864]['total']);  // 付费标识

                        isParam._2327 = parseInt(jData.jf_2327); // 代金券
                        isParam._6759 = parseInt(jData.jf_6759); // 代金券

                        $("._djq_num").text(isParam._2327);
                        $('.dhNum').text(pointData[6861]['ticket']) // 兑换积分
                        $('.cdBoxNum').text(pointData[6867]['ticket']) // 星耀宝箱
                        $('.cdNum').text(pointData[6866]['ticket']) // 星耀值
                        $('.wnCoinNum').text(parseInt(jData.jf_6759)) // 万能碎片
                        // 星耀兑换
                        for (var i = 1; i <= 5; i++) {
                            if (holdArr['cd_ex_' + i].iUsedNum > 0) {
                                $('.btn-cdEx' + i).addClass('gray').attr('href', 'javascript:;').text('已兑换')
                            }
                        }
                        // 星耀回馈
                        for (var i = 1; i <= 3; i++) {
                            if (holdArr['has_prop_' + i].iUsedNum > 0) {
                                $('.btn-getPropGift' + i).addClass('gray').attr('href', 'javascript:;').text('已领取')
                            }
                        }

                        // 展示反馈使用情况-未消费或已使用
                        $('.btnFeedBack').attr('href', 'javascript:alert(\'【请先参与本次活动】\')');
                        if (hasPay > 0) {
                            if (parseInt(jData.holdarr.fankui.iUsedNum) == 0) {
                                $('.btnFeedBack').removeClass('gray').attr('href', 'javascript:TGDialogS(\'popfank\')');
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

    // 购买钥匙
    amsBuy(type) {
      const arr = [{
        name: '钥匙',
        quantity: 1,
        // price: 1
      }, {
        name: '钥匙',
        quantity: 11,
        // price: 100
      }, {
        name: '钥匙',
        quantity: 55,
        // price: 500
      }, {
        name: '钥匙',
        quantity: 1,
        // price: 10
      }, {
        name: '钥匙',
        quantity: 10,
        // price: 100
      }]
        // 检测用户状态
        if (!checkUserStatus()) return false;
        const index = parseInt(type) - 1
        // if (index > 2) return alert('抱歉，不支持使用代金券购买钥匙');
        // console.log(type, index)
        const params = {
          eventId: eventId,
          ...arr[index]
        }

        request(buyKeysApi, 'post', params).then(res => {
            if (res.code == 200) getInfo();
            alert(res.msg)
        })
    },
    // 抽奖
    amsChou(num) {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        request(drawLotteryApi, 'post', {
          eventId: eventId,
          pool: "主奖池",
          gachaCount: num,
          consumableName: "钥匙",
          consumableQuantity: num
        }).then(res => {
            if (res.code == 200) {
                const arr = res.data
                if (arr.length == 1) {
                    $('#poplot2 .p_txt2').empty().html(`<p style="letter-spacing: 1px">${res.data[0].name}${res.data[0].quantity > 1 ? 'x' + res.data[0].quantity : ''}</p>`)
                    TGDialogS('poplot2')
                } else {
                    var sHtml = '';
                    $.each(arr, function (k, v) {
                        sHtml += '<p style="letter-spacing: 1px">' + v.name + `${v.quantity > 1 ? 'x' + v.quantity : ''}` + '</p>'
                    })
                    $('#poplot1 .multi-lot-result').html(sHtml);
                    TGDialogS('poplot1')
                }
            getInfo()
            } else {
                alert(res.msg)
            }
        })
    },
    // 领取记录
    queryLotteryRecord(item) {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        if (pageIndex > totalPage) {
            pageIndex = totalPage;
            if (pageIndex != 0) return;
        }
        if (pageIndex < 1) {
            pageIndex = 1;
        }
        if (item == 2) {
            // 暂存箱
            request(`${getTankListsApi}`, 'post', {
                "eventId": eventId,
                "pageSize": 8,
                "pageNum": pageIndex
            }, pageIndex != 1).then(res => {
                if (res.code == 200) {
                    const { temporaryBox, total, totalPages } = res.data
                    if (totalPages == 0) {
                        pageIndex = 0;
                    }
                    $('.now_page').text(pageIndex);
                    $('.total_page').text(totalPages);
                    // 渲染数据
                    let html = ''
                    if (res.data.length == 0) {
                        html += `<tr><td colspan="3" style="text-align: center;">您尚未获取任何礼包</td></tr>`;
                    } else {
                        temporaryBox.forEach(item => {
                            if (item.status == 0) {
                                html += `
                                <tr>
                                    <td>${item.eventItemName}</td>
                                    <td>
                                        <a class="btn-lq" href="javascript:ACT.amsZanQu(${item.id}, '${item.eventItemName}')" style="background-color:red;color:#fff;padding: 4px;">[领取]</a>
                                    </td>
                                    <td>
                                        <a class="btn-split-item" href="javascript:ACT.amsZanFen(${item.id}, '${item.eventItemName}')" style="background-color:red;color:#fff;padding: 4px;">[分解]</a>
                                    </td>
                                </tr>
                                `
                            } else if (item.status == 1) {
                                html += `
                                <tr>
                                    <td>${item.name}</td>
                                    <td>已发送</td>
                                    <td>x</td>
                                </tr>`
                            } else if (item.status == 2) {
                                html += `
                                <tr>
                                    <td>${item.name}</td>
                                    <td>x</td>
                                    <td>已分解</td>
                                </tr>`
                            }
                        })
                    }
                    $("#milo-lotteryRecordContainer" + item).html(html);
                    TGDialogS('showMyGiftContent2')
                }
            })
        } else {
            // 礼包记录
            request(getPackListApi, 'get', { page: pageIndex, limit: 8 }, pageIndex != 1).then(res => {
                if (res.code == 200) {
                    // const { lists, totalPages } = res.data
                    const lists = res.data || []
                    const totalPage = res.data.length;
                    totalPage = totalPages;
                    if (totalPage == 0) {
                        pageIndex = 0;
                    }
                    $('.now_page').text(pageIndex);
                    $('.total_page').text(totalPage);
                    // 渲染内容
                    let html = ''
                    if (totalPages == 0) {
                        html += `<tr><td style="width: 100%;text-align: center;font-size: 16px;" colspan="3">暂未获取更多礼包</td></tr>`;
                    } else {
                        lists.forEach(item => {
                            html += `
                            <tr>
                                <td>${item.create_time}</td>
                                <td>${item.area}</td>
                                <td>${item.name}</td>
                            </tr>
                            `
                        })
                    }
                    $("#milo-lotteryRecordContainer" + item).html(html);
                    TGDialogS('showMyGiftContent1')
                }
            })
        }
    },
    // 积分兑换
    amsExchange(groupId) {
        closeDialog();
        // 检测用户状态
        if (!checkUserStatus()) return false;
        var dhConfig = isParam.dhMap[groupId];
        const [consumableNum, eventItemName] = dhConfig
        // var msg = "您确定消耗【星辰币×" + dhConfig[0] + "】兑换【" + dhConfig[1] + "】到【" + isParam.userInfo.areaName + "】吗？"
        var msg = "您确定消耗【星辰币×" + dhConfig[0] + "】兑换【" + dhConfig[1] + "】吗？"
        confirm('本次兑换操作不可逆，无法撤回，请确认是否操作', function () {
            confirm(msg, function () {
                request(exchangeApi, 'post', { eventId, consumableNum, eventItemName, consumableName: "星辰币" }).then(res => {
                    if (res.code == 200) {
                        getInfo()
                        alert("恭喜您获得了礼包：" + eventItemName + '，请注意：游戏虚拟道貝奖品将会在24小时内到账')
                    } else {
                        alert(res.msg)
                    }
                })
            }, 3)
        })
    },
    // 2327代金券记录
    djqRecord: function () {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        notSupported()
    },
    // 暂存箱领取
    amsZanQu(rid, name) {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        const loginInfo = JSON.parse(sessionStorage.getItem("login"));
        var msg = '您确定领取【' + name + '】到【' + loginInfo.username + '】下的【' + loginInfo.qqGameArea + '】吗？唯一性道具在同一大区内，游戏仓库无法重复到账，请谨慎选择'
        confirm('本次领取操作不可逆，无法撤回，请确认是否操作', function () {
            confirm(msg, function () {
                request(tankHandleApi, 'post', {temporaryBoxId: rid}).then(res => {
                    if (res.code == 200) {
                        getInfo()
                        alert(`恭喜您获得了礼包：${name}，请注意：游戏虚拟道貝奖品将会在24小时内到账`, function () {
                            ACT.queryLotteryRecord(2);
                        });
                    } else {
                        alert(res.msg)
                    }
                })
            }, 3)
        })
    },
    // 暂存箱分解
    amsZanFen(rid, name) {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        const countMap = {
            'Kar98K-星神': 12,
            '幻神-星耀 皮肤': 10,
            '星际战将': 10,
            'Kar98K-星神音效卡': 8,
            '毁灭-星耀 皮肤': 8,
            '屠龙-星耀 皮肤': 6,
            'AK12-天启': 3,
            '炼狱-星空': 2,
            '羊驼玩偶': 1,
        }
        var msg = "您确定分解【" + name + "】 获得 【抽奖钥匙x" + countMap[name] + "】 吗？"
        confirm('本次分解操作不可逆，无法撤回，请确认是否操作', function () {
            confirm(msg, function () {
                request(tankHandleFJApi, 'post',{temporaryBoxId: rid}).then(res => {
                    if (res.code == 200) {
                        getInfo()
                        alert("恭喜您获得了礼包：抽奖钥匙x" + countMap[name], function () {
                            ACT.queryLotteryRecord(2);
                        });
                    } else {
                        alert(res.msg)
                    }
                })
            }, 3)
        })
    },
    // 查询收集进度
    getCollectStatus: function () {
        closeDialog();
        // 检测用户状态
        if (!checkUserStatus()) return false;
        // notSupported()
        alert('已完全收集全部道具')
    },
    // 星耀值回馈
    hasPropGift: function (item) {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        // notSupported()
        const loginInfo = JSON.parse(sessionStorage.getItem("login"));

        var msg = "您确定领取星耀值×5"+ "到 【" + loginInfo.qqGameArea + "】 吗？"
        confirm(msg, function () {
            const params = {
                eventId,
                name: '星耀值',
                quantity: 5
            }
            request(buyKeysApi, 'post', params).then(res => {
                if (res.code == 200) getInfo();
                getInfo()
                alert(res.msg)
            })
        })
    },
    // 年度万能碎片兑换
    wnExchangeGift: function (item) {
        closeDialog();
        // 检测用户状态
        if (!checkUserStatus()) return false;
        // notSupported()

        var _config = isParam.xydMap[item]
        var msg = "您确定消耗"+ _config[0] +"个万能碎片兑换【"+ _config[1] +"】吗？"
        confirm(msg, function () {
            request(exchangeApi, 'post', { eventId, consumableNum: _config[0], eventItemName: _config[1], consumableName: "2025万能碎片" }).then(res => {
                if (res.code == 200) {
                    getInfo()
                    // alert("恭喜您获得了礼包：" + _config[1] + '，请注意：游戏虚拟道貝奖品将会在24小时内到账')
                    alert(res.msg)
                } else {
                    alert(res.msg)
                }
            })
        })
    },
    // 星耀值兑换
    cdExchangeGift: function (item) {
        closeDialog();
        // 检测用户状态
        if (!checkUserStatus()) return false;
        // notSupported()
        
        var _config = isParam.cddhMap[item]
        var msg = "您确定消耗"+ _config[0] +"星耀值兑换【"+ _config[1] +"】吗？"
        // var msg = "您确定消耗"+ _config[0] +"星耀值兑换【"+ _config[1] +"】到 【" + isParam.userInfo.areaName + "】 吗？"

        confirm('本次兑换操作不可逆，无法撤回，请确认是否操作',function(){
            confirm(msg, function () {
                request(exchangeApi, 'post', { eventId, consumableNum: _config[0], eventItemName: _config[1], consumableName: "星耀值" }).then(res => {
                    if (res.code == 200) {
                        getInfo()
                        // alert("恭喜您获得了礼包：" + _config[1] + '，请注意：游戏虚拟道貝奖品将会在24小时内到账')
                        alert(res.msg)
                    } else {
                        alert(res.msg)
                    }
                })
            },3)
        })
    },
    showStarBoxExchange: function () {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        // notSupported()
        $("#popzix .popbtnxe").removeClass('on')
        $('#popzix  .popget1').attr('href', "javascript:alert('请先选取奖励');")
        $('#popzix  .popget5').attr('href', "javascript:alert('请先选取奖励');")
        TGDialogS('popzix')
    },
    // 星耀宝箱自选奖励
    getCdBoxGift: function (item, num) {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        // notSupported()
        const arr = [['星耀值', 3], ['王者之石', 1], ['2025万能碎片', 3]]
        if (item == 2) {
            alert('恭喜您获得了礼包：' + arr[item][0] + '×' + arr[item][1] + '，请注意：游戏虚拟道貝奖品将会在24小时内到账')
        } else {
            const params = {
              eventId: eventId,
              name: arr[item][0],
              quantity: arr[item][1],
            }
            request(buyKeysApi, 'post', params).then(res => {
                if (res.code == 200) getInfo();
                alert(res.msg)
            })
        }
    },
    // 【玩家反馈】领取
    amsSayLq: function () {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        const params = {
            eventId,
            name: '星辰币',
            quantity: 7
        }
        request(buyKeysApi, 'post', params).then(res => {
            if (res.code == 200) getInfo();
            alert(res.msg)
        })
        // request(receiveApi).then(res => {
        //     if (res.code == 200) getInfo();
        //     alert(res.msg)
        // })
    }
};

/**
 * @param item  1-5 【5星选择】
 */
function select_question1(order, item) {
    return false
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
    var diffItem = 11
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
            $('.wj' + order + '_btn').removeClass('on')
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

// 查询剩余积分或者钥匙数量
function queryConsumableQuantity(name, ele) {
  request(getConsumableQuantityApi, 'post', {eventId, name}).then(res => {
    if (res.code == 200) {
      // 抽奖钥匙
      ele.text(res.data)
    }
    // alert(res.msg)
})
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
    // console.log('tenResult====',iPackageIdCnt)
    // console.log('tenResult====',sPackageName)
    // var idArr = iPackageIdCnt.substring(0, iPackageIdCnt.length - 1).split(",");
    var idArr = iPackageIdCnt.split(",");
    var nameArr = sPackageName.split(",");
    var obj = [];

    $.each(idArr, function (k, v) {
        tmp = {
            id: v.split(":")[0],
            name: nameArr[k]
        }

        if (tmp.id != '5831207') {
            num = v.split(":")[1];
            for (var i = 0; i < num; i++) {
                obj.unshift(tmp)
            }
        }
    })
    return obj;
}

function notSupported(msg = '抱歉，模拟器不支持该功能') {
    alert(msg)
}
function getClaim() {
    request(getClaimApi, 'post', {
        "eventId": eventId,
        "itemName": "领取积分"
    }, false).then(res => {
        if (res.code == -1) {
            $(".p2bx7btn2").addClass("gray");
        }
    })
}

// 活动信息
function getInfo() {
    // 检测用户状态
    if (!checkUserStatus()) return false;
    queryConsumableQuantity('钥匙', $('._chou_num'))
    queryConsumableQuantity('星辰币', $('.dhNum'))
    queryConsumableQuantity('星耀宝箱', $('.cdBoxNum'))
    queryConsumableQuantity('星耀值', $('.cdNum'))
    queryConsumableQuantity('2025万能碎片', $('.wnCoinNum'))
    getClaim()
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
// console.log(getInfo())
getInfo()

// 中奖名单
function getAwardLists() {
    request(getAwardListsApi, 'get', null, false).then(res => {
        if (res.code == 200) {
            let html = ''
            res.data.forEach(item => {
                html += `
                <li>
                    <p>
                        <span>恭喜玩家${item.qq}</span>
                        <span>获得了${item.name}</span>
                    </p>
                </li>
                `
            });
            $('#milo-broadcast-container').append(html)
            if (res.data.length > 7) {
                slides('#milo-broadcast-container', 1.2)
            }
        }
    })
}
getAwardLists();

/**
 * 填写体验问卷
 */
function question() {
    // 检测用户状态
    if (!checkUserStatus()) return false;
    request(feedbackApi).then(res => {
        if (res.code == 200) {
            getInfo();
            $('.btnFeedBack').addClass('gray').attr('href', 'javascript:;')
        }
        alert(res.msg)
    })
}

// if (!isMobile()) location.href = `/${ctrlName}/index`;
function getEventIdFromUrl(url) {
    try {
        // 使用 URL 对象解析 URL
        const urlObj = new URL(url);
        // 获取查询参数中的 eventId
        const eventId = urlObj.searchParams.get('eventId');
        return eventId;
    } catch (error) {
        console.error("Invalid URL:", error);
        return null;
    }
}
