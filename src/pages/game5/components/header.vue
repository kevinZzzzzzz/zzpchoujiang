<style scoped>
    .header{
        width: 100%;
        height: 43px;
        margin: 0 auto;
        background-color: white;
        border: 1px solid #c9c9c9;
    }
    .top{
        width: 980px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: space-between;
    }
    .nav{
        width: 540px;
        height: 100%;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: start;
        color: #666;
        font-size: 12px;
        position: relative;
        left: 10px;   
    }
    a{
        text-decoration: none;
        color: #666;
        font-size: 12px;
        
    }
    .top img{
        width: 100%;
        height: auto;
        margin-top: 4px
    }
    .head{
        background: url(@/assets/game5Img/bg1.jpg) no-repeat 50% 0% ;
        margin: 0 auto;
    }
    .container{
        width: 1200px;
        height: 1094px;
        margin: 0 auto;
        position: relative;
    }
    li{
        width: auto;
        padding: 0px 10px;
        list-style: none;
        display: flex;
        align-items: center;
    }
    li span{
        cursor: pointer;
    }
    li span:hover{
        color: #f74a4a;
    }
    .nav a{
        cursor: pointer;
    }
    .nav a:hover{
        color: #f74a4a;
    }
    .nav p{
        font-style: normal;
        color: #e7e7e7;
    }
    .wodedingdan{
        width: 90px;
        box-sizing: border-box;
        position: relative;
        z-index: 9;
    }
    .wodedingdan a{
        width: 100%;
        
    }
    .wodedingdan a:nth-child(1){
        display: flex;
        align-items: center;
    }
    .wodedingdan:hover{
        box-sizing: border-box;
        height: 200px;
        margin-top: 174px;
        padding-top: 4px;
        border: 1px solid #e7e7e7;
        background-color: white;
        display: flex;
        flex-flow: column nowrap;
        align-items: center;
        justify-content: start;
    }
    .hover{
        display: none ;
    }
    .wodedingdan:hover .hover{
        display: inline-block;
        height: 25px;
    }
    #shouji{
        width: 20px;
        height: 24px;
    }
    #jiantou{
        width: 20px;
        height: 20px;
        margin-left: 6px;
    }
    #ewm{
        position: absolute;
        left: -50px;
        top: 31px;
        width: 133px;
        height: 133px;
        display: none;
        z-index: 9;
    }
    #shoujiban:hover #ewm{
        display: inline-block;
    }
    #youxidaohang{
        width: 60px;
        height: 30px;
        margin-left: 4px;
        position: relative;
        z-index: 9;
    }
    #youxidaohang:hover #frame{
        display: block;
    }
    #frame{
        position: absolute;
        top: 30px;
        width: 725px;
        height: 250px;
        overflow: hidden;
        left: -640px;
        display: none;
    }
    #frame1{
        position: absolute;
        width: 725px;
        height: 448px;
    }
    #video{
        position: absolute;
        top: 0;
        left: -360px;
    }
    #logo{
        display: block;
        width: 228px;
        height: 51px;
        background: url(@/assets/game5Img/sp3.png) no-repeat;
        background-position: 0 -4px;
        position: absolute;
        z-index: 9;
        top: 47px;
    left: -235px;
    }
    #logo1{
        display: block;
        width: 107px;
        height: 73px;
        background: url(@/assets/game5Img/星耀.png) no-repeat center;
        background-size: 100% auto;
        position: absolute;
        z-index: 9;
        top: 10px;
        left: -40px;
    }
    #jingjie{
        display: block;
        width: 149px;
        height: 56px;
        background: url(@/assets/game5Img/境界.png) no-repeat center;
        position: absolute;
        z-index: 9;
        left: -11px;
        top: 57px;
    }
    #daojucheng{
        display: block;
        background: url(@/assets/game5Img/sp3.png) no-repeat;
        background-position: -246px 0;
        position: absolute;
        width: 189px;
        height: 60px;
        z-index: 9;
        top: 40px;
        left: 12px;
    }
    .loginbar{
        width: 1200px;
        height: 24px;
        margin: 0 auto;
        position: absolute;
        z-index: 9;
        bottom: 84px;
        left: -10px;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
        font-size: 18px;
        color: white;
    }
    .chuan_shuo_hua_wen{
        position: absolute;
        bottom: 0px;
        left: -360px;
        opacity: 1;
    }
</style>
<template>
    <div class="header">
        <div class="top">
            <a href="https://daoju.qq.com/mall/"><img src="@/assets/game5Img/logo.png"/></a>
            <div class="nav">
                <li>
                    <b style="font-weight: 400;width: 84px;text-align: right;">{{counterStore.loginText}}</b>
                    <span @click="exit()">{{counterStore.loginText1}}</span>
                </li>
                <p>|</p>
                <li>
                    <a href="https://daoju.qq.com/mall/actcenter.shtml">精彩活动</a>
                </li>
                <p>|</p>
                <li>
                    <a href="https://daoju.qq.com/mall/tao.shtml">折扣道具</a>
                </li>
                <p>|</p>
                <li class="wodedingdan" style="padding-right: 0;">
                    <a href="https://daoju.qq.com/mall/trade.shtml">我的订单<img id="jiantou"src="@/assets/game5Img/箭头.png"/></a>
                    <a class="hover" style="margin-top: 10px;" href="https://daoju.qq.com/mall/center.shtml">个人中心</a>
                    <a class="hover" style="margin-top: 6px;"  href="https://daoju.qq.com/mall/ticket.shtml">我的购物点</a>
                    <a class="hover" style="margin-top: 6px;"  href="https://daoju.qq.com/mall/coupon.shtml">我的优惠券</a>
                    <a class="hover" style="margin-top: 6px;"  href="https://daoju.qq.com/mall/attention.shtml">我的关注</a>
                    <a class="hover" style="margin-top: 6px;"  href="https://daoju.qq.com/mall/charm.shtml">我的魅力值</a>
                    <a class="hover" style="margin-top: 6px;"  href="https://daoju.qq.com/mall/message.shtml">我的消息</a>
                </li>
                <p>|</p>
                <li id="shoujiban" style="position: relative;">
                    <img src="@/assets/game5Img/手机.png" id="shouji" alt="">
                    <a href="https://daoju.qq.com/malldownload/index.html">手机版</a>
                    <img id="ewm" src="@/assets/game5Img/header_ewm.png"/>
                </li>
                <p>|</p>
                <li id="youxidaohang"style="cursor: pointer;background: url(@/assets/game5Img/djtb.png)center no-repeat;">
                    游戏导航
                    <div id="frame">
                        <iframe scrolling="no" frameborder="0" id="frame1"src="https://daoju.qq.com/mall/game_area.htm"></iframe>
                    </div>
                    
                </li>
            </div>
        </div>
    </div>
    <div class="head">
        <div class="container">
            <!-- <video id="video" loop autoplay muted src="@/assets/game5Img/video.mp4"></video> -->
            <a id="logo" href=""></a>
            <!-- <a id="logo1" href=""></a> -->
            <!-- <a id="jingjie" href=""></a> -->
            <a id="daojucheng"href=""></a>
            <!-- <li class="loginbar" v-if="counterStore.login_active">
                <span style="color: white;">欢迎您，{{qq_number}}， {{address}} {{names}} </span>
                <span style="color:#FEE660;"> 【更改绑定】</span>
                <span style="color:#FEE660;"> 【获奖记录】</span>
                <span  @click="exit" style="color:#FEE660;"> 【注销】</span>
            </li>
            <li class="loginbar" v-if="!counterStore.login_active">
                <span>你好，请&nbsp;</span>
                <span  @click="login" style="color:#FEE660;"> 【登录】</span>
            </li> -->
            <img class="chuan_shuo_hua_wen" src="@/assets/game5Img/top.png" alt="">
        </div>
    </div>
</template>

<script setup>
 // <script setup> in your component
import { computed } from 'vue';
import { useCounterStore } from "@/store/counter"; // 确保路径正确
const counterStore = useCounterStore();
    //qq号
    let qq_number =counterStore.qq_number;
    //大区
    let address =counterStore.address;
    //名字
    let names = counterStore.names;
function login() {
    counterStore.login_div_display = "login";
}
function exit(){
    counterStore.login_active = false;
    counterStore.login_div_display = "login";
    
}
</script>