<style scoped>
    .title{
        
        background: url(@/assets/game5Img/sp.png);
        background-position: -72px -867px;
        width: 1201px;
        height: 106px;
        margin: 0 auto;
        margin-top: 80px;
    }
    .gonggao{
        font-size: 18px;
    color: #FFFFFF;
    line-height: 18px;
    width: 100%;
    text-align: center;
    margin: 10px auto 0;
    }
    .gonggao span{
    font-size: 20px;
    color: #b2ffe3;
    line-height: 40px;
    margin: 0 20px;
    }
    .gonggao .search{
        cursor: pointer;
        font-size: 20px;
        color: #FFDE7A;
        line-height: 40px;
        margin: 0 20px;
        display: inline-block;
        text-decoration: underline;
    }
    .huikui{
        width: 1208px;
        margin: 20px 0 0 2px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        
    }
    .huikui li{
        list-style: none;
        width: 302px;
        height: 232px;
        margin-bottom: 24px;
       
    }
    .huikui p{
        background: url(@/assets/game5Img/回馈btn.png);
        width: 288px;
        height: 64px;
        display: block;
        margin: 8px auto 0;
        font-size: 24px;
        color: #B05C09;
        line-height: 64px;
        text-align: center;
        font-family: "font";
        cursor: pointer;
        margin-left: 0px;
        margin-top: 4px;
    }
    .jifenduihuan{
        width: 110%;
    margin: 20px 0 0 -5%;   
        height: 364px;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        left: -4px;
        margin-top: 20px;
    }
    .jifenduihuan::-webkit-scrollbar {
        width: 0;
    }
    .jifenduihuan>div{
        width: 380px;
        height: 364px;
        margin: 0px 14px 13px;
    }
    .jifenduihuan li{
        width: 366px;
        height: 107px;
        background: url(@/assets/game5Img/sp.png);
        background-position: -1398px -907px;
        list-style: none;
        text-align: center;
        font-family: "font";
        cursor: pointer;
        margin: 13px auto 0px;
    }
    .jifenduihuan li span{
        display: block;
        width: 100%;
        text-align: center;
        font-size: 30px;
        color: #2a2223;
        line-height: 1;
        text-align: center;
        padding-top: 31px;
        box-sizing: border-box;
        background-image: -webkit-linear-gradient(top, #41393a, #4c4546, rgba(109, 103, 104, 0.6));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .p2boxjdk{
        width: 380px;
        height: 244px;
        background: url(@/assets/game5Img/noon_bk1.png);
        background-size: 100% 100%;
        position: relative;
    }
    .p2boxjdk img{
        width: 380px;
        height: 244px;
    }
    .on{
        background: url(@/assets/game5Img/on_bk.png) !important;
    }
    .on .p2djname{
        color: #343434 !important;
    }
    .p2listdjdh .boxtages {
        width: 106%;
        left: -3%;
    }
    .boxtages {
        width: 312px;
        height: 36px;
        display: flex;
        justify-content: space-between;
        flex-wrap: wrap;
        position: absolute;
        left: -3%;
        top: 3px;
        transform-origin: 50% 0;
        transform: scale(0.94);
    }
    .taglf1 {
        width: 98px;
        height: 33px;
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-bottom: 3px;
    }
    .taglf1 em {
        font-size: 18px;
        color: #262859;
        line-height: 32px;
        width: 72px;
        height: 32px;
        padding: 0 3px;
        background: linear-gradient(to right, #fca362, #f8be90);
        font-style: normal;
    }
    .taglf1 i {
        width: 0;
        height: 0;
        border-top: 33px solid #f8be90;
        border-right: 20px solid transparent;
    }
    .p2listdjdh .taglf1 i {
        border-right: 20px solid transparent;
    }
    .p2listdjdh li.on .p2djname {
        color: #343434;
    }
    .p2djname {
        font-size: 18px;color: #343434;
        line-height: 1;
        width: 100%;
        text-align: center;
        position: absolute;
        left: 0;
        top: 208px;
        margin: 0;
    }
    .taglrig {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
        margin-bottom: 3px;
    }
    .p2listdjdh .taglrig i {
        border-left: 28px solid transparent;
    }
    .taglrig i {
        width: 0;
        height: 0;
        border-bottom: 32px solid #12fda6;
        border-left: 28px solid transparent;
    }
    .taglrig em {
        margin-left: -1px;
        font-style: normal;

    }
    .taglrig em {
        font-size: 18px;
        color: #262859;
        line-height: 32px;
        height: 32px;
        padding: 0 3px;
        background: linear-gradient(to right, #16fda3, #a0ee63);
    }
    .taglf2 {
        display: flex;
        justify-content: flex-start;
        flex-wrap: wrap;
    }
    .taglf2 em {
        font-size: 18px;
        color: #262859;
        line-height: 32px;
        height: 32px;
        padding: 0 3px;
        font-style: normal;

        background: linear-gradient(to right, #f6ff0d, #fec350);
    }
    .p2listdjdh .taglf2 i {
        border-right: 20px solid transparent;
    }
    .taglf2 i {
        width: 0;
        height: 0;
        border-top: 33px solid #fec350;
        border-right: 20px solid transparent;
    }
    .p2djname{
        color: white;
    }
</style>
<template>
    <h2 class="title" style="margin-bottom: 0px"></h2>
    <p class="gonggao">玩家当前登录账号绑定大区拥有以下道具，则可领取相应星耀值</p>
    <p class="gonggao"><span>注：如道具在私人金库中，请取出后再尝试领取</span><span @click="show_cang_ku()" class="search">点击查询仓库</span></p>
    <div class="jifenduihuan">
        <div>
            <!-- <img style="margin: 0px 7px;"src="@/assets/game5Img/积分兑换1.png" alt=""> -->
            <div class="p2boxjdk">
                <img src="@/assets/game5Img/星神1.png" alt="">

                <p class="p2djname">Kar98K-星神</p>
            </div>
            <li @click="ling_qu_5_value"><span>领取5星耀值</span></li>
        </div>
        <div>
            <!-- <img style="margin: 0px 7px;"src="@/assets/game5Img/积分兑换1.png" alt=""> -->
            <div class="p2boxjdk">
                <img src="@/assets/game5Img/AN94-超新星1.png" alt="">

                <p class="p2djname">AN94-超新星</p>
            </div>
            <li @click="ling_qu_5_value"><span>领取5星耀值</span></li>
        </div>
        <div>
            <!-- <img style="margin: 0px 7px;"src="@/assets/game5Img/积分兑换1.png" alt=""> -->
            <div class="p2boxjdk">
                <img src="@/assets/game5Img/AK12-天启1.png" alt="">
 
                <p class="p2djname">AK12-天启</p>
            </div>
            <li @click="ling_qu_5_value"><span>领取5星耀值</span></li>
        </div>
    </div>
</template>

<script setup>
    import { useCounterStore } from "@/store/counter"; // 确保路径正确
    const counterStore = useCounterStore();
    //点击查询仓库
    function show_cang_ku(){
        if(!counterStore.login_active){
            counterStore.login_div_display = "login";
        }
    }
    //领取竟界值
    function ling_qu_5_value(){
        if(!counterStore.login_active){
            counterStore.login_div_display = "login";
        }else{
            counterStore.systems = true;
            counterStore.systems_message = "抱歉，您暂未拥有该道具";
        }
    }
</script>