const ctrlName = "shine2502";
const getInfoApi = `/y2025.${ctrlName}/getInfo`; // 活动信息
const buyKeysApi = window.isDev
    ? `/api/event/addConsumableRecord`
    : `/event/addConsumableRecord`; // 购买钥匙
const drawLotteryApi = window.isDev
    ? `/api/event/doubleGacha`
    : `/event/doubleGacha`; // 抽奖接口
const getTankListsApi = window.isDev
    ? "/api/event/getTemporaryBoxRecord"
    : `/event/getTemporaryBoxRecord`; // 暂存箱
const tankHandleApi = window.isDev
    ? `/api/event/claimTemporaryBoxItem`
    : `/event/claimTemporaryBoxItem`; // 暂存箱领取操作
const tankHandleFJApi = window.isDev
    ? `/api/event/disassembleTemporaryBoxItem`
    : `/event/disassembleTemporaryBoxItem`; // 暂存箱分解操作
// const getPackListApi = `/y2025.${ctrlName}/getPackList`; // 礼包记录
const getAwardListsApi = `/json/getAwardLists.json`; // 获奖名单
const exchangeApi = window.isDev
    ? `/api/event/redeemEventItem`
    : `/event/redeemEventItem`; // 道具兑换
const feedbackApi = `/y2025.${ctrlName}/feedback`; // 填写体验问卷
const receiveApi = `/y2025.${ctrlName}/receive`; // 领取体验问卷奖励
const getConsumableQuantityApi = window.isDev
    ? `/api/event/getConsumableQuantity`
    : `/event/getConsumableQuantity`; // 查询剩余积分或者钥匙数量
const doubleGachaApi = window.isDev
    ? `/api/event/doubleGacha`
    : `/event/doubleGacha`; // 抽奖(带集卡)
const steamListApi = window.isDev ? `/api/steam/list` : `/steam/list`; // 拼团信息，（消耗xx积分并创建拼团/消耗xx积分加入拼团）接口
const eventId =
    getEventIdFromUrl(window.location.href) || "1894775959430959106";
const getClaimApi = window.isDev ? `/api/reward/claim` : `/reward/claim`; // 设置道具领取状态接口

var pageIndex = 1;
var totalPage = 0;

milo.ready(function () {
    Milo.aParams = {
        amsActId: "702766",
        hsActId: "35125",
        bizCode: "cf",
        urlimg: "https://game.gtimg.cn/images/actdaoju/act/a20250217rysgbs/",
        share: {
            title: "荣耀世冠白鲨",
            desc: "荣耀世冠白鲨",
            link: "https://app.daoju.qq.com/act/a20250217rysgbs/index.html",
            icon: "https://game.gtimg.cn/images/actdaoju/act/a20250217rysgbs/share.jpg",
        },
    };
    //alert = Milo.sAlert;
    //confirm = Milo.sConfirm;
    //修改弹框
    window.alert = function (msg, callback) {
        if (msg == "ok") {
            return;
        }
        $("#alert .msg").html(msg);
        window.alert_call = function () {
            closeDialog();
            $.isFunction(callback) && callback();
        };
        $("#alert .dia-close").attr("href", "javascript: window.alert_call();");
        TGDialogS("alert");
    };
    window.confirm = function (msg, callback) {
        $("#confirm .spMakeSureMsg").html(msg);
        window.confirm_call = function () {
            closeDialog();
            $.isFunction(callback) && callback();
        };
        $("#confirm .btn-recharge3").attr(
            "href",
            "javascript: window.confirm_call();"
        );
        TGDialogS("confirm");
    };

    window.confirm_dt = function (msg, callback, ishow = 5) {
        $("#confirm_dt .spMakeSureMsg").html(msg);
        window.confirm_dt_call = function () {
            closeDialog();
            $.isFunction(callback) && callback();
        };
        $("#confirm_dt .txtdjs").html("倒计时：<span>" + ishow + "</span>");
        $("#confirm_dt .btn-recharge3").addClass("gray");
        $("#confirm_dt .btn-recharge3").attr("href", "javascript: void(0);");
        if (Milo.aParams.interval) {
            clearInterval(Milo.aParams.interval);
        }
        // 每秒更新倒计时
        Milo.aParams.interval = setInterval(() => {
            ishow--;
            $("#confirm_dt .txtdjs").html("倒计时：<span>" + ishow + "</span>");
            // 倒计时结束
            if (ishow === 0) {
                $("#confirm_dt .btn-recharge3").removeClass("gray");
                clearInterval(Milo.aParams.interval);
                $("#confirm_dt .btn-recharge3").attr(
                    "href",
                    "javascript: window.confirm_dt_call();"
                );
            }
        }, 1000);
        TGDialogS("confirm_dt");
    };

    Milo.bindInfo = {};

    $("#input_share").html("xxxx");

    //购买部分放开时间
    // if(milo.getSeverDateTime().getTime() >= new Date("2025/02/28 00:00:00").getTime()){
    $(".p1-bxtn-opentime").hide();
    $(".p1-btnbuy1,.p1-btnbuy2,.p1-btnbuy3").removeClass("gray");
    // }
});

var Hx = {
    FareaName: $("#milo-areaName").text(),
    FroleName: $("#milo-roleName").text(),
    dhMap: {
        3747257: [2550, "幻神-荣耀世冠白鲨2023"],
        3747260: [1700, "柯尔特-荣耀世冠白鲨2023"],
        3747261: [1360, "炽芒蝶刃-荣耀世冠白鲨2023"],
        3747262: [150, "烟雾弹-荣耀世冠白鲨2023"],
        3747263: [600, "雷神-白鲨-CFPLS14冠军"],
        3747265: [480, "BS战队炫彩背包"],
        3747266: [480, "COP-白鲨"],
        3747269: [150, "BS战队击杀图标"],
        3747271: [150, "AWM-天龙-传奇白鲨"],
        3747274: [150, "白鲨战队对讲机"],
        3747276: [10, "交易专用钥匙*1"],
        3747286: [50, "属性变更券*5"],
        3765235: [2550, "M200-幻神-荣耀世冠白鲨"],
        3765236: [1700, "QBZ03-荣耀世冠白鲨"],
        3765237: [880, "麒麟刺-荣耀世冠白鲨"],
    },
    pop1: function () {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        if (isMobile()) {
            notSupported();
        } else {
            $("#pop4 .iframe")
                .html(`<div class="dia water" id="showMyGiftContent" style="left:3%;top:24px;">
        <!--<h3 class="hide">春节特卖会获奖记录</h3>-->
        <table class="table3" id="tb">
            <tr>
                <th style="width:200px">时间</th>
                <th>获取或消耗</th>
                <th>余额</th>
            </tr>
        </table>
        <div class="page4">
            <a href="javascript:;" id="firstpage">上一页</a>
            <p class="page-num"><em id="currpage">1</em>/<em id="allpage">1</em></p>
            <a href="javascript:;" id="nextpage">下一页</a>
        </div>
        <!--<a class="dia-close3" href="javascript:closeDialog();" title="关闭">×</a>-->
    </div>`);
            TGDialogS("pop4");
        }
    },
    // 购买钥匙
    buyKey(sid) {
        const arr = [
            {
                name: "钥匙",
                quantity: 1,
                // price: 1
            },
            {
                name: "钥匙",
                quantity: 11,
                // price: 100
            },
            {
                name: "钥匙",
                quantity: 55,
                // price: 500
            },
            {
                name: "钥匙",
                quantity: 1,
                // price: 10
            },
            {
                name: "钥匙",
                quantity: 10,
                // price: 100
            },
        ];
        // 检测用户状态
        if (!checkUserStatus()) return false;
        // if (sid == 3 || sid == 4) {
        //     return alert('抱歉，不支持使用代金券购买钥匙');
        // }
        let index = sid - 1;
        // if (index == 4) index = 2;
        const params = {
            eventId: eventId,
            ...arr[index],
        };
        request(buyKeysApi, "post", params).then((res) => {
            if (res.code == 200) getInfo();
            alert(res.msg);
        });
    },
    //主奖池抽奖
    lottery: function (num) {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        var jf = $(".jf_6995").html();
        if (jf < num) {
            alert("抱歉，钥匙不足。");
            return;
        }
        request(drawLotteryApi, "post", {
            eventId: eventId,
            pool: "主奖池",
            gachaCount: num,
            "secondaryPool": "卡牌抽取",
            consumableName: "钥匙",
            consumableQuantity: num,
        }).then((res) => {
            if (res.code == 200) {
                const arr = res.data;
                if (arr.length == 1) {
                    $("#jlname").html("");
                    $.each(arr, function (k, v) {
                        $("#jlname").html(
                            `<p style="letter-spacing: 1px">${v.name}${
                                v.quantity >= 1 ? "x" + v.quantity : ""
                            }，${v.nameVo}${v.quantity >= 1 ? "*" + v.quantity : ""}</p>`
                        );
                    });
                    TGDialogS("popdc");
                } else {
                    $("#choulist").html("");
                    $.each(arr, function (k, v) {
                        $("#choulist").append(
                            `<p style="letter-spacing: 1px">${v.name}${
                                v.quantity >= 1 ? "x" + v.quantity : ""
                            }，${v.nameVo}${v.quantity >= 1 ? "*" + v.quantity : ""}</p>`
                        );
                    });
                    TGDialogS("popJl");
                }
                getInfo();
            } else {
                alert(res.msg);
            }
        });
    },
    //抽奖记录
    gift(page) {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        // notSupported()
        if (page == "0") return;
        request(
            getTankListsApi,
            "get",
            {
                eventId: eventId,
                pageSize: 8,
                pageNum: pageIndex,
            },
            page != 1
        ).then((res) => {
            if (res.code == 200) {
                const { lists, totalPages } = res.data;
                // 渲染内容
                let html = "";
                if (totalPages == 0) {
                    html += `<tr><td colspan="3" align="center">暂未获取更多礼包</td></tr>`;
                } else {
                    lists.forEach((item) => {
                        html += `
                            <tr>
                                <td>${item.create_time}</td>
                                <td>${item.area}</td>
                                <td>${item.name}</td>
                            </tr>
                        `;
                    });
                }
                $("#getGiftContent1").html(html);
                var pageTotal = parseInt(totalPages); //总页数
                var pageNow = parseInt(page); //总页数
                pageTotal = pageTotal == 0 ? 1 : pageTotal;
                var pre = pageNow - 1 > 0 ? pageNow - 1 : 0; //上一页
                var next = pageNow + 1 > pageTotal ? 0 : pageNow + 1; //下一页
                $("#showMyGiftContent1 .now_page").html(
                    pageNow + "/" + pageTotal
                );
                $("#showMyGiftContent1 .btn_prev").attr(
                    "href",
                    "javascript:Hx.gift(" + pre + ");"
                );
                $("#showMyGiftContent1 .btn_next").attr(
                    "href",
                    "javascript:Hx.gift(" + next + ");"
                );
                TGDialogS("showMyGiftContent1");
            }
        });
    },
    //暂存箱
    zcx(page) {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        if (pageIndex > totalPage) {
            pageIndex = totalPage;
            if (pageIndex != 0) return;
        }
        if (pageIndex < 1) {
            pageIndex = 1;
        }
        // 暂存箱
        request(
            `${getTankListsApi}`,
            "post",
            {
                eventId: eventId,
                pageSize: 8,
                pageNum: pageIndex,
            },
            pageIndex != 1
        ).then((res) => {
            if (res.code == 200) {
                const { temporaryBox, total, totalPages } = res.data;
                if (totalPage == 0) {
                    pageIndex = 0;
                }
                $(".now_page").text(pageIndex);
                $(".total_page").text(totalPages);
                // 渲染数据
                let html = "";
                if (totalPages == 0) {
                    html += `<tr><td colspan="3" style="text-align: center;">您尚未获取任何礼包</td></tr>`;
                } else {
                    temporaryBox.forEach((item) => {
                        if (item.status == 0) {
                            html += `
                            <tr>
                                <td>${item.eventItemName}</td>
                                <td>
                                    <a href="javascript:Hx.zcxlq('${item.id}', '${item.eventItemName}')" style="background-color:red;color:#fff;">[发送]</a>
                                </td>
                                <td>
                                    <a href="javascript:Hx.zcxfj('${item.id}', '${item.eventItemName}')" style="background-color:red;color:#fff;">[分解]</a>
                                </td>
                            </tr>
                            `;
                        } else if (item.status == 1) {
                            html += `
                            <tr>
                                <td>${item.name}</td>
                                <td>已发送</td>
                                <td>x</td>
                            </tr>`;
                        } else if (item.status == 2) {
                            html += `
                            <tr>
                                <td>${item.name}</td>
                                <td>x</td>
                                <td>已分解</td>
                            </tr>`;
                        }
                    });
                }
                $("#getGiftContent2").html(html);
                var pageTotal = parseInt(totalPages); //总页数
                var pageNow = parseInt(page); //总页数
                pageTotal = pageTotal == 0 ? 1 : pageTotal;
                var pre = pageNow - 1 > 0 ? pageNow - 1 : 0; //上一页
                var next = pageNow + 1 > pageTotal ? 0 : pageNow + 1; //下一页
                $("#showMyGiftContent2 .now_page").html(
                    pageNow + "/" + pageTotal
                );
                $("#showMyGiftContent2 .now_page").attr("now_page", pageNow);
                $("#showMyGiftContent2 .btn_prev").attr(
                    "href",
                    "javascript:Hx.zcx(" + pre + ");"
                );
                $("#showMyGiftContent2 .btn_next").attr(
                    "href",
                    "javascript:Hx.zcx(" + next + ");"
                );
                TGDialogS("showMyGiftContent2");
            }
        });
    },
    //暂存箱领取
    zcxlq(rid, name) {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        const loginInfo = JSON.parse(sessionStorage.getItem("login"));
        confirm("本次领取操作不可逆，无法撤回，请确认是否操作", function () {
            var msg =
                "您确定领取【" +
                name +
                "】到【" +
                loginInfo.qqGameName +
                "】下的【" +
                loginInfo.qqGameArea +
                "】吗？";
            confirm_dt(
                msg,
                function () {
                    request(tankHandleApi, "post", {
                        temporaryBoxId: rid,
                    }).then((res) => {
                        if (res.code == 200) {
                            alert(
                                `恭喜您获得了礼包：${name}，请注意：游戏虚拟道貝奖品将会在24小时内到账`,
                                function () {
                                    var page = $(
                                        "#showMyGiftContent2 .now_page"
                                    ).attr("now_page");
                                    Hx.zcx(page);
                                }
                            );
                        } else {
                            alert(res.msg);
                        }
                    });
                },
                3
            );
        });
    },
    //暂存箱分解
    zcxfj(rid, name) {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        const countMap = {
            "幻神-荣耀世冠白鲨2023": 15,
            "柯尔特-荣耀世冠白鲨2023": 10,
            "炽芒蝶刃-荣耀世冠白鲨2023": 8,
            "雷神-白鲨-CFPLS14冠军": 4,
            BS战队炫彩背包: 3,
            "COP-白鲨": 3,
            "烟雾弹-荣耀世冠白鲨2023": 1,
            BS战队击杀图标: 1,
            "AWM-天龙-传奇白鲨": 1,
            白鲨战队对讲机: 1,
        };
        confirm("本次分解操作不可逆，无法撤回，请确认是否操作", function () {
            var msg =
                "您确定分解【" +
                name +
                "】 获得 【抽奖钥匙x" +
                countMap[name] +
                "】 吗？";
            confirm_dt(
                msg,
                function () {
                    request(tankHandleFJApi, "post", {
                        temporaryBoxId: rid,
                    }).then((res) => {
                        if (res.code == 200) {
                            getInfo();
                            alert(
                                "恭喜获得钥匙×" + countMap[name],
                                function () {
                                    var page = $(
                                        "#showMyGiftContent2 .now_page"
                                    ).attr("now_page");
                                    Hx.zcx(page);
                                }
                            );
                        } else {
                            alert(res.msg);
                        }
                    });
                },
                3
            );
        });
    },
    //积分兑换
    dhlq(item) {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        var jf = $(".jf_6996").html();
        if (jf < Hx.dhMap[item][0]) {
            alert("抱歉，积分不足。");
            return;
        }
        const [count, name] = Hx.dhMap[item];
        const loginInfo = JSON.parse(sessionStorage.getItem("login"));
        confirm("本次兑换操作不可逆，无法撤回，请确认是否操作", function () {
            var msg =
                "您确定使用【" +
                Hx.dhMap[item][0] +
                "】积分兑换【" +
                Hx.dhMap[item][1] +
                "】到【" +
                loginInfo.qqGameName +
                "】下的【" +
                loginInfo.qqGameArea +
                "】吗？";
            confirm_dt(
                msg,
                function () {
                    request(exchangeApi, "post", {
                        eventId: eventId,
                        consumableNum: count,
                        eventItemName: name,
                        consumableName: "积分",
                    }).then((res) => {
                        if (res.code == 200) {
                            getInfo();
                            alert("兑换成功<br>恭喜获得" + name);
                        } else {
                            alert(res.msg);
                        }
                    });
                },
                3
            );
        });
    },
    //合成套卡
    hecard: function (num) {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        // notSupported()
        var jf = $(".jf_6995").html();
    },
    //套卡兑换
    dhcard: function (item) {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        notSupported();
    },
    /**************************************************************组团部分*************************************************************************************************** */
    team_jfnum: 20, //建团/加团消耗积分数
    //查询团队信息
    teaminit: function (data) {
        if (data.length == 0) {
            $("#teamlist").html("");
        } else {
            var _html = "";
            $.each(data, function (k, v) {
                _html +=
                    "<li>\n" +
                    "         <p>" +
                    v.qq +
                    "</p>\n" +
                    "         <p>" +
                    decodeURIComponent(v.nickname) +
                    "</p>\n" +
                    "         <p>" +
                    v.reward +
                    "</p>\n" +
                    "     </li>";
            });
            $("#teamlist").html(_html);
        }
        getInfo();
    },
    //复制功能
    copy_team: function () {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        if ($("#my_teamid").val() != "") {
            var my_teamid = document.getElementById("my_teamid");
            my_teamid.select();
            if (document.execCommand("copy")) {
                alert("已复制好，可贴粘");
            } else {
                alert("请手动复制到剪贴板");
            }
        } else {
            alert("您还没有团队ID");
        }
    },
    //创建团队
    teamcreate: function (cb = null) {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        var jf = $(".jf_6996").html();
        if (jf < Hx.team_jfnum) {
            alert("抱歉，积分不足。");
            return;
        }
        // notSupported()
        request(steamListApi, "post", {
            eventId: eventId,
            point: 20,
        }).then((res) => {
            if (res.code == 200) {
                const { steamNackCdk, extraReward, steamPtList } = res.data;
                if (extraReward) {
                    alert("恭喜您获得了礼包：" + extraReward);
                    $(".myGiftName").html(`${extraReward}`);
                    getClaim(`${extraReward}${steamNackCdk}`, () => {
                        $(".lqgiftbtn").addClass("gray");
                        $(".lqgiftbtn").html("已领取");
                    });
                }
                cb && cb()
                Hx.teaminit(steamPtList);
            }
        });
    },
    //加入团队
    teamjoin: function (teamid) {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        let st = $(".join_teamid").val();
        if (st == "") {
            alert("请输入团队ID");
            return;
        } else {
            confirm(`确认消耗20积分加入【${st}】，请确认？`, function () {
                Hx.teamcreate(() => {
                    alert("加入成功");
                });
            });
        }
    },
    //成为推荐团
    teamtj: function () {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        notSupported();
    },
    //拼团记录
    teamgift: function (page) {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        notSupported();
    },
    //拼团奖励领取
    teamlq: function () {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        // notSupported();
        alert("领取成功");
    },
    //拼团的2个礼盒自动开奖
    autodj: function (id) {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        notSupported();
    },

    // 获取加团推荐
    changeJTList: function () {
        let str1 = Hx.generateRandomString();
        let str2 = Hx.generateRandomString();
        $(".support_list").html(`
            <li>
                      <p>${str1}</p>
                      <a class="btn_jt p1-btnjt" href="javascript:Hx.teamjt('${str1}');" >加团</a>
                  </li><li>
                      <p>${str2}</p>
                      <a class="btn_jt p1-btnjt" href="javascript:Hx.teamjt('${str2}');" >加团</a>
                  </li>
            `);
    },
    teamjt: function (str) {
        // 检测用户状态
        if (!checkUserStatus()) return false;

        var jf = $(".jf_6996").html();
        if (jf < Hx.team_jfnum) {
            alert("抱歉，积分不足。");
            return;
        } else {
            confirm(`确认消耗20积分加入【${str}】，请确认？`, function () {
                Hx.teamcreate();
            });
        }
    },
    // 生成随机字符串，默认长度24，默认不包含特殊字符
    generateRandomString: function (length = 24, includeSpecial = false) {
        let chars =
            "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
        if (includeSpecial) chars += "!@#$%^&*()_+-=[]{}|;:,.<>?";

        return Array.from(
            { length },
            () => chars[Math.floor(Math.random() * chars.length)]
        ).join("");
    },
    //查询推荐团
    teamresh: function () {
        // 检测用户状态
        if (!checkUserStatus()) return false;
        // notSupported()
        Hx.changeJTList();
    },
};

function getClaim(itemName, cb) {
    request(
        getClaimApi,
        "post",
        {
            eventId: eventId,
            itemName: itemName,
        },
        false
    ).then((res) => {
        cb();
    });
}
// +----------------------------------------------------------------------
// | CF 抽奖活动模拟器: 713634572【QQ群】
// +----------------------------------------------------------------------

function notSupported(msg = "抱歉，模拟器不支持该功能") {
    alert(msg);
}

// 查询剩余积分或者钥匙数量
function queryConsumableQuantity(name, ele) {
    request(getConsumableQuantityApi, "post", { eventId, name }).then((res) => {
        if (res.code == 200) {
            // 抽奖钥匙
            ele.text(res.data);
        }
        // alert(res.msg)
    });
}
// 活动信息
function getInfo(first = false) {
    // 检测用户状态
    if (!checkUserStatus()) return false;
    queryConsumableQuantity("钥匙", $(".jf_6995"));
    queryConsumableQuantity("积分", $(".jf_6996"));
    queryConsumableQuantity("通用代金券", $(".jf_2327"));
    // request(getInfoApi, 'get', {}, false).then(res => {
    //     if (res.code == 200) {
    //         const data = res.data
    //         // 我的积分
    //         $('.jf_6996').text(data.points)
    //         // 抽奖钥匙
    //         $('.jf_6995').text(data.keys_num)
    //         // 卡牌数量
    //         $('.jf_6998').text(data.card1)
    //         $('.jf_7000').text(data.card2)
    //         $('.jf_7001').text(data.card3)
    //         $('.jf_7002').text(data.card4)
    //         $('.jf_7003').text(data.card5)
    //         if (first) {
    //             getDhInfo()
    //         }
    //     }
    // })
}
getInfo();
Hx.teamresh()

// 获取已兑换的道具信息
function getDhInfo() {
    request(getDhInfoApi, "get", {}, false).then((res) => {
        if (res.code == 200) {
            res.data.forEach((item) => {
                $("#item_" + item)
                    .addClass("gray")
                    .text("已兑换");
            });
        }
    });
}

// 中奖名单
function getAwardLists() {
    request(getAwardListsApi, "get", {}, false).then((res) => {
        if (res.code == 200) {
            let html = "";
            res.data.forEach((item) => {
                html += `
                <li>
                    <div>恭喜玩家<span>${item.qq}</span>获得了<span> ${item.name} </span></div>
                </li>
                `;
            });
            $("#milo-broadcast-container").html(html);
            if (res.data.length > 7) {
                slides("#milo-broadcast-container", 1.5);
            }
        }
    });
}
getAwardLists();

// if (!isMobile()) location.href = `/${ctrlName}/index`;
function getEventIdFromUrl(url) {
    try {
        // 使用 URL 对象解析 URL
        const urlObj = new URL(url);
        // 获取查询参数中的 eventId
        const eventId = urlObj.searchParams.get("eventId");
        return eventId;
    } catch (error) {
        console.error("Invalid URL:", error);
        return null;
    }
}
