<style scoped>
    .title{
        background: url(@/assets/game5Img/sp.png);
        background-position: -55px -717px;
        width: 1061px;
        height: 106px;
        margin: 0 auto;
        margin-top: 60px;
    }
    .my_jifen{
        height: 18px;
        text-align: center;
        margin-top: 16px;
        margin-bottom: 0;
        /* background: url(@/assets/game5Img/我的积分_bk.png) center no-repeat; */
        font-size: 18px;
    color: #b9f5fe;
    line-height: 18px;}
    .gonggao{
        font-size: 18px;
    color: #FFFFFF;
    line-height: 18px;
    width: 100%;
    text-align: center;
    margin: 8px auto 0;
    }
    .jingjiezhiduihuan{
        width: 1215px;
        margin: 19px 0 0 0px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        
    }
    .jingjiezhiduihuan div{
        width: 405px;
        height: 363px;
        margin-bottom: 24px;
    }
    .jingjiezhiduihuan li{
        background: url(@/assets/game5Img/竟界值兑换btnbk.png);
        width: 390px;
        height: 87px;
        margin: 16px auto 0;
        text-align: center;
        font-family: "font";
        font-size: 32px;
        display: block;
        line-height: 88px;
        color: #824712;
        list-style: none;
        cursor: pointer;
        margin-left: 0;
        margin-top: 10px;
    }
    .jifenduihuan{
        width: 110%;
        margin: 19px 0 0 -5%;   
        height: 274px;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        left: -4px;
        margin-top: 19px;
    }
    .jifenduihuan::-webkit-scrollbar {
        width: 0;
    }
    .jifenduihuan>div{
        width: 236px;
        height: 268px;
        margin: 0px 2px 13px;
    }
    .jifenduihuan li{
        width: 236px;
        height: 70px;
        background: url(@/assets/game5Img/sp.png);
        background-position: -1406px -785px;
        list-style: none;
        text-align: center;
        font-family: "font";
        cursor: pointer;
        margin: 10px auto 0px;
    }
    .jifenduihuan li span{
        display: block;
    width: 100%;
    text-align: center;
    font-size: 22px;
    color: #2a2223;
    line-height: 1;
    text-align: center;
    padding-top: 18px;
    box-sizing: border-box;
    background-image: -webkit-linear-gradient(top, #41393a, #4c4546, rgba(109, 103, 104, 0.6));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    }
    .p2boxjdk{
        width: 236px;
        height: 188px;
        background: url(@/assets/game5Img/noon_bk.png) no-repeat;   
        background-size: 100% auto;
        position: relative;
    }
    .p2boxjdk img{
        width: 236px;
        height: 188px;
    }
    .on{
        background: url(@/assets/game5Img/on_bk.png) no-repeat !important;
        background-size: 100% auto !important;
    }
    .on .p2djname{
        color: #343434 !important;
    }
    .p2listdjdh .boxtages {
        width: 106%;
        left: -3%;
    }
    .boxtages {
        width: 245px    ;
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
        top: 158px;
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
    <h2 class="title" style="margin-bottom: 0px;"></h2>
    <p class="gonggao">星耀值可通过开启星耀宝箱自选或通过下方【星耀值回馈】获得</p>
    <p class="my_jifen">当前星耀值：<span style="color: #FFDE7A;">{{ counterStore.jing_jie_zhi }}</span></p>
    <div class="jifenduihuan">
        <div>
            <!-- <img style="margin: 0px 7px;"src="@/assets/game5Img/积分兑换1.png" alt=""> -->
            <div class="p2boxjdk on">
                <img src="@/assets/game5Img/星际战将.png" alt="">
                <div class="boxtages">
							<span class="taglf1"><em>全新首发</em><i></i></span>
							<span class="taglrig"><i></i><em>唯一性角色</em></span>
							<span class="taglf2"><em>VVIP角色</em><i></i></span>
						</div>
                <p class="p2djname">星际战将</p>
            </div>
            <li @click="dui_huan(108,1)"><span>108星耀值兑换</span></li>
        </div>
        <div>
            <!-- <img style="margin: 0px 7px;"src="@/assets/game5Img/积分兑换1.png" alt=""> -->
            <div class="p2boxjdk on">
                <img src="@/assets/game5Img/幻神-星耀.png" alt="">
                <div class="boxtages">
							<span class="taglf1"><em>全新首发</em><i></i></span>
							<span class="taglrig"><i></i><em>VVIP武器皮肤</em></span>
							<span class="taglf2"><em>不可交易</em><i></i></span>
						</div>
                <p class="p2djname">幻神-星耀 皮肤</p>
            </div>
            <li @click="dui_huan(108,2)"><span>108星耀值兑换</span></li>
        </div>
        <div>
            <!-- <img style="margin: 0px 7px;"src="@/assets/game5Img/积分兑换1.png" alt=""> -->
            <div class="p2boxjdk on">
                <img src="@/assets/game5Img/毁灭-星耀.png" alt="">
                <div class="boxtages">
							<span class="taglf1"><em>全新首发</em><i></i></span>
							<span class="taglrig"><i></i><em>VVIP武器皮肤</em></span>
							<span class="taglf2"><em>不可交易</em><i></i></span>
						</div>
                <p class="p2djname">毁灭-星耀 皮肤</p>
            </div>
            <li @click="dui_huan(88,3)"><span>88星耀值兑换</span></li>
        </div>
        <div>
            <!-- <img style="margin: 0px 7px;"src="@/assets/game5Img/积分兑换1.png" alt=""> -->
            <div class="p2boxjdk on">
                <img src="@/assets/game5Img/屠龙-星耀.png" alt="">
                <div class="boxtages">
							<span class="taglf1"><em>全新首发</em><i></i></span>
							<span class="taglrig"><i></i><em>VVIP武器皮肤</em></span>
							<span class="taglf2"><em>不可交易</em><i></i></span>
						</div>
                <p class="p2djname">屠龙-星耀 皮肤</p>
            </div>
            <li @click="dui_huan(68,4)"><span>68星耀值兑换</span></li>
        </div>
        <div>
            <!-- <img style="margin: 0px 7px;"src="@/assets/game5Img/积分兑换1.png" alt=""> -->
            <div class="p2boxjdk ">
                <img src="@/assets/game5Img/道聚城通用代金券.png" alt="">
                <p class="p2djname">道聚城通用代金券x50</p>
            </div>
            <li @click="dui_huan(48,5)"><span>48星耀值兑换</span></li>
        </div>
    </div>
</template>

<script setup>
     import { useCounterStore } from "@/store/counter"; // 确保路径正确
     import { ref,watch } from "vue"; // 确保路径正确
    const counterStore = useCounterStore();
    let jing_jie_zhi = ref(0);
    
    watch(() => counterStore.jing_jie_zhi, (newVal) => {
        jing_jie_zhi.value = newVal;
    });
    //兑换
    function dui_huan(num,index){
        if(!counterStore.login_active){
            counterStore.login_div_display = "login";
        }else{
            counterStore.jing_jie_dui_huan_active = true;
            counterStore.xiao_hao_jing_jie_zhi = num;
            counterStore.cf_alert_active = true;
            counterStore.cao_zuo_active = '竟界值兑换';
            counterStore.xiao_hao_wu = '星耀值x'+num;
            if(num==108&&index==1){counterStore.jiang_li = '星际战将'}
            if(num==108&&index==1){counterStore.jiang_li = '幻神-星耀 皮肤'}
            if(num==88){counterStore.jiang_li = '毁灭-星耀 皮肤'}
            if(num==68){counterStore.jiang_li = '屠龙-星耀 皮肤'}
            if(num==48){counterStore.jiang_li = '道聚城通用代金券x50'}
            
        }
    }
</script>