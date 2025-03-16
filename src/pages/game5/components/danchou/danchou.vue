<style scoped>
    .bk{
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 11;
    }
    .shoujiangbeijing{
        width: 693px;
        height: 313px;
        background: url(@/assets/game5Img/单抽.png);
        position: relative;
        box-sizing: border-box;
        padding-top:27px ;

    }
    .shoujiangbeijing span{
        display: block;
        background: url(@/assets/game5Img/sp2.png) no-repeat;
        background-position: -74px -203px;
        width: 539px;
        height: 54px;
        margin: 0 auto;
        opacity: 0;
    }
    .shoujiangbeijing b{
        width: 144;
        height: 62px;
        display: inline-block;
        font-size: 36px;
        line-height: 1;
        color: #405f5f;
        position: absolute;
        top: 0px;
        left: 31px;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'font';
    }
    .shoujiangbeijing p{
        width: 641px;
        margin: 16px auto 0;
        font-size: 18px;
        line-height: 24px;
        color:#5d3a18;
        text-align: center;
    }
    .shoujiangbeijing p:nth-child(3){
        padding-top: 20px;
        font-size: 20px;
        color: #5d3a18;
    line-height: 1;
    width: 100%;
    text-align: center;
    margin: 20px auto 0;
    }
    .shoujiangbeijing1{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 30px auto 0;
        height: 152px;
    }
    .shoujiangbeijing2{
        width: 100%;
        height: 66px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 35px auto 0;
    }
    .close{
        list-style: none;
        background: url(@/assets/game5Img/sp3.png) no-repeat;
        background-position: -1667px -35px;
        width: 37px;
        height: 37px;
        position: absolute;
        right: 18px;
        top: 20px;
        cursor: pointer;
        z-index: 10;
    }
    .zhong_jiang_xin_xi{
        width: 563px;
        height: 34px;
        background-color: rgba(91, 52, 9, .1);
        border: 1px solid #beab8a;
        font-size: 18px;
        line-height: 34px;
        text-align: center;
        color: #5d3a18;
        margin: 0 auto;
        margin-top: 12px;
        /* font-family:  Arial, Helvetica, Sans-Serif; */

    }
</style>
<template>
    <div class="bk" v-if="danchou_active">
        <div class="shoujiangbeijing">
            <li class="close" @click="close()"></li>
            <span class="title"></span>
            <p>抽奖过程中请勿刷新页面或中断，请以实际礼包记录为准。</p>
            <div class="zhong_jiang_xin_xi">
                <!-- {{danchou_zhongjiang_dongxi}} -->
                {{counterStore.dan_chou_text}}
            </div>
            <p style="width: 642px;font-size: 18px;line-height: 24px;text-align: left;">温馨提示:虚拟道具奖品将在24小时内发到您的游戏仓库。谢谢您的理解与支持。<br> 由于数据量巨大，奖励道具显示将有所延迟，或可存在不展示的情况，请以礼包记录为准。</p>
        </div>
    </div>
</template>
<script setup>
    import { ref,watch } from 'vue';
    import { useCounterStore } from "@/store/counter"; // 确保路径正确
    const counterStore = useCounterStore();
    let danchou_zhongjiang_dongxi = ref("");
    let danchou_active = ref(false);
    watch(() => counterStore.danchou_active, (newVal) => {
        danchou_active.value = newVal;
    });
    watch(() => counterStore.dan_chou_text, (newVal) => {
        danchou_zhongjiang_dongxi.value = newVal;
    });
    function close(){
        counterStore.danchou_active = false;
    }
</script>