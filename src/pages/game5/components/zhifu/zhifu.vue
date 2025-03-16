<style scoped>
.bk {
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, .3);
    position: fixed;
    z-index: 11;
    top: 0;
    left: 0;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
}

.bk div {
    width: 690px;
    height: 563px;
    /* cursor: pointer; */
    position: relative;
}

.buy10 {
    background: url(@/assets/game5Img/十元.png);
}

.buy100 {
    background: url(@/assets/game5Img/一百.png);
}

.buy500 {
    background: url(@/assets/game5Img/一百元.png);
}

.buysucess {
    background: url(@/assets/game5Img/购买成功1.png);
}

.true {
    display: none;
}

.bk p {
    position: absolute;
    left: 130px;
    top: 43px;
    background-color: #f9f9f9;
    z-index: 10;
    font-size: 15px;
    font-family: "微软雅黑";
}
#ewm{
    display: block;
    width: 140px;
    height: 140px;
    position: absolute;
    left: calc(50% - 70px);
    bottom: 66px;
    z-index: 9;
}
mdsweb-loading-wrapper {
    position: relative;
    min-height: 100px;
    height: 100px;
    z-index: 1;
}

.mdsweb-loading {
    display: inline-block;
    padding: 40px;
    font-size: 0;
    width: 120px !important;
    height: 16px !important;
}

.mdsweb-loading-wrapper .mdsweb-loading {
    position: absolute;
    margin-left: -100px;
    margin-top: -48px;
    left: 50%;
    top: 50%;
    z-index: 2;
}

.mdsweb-loading .dot {
    display: inline-block;
    margin: 0 12px;
    width: 16px;
    height: 16px;
    border-radius: 100%;
    opacity: .8;
    background: #9e9e9e;
    -webkit-animation: mdsLoading linear 1.5s infinite;
    animation: mdsLoading linear 1.5s infinite;
    -webkit-animation-delay: .5s;
    animation-delay: .5s;
}

.mdsweb-loading .dot:first-child {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
}

.mdsweb-loading .dot:first-child {
    -webkit-animation-delay: 0s;
    animation-delay: 0s;
}

@-webkit-keyframes mdsLoading {

    0,100% {
        opacity: .8
    }

    80% {
        opacity: .1
    }
}

@keyframes mdsLoading {

    0,100% {
        opacity: .8
    }

    80% {
        opacity: .1
    }
}
.czloadbox{
    z-index: 10;
}
#jiazai2{
    width: 140px;
    height: 140px;
    position: absolute;
    bottom: 66px;
    left: calc(50% - 70px);
    z-index: 10;
}
.anniu{
    width: 140px !important;
    height: 50px !important;
    bottom: 240px  !important;

}
</style>
<template>
    <div class="bk" v-if="active">

        <div :class="type">
            <p :class="name_active">{{ counterStore1.qqnames }}</p>
            <span @click="change" id="ewm" :class="anniu"></span>
            <div v-if="counterStore.buy_jiazai_active1" class="czloadbox" style="width: 690px; height: 516px; display: block;margin-top: 42px;background-color: white;">
                <div class="cp-body mdsweb-loading-wrapper" id="cp_loading_" style="height: 516px;">
                    <div class="mdsweb-loading">
                        <div class="dot"></div>
                        <div class="dot"></div>
                        <div class="dot"></div>
                    </div>
                </div>
            </div>
            <img v-if="counterStore.buy_jiazai_active2" id="jiazai2" src="@/assets/game5Img/支付加载二维码.gif" alt="">
        </div>
    </div>
</template>
<script setup>
import { ref,onMounted } from "vue";
import { useCounterStore, useCounterStore1 } from "@/store/counter"; // 确保路径正确
import { watch } from "vue";
const counterStore = useCounterStore();
const counterStore1 = useCounterStore1();
let type = ref("");
let name_active = ref('');
let active = ref(false);
let anniu = ref("")
let qqname = ref(counterStore.qqnames);
watch(() => counterStore.qqnames, (newVal) => { qqname.value = newVal; });
//界面的显示
watch(() => counterStore.buy_active, (newVal) => {
    active.value = newVal;
    if (newVal == true) {
        name_active.value = '';
    }
});
//支付图片的切换
watch(() => counterStore.buy_type, (newVal) => {
    if (newVal != "") {
        type.value = newVal;
    } else {
        return;
    }
});
function change() {
    if (type.value != null && type.value != "buysucess") {
        // counterStore.systems = true;
        // counterStore.systems_message = "恭喜您成功购买复活币x1，赠送抽奖钥匙x1";
        name_active.value = 'true';
        anniu.value = 'anniu';
        if (type.value == "buy10") {
            // counterStore.systems = true;
            // counterStore.systems_message = "恭喜您成功购买复活币x1，赠送抽奖钥匙x1";
            counterStore.chou_jiang_key += 1;
            counterStore.jia_zai_active = true;
            setTimeout(() => {
                counterStore.jia_zai_active = false;
            }, 100)
        }
        if (type.value == "buy100") {
            // counterStore.systems = true;
            // counterStore.systems_message = "恭喜您成功购买复活币x10，赠送抽奖钥匙x11";
            counterStore.chou_jiang_key += 11;
            setTimeout(() => {
                counterStore.jia_zai_active = false;
            }, 500)
        }
        if (type.value == "buy500") {
            // counterStore.systems = true;
            // counterStore.systems_message = "恭喜您成功购买复活币x50，赠送抽奖钥匙x55";
            counterStore.chou_jiang_key += 55;
            setTimeout(() => {
                counterStore.jia_zai_active = false;
            }, 500)
        }
        counterStore.buy_type = "buysucess";
    } else {
        counterStore.buy_active = false;
        anniu.value = '';
    }
}
</script>
