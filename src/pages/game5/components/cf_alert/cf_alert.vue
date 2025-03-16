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
    width: 650px;
    height: 267px;
    padding: 20px;
    background: url(@/assets/game5Img/alert.png);
    background-size: 100% 100%;
    position: relative;
    /* box-sizing: border-box; */

}

.shoujiangbeijing p {
    font-size: 20px;
    color: #705440;
    line-height: 1;
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
    width: 88%;
    height: 66px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto;
    margin-top: 80px;
}

.btn span {
    display: block;
    width: 248px;
    height: 78px;
    margin: 0px 12px;
    cursor: pointer;
    background: url(@/assets/game5Img/sp3.png) no-repeat;
    text-align: center;
    line-height: 88px;
    font-size: 28px;
}

.btn span:nth-child(1) {
    background-position: -695px -1097px !important;
    color: white;

}

.btn span:nth-child(2) {
    background-position: -977px -1098px;color: #000f83;
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
</style>
<template>
    <div class="bk" v-if="cf_alert_active">
        <div class="shoujiangbeijing">
            <!-- <h3 class="poptit">提醒</h3> -->
            <li class="close" @click="close()"></li>
            <p>{{ title }} <br>
                <!-- <span style="cursor: pointer;color: #E98043;">切换大区</span> -->
            </p>
            <div class="btn">
                <span @click="enter()">确认</span>
                <span @click="quxiao()">取消</span>
            </div>
        </div>
    </div>
</template>
<script setup>
import { ref, watch } from 'vue';
import { useCounterStore } from "@/store/counter"; // 确保路径正确
const counterStore = useCounterStore();
let title = ref("本次兑换操作不可逆，无法撤回，请确认是否操作");
let cf_alert_active = ref(false);

watch(() => counterStore.cf_alert_active, (newVal) => {
    cf_alert_active.value = newVal;
});
function enter() {
    counterStore.cf_alert_dans_active = true;
    counterStore.cf_alert_active = false;
}
function close() {
    counterStore.ling_qu_active = false;
    counterStore.fen_jie_active = false;
    counterStore.dui_huan_active = false;
    counterStore.wan_neng_dui_huan = false;
    counterStore.jing_jie_dui_huan_active = false;
    counterStore.cf_alert_active = false;
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
    counterStore.jiang_li = '';
    counterStore.xiao_hao_wu = '';
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
}
function quxiao() {
    counterStore.ling_qu_active = false;
    counterStore.fen_jie_active = false;
    counterStore.dui_huan_active = false;
    counterStore.wan_neng_dui_huan = false;
    counterStore.jing_jie_dui_huan_active = false;
    counterStore.cf_alert_active = false;
    counterStore.chuan_shuo_you_tong_dui_huan = false;
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
    counterStore.jiang_li = '';
    counterStore.xiao_hao_wu = '';
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
}
</script>