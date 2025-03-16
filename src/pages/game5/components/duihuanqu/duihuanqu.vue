<style scoped>
    .title{
        margin-top: 52px;
        height: 106px;
        background: url(@/assets/game5Img/sp.png) no-repeat;
        background-position: -44px -403px;
        margin-bottom: 0;
    }
    .my_jifen{
        font-size: 18px;
    color: #b9f5fe;
    line-height: 1;
    width: 100%;
    text-align: center;
    margin: 16px auto 0;
    }
    .jifenduihuan{
        width: 110%;
    margin: 30px 0 0 -5%;   
        height: 1395px;
        display: flex;
        flex-flow: row wrap;
        align-items: center;
        justify-content: center;
        overflow: hidden;
        position: relative;
        left: -4px;
        margin-top: 30px;
    }
    .jifenduihuan::-webkit-scrollbar {
        width: 0;
    }
    .jifenduihuan>div{
        width: 295px;
        height: 339px;
        margin: 0px 2px 13px;
    }
    .jifenduihuan li{
        width: 292px;
        height: 86px;
        background: url(@/assets/game5Img/sp.png);
        background-position: -1363px -385px;
        list-style: none;
        text-align: center;
        font-family: "font";
        cursor: pointer;
        margin: 15px 1px 0px;
    }
    .jifenduihuan li span{
        display: block;
        width: 100%;
        text-align: center;
        font-size: 26px;
        color: #2a2223;
        line-height: 1;
        text-align: center;
        padding-top: 23px;
        font-weight: 400;
        box-sizing: border-box;
        background-image: -webkit-linear-gradient(top, #41393a, #4c4546, rgba(109, 103, 104, 0.6));
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .p2boxjdk{
        widows: 295px;
        height: 238px;
        background: url(@/assets/game5Img/noon_bk.png);
        position: relative;
    }
    .p2boxjdk img{
        width: 288px;
        height: 234px;
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
        top: 199px;
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
    <h2 class="title"></h2>
    <p class="my_jifen">我的星辰币：<span style="color: #FFDE7A;">{{ counterStore.ji_fen     }}</span></p>
    <div class="jifenduihuan">
        <div>
            <!-- <img style="margin: 0px 7px;"src="@/assets/game5Img/积分兑换1.png" alt=""> -->
            <div class="p2boxjdk on">
                <img src="@/assets/game5Img/星神.png" alt="">
                <div class="boxtages">
                    <span class="taglf1"><em>稀有返场</em><i></i></span>
                </div>
                <p class="p2djname">Kar98K-星神</p>
            </div>
            <li @click="dui_huan(1188,1)"><span>1188星辰币兑换</span></li>
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
            <li @click="dui_huan(958,2)"><span>958星辰币兑换</span></li>
        </div>
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
            <li @click="dui_huan(958,3)"><span>958星辰币兑换</span></li>
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
            <li @click="dui_huan(758,4)"><span>758星辰币兑换</span></li>
        </div>

        <div>
            <!-- <img style="margin: 0px 7px;"src="@/assets/game5Img/积分兑换1.png" alt=""> -->
            <div class="p2boxjdk ">
                <img src="@/assets/game5Img/Kar98K-星神音效卡.png" alt="">
                <div class="boxtages">
							<span class="taglf2"><em>不可交易</em><i></i></span>
						</div>
                <p class="p2djname">Kar98K-星神音效卡</p>
            </div>
            <li @click="dui_huan(758,5)"><span>758星辰币兑换</span></li>
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
            <li @click="dui_huan(558,6)"><span>558星辰币兑换</span></li>
        </div>
        <div>
            <!-- <img style="margin: 0px 7px;"src="@/assets/game5Img/积分兑换1.png" alt=""> -->
            <div class="p2boxjdk ">
                <img src="@/assets/game5Img/AN94-超新星.png" alt="">
                <p class="p2djname">AN94-超新星</p>
            </div>
            <li @click="dui_huan(278,7)"><span>278星辰币兑换</span></li>
        </div>
        <div>
            <!-- <img style="margin: 0px 7px;"src="@/assets/game5Img/积分兑换1.png" alt=""> -->
            <div class="p2boxjdk ">
                <img src="@/assets/game5Img/AK12-天启.png" alt="">
                <p class="p2djname">AK12-天启</p>
            </div>
            <li @click="dui_huan(248,8)"><span>248星辰币兑换</span></li>
        </div>
        <div>
            <!-- <img style="margin: 0px 7px;"src="@/assets/game5Img/积分兑换1.png" alt=""> -->
            <div class="p2boxjdk">
                <img src="@/assets/game5Img/炼狱-星空.png" alt="">
                <div class="boxtages">
							<span class="taglf2"><em>不可交易</em><i></i></span>
							<span class="taglrig"><i></i><em>VVIP武器皮肤</em></span>
						</div>
                <p class="p2djname">炼狱-星空</p>
            </div>
            <li @click="dui_huan(198,9)"><span>198星辰币兑换</span></li>
        </div>
        <div>
            <!-- <img style="margin: 0px 7px;"src="@/assets/game5Img/积分兑换1.png" alt=""> -->
            <div class="p2boxjdk">
                <img src="@/assets/game5Img/羊驼玩偶.png" alt="">
                <div class="boxtages">
							<span class="taglf2"><em>不可交易</em><i></i></span>
							<span class="taglrig"><i></i><em>玩偶</em></span>
						</div>
                <p class="p2djname">羊驼玩偶</p>
            </div>
            <li @click="dui_huan(108,10)"><span>108星辰币兑换</span></li>
        </div>
        <div>
            <!-- <img style="margin: 0px 7px;"src="@/assets/game5Img/积分兑换1.png" alt=""> -->
            <div class="p2boxjdk ">
                <img src="@/assets/game5Img/交易专用钥匙x5.png" alt="">
                <p class="p2djname">交易专用钥匙x5</p>
            </div>
            <li @click="dui_huan(15,11)"><span>15星辰币兑换</span></li>
        </div>
        <div>
            <!-- <img style="margin: 0px 7px;"src="@/assets/game5Img/积分兑换1.png" alt=""> -->
            <div class="p2boxjdk ">
                <img src="@/assets/game5Img/属性变更券x5.png" alt="">
                <p class="p2djname">属性变更券x5</p>
            </div>
            <li @click="dui_huan(15,12)"><span>15星辰币兑换</span></li>
        </div>
        <div>
            <!-- <img style="margin: 0px 7px;"src="@/assets/game5Img/积分兑换1.png" alt=""> -->
            <div class="p2boxjdk ">
                <img src="@/assets/game5Img/交易专用钥匙x5.png" alt="">
                <p class="p2djname">交易专用钥匙x1</p>
            </div>
            <li @click="dui_huan(3,13)"><span>3星辰币兑换</span></li>
        </div>
        <div>
            <!-- <img style="margin: 0px 7px;"src="@/assets/game5Img/积分兑换1.png" alt=""> -->
            <div class="p2boxjdk ">
                <img src="@/assets/game5Img/属性变更券x5.png" alt="">
                <p class="p2djname">属性变更券x1</p>
            </div>
            <li @click="dui_huan(3,14)"><span>3星辰币兑换</span></li>
        </div>
    </div>
</template>

<script setup>
    import { watch,ref } from "vue";
import { useCounterStore } from "@/store/counter"; // 确保路径正确
let jifen = ref(0);
    const counterStore = useCounterStore();
    //兑换
    function dui_huan(num,index){
        if(!counterStore.login_active){
            counterStore.login_div_display = "login";
        }else{
            counterStore.dui_huan_active = true;
            counterStore.cf_alert_active = true;
            counterStore.cao_zuo_active = '消耗';
            counterStore.xiao_hao_wu = '星辰币x'+num;
            counterStore.xiao_hao_ji_fen_zhi = num;
            if(num==1188&&index==1){counterStore.jiang_li = 'Kar98K-星神'}
            if(num==958&&index==2){counterStore.jiang_li = '幻神-星耀 皮肤'}
            if(num==958&&index==3){counterStore.jiang_li = '星际战将'}
            if(num==758&&index==4){counterStore.jiang_li = '毁灭-星耀 皮肤'}
            if(num==758&&index==5){counterStore.jiang_li = 'Kar98K-星神音效卡'}
            if(num==558&&index==6){counterStore.jiang_li = '屠龙-星耀 皮肤'}
            if(num==278&&index==7){counterStore.jiang_li = 'AN94-超新星'}
            if(num==248&&index==8){counterStore.jiang_li = 'AK12-天启'}
            if(num==198&&index==9){counterStore.jiang_li = '炼狱-星空'}
            if(num==108&&index==10){counterStore.jiang_li = '羊驼玩偶'}
            if(num==15&&index==11){counterStore.jiang_li = '交易专用钥匙x5'}
            if(num==15&&index==12){counterStore.jiang_li = '属性变更券x5'}
            if(num==3&&index==13){counterStore.jiang_li = '交易专用钥匙x1'}
            if(num==3&&index==14){counterStore.jiang_li = '属性变更券x1'}
        }
    }
    watch(() => counterStore.ji_fen, (newVal) => {
        jifen.value = newVal;
    });
</script>