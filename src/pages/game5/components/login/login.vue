<style scoped>
    .login{
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 10;
        background-color: rgba(255, 255, 255, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
    }
    #if{
        width: 752px;
        height: 420px;
        border: 0px solid white;
        border: 1px solid #bfbfbf;
    box-shadow: 0 0 10px rgba(0, 0, 0, .3);
    }
    .x{
        width: 30px;
        height: 48px;
        position: absolute;
        right: 0px;
        top: 0px;
        cursor: pointer;
        text-align: center;
        line-height: 48px;
        color: #009aff;
    font-weight: bold;
    font-size: 25px;
    }
    .x:hover{
        color: #f57272;
    }
    .if{
        width: 752px;
        height: 400px;
        position: relative;
        left: -8px;
        top: -16px;
    }
    .login1{
        width: 100vw;
        height: 100vh;
        position: fixed;
        z-index: 10;
        background-color: rgba(255, 255, 255, 0.7);
        display: flex;
        justify-content: center;
        align-items: center;
        display: none;
    }
</style>
<template>
    <div @click.stop="login()"  :class="leiming" v-if="!counterStore.login_active">
        <div  class="if">
            <iframe  @click.stop="login()" id="if" src="https://graph.qq.com/oauth2.0/authorize?response_type=code&state=STATE&client_id=101491592&redirect_uri=https%3A%2F%2Fmilo.qq.com%2Fcomm-htdocs%2Flogin%2Fqc_redirect.html%3Fparent_domain%3Dhttps%253A%252F%252Fact.daoju.qq.com%26isMiloSDK%3D1%26isPc%3D1" frameborder="0">
        </iframe>
                <!-- <img  :src="name" alt="" id="if"> -->
                <div @click.stop="close()" class="x">×</div>
        </div>
    </div>
</template>
<script setup>
    import { ref,onMounted,watch } from "vue";
    import { useCounterStore } from "@/store/counter"; // 确保路径正确
    const counterStore = useCounterStore();
    let active = ref(0)
    let name = ref('@/assets/game5Img/待扫码.png');
    watch(() => active.value, (newVal) => {
        if(newVal==0){
            name.value = "@/assets/game5Img/待扫码.png";
        }
        if(newVal==1){
            name.value = "@/assets/game5Img/扫码成功.png";
        }
        if(newVal == 2){
            name.value = '';
        }
    });
    let leiming = ref("login");
    // 侦听 store 中的 login_active 状态变化
    watch(() => counterStore.login_div_display, (newVal) => {
        leiming.value = newVal;
    });
    // function login(){
    //     active.value++;
    //    if(active.value ==2){
    //      //登录状态为已登录
    //      counterStore.login_active = true;
    //     //登陆盒子消失
    //     counterStore.login_div_display = "login1";
    //     //登录盒子消失放进盒子里面
    //     leiming.value = counterStore.login_div_display;
    //     active.value = 0;
    //    }
    // }
    function login(){
        // active.value++;

         //登录状态为已登录
         counterStore.login_active = true;
        //登陆盒子消失
        counterStore.login_div_display = "login1";
        //登录盒子消失放进盒子里面
        leiming.value = counterStore.login_div_display;
        active.value = 0;
    }
    function close(){
        //登录状态为已登录
        counterStore.login_active = false;
        //登陆盒子消失
        counterStore.login_div_display = "login1";
        //登录盒子消失放进盒子里面
        leiming.value = counterStore.login_div_display;
    }
</script>