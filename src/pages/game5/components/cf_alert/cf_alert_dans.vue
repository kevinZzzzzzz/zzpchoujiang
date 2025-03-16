<style scoped>
.bk {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 20;
}

.shoujiangbeijing {
    width: 693px;
    height: 307px;
    background: url(@/assets/game5Img/alert.png);
    background-size: 100% 100%;
    position: relative;
    box-sizing: border-box;
    padding-top: 14px;

}

.shoujiangbeijing p {
    font-size: 20px;
    color: #705440;
    line-height: 30px;
    width: 100%;
    margin: 54px auto 40PX;
    text-align: center;
    font-size: 20px;
    text-align: center;
    line-height: 1.4;
}

.close {
    list-style: none;
    background: url(@/assets/game5Img/sp3.png) no-repeat;
    background-position: -1667px -35px;
    width: 37px;
    height: 37px;
    position: absolute;
    right: 18px;
    top: 20px;
    cursor: pointer;
}

.btn {
    width: 592px;
    height: 66px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 32px;
    position: absolute;
    left: 60px;
    top: 160px;
}

.btn span {
    display: block;
    width: 248px;
    height: 78px;
    margin: 0px 12px;
    cursor: pointer;
    background: url(@/assets/game5Img/sp3.png) no-repeat;
    font-size: 28px;
    text-align: center;
    line-height: 88px;
}

.btn span:nth-child(1) {
    background-position: -695px -1097px !important;
    color: white;

}

.btn span:nth-child(2) {
    background-position: -977px -1098px;
    color: #000f83;
}

.daojishi {
    color: #FFFFFF;
    font-size: 18px;
    position: absolute;
    width: 100%;
    line-height: 1;
    top: 152px;
    list-style: none;
    display: inline-block;
    left: 300px;
    font-size: 18px;
    color: black;
}

.poptit {
    font-size: 32px;
    text-align: center;
    line-height: 56px;
    height: 56px;
    display: block;
    font-family: "rui";
    font-weight: 100;
    background-image: linear-gradient(to bottom, #fcd18a, #fce3c0, #feebd5);
    color: transparent;
    -webkit-background-clip: text;
    width: 100%;
    position: absolute;
    top: 25px;
    text-align: center;
    margin: 0;
}

.gray {
    filter: grayscale(100%) !important;
}

.yellow {}
</style>
<template>
    <div class="bk" v-if="cf_alert_dans_active">
        <div class="shoujiangbeijing">
            <!-- <h3 class="poptit">提醒</h3> -->
            <li class="close" @click="close()"></li>
            <p v-if="cao_zuo_acitve == '领取'" style="width: 639px;line-height: 24px;">
                确定{{ cao_zuo_acitve }}&nbsp;{{ jiang_li }}
                &nbsp;到【{{ counterStore1.address }}】吗？【唯一性道具在同一大区内，游戏仓库无法重复到账，请谨慎选择】<span
                    style="color: #0a0aed;">切换大区</span></p>
            <p v-if="cao_zuo_acitve == '分解'" style="width: 639px;line-height: 24px;">
                您确定{{ cao_zuo_acitve }}&nbsp;{{ jiang_li }}&nbsp;获得&nbsp;{{ yaoshi_num }}&nbsp;钥匙吗？<span
                    style="color: #0a0aed;">切换大区</span></p>
            <p v-if="cao_zuo_acitve == '消耗'" style="width: 639px;line-height: 24px;">确定使用【{{ nums }}】兑换 {{ jiang_li }}
                吗？当前大区【{{ counterStore1.address }}】【唯一性道具或角色在同一大区内，游戏仓库无法重复到账，请谨慎选择】 <span
                    style="color: #0a0aed;">切换大区</span></p>
            <p v-if="cao_zuo_acitve == '自选'" style="width: 639px;line-height: 24px;">您确定领取 {{ zi_xuan_ling_qu_de_ci_shu }}
                次【{{ jiang_li }}】到【{{ counterStore1.names }}】吗？<span style="color: #0a0aed;">切换大区</span></p>
            <p v-if="cao_zuo_acitve == '竟界值兑换'" style="width: 639px;line-height: 24px;">
                您确定消耗【{{ nums }}】兑换{{ jiang_li }}到【{{ counterStore1.address }}】吗？<span style="color: #0a0aed;"><br>切换大区</span>
            </p>
            <p v-if="cao_zuo_acitve == '万能碎片兑换'" style="width: 639px;line-height: 24px;">
                您确定消耗【{{ nums }}】兑换{{ jiang_li }}到【{{ counterStore1.address }}】吗？<span style="color: #0a0aed;"><br>切换大区</span>
            </p>
            <p v-if="cao_zuo_acitve == '传说幽瞳'" style="width: 639px;line-height: 24px;">
                确定使用【{{ counterStore.ka1text }}+{{ counterStore.ka2text }}】兑换【{{ jiang_li }}】吗？当前大区{{ counterStore1.address
                }}<span style="color: #0a0aed;"> 切换大区</span></p>
            <p v-if="cao_zuo_acitve == '传说-兑换'" style="width: 639px;line-height: 24px;">
                您确定使用【{{ nums }}】兑换【{{ jiang_li }}】到【{{ counterStore1.address }}】下的【{{ counterStore1.names }}】吗？唯一性道具在同一大区内，游戏仓库无法重复到账，请谨慎选择<span
                    style="color: #0a0aed;"><br>切换大区</span></p>
            <p v-if="cao_zuo_acitve == '金蛇卡-兑换'" style="width: 639px;line-height: 24px;">
                您确定消耗{{ counterStore.cart_xiaohao }}张"{{ nums }}"兑换{{ counterStore.cart_duihuan }}张"{{ jiang_li }}"吗？</p>
            <li v-if="!counterStore.dao_ji_shi_close" class="daojishi">倒计时：{{ dao_ji_shi }}</li>
            <div class="btn">
                <span :class="activessss" @click="enter()">确认</span>
                <span @click="quxiao()">取消</span>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { useCounterStore, useCounterStore1 } from "@/store/counter"; // 确保路径正确
import { onUnmounted, onMounted } from 'vue';
import Jingjiezhiduihuan from '../jingjiezhiduihuan/jingjiezhiduihuan.vue';

const counterStore = useCounterStore();
const counterStore1 = useCounterStore1();
//倒计时
let activessss = ref('gray');
let dao_ji_shi = ref(3);
const timer = ref(null); // 添加定时器引用
onMounted(() => {
    dao_ji_shi.value = 3;
})
function daojishi() {
    // 先清除旧定时器
    if (timer.value) clearTimeout(timer.value);
    timer.value = setTimeout(() => {
        dao_ji_shi.value--;
        if (dao_ji_shi.value > 0) {
            daojishi(); // 递归调用
        }
        if (dao_ji_shi.value == 0) {
            activessss.value = 'yellow';
        }
    }, 1000);
}

setInterval(() => {
    if (dao_ji_shi.value < 0) {
        dao_ji_shi.value = 0;
    }
}, 0)
onUnmounted(() => {
    dao_ji_shi.value = 3;
    activessss.value = 'gray'
    if (timer.value) clearTimeout(timer.value);
})
//倒计时结束
let cf_alert_dans_active = ref(false);

watch(() => counterStore.cf_alert_dans_active, (newVal) => {
    cf_alert_dans_active.value = newVal;
    dao_ji_shi.value = 3;
    activessss.value = 'gray'
    daojishi(); // 初始化倒计时
});
//操作文字
let cao_zuo_acitve = ref("");
watch(() => counterStore.cao_zuo_active, (newVal) => {
    cao_zuo_acitve.value = newVal;
    console.log("新值" + newVal);
    if (newVal == '金蛇卡-兑换') {
        activessss.value = 'yellow'
        dao_ji_shi.value = 0;
        newVal = null;

    }
});
watch(() => counterStore.dao_ji_shi_close, (newVal) => {
    console.log("新值" + newVal);
    if (newVal == true) {
        activessss.value = 'yellow'
        dao_ji_shi.value = 0;
        newVal = null;

    }
});
//操作文字结束
//奖励文字
let jiang_li = ref("");
watch(() => counterStore.jiang_li, (newVal) => {
    jiang_li.value = newVal;
});
//奖励文字结束
//大区文字
let da_qu = counterStore.address;
let name = counterStore.names;
//大区文字结束
//消耗的物品
let nums = ref('');
watch(() => counterStore.xiao_hao_wu, (newVal) => {
    nums.value = newVal;
});
//消耗的物品结束

function enter() {
    if (dao_ji_shi.value == 0) {
        //如果是领取
        if (counterStore.ling_qu_active) {
            lingqu();
        }
        if (counterStore.fen_jie_active) {
            fenjie();
        }
        if (counterStore.dui_huan_active) {
            duihuanjifen();
        }
        if (counterStore.zi_xuan_active) {
            zixuan();
        }
        if (counterStore.jing_jie_dui_huan_active) {
            jingjiezhiduihuan();
        }
        if (counterStore.wan_neng_dui_huan) {
            wannengduihuan();
        }
        if (counterStore.chuan_shuo_dao_ju_dui_huan) {
            chuan_shuo_dao_ju_dui_huanss();
        }
        if (counterStore.jin_she_ka_dui_huan) {

            jin_she_ka_dui_huan();
        }
        if (counterStore.chuan_shuo_you_tong_dui_huan) {
            you_tong_dui_huan();
        }
        //确认后弹窗消失
        counterStore.cf_alert_dans_active = false;
        counterStore.ling_qu_active = false;
        counterStore.fen_jie_active = false;
        counterStore.dui_huan_active = false;
        counterStore.wan_neng_dui_huan = false;
        counterStore.jing_jie_dui_huan_active = false;
        counterStore.wan_neng_dui_huan = false;
        counterStore.cf_alert_dans_active = false;
        counterStore.chuan_shuo_dao_ju_dui_huan = false;
        counterStore.chuan_shuo_dui_huan_type = '';
        counterStore.cao_zuo_active = '';
        cao_zuo_acitve.value = '';
        counterStore.jiang_li = '';
        jiang_li.value = '';
        counterStore.xiao_hao_wu = '';
        nums.value = '';
        counterStore.dao_ji_shi_close = false;
        counterStore.cf_alert_dans_active = false;
        counterStore.jin_she_ka_dui_huan = false;
        counterStore.jin_she_ka_dui_huan_type = '';
        counterStore.cart_xiaohao = 0;
        counterStore.cart_duihuan = 0;
        counterStore.cao_zuo_active = '';
        counterStore.xiao_hao_wu = '';
        counterStore.jiang_li = '';
        counterStore.chuan_shuo_you_tong_dui_huan = false;
        counterStore.ka1text = '';
        counterStore.ka2text = '';
        counterStore.ka1num = 0;
        counterStore.ka2num = 0;
        counterStore.chuan_shuo_dao_ju_dui_huan = false;
        counterStore.xiao_hao_ji_fen_zhi = 0;
        counterStore.cf_alert_active = false;
        counterStore.cao_zuo_active = '';
        counterStore.xiao_hao_wu = "";
        counterStore.chuan_shuo_dui_huan_type = ''
        counterStore.jiang_li = '';
        if (timer.value) clearTimeout(timer.value);
    }
}

function quxiao() {
    counterStore.zi_xuan_active = false;
    counterStore.ling_qu_active = false;
    counterStore.fen_jie_active = false;
    counterStore.dui_huan_active = false;
    counterStore.wan_neng_dui_huan = false;
    counterStore.jing_jie_dui_huan_active = false;
    counterStore.wan_neng_dui_huan = false;
    counterStore.cf_alert_dans_active = false;
    counterStore.chuan_shuo_dao_ju_dui_huan = false;
    counterStore.chuan_shuo_dui_huan_type = '';
    counterStore.cao_zuo_active = '';
    cao_zuo_acitve.value = '';
    counterStore.jiang_li = '';
    jiang_li.value = '';
    counterStore.xiao_hao_wu = '';
    nums.value = '';
    counterStore.dao_ji_shi_close = false;
    counterStore.cf_alert_dans_active = false;
    counterStore.jin_she_ka_dui_huan = false;
    counterStore.jin_she_ka_dui_huan_type = '';
    counterStore.cart_xiaohao = 0;
    counterStore.cart_duihuan = 0;
    counterStore.cao_zuo_active = '';
    counterStore.xiao_hao_wu = '';
    counterStore.jiang_li = '';
    counterStore.chuan_shuo_dao_ju_dui_huan = false;
    counterStore.xiao_hao_ji_fen_zhi = 0;
    counterStore.cf_alert_active = false;
    counterStore.cao_zuo_active = '';
    counterStore.xiao_hao_wu = "";
    counterStore.chuan_shuo_dui_huan_type = ''
    counterStore.jiang_li = '';
    counterStore.chuan_shuo_you_tong_dui_huan = false;
    if (timer.value) clearTimeout(timer.value);
}
function close() {
    counterStore.ling_qu_active = false;
    counterStore.fen_jie_active = false;
    counterStore.dui_huan_active = false;
    counterStore.wan_neng_dui_huan = false;
    counterStore.jing_jie_dui_huan_active = false;
    counterStore.wan_neng_dui_huan = false;
    counterStore.cf_alert_dans_active = false;
    counterStore.chuan_shuo_dao_ju_dui_huan = false;
    counterStore.chuan_shuo_dui_huan_type = '';
    counterStore.cao_zuo_active = '';
    cao_zuo_acitve.value = '';
    counterStore.jiang_li = '';
    jiang_li.value = '';
    counterStore.xiao_hao_wu = '';
    nums.value = '';
    counterStore.dao_ji_shi_close = false;
    counterStore.cf_alert_dans_active = false;
    counterStore.jin_she_ka_dui_huan = false;
    counterStore.jin_she_ka_dui_huan_type = '';
    counterStore.cart_xiaohao = 0;
    counterStore.cart_duihuan = 0;
    counterStore.cao_zuo_active = '';
    counterStore.xiao_hao_wu = '';
    counterStore.jiang_li = '';
    counterStore.chuan_shuo_dao_ju_dui_huan = false;
    counterStore.xiao_hao_ji_fen_zhi = 0;
    counterStore.cf_alert_active = false;
    counterStore.cao_zuo_active = '';
    counterStore.xiao_hao_wu = "";
    counterStore.chuan_shuo_dui_huan_type = ''
    counterStore.jiang_li = '';
    counterStore.chuan_shuo_you_tong_dui_huan = false;
    counterStore.zi_xuan_active = false;
    if (timer.value) clearTimeout(timer.value);
}

function lingqu() {
    counterStore.zan_cun_xiang_active = true;
    counterStore.cao_zuo_acitve = '';
    counterStore.ling_qu_active = false;
    counterStore.systems = true;
    counterStore.systems_message = "恭喜您获得了礼包：" + item.text + ",请注意：游戏虚拟道具奖品将会在24小时内到账"
    counterStore.zan_cun_xiang[item_index.value].bao_cun_to_cang_ku = '[已领取]';
    counterStore.zan_cun_xiang[item_index.value].fen_jie = 'x';
}
let yaoshi_num = ref(0);
let item = counterStore.item;
watch(() => counterStore.item, (newVal) => {
    item = newVal;
    if (item.text == "传说辉光 无序列号版") {
        yaoshi_num.value = 40;
    }
    if (item.text == "传说夜影 无序列号版") {
        yaoshi_num.value = 40;

    }
    if (item.text == "王者星光") {
        yaoshi_num.value = 12;

    }
    if (item.text == "关小雨") {
        yaoshi_num.value = 10;

    }
    if (item.text == "QBZ03-金色蔷薇音效卡") {
        yaoshi_num.value = 8;
    }
    if (item.text == "裁决-流光秘银皮肤") {
        yaoshi_num.value = 5;

    }
    if (item.text == "Cop-旗袍") {
        yaoshi_num.value = 5;

    }
    if (item.text == "AWM-裁决") {
        yaoshi_num.value = 3;

    }
    if (item.text == "屠龙") {
        yaoshi_num.value = 2;

    }
    if (item.text == "天使灵狐玩偶") {
        yaoshi_num.value = 1;
    }
});

let item_index = ref(0);
watch(() => counterStore.item_index, (newVal) => {
    item_index.value = newVal;
});
let page_num = ref(0);
watch(() => counterStore.page_num, (newVal) => {
    page_num.value = newVal;
    console.log("接收到了新页数是" + newVal);
});
function fenjie() {
    // item_index.value = item_index.value+(page_num.value*10);
    item_index.value = item_index.value + (page_num.value * 8);
    console.log("接收到了新数值是" + item_index.value);
    // counterStore.zan_cun_xiang_active = true;
    counterStore.systems_after_zan_cun_xiang_active = true;
    counterStore.cao_zuo_acitve = '';
    counterStore.fen_jie_active = false;
    if (item.text == "传说辉光 无序列号版") {
        yaoshi_num.value = 40;
    }
    if (item.text == "传说夜影 无序列号版") {
        yaoshi_num.value = 40;

    }
    if (item.text == "王者星光") {
        yaoshi_num.value = 12;

    }
    if (item.text == "关小雨") {
        yaoshi_num.value = 10;

    }
    if (item.text == "QBZ03-金色蔷薇音效卡") {
        yaoshi_num.value = 8;
    }
    if (item.text == "裁决-流光秘银皮肤") {
        yaoshi_num.value = 5;

    }
    if (item.text == "Cop-旗袍") {
        yaoshi_num.value = 5;

    }
    if (item.text == "AWM-裁决") {
        yaoshi_num.value = 3;

    }
    if (item.text == "屠龙") {
        yaoshi_num.value = 2;

    }
    if (item.text == "天使灵狐玩偶") {
        yaoshi_num.value = 1;
    }
    counterStore.zan_cun_xiang[item_index.value].bao_cun_to_cang_ku = 'x';
    counterStore.zan_cun_xiang[item_index.value].fen_jie = '[已分解]';
    counterStore.chou_jiang_key += yaoshi_num.value;
    counterStore.jia_zai_active = true;
    setTimeout(() => {
        counterStore.jia_zai_active = false;
        counterStore.systems = true;
        counterStore.systems_message = "恭喜您获得了礼包：钥匙" + yaoshi_num.value + "个";
    }, 600);

}
let jifenshuliang = ref(0);
watch(() => counterStore.xiao_hao_ji_fen_zhi, (newVal) => {
    jifenshuliang.value = newVal;
});
function duihuanjifen() {
    console.log("执行兑换操作");
    if (counterStore.ji_fen < jifenshuliang.value) {
        counterStore.systems = true;
        counterStore.systems_message = "抱歉，您的传说币不足";
    } else {
        if (jifenshuliang.value == 5688 && jiang_li.value == "传说辉光 无序列号版") {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value + ",请注意：游戏虚拟道具奖品将会在24小时内到账"
            counterStore.ji_fen -= jifenshuliang.value;
        }
        if (jifenshuliang.value == 5688 && jiang_li.value == "传说夜影 无序列号版") {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value + ",请注意：游戏虚拟道具奖品将会在24小时内到账"
            counterStore.ji_fen -= jifenshuliang.value;
        }
        if (jifenshuliang.value == 1988 && jiang_li.value == "王者破空枪刃") {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value + ",请注意：游戏虚拟道具奖品将会在24小时内到账"
            counterStore.ji_fen -= jifenshuliang.value;
        }
        if (jifenshuliang.value == 1288 && jiang_li.value == "王者星光") {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value + ",请注意：游戏虚拟道具奖品将会在24小时内到账"
            counterStore.ji_fen -= jifenshuliang.value;
        }
        if (jifenshuliang.value == 988 && jiang_li.value == "关小雨") {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value + ",请注意：游戏虚拟道具奖品将会在24小时内到账"
            counterStore.ji_fen -= jifenshuliang.value;
        }
        if (jifenshuliang.value == 788 && jiang_li.value == "QBZ03-金色蔷薇音效卡") {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value + ",请注意：游戏虚拟道具奖品将会在24小时内到账"
            counterStore.ji_fen -= jifenshuliang.value;
        }
        if (jifenshuliang.value == 488 && jiang_li.value == "裁决-流光秘银皮肤") {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value + ",请注意：游戏虚拟道具奖品将会在24小时内到账"
            counterStore.ji_fen -= jifenshuliang.value;
        }
        if (jifenshuliang.value == 488 && jiang_li.value == "COP-旗袍") {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value + ",请注意：游戏虚拟道具奖品将会在24小时内到账"
            counterStore.ji_fen -= jifenshuliang.value;
        }
        if (jifenshuliang.value == 268 && jiang_li.value == "AWM-裁决") {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value + ",请注意：游戏虚拟道具奖品将会在24小时内到账"
            counterStore.ji_fen -= jifenshuliang.value;
        }
        if (jifenshuliang.value == 178 && jiang_li.value == "屠龙") {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value + ",请注意：游戏虚拟道具奖品将会在24小时内到账"
            counterStore.ji_fen -= jifenshuliang.value;
        }
        if (jifenshuliang.value == 128 && jiang_li.value == "天使灵狐玩偶") {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value + ",请注意：游戏虚拟道具奖品将会在24小时内到账"
            counterStore.ji_fen -= jifenshuliang.value;
        }
        if (jifenshuliang.value == 25 && jiang_li.value == "交易专用钥匙×5") {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value + ",请注意：游戏虚拟道具奖品将会在24小时内到账"
            counterStore.ji_fen -= jifenshuliang.value;
        }
        if (jifenshuliang.value == 25 && jiang_li.value == "属性变更券×5") {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value + ",请注意：游戏虚拟道具奖品将会在24小时内到账"
            counterStore.ji_fen -= jifenshuliang.value;
        }
        if (jifenshuliang.value == 5 && jiang_li.value == "交易专用钥匙×1") {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value + ",请注意：游戏虚拟道具奖品将会在24小时内到账"
            counterStore.ji_fen -= jifenshuliang.value;
        }
        if (jifenshuliang.value == 5 && jiang_li.value == "属性变更券×1") {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value + ",请注意：游戏虚拟道具奖品将会在24小时内到账"
            counterStore.ji_fen -= jifenshuliang.value;
        }
    }
    counterStore.dui_huan_active = false;
}
let zixuandeliwu = ref(0);
watch(() => counterStore.zixuan_liwu, (newVal) => {
    zixuandeliwu.value = newVal;
});
let zi_xuan_ling_qu_de_ci_shu = ref(0);
watch(() => counterStore.xuan_zhong_zhi_xing_ci_shu, (newVal) => {
    zi_xuan_ling_qu_de_ci_shu.value = newVal;
});
function zixuan() {
    console.log(zi_xuan_ling_qu_de_ci_shu.value);
    if (counterStore.jing_jie_bao_xiang >= zi_xuan_ling_qu_de_ci_shu.value) {
        counterStore.jing_jie_bao_xiang -= zi_xuan_ling_qu_de_ci_shu.value;
        if (zixuandeliwu.value == 1) {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：【传说辉光随机序列号抽取券幸运签×1】" + zi_xuan_ling_qu_de_ci_shu.value + "个";
        }
        if (zixuandeliwu.value == 2) {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：【传说夜影随机序列号抽取券幸运签×1 】 " + zi_xuan_ling_qu_de_ci_shu.value + "个";
        }
        if (zixuandeliwu.value == 3) {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：【王者之石×10】  " + zi_xuan_ling_qu_de_ci_shu.value + "个,请注意：游戏虚拟道具奖品将会在24小时内到账";
        }
        counterStore.zi_xuan_active = false;
    } else {
        console.log('zi_xuan_ling_qu_de_ci_shu.value');
        counterStore.systems = true;
        counterStore.systems_message = "抱歉，您的宝箱数不足";
        counterStore.zi_xuan_active = false;
    }

}
let jingjiezhixiaohao = ref(0);
watch(() => counterStore.xiao_hao_jing_jie_zhi, (newVal) => {
    jingjiezhixiaohao.value = newVal;
});
function jingjiezhiduihuan() {
    if (counterStore.jing_jie_zhi >= jingjiezhixiaohao.value) {
        counterStore.jing_jie_zhi -= jingjiezhixiaohao.value;
        if (jingjiezhixiaohao.value == 108 && jiang_li.value == "星际战将") {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：'星际战将',请注意：游戏虚拟道具奖品将会在24小时内到账";
        }
        if (jingjiezhixiaohao.value == 108 && jiang_li.value == "幻神-星耀 皮肤") {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：幻神-星耀 皮肤,请注意：游戏虚拟道具奖品将会在24小时内到账";
        }
        if (jingjiezhixiaohao.value == 88) {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：毁灭-星耀 皮肤,请注意：游戏虚拟道具奖品将会在24小时内到账";
        }
        if (jingjiezhixiaohao.value == 68) {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：屠龙-星耀 皮肤,请注意：游戏虚拟道具奖品将会在24小时内到账";
        }
        if (jingjiezhixiaohao.value == 48) {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：道聚城通用代金券x50";
        }
    } else {
        counterStore.systems = true;
        counterStore.systems_message = "抱歉，您的星耀值不足！";
        counterStore.jing_jie_dui_huan_active = false;
    }
}
let wan_neng_xiao_hao = 10;
let wan_neng_lei_xing = ref(0);
watch(() => counterStore.wan_neng_lei_xing, (newVal) => {
    wan_neng_lei_xing.value = newVal;
});
function wannengduihuan() {
    if (counterStore.wan_neng_sui_pian >= 10) {
        counterStore.wan_neng_sui_pian -= 10;
        console.log('-10');
        console.log(wan_neng_lei_xing.value);
        if (wan_neng_lei_xing.value == 1) {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：游戏内王者夺宝红宝石x1,请注意：游戏虚拟道具奖品将会在24小时内到账";
        }
        if (wan_neng_lei_xing.value == 2) {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：游戏内王者夺宝蓝宝石x1,请注意：游戏虚拟道具奖品将会在24小时内到账";
        }
        if (wan_neng_lei_xing.value == 3) {
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：游戏内王者夺宝黄宝石x1,请注意：游戏虚拟道具奖品将会在24小时内到账";
        }
        if (wan_neng_lei_xing.value == 4) {
            counterStore.systems = true;
            counterStore.chou_jiang_key += 1;
            counterStore.systems_message = "恭喜您获得了礼包：本活动抽奖钥匙x1";
        }
    } else {
        counterStore.systems = true;
        counterStore.systems_message = "抱歉，您的万能碎片数量不足！";
        counterStore.wan_neng_dui_huan = false;
    }


}
function chuan_shuo_dao_ju_dui_huanss() {
    if (counterStore.chuan_shuo_dui_huan_type == '金蛇') {
        if (counterStore.jin_she_cart >= jifenshuliang.value) {
            counterStore.jin_she_cart -= jifenshuliang.value;
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value + ",请注意：游戏虚拟道具奖品将会在24小时内到账";
        } else {
            counterStore.systems = true;
            counterStore.systems_message = "抱歉，您的剩余金蛇卡不足~";
        }
    }
    if (counterStore.chuan_shuo_dui_huan_type == '王者') {
        if (counterStore.wang_zhe_cart >= jifenshuliang.value) {
            counterStore.wang_zhe_cart -= jifenshuliang.value;
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value + ",请注意：游戏虚拟道具奖品将会在24小时内到账";
        } else {
            counterStore.systems = true;
            counterStore.systems_message = "抱歉，您的剩余王者卡不足~";
        }
    }
    if (counterStore.chuan_shuo_dui_huan_type == '道具') {
        if (counterStore.dao_ju_cart >= jifenshuliang.value) {
            counterStore.dao_ju_cart -= jifenshuliang.value;
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value + ",请注意：游戏虚拟道具奖品将会在24小时内到账";
        } else {
            counterStore.systems = true;
            counterStore.systems_message = "抱歉，您的剩余道具卡不足~";
        }
    }
    if (counterStore.chuan_shuo_dui_huan_type == '英雄') {
        if (counterStore.ying_xiong_cart >= jifenshuliang.value) {
            counterStore.ying_xiong_cart -= jifenshuliang.value;
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value + ",请注意：游戏虚拟道具奖品将会在24小时内到账";
        } else {
            counterStore.systems = true;
            counterStore.systems_message = "抱歉，您的剩余英雄卡不足~";
        }
    }
    if (counterStore.chuan_shuo_dui_huan_type == '传说') {
        if (counterStore.chuan_shuo_cart >= jifenshuliang.value) {
            counterStore.chuan_shuo_cart -= jifenshuliang.value;
            counterStore.systems = true;
            counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value + ",请注意：游戏虚拟道具奖品将会在24小时内到账";
        } else {
            counterStore.systems = true;
            counterStore.systems_message = "抱歉，您的剩余传说卡不足~";
        }
    }
}
function jin_she_ka_dui_huan() {
    if (counterStore.jin_she_ka_dui_huan_type == '传说') {

        if (counterStore.chuan_shuo_cart >= counterStore.cart_xiaohao) {
            if (counterStore.cart_xiaohao == 1) {
                counterStore.systems = true;
                counterStore.systems_message = "恭喜您获得了礼包：金蛇卡x30";
                counterStore.chuan_shuo_cart -= 1;
                counterStore.jin_she_cart += 30;
            } else {
                counterStore.systems = true;
                counterStore.systems_message = "恭喜您获得了礼包：金蛇卡x300";
                counterStore.chuan_shuo_cart -= 10;
                counterStore.jin_she_cart += 300;
            }
        } else {
            counterStore.systems = true;
            counterStore.systems_message = "抱歉，您的剩余传说卡不足~";
        }

    }

    if (counterStore.jin_she_ka_dui_huan_type == '王者') {

        if (counterStore.wang_zhe_cart >= counterStore.cart_xiaohao) {
            if (counterStore.cart_xiaohao == 1) {
                counterStore.systems = true;
                counterStore.systems_message = "恭喜您获得了礼包：金蛇卡x3";
                counterStore.wang_zhe_cart -= 1;
                counterStore.jin_she_cart += 3;
            } else {
                counterStore.systems = true;
                counterStore.systems_message = "恭喜您获得了礼包：金蛇卡x30";
                counterStore.wang_zhe_cart -= 10;
                counterStore.jin_she_cart += 30;
            }
        } else {
            counterStore.systems = true;
            counterStore.systems_message = "抱歉，您的剩余王者卡不足~";
        }

    }
    if (counterStore.jin_she_ka_dui_huan_type == '英雄') {

        if (counterStore.ying_xiong_cart >= counterStore.cart_xiaohao) {
            if (counterStore.cart_xiaohao == 1) {
                counterStore.systems = true;
                counterStore.systems_message = "恭喜您获得了礼包：金蛇卡x2";
                counterStore.ying_xiong_cart -= 1;
                counterStore.jin_she_cart += 2;
            } else {
                counterStore.systems = true;
                counterStore.systems_message = "恭喜您获得了礼包：金蛇卡x20";
                counterStore.ying_xiong_cart -= 10;
                counterStore.jin_she_cart += 20;
            }
        } else {
            counterStore.systems = true;
            counterStore.systems_message = "抱歉，您的剩余英雄卡不足~";
        }


    }
    if (counterStore.jin_she_ka_dui_huan_type == '道具') {

        if (counterStore.dao_ju_cart >= counterStore.cart_xiaohao) {
            if (counterStore.cart_xiaohao == 1) {
                counterStore.systems = true;
                counterStore.systems_message = "恭喜您获得了礼包：金蛇卡x1";
                counterStore.dao_ju_cart -= 1;
                counterStore.jin_she_cart += 1;
            } else {
                counterStore.systems = true;
                counterStore.systems_message = "恭喜您获得了礼包：金蛇卡x10";
                counterStore.dao_ju_cart -= 10;
                counterStore.jin_she_cart += 10;
            }
        } else {
            counterStore.systems = true;
            counterStore.systems_message = "抱歉，您的剩余道具卡不足~";
        }

    }
}
function you_tong_dui_huan() {
    //已中
    console.log("传说幽瞳兑换启动！！！！！！！！！！！！！！！！");
    if (counterStore.ka1num == 1) {
        counterStore.systems = true;
        counterStore.systems_message = "抱歉，您的幸运签数量不足~~";
        console.log("传说幽瞳兑换启动  1");

        //金蛇
        // if(counterStore.ka2num==888){}
        //传说
        // if(counterStore.ka2num==28){}
    }
    //未中
    if (counterStore.ka1num == 20) {
        //金蛇
        if (counterStore.ka2num == 6666 && jiang_li.value == '传说辉光随机序列号抽取券') {
            if (counterStore.hui_guang_xing_yun_qian >= 20 && counterStore.ji_fen >= 6666) {
                counterStore.hui_guang_xing_yun_qian -= 20;
                counterStore.ji_fen -= 6666;
                counterStore.systems = true;
                counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value;
            } else {
                counterStore.systems = true;
                counterStore.systems_message = "抱歉，您的剩余幸运签数量不足~";
                console.log("传说幽瞳兑换启动  2");

            }
        }
        //传说
        if (counterStore.ka2num == 6666 && jiang_li.value == '传说夜影随机序列号抽取券') {
            if (counterStore.ye_ying_xing_yun_qian >= 20 && counterStore.ji_fen >= 6666) {
                counterStore.ye_ying_xing_yun_qian -= 20;
                counterStore.ji_fen -= 6666;
                counterStore.systems = true;
                counterStore.systems_message = "恭喜您获得了礼包：" + jiang_li.value;
            } else {
                counterStore.systems = true;
                counterStore.systems_message = "抱歉，您的剩余幸运签数量不足~";
                console.log("传说幽瞳兑换启动  3");

            }
        }
    }
}

</script>