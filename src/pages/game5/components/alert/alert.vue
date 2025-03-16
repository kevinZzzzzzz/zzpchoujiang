<style scoped>
    .bk{
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(119, 119, 119, .5);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 12;
    }
    .alert{
        width: 410px;
        height: 130px;
        background-color: white;
        display: flex;
        flex-flow: column;
        align-items: center;
        justify-content: center;
        border-radius: 2px;
    }
    .tit{
        width: 100%;
        height: 30px;
        background-color: #2196F3;
        color: white;
        line-height: 30px;
        box-sizing: border-box;
        padding-left: 5px;
        position: relative;
    }
    .tit p{
        position: absolute;
        display: inline-block;
        width: 18px;
        height: 30px;
        right: 5px;
        top: 0px;
        margin: 0;
        cursor: pointer;
        font-size: 24px;
    }
    .tit p:hover{
        color: red;
    }
    .message{
        width: 100%;
        height: 100px;
        box-sizing: border-box;
        padding: 5px;
        position: relative;
        font-size: 14px;
    color: #000;
    }
    .message button{
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: 100px;
        height: 30px;
        background-color: #2096f3;
        outline: none;
        border: 0px;
        border-radius: 2px;
        color: white;
        cursor: pointer;
    }
    .message button:hover{
        background-color: #027bdc;  
    }
    /* .shoujiangbeijing{
        width: 693px;
        height: 256px;
        background: url(@/assets/game5Img/alert.png);
        background-size: 100% 100%;
        position: relative;
        box-sizing: border-box;
        padding-top:14px ;

    }

    .shoujiangbeijing p{
        font-size: 20px;
        color: #FFFFFF;
        line-height: 30px;
        width: 100%;
        margin: 60px auto 60PX;
        text-align: center;
            font-size: 20px;
        color: #ffffff;
        text-align: center;
        line-height: 1.4;
    }
    .close{
        list-style: none;
        background: url(@/assets/game5Img/close.png);
        width: 37px;
        height: 37px;
        position: absolute;
        right: 18px;
        top: 20px;
        cursor: pointer;
    }
    .btn{
        width: 100%;
        height: 66px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .btn span{
        display: flex;
        width: 283px;
        height: 83px;
        margin: 0px 12px;
        cursor: pointer;
        background: url(@/assets/game5Img/sp2.png) no-repeat;
    }
    .btn span:nth-child(1){
        background-position: -45px -704px;
    }
    .btn span:nth-child(2){
        background-position: -387px -599px;
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
    } */
</style>
<template>
    <div class="bk" v-if="active">
        <div class="alert">
            <div class="tit">
                系统消息
                <p @click="close()">×</p>
            </div>
            <div class="message">
                {{ message }}
                <button @click="close()">确认</button>
            </div>
        </div>
        <!-- <div class="shoujiangbeijing">
            <li class="close" @click="close()"></li>
            <p>{{ message }}</p>
            <div class="btn">
                <span @click="close()" ></span>
            </div>
        </div> -->
    </div>
</template>

<script setup>
import { watch } from 'vue';
import { ref } from 'vue';
import { useCounterStore } from "@/store/counter"; // 确保路径正确
const counterStore = useCounterStore();
    let message = ref("测试字幕");
    let active = ref(false);
    watch(() => counterStore.systems, (newVal) => {
        active.value = newVal;
    });
    watch(() => counterStore.systems_message, (newVal) => {
        message.value = newVal;
    });
    function close(){
        active.value = false;
        counterStore.systems = false;
        if(counterStore.systems_after_zan_cun_xiang_active){
            counterStore.zan_cun_xiang_active = true;
            counterStore.systems_after_zan_cun_xiang_active = false;
        }
    }
</script>