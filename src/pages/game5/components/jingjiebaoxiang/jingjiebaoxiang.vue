<style scoped>
.title {

    width: 708px;
    height: 72px;
    background: url(@/assets/game5Img/sp3.png) no-repeat;
    background-position: 0 -324px;
    margin: 0 auto;
    margin-top: 79px;
}

.my_jifen {
    margin-top: 10px;
    line-height: 18px;
    color: #5d3a18;
    font-size: 20px;
    text-align: center;
}

.gonggao {
    color: #5d3a18;
    font-size: 18px;
    line-height: 18px;
    width: 100%;
    text-align: center;
    margin: 20px auto 0;
}

.jingjie {
    width: 1200px;
    height: 371px;
    box-sizing: border-box;
    margin: 0 auto;
    margin-top: 20px;
    /* background: url(@/assets/game5Img/竟界宝箱bk.png) no-repeat; */
}

.img {
    width: 1200px;
    height: 250px;
    display: flex;
    margin: 0 auto;
    justify-content: space-between;
}

.jingjie li {
    list-style: none;
    background: url(@/assets/game5Img/sp3.png) no-repeat;
    cursor: pointer;
    background-position: -1523px -219px;
    width: 322px;
    height: 114px;
    margin: 8px auto 0;
    color: white;
    font-size: 26px;
    text-align: center;
    box-sizing: border-box;
    padding-top: 15px;

    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}
.jingjie li span {
    font-size: 18px;
    display: block;
}
.jingjie p {
    font-size: 22px;
    color: #5d3a18;
    line-height: 1.2;
    width: 100%;
    text-align: center;
    position: absolute;
    left: 0;
    top: 185px;
    margin: 0;
}

.p2boxjdk {
    background: url(@/assets/game5Img/传说辉光_自选背景.png) no-repeat;
    background-size: 100% auto;
    width: 339px;
    height: 246px;
    position: relative;
    margin: 0px 15px;
}
.p2boxjdk img{
    width: 100%;
}
</style>
<template>
    <h2 class="title" style="margin-bottom: 0px;"></h2>
    <p class="gonggao">玩家在主奖池抽中传说宝箱，则可开启宝箱领取任一奖品</p>
    <p class="my_jifen">可开启的传说宝箱：{{ counterStore.jing_jie_bao_xiang }}</p>
    <div class="jingjie">
        <div class="img">
            <div class="p2boxjdk">
                <img src="@/assets/game5Img/传说辉光随机序列号抽取券.png" alt="">
                <p style="margin: 0;" class="p2djname">传说辉光随机序列号抽取券<br>幸运签×1</p>
            </div>

            <div class="p2boxjdk">
                <img src="@/assets/game5Img/传说夜影随机序列号抽取券.png" alt="">
                <p style="margin: 0;" class="p2djname">传说夜影随机序列号抽取券<br>幸运签×1</p>
            </div>

            <div class="p2boxjdk">
                <img src="@/assets/game5Img/王者之石1.png" alt="">
                <p style="margin: 0;top: 195px;" class="p2djname">王者之石×10</p>
            </div>
        </div>
        <!-- <li @click="open()"></li> -->
        <li @click="open()" class="btn_p1lq sp">开启传说宝箱自选 <br><span>每次开箱，仅可选其一</span></li>
        <!-- <p>每次开箱，仅可选其一</p> -->
    </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/store/counter"; // 确保路径正确
import { watch } from "vue";
const counterStore = useCounterStore();
let baoxiang = ref(0);
//兑换
function dui_huan(num) {
    if (!counterStore.login_active) {
        counterStore.login_div_display = "login";
    }
}
//打开选择界面
function open() {
    counterStore.zixuan = true;
    console.log("自选为开");
}
watch(() => counterStore.jing_jie_bao_xiang, (newVal) => {
    baoxiang.value = newVal;
});
</script>