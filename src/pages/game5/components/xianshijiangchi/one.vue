<style scoped>
/* 购买板块 */
.buy {
    width: 1200px;
    height: 220px;
    display: flex;
    flex-flow: row wrap;
    justify-content: center;
    margin: 0px auto 0px auto;
    padding-top: 56px;
}

.buy div {
    width: 292px;
    height: 96px;
    background: url(@/assets/game5Img/buy_bk.png) no-repeat;
    cursor: pointer;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    margin: 0 20px;
}

.buy div:nth-child(1) {
    background: url(@/assets/game5Img/sp.png) no-repeat;
    background-position: -70px -53px;
    width: 306px;
    height: 102px;
    margin-bottom: 20px;
}

.buy div:nth-child(2) {
    background: url(@/assets/game5Img/sp.png) no-repeat;
    background-position: -455px -46px;
    width: 306px;
    height: 102px;
    margin-bottom: 20px;

}

.buy div:nth-child(3) {
    background: url(@/assets/game5Img/sp.png) no-repeat;
    background-position: -70px -53px;
    width: 306px;
    height: 102px;
    margin-bottom: 20px;

}

.buy div:nth-child(4) {
    background: url(@/assets/game5Img/sp.png) no-repeat;
    background-position: -70px -53px;
    width: 306px;
    height: 102px;
    margin-bottom: 20px;

}

.buy div:nth-child(5) {
    background: url(@/assets/game5Img/sp.png) no-repeat;
    background-position: -455px -46px;
    width: 306px;
    margin-bottom: 20px;
    height: 102px;
}

.buy div span:nth-child(1) {

    font-size: 46px;
    line-height: 74px;
    font-weight: bold;
    transform-origin: 50% 50%;
    transform: scaleY(1.2);
    letter-spacing: -2px;
    background-image: -webkit-linear-gradient(top, #2e3660, #2e3660);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.buy div span:nth-child(2) {
    width: 16px;
    height: 74px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 18px;
    text-wrap: wrap;
    font-family: 'font1';
    line-height: 1.2;
    margin: 0 3px;
    background-image: -webkit-linear-gradient(top, #232639, #232639);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.buy div span:nth-child(3) {
    display: flex;
    flex-flow: column;
}

.buy div span p:nth-child(1) {
    font-size: 18px;
    color: #222639;
    line-height: 1;
    display: block;
    font-family: 'fontxi';
    margin: 0;
    margin-top: 5px;
}

.buy div span p:nth-child(2) {
    font-size: 18px;
    color: #222639;
    line-height: 1;
    display: block;
    font-family: 'fontxi';
    margin: 0;
    margin-top: 5px;

}

.buy div span p:nth-child(3) {
    font-size: 18px;
    color: #A65F14;
    line-height: 1;
    display: block;
    margin-top: 5px;
    margin: 0;
    margin-top: 5px;

}

.choujiang {
    width: 1200px;
    height: 851px;
    background: url(@/assets/game5Img/抽奖第一个圈.png) no-repeat;
    margin-top: 5px;
    position: relative;
}

.choujiangbankuai {
    width: 1200px;
    height: 310px;
    position: absolute;
    top: 340px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    font-size: 20px;
    font-family: 'font1';
    color: #5d3a18;
}
.choujiangbankuai p {
    display: inline-block;
    width: 350px;
    height: 49px;
    color: #5d3a18;
    text-align: center;
    /* background: url(@/assets/game5Img/sp.png) no-repeat; */
    margin: 0px 16px;
    line-height: 40px;
    font-family: 'font1';
}
.choujiangbankuai p:nth-child(1) {
    width: 388px;
    /* background-position: -638px -811px; */
    color: #5d3a18;
}
.choujiangbankuai p:nth-child(2) {
    width: 330px;
    /* background-position: -638px -811px; */
    color: #5d3a18;
}
.choujiang_hint{
    width: 800px;
    margin: 45px 200px 0px 200px;
}
.choujiang_hint p{
    text-decoration: underline;
    cursor: pointer;
}
.choujiang_hint p:hover{
    text-decoration: none;
}
.cj1 {
    width: 1200px;
    height: 88px;
    position: absolute;
    top: 392px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.cj1 div {
    width: 336px;
    height: 88px;
    margin: 0px 16px;
    cursor: pointer;
}



.shengming {
    width: 290px;
    height: 192px;
    margin-left: 270px;
    text-align: center;
    color: white;
    line-height: 24px;
    margin-top: 36px;
}

.shengming p {
    margin-bottom: 7px;
}

.mingdankuang {
    width: 422px;
    height: 192px;
    overflow: hidden;
    position: relative;
    left: 80px;
    top: 30px;
}

.mingdan {
    width: 100%;
    height: auto;
    transition: .3s;
    color: white;
    text-align: center;
    line-height: 1;
    position: relative;
    /* animation-duration: 70s;
    animation-name: one;
    animation-iteration-count: infinite; */
}

.zancun_right:hover .mingdan {
    animation-play-state: paused;
}

@keyframes one {
    0% {
        transition: .3s;
        top: 0px;
    }

    1% {
        transition: .5s;
        top: 0px;
    }

    98% {
        transition: .5s;
        top: -2000px;
    }

    99% {
        transition: none;
        top: -2000px;
    }

    100% {
        transition: none;
        top: 0px;
    }
}

.jifen {
    position: absolute;
    right: 0;
    bottom: -20px;
    width: 232px;
    height: 160px;
}

.jifen:hover .jifen_bk {
    z-index: 9;
    display: flex;
    justify-content: center;
    align-items: center;
}

.jifen_bk {
    width: 369px;
    height: 190px;
    position: absolute;
    left: -369px;
    top: -20px;
    background: url(@/assets/game5Img/积分背景.png);
    background-size: 100% auto;
    z-index: -1;
    display: none;

}

.jifen_bk p {
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: space-between;
    color: #453DAA;
    font-size: 18px;
}

/* 购买提示 */
.txt_box3 {
    width: 720px;
    height: 28px;
    margin-left: 248px;
    display: flex;
    justify-content: space-evenly;
    margin-top: 4px;
}

.txt_box3 p {
    width: 302px;
    margin: 0;
    font-size: 18px;
    color: #035d81;
    text-align: center;
    line-height: 28px;
}

.txt_box3 p:nth-child(1) {
    width: 290px;
}

.txt_box3 p:nth-child(2) {
    margin-left: 14px;
}

/* 购买提示结束 */
/* 金蛇福运卡板块 */
.jin_she_fu_yun_ka {
    width: 1191px;
    height: 154px;
    position: relative;
    background: url(@/assets/game5Img/金蛇标题背景.png) no-repeat;
    margin: 25px auto 0;
    padding-left: 190px;
    padding-top: 45px;
    box-sizing: border-box;
}

.p1box1 p {
    font-size: 32px;
    text-align: left;
    font-family: "rui";
    line-height: 1;
    background-image: linear-gradient(to bottom, #ffcd6b, #ffe099, #ffe4a1);
    color: transparent;
    -webkit-background-clip: text;
    margin: 0;
}

.p1box1 span {
    font-size: 20px;
    color: #ffdd99;
    text-align: left;
    line-height: 1;
    font-family: "rui";
    display: block;
    padding-top: 10px;
}

.btn_kt {
    background: url(@/assets/game5Img/sp.png) no-repeat;
    background-position: -306px -778px;
    width: 302px;
    height: 131px;
    position: absolute;
    top: 14px;
    right: 70px;
}

.p1box1 input {
    color: #e6bd8d;
    font-size: 16px;
    background: #9d333d;
    width: 196px;
    height: 38px;
    text-align: center;
    position: absolute;
    left: 600px;
    top: 50px;
    border: none;
    outline: none;
}

.p1box1 input::placeholder {
    color: #e6bd8d;
}

/* 金蛇福运卡板块结束 */
/* 标题 */
.active_rule_title {
    background-position: -23px -130px;
    width: 978px;
    height: 57px;
    margin: 0 auto;
    display: block;
}

.active_rule_title1 {
    background: url(@/assets/game5Img/sp.png) no-repeat;
    background-position: -23px -130px;
    margin-top: 55px;
}

/* 标题结束 */
/* 暂存箱部分 */
.huojiang {
    width: 1952px;
    margin: 52px 0 0 -360px;
    height: 478px;
    box-sizing: border-box;
    /* background: url(@/assets/game5Img/one_获奖名单.png); */
    display: flex;
    justify-content: space-between;
}
.zancun_left {
    background: url(@/assets/game5Img/暂存箱左.png) no-repeat;
    width: 990px;
    height: 442px;
    box-sizing: border-box;
    padding: 0px 40px 0 425px;
    position: relative;
    z-index: 2;
}
/* 新增的暂存箱左标题 开始 */
.btit {
    text-align: center;
    font-size: 28px;
    color: #edc897;
    position: relative;
    font-weight: bold;
    margin: 0;
    margin-top: 16px;
}
.btit:before {
    background: url(@/assets/game5Img/sp3.png) no-repeat -850px -3px;
    width: 52px;
    height: 51px;
    display: inline-block;
    vertical-align: bottom;
    content: "";
    margin: 0 4px;
}
.btit:after {
    background: url(@/assets/game5Img/sp3.png) no-repeat -926px -5px;
    width: 52px;
    height: 51px;
    display: inline-block;
    vertical-align: bottom;
    content: "";
    margin: 0 4px;
}
/* 新增的暂存箱左标题 结束 */
/* 旧的暂存箱左标题 开始 */
/* .zancun_left h3 {
    background: url(@/assets/game5Img/sp.png) no-repeat;
    background-position: -115px -210px;
    width: 527px;
    height: 51px;
    margin: 0 auto;
    margin-bottom: 27px;
} */
/* 旧的暂存箱左标题 结束 */

.zancun_left img {
    width: 220px;
    margin: 0 auto;
    display: block; 
    margin-top: 16px;
}

.txt2 {
    font-size: 24px;
    color: #edc897;
    text-align: center;
    line-height: 30px;
    margin: 0;
    margin-top: -15px;
}

.txt2 em {
    color: #f3b190;
    font-style: normal
}

.zan_cun_img {
    display: block;
    background: url(@/assets/game5Img/sp3.png) no-repeat;
    background-position: -1009px 0;
    width: 188px;
    height: 67px;
    margin: 23px auto 0;
    font-family: 'rui';
    font-size: 24px;
    color: white;
    font-family: "font1";
    text-align: center;
    line-height: 78px;
    /* text-shadow: -1px -1px 0px #ffe795; */
    cursor: pointer;
}

.zancun_right {
    background: url(@/assets/game5Img/暂存箱右.png) no-repeat;
    width: 1016px;
    height: 562px;
    margin: 36px 0 0 -57px;
    position: relative;
    left: -28px;
    z-index: 1;
    box-sizing: border-box;
    padding: 26px 360px 0 112px;
}
/* 新增的暂存箱左标题 开始 */
/* 新增的暂存箱左标题 结束 */
/* 旧的暂存箱左标题 开始 */
/* .zancun_right h3 {
    background: url(@/assets/game5Img/sp.png) no-repeat;
    background-position: -660px -222px;
    width: 372px;
    height: 40px;
    margin: 0 auto;
    margin-bottom: 27px;
} */
/* 旧的暂存箱左标题 结束 */

.yulan {
    width: 544px;
    height: 340px;
    overflow: hidden;
    margin-top: 20px;
}

.mingdan {
    font-size: 18px;
    color: #fff5d8;
}
.mingdan p{
    margin: 8px;
}
/* 暂存箱部分结束 */
.jifen {
    position: absolute;
    top: 0;
}

#gai_lv_1 {
    left: 0;
}
#gai_lv_1 {
    left: 0;
    width: 230px;
    height: 168px;
}
#gai_lv_2 {
    left: 243px;
    width: 230px;
    height: 168px;
}
#gai_lv_3 {
    left: 486px;
    width: 230px;
    height: 168px;
}
#gai_lv_4 {
    left: 729px;
    width: 230px;
    height: 168px;
}
#gai_lv_5 {
    left: 972px;
    width: 230px;
    height: 168px;
}
#gai_lv_6 {
    top: 176px;
    width: 230px;
    height: 168px;
    right: 0;
}
#gai_lv_7{
    top: 176px;
    width: 230px;
    height: 168px;
    left: 0;
}
#gai_lv_8{
    top: 339px;
    width: 230px;
    height: 168px;
    right: 0;
    z-index: 4;
}
#gai_lv_9{
    top: 515px;
    width: 230px;
    height: 168px;
    left: 0;
    z-index: 4;
}
.loginbar {
    width: 1200px;
    height: 24px;
    margin: 0 auto;
    position: absolute;
    z-index: 9;
    top: 10PX;
    left: 0px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: center;
    font-size: 24px;
    color: #5d3a18;
    font-family: 'font1';
}
/* 传说辉光以及传说夜影的购买 开始 */
.sp1 {
    background: url(@/assets/game5Img/sp3.png) no-repeat;
}
.area {
    width: 1175px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
    padding-top: 60px;
}
.area a {
    width: 381px;
    height: 119px;
    display: block;
    font-size: 0;
}
.btn_buy1 {
    background-position: 0 -97px;
}
.btn_buy2 {
    background-position: -413px -97px;
}
.btn_buy3 {
    background-position: -826px -97px;
}
.btn_buy4 {
    background-position: 0 -911px;
}
.btn_buy5 {
    background-position: -310px -911px;
}
.btn_buy6 {
    background-position: -612px -911px;
}
.btn_buy7 {
    background-position: -917px -912px;
}
.areas {
    width: 1200px;
    margin: 55px auto 0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.areas a {
    width: 284px;
    height: 88px;
    display: block;
    font-size: 0;
}
.areas a strong {
    font-size: 18px;
    text-align: center;
    line-height: 1.3;
    padding-top: 92px;
    color: #5d3a18;
    display: block;
    font-style: normal;
}
.ptips {
    margin: 0;
    color: #5d3a18;
    font-size: 18px;
    line-height: 1.2;
    text-align: right;
    box-sizing: border-box;
    padding: 35px 93px 0;
}
/* 传说辉光以及传说夜影的购买 结束 */
</style>

<template>
    <!-- 登录开始 -->
    <li class="loginbar" v-if="counterStore.login_active">
        <span style="display: inline-block;height: 28.8px;line-height: 29px;">欢迎您，{{ counterStore1.qq_number }} ，{{ counterStore1.address }} {{ counterStore1.names }} </span>
        <span> 【更改绑定】</span>
        <span> 【礼包记录】</span>
        <span> 【订单列表】</span>
        <span  style="cursor: pointer;" @click="exit"> 【注销】</span>
    </li>
    <li class="loginbar" v-if="!counterStore.login_active">
        <span>亲爱的玩家，请：&nbsp;</span>
        <span style="cursor: pointer;" @click="login"> 【登录】</span>
    </li>
    <!-- 登录结束 -->
    <!-- 购买钥匙开始 -->
    <div class="area c">
        <a @click="buy_key(1)"  class="btn_buy1 sp1 ams_btn_buy" href="javascript:amsBuy(1);">10Q币购买1个复活币</a>
        <a @click="buy_key(10)" class="btn_buy2 sp1 ams_btn_buy" href="javascript:amsBuy(2);">100Q币购买10个复活币</a>
        <a @click="buy_key(50)" class="btn_buy3 sp1 ams_btn_buy" href="javascript:amsBuy(3);">100Q币购买10个复活币</a>
    </div>
    <div class="areas">
        <a class="btn_buy4 sp1 ams_btn_buy" href="javascript:amsBuyDiOther();">100Q币购买10个复活币<strong>道聚城通用代金券抵扣90Q币</strong></a>
        <a class="btn_buy5 sp1 ams_btn_buy" href="javascript:amsBuyDi();">10Q币购买1个复活币<strong>道聚城通用代金券最多抵扣9Q币</strong></a>
        <a class="btn_buy6 sp1 ams_btn_buy" href="javascript:amsBuyDiscount(1);">10Q币购买1个复活币<strong>仅限使用十连抽一折券的玩家</strong></a>
        <a class="btn_buy7 sp1 ams_btn_buy" href="javascript:TGDialogS('popdczk');">100Q币购买10个复活币<strong>仅限使用单抽折扣券的玩家</strong></a>
    </div>
    <p class="ptips">点击右侧导航栏前往【破空枪刃福利】领取折扣券</p>
    <!-- <div class="buy">
        <div @click="buy_key(1)">
            <span>10</span>
            <span>Q币</span>
            <span>
                <p>购买复活币x1</p>
                <p>赠送抽奖钥匙x1</p>
            </span>
        </div>
        <div @click="buy_key(10)">
            <span>100</span>
            <span>Q币</span>
            <span>
                <p>购买复活币x10</p>
                <p style="color: #039fff;">赠送抽奖钥匙x11</p>
            </span>
        </div>
        <div @click="buy_key(50)">
            <span>500</span>
            <span>Q币</span>
            <span>
                <p>购买复活币x50</p>
                <p>赠送抽奖钥匙x55</p>
            </span>
        </div>

        <div>
            <span>10</span>
            <span>Q币</span>
            <span>
                <p>购买复活币x1</p>
                <p>赠送抽奖钥匙x1</p>
            </span>
        </div>
        <div>
            <span>100</span>
            <span>Q币</span>
            <span>
                <p>购买复活币x10</p>
                <p style="color: #039fff;">赠送抽奖钥匙x10</p>
            </span>
        </div>
    </div> -->
    <!-- 购买钥匙结束 -->
    <!-- 购买提示开始 -->
    <!-- <div class="txt_box3">
        <p>道聚城通用代金券最多抵扣9Q币</p>
        <p>道聚城通用代金券可抵扣90Q币</p>
    </div> -->
    <!-- 购买提示结束 -->

    <!-- 金蛇福运卡板块开始 -->
    <!-- <div class="jin_she_fu_yun_ka">
        <div class="p1box1">
            <p>金蛇福运卡：特惠开卡39.9Q币</p>
            <span>赠送抽奖钥匙x5</span>
            <div class="btn_kt sp"></div>
            <input class="friendCode friendCode1" name="" placeholder="输入好友邀请码" type="text">
        </div>
    </div> -->
    <!-- 金蛇福运卡板块结束 -->
    <!-- 标题开始 -->
    <!-- <div class="active_rule_title active_rule_title1"></div> -->
    <!-- 标题结束 -->
    <!-- 抽奖板块开始 -->
    <div class="choujiang">
        <div class="jifen" id="gai_lv_1" @click="gao_gai_lv_1()"></div>
        <div class="jifen" id="gai_lv_2" @click="gao_gai_lv_2()"></div>
        <div class="jifen" id="gai_lv_3" @click="gao_gai_lv_3()"></div>
        <div class="jifen" id="gai_lv_4" @click="gao_gai_lv_4()"></div>
        <div class="jifen" id="gai_lv_5" @click="gao_gai_lv_5()"></div>
        <div class="jifen" id="gai_lv_6" @click="zheng_chang_gai_lv_1()"></div>
        <div class="jifen" id="gai_lv_8" @click="gao_gai_lv_6()"></div>
        <div class="jifen" id="gai_lv_9" @click="gao_gai_lv_7()"></div>
        <div class="jifen" id="gai_lv_7" @click="zheng_chang_gai_lv_2()"></div>
        <div class="choujiangbankuai">
            <p>我的代金券：{{ counterStore.dai_jin_quan }}</p>
            <p>剩余钥匙：{{ counterStore.chou_jiang_key }}</p>
            <div class="choujiang_hint">
                <p>查看我的折扣券</p>
                <p>代金券记录</p>
            </div>
        </div>
        <div class="shoujiangbankaui cj1">
            <div @click="choujiang(1)"></div>
            <div @click="choujiang(10)"></div>
        </div>
    </div>
    <!-- 抽奖板块结束 -->
    <div class="huojiang">
        <!-- 暂存箱 -->
        <div class="zancun_left">
            <!-- <h3></h3> -->
            <h3 class="btit">暂存箱</h3>
            <img src="@/assets/game5Img/暂存箱.png" alt="">
            <p class="txt2">抽奖获得的可分解道具进入暂存箱<br>其余道具直接发往游戏内</p>
            <p class="zan_cun_img" @click="show_zan_cun_xiang()">查看暂存箱</p>
        </div>
        <div class="zancun_right">
            <!-- <h3></h3> -->
            <h3 style="margin-top: 0px;"  class="btit">获奖名单</h3>
            <div class="yulan">
                <div class="mingdan">
                    <p>恭喜玩家330349**获得了 王者星光</p>
                    <p>恭喜玩家1456409**获得了 王者星光</p>
                    <p>恭喜玩家2535164**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家197835**获得了 传说夜影 无序列号版</p>
                    <p>恭喜玩家3136724**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家1027755**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家3529453**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1273940**获得了 王者星光</p>
                    <p>恭喜玩家382927**获得了 王者星光</p>
                    <p>恭喜玩家2072478**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家509222**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家954430**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1417439**获得了 王者星光</p>
                    <p>恭喜玩家3522557**获得了 COP-旗袍</p>
                    <p>恭喜玩家330349**获得了 王者星光</p>
                    <p>恭喜玩家1456409**获得了 王者星光</p>
                    <p>恭喜玩家2535164**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家197835**获得了 传说夜影 无序列号版</p>
                    <p>恭喜玩家3136724**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家1027755**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家3529453**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1273940**获得了 王者星光</p>
                    <p>恭喜玩家382927**获得了 王者星光</p>
                    <p>恭喜玩家2072478**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家509222**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家954430**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1417439**获得了 王者星光</p>
                    <p>恭喜玩家3522557**获得了 COP-旗袍</p>
                    <p>恭喜玩家330349**获得了 王者星光</p>
                    <p>恭喜玩家1456409**获得了 王者星光</p>
                    <p>恭喜玩家2535164**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家197835**获得了 传说夜影 无序列号版</p>
                    <p>恭喜玩家3136724**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家1027755**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家3529453**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1273940**获得了 王者星光</p>
                    <p>恭喜玩家382927**获得了 王者星光</p>
                    <p>恭喜玩家2072478**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家509222**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家954430**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1417439**获得了 王者星光</p>
                    <p>恭喜玩家3522557**获得了 COP-旗袍</p>
                    <p>恭喜玩家330349**获得了 王者星光</p>
                    <p>恭喜玩家1456409**获得了 王者星光</p>
                    <p>恭喜玩家2535164**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家197835**获得了 传说夜影 无序列号版</p>
                    <p>恭喜玩家3136724**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家1027755**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家3529453**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1273940**获得了 王者星光</p>
                    <p>恭喜玩家382927**获得了 王者星光</p>
                    <p>恭喜玩家2072478**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家509222**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家954430**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1417439**获得了 王者星光</p>
                    <p>恭喜玩家3522557**获得了 COP-旗袍</p>
                    <p>恭喜玩家330349**获得了 王者星光</p>
                    <p>恭喜玩家1456409**获得了 王者星光</p>
                    <p>恭喜玩家2535164**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家197835**获得了 传说夜影 无序列号版</p>
                    <p>恭喜玩家3136724**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家1027755**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家3529453**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1273940**获得了 王者星光</p>
                    <p>恭喜玩家382927**获得了 王者星光</p>
                    <p>恭喜玩家2072478**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家509222**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家954430**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1417439**获得了 王者星光</p>
                    <p>恭喜玩家3522557**获得了 COP-旗袍</p>
                    <p>恭喜玩家330349**获得了 王者星光</p>
                    <p>恭喜玩家1456409**获得了 王者星光</p>
                    <p>恭喜玩家2535164**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家197835**获得了 传说夜影 无序列号版</p>
                    <p>恭喜玩家3136724**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家1027755**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家3529453**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1273940**获得了 王者星光</p>
                    <p>恭喜玩家382927**获得了 王者星光</p>
                    <p>恭喜玩家2072478**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家509222**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家954430**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1417439**获得了 王者星光</p>
                    <p>恭喜玩家3522557**获得了 COP-旗袍</p>
                </div>
                <div class="mingdan">
                    <p>恭喜玩家330349**获得了 王者星光</p>
                    <p>恭喜玩家1456409**获得了 王者星光</p>
                    <p>恭喜玩家2535164**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家197835**获得了 传说夜影 无序列号版</p>
                    <p>恭喜玩家3136724**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家1027755**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家3529453**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1273940**获得了 王者星光</p>
                    <p>恭喜玩家382927**获得了 王者星光</p>
                    <p>恭喜玩家2072478**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家509222**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家954430**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1417439**获得了 王者星光</p>
                    <p>恭喜玩家3522557**获得了 COP-旗袍</p>
                    <p>恭喜玩家330349**获得了 王者星光</p>
                    <p>恭喜玩家1456409**获得了 王者星光</p>
                    <p>恭喜玩家2535164**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家197835**获得了 传说夜影 无序列号版</p>
                    <p>恭喜玩家3136724**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家1027755**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家3529453**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1273940**获得了 王者星光</p>
                    <p>恭喜玩家382927**获得了 王者星光</p>
                    <p>恭喜玩家2072478**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家509222**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家954430**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1417439**获得了 王者星光</p>
                    <p>恭喜玩家3522557**获得了 COP-旗袍</p>
                    <p>恭喜玩家330349**获得了 王者星光</p>
                    <p>恭喜玩家1456409**获得了 王者星光</p>
                    <p>恭喜玩家2535164**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家197835**获得了 传说夜影 无序列号版</p>
                    <p>恭喜玩家3136724**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家1027755**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家3529453**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1273940**获得了 王者星光</p>
                    <p>恭喜玩家382927**获得了 王者星光</p>
                    <p>恭喜玩家2072478**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家509222**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家954430**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1417439**获得了 王者星光</p>
                    <p>恭喜玩家3522557**获得了 COP-旗袍</p>
                    <p>恭喜玩家330349**获得了 王者星光</p>
                    <p>恭喜玩家1456409**获得了 王者星光</p>
                    <p>恭喜玩家2535164**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家197835**获得了 传说夜影 无序列号版</p>
                    <p>恭喜玩家3136724**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家1027755**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家3529453**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1273940**获得了 王者星光</p>
                    <p>恭喜玩家382927**获得了 王者星光</p>
                    <p>恭喜玩家2072478**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家509222**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家954430**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1417439**获得了 王者星光</p>
                    <p>恭喜玩家3522557**获得了 COP-旗袍</p>
                    <p>恭喜玩家330349**获得了 王者星光</p>
                    <p>恭喜玩家1456409**获得了 王者星光</p>
                    <p>恭喜玩家2535164**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家197835**获得了 传说夜影 无序列号版</p>
                    <p>恭喜玩家3136724**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家1027755**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家3529453**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1273940**获得了 王者星光</p>
                    <p>恭喜玩家382927**获得了 王者星光</p>
                    <p>恭喜玩家2072478**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家509222**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家954430**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1417439**获得了 王者星光</p>
                    <p>恭喜玩家3522557**获得了 COP-旗袍</p>
                    <p>恭喜玩家330349**获得了 王者星光</p>
                    <p>恭喜玩家1456409**获得了 王者星光</p>
                    <p>恭喜玩家2535164**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家197835**获得了 传说夜影 无序列号版</p>
                    <p>恭喜玩家3136724**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家1027755**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家3529453**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1273940**获得了 王者星光</p>
                    <p>恭喜玩家382927**获得了 王者星光</p>
                    <p>恭喜玩家2072478**获得了 裁决-流光秘银皮肤</p>
                    <p>恭喜玩家509222**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家954430**获得了 QBZ03-金色蔷薇音效卡</p>
                    <p>恭喜玩家1417439**获得了 王者星光</p>
                    <p>恭喜玩家3522557**获得了 COP-旗袍</p>
                </div>
            </div>
        </div>
        <!-- 暂存箱结束 -->
    </div>
</template>

<script setup>
import { ref,computed } from "vue";
import { useCounterStore,useCounterStore1,useCounterStore2 } from "@/store/counter"; // 确保路径正确
import { watch } from "vue";
const counterStore = useCounterStore();
const counterStore1 = useCounterStore1();
const counterStore2 = useCounterStore2();
console.log(counterStore1.qq_number);

//qq号
//大区
//名字
const qq_number = computed(() => counterStore.qq_number);
const address = computed(() => counterStore.address);
const names = computed(() => counterStore.names);
function login() {
    counterStore.login_div_display = "login";
}
function exit() {
    counterStore.login_active = false;
    counterStore.login_div_display = "login";
    //抽奖钥匙
    counterStore.chou_jiang_key = 0;
    //星辰币
    counterStore.ji_fen = 0;
    //竞界宝箱
    counterStore.jing_jie_bao_xiang = 0;
    //竞界值
    counterStore.jing_jie_zhi = 0;
    //万能碎片
    counterStore.wan_neng_sui_pian = 0;
    counterStore.zan_cun_xiang=[];
}
//渲染钥匙数值
let key = ref(0);
key.value = counterStore.chou_jiang_key;
watch(() => counterStore.chou_jiang_key, (newVal) => {
    key.value = newVal;
});
//渲染代金券数值
let daijinquan = ref(0);
daijinquan.value = counterStore.dai_jin_quan;
watch(() => counterStore.dai_jin_quan, (newVal) => {
    daijinquan.value = newVal;
});

//买钥匙
function buy_key(num) {
    if (!counterStore.login_active) {
        counterStore.login_div_display = "login";
    } else {
        if (num == 1) {
            // counterStore.jia_zai_active = true;
            setTimeout(() => {
                counterStore.buy_jiazai_active1 = true;
                
                setTimeout(()=>{
                    counterStore.buy_jiazai_active2 = true;
                    counterStore.buy_jiazai_active1 = false;
                    setTimeout(() => {
                    counterStore.buy_jiazai_active2 = false;
                }, 500);
                },600)
                
                // counterStore.jia_zai_active = false;
                counterStore.buy_active = true;
                counterStore.buy_type = "buy10"
                setTimeout(() => {
                    counterStore.buy_type = '';
                })
            }, 700)
        }
        if (num == 10) {
            // counterStore.jia_zai_active = true;
            setTimeout(() => {
                counterStore.buy_jiazai_active1 = true;
                
                setTimeout(()=>{
                    counterStore.buy_jiazai_active2 = true;
                    counterStore.buy_jiazai_active1 = false;
                    setTimeout(() => {
                    counterStore.buy_jiazai_active2 = false;
                }, 500);
                },600)
                
                // counterStore.jia_zai_active = false;
                counterStore.buy_active = true;
                counterStore.buy_type = "buy100"
                setTimeout(() => {
                    counterStore.buy_type = '';
                })
            }, 700)
        }
        if (num == 50) {
            // counterStore.jia_zai_active = true;
            setTimeout(() => {
                counterStore.buy_jiazai_active1 = true;
                setTimeout(()=>{
                    counterStore.buy_jiazai_active2 = true;
                    counterStore.buy_jiazai_active1 = false;
                    setTimeout(() => {
                    counterStore.buy_jiazai_active2 = false;
                }, 500);
                },600)
               
                // counterStore.jia_zai_active = false;
                counterStore.buy_active = true;
                counterStore.buy_type = "buy500"
                setTimeout(() => {
                    counterStore.buy_type = '';
                })
            }, 700)
        }
    }
}
//加载动画

//抽奖
function choujiang(num) {
    if (!counterStore.login_active) {
        counterStore.login_div_display = "login";
    } else {
        if (counterStore.chou_jiang_key >= num) {
            counterStore.chou_jiang_key -= num;
            if (num == 1) {
                counterStore.chou_jiang_active = '单抽';
                let gai_lv = ref(generateRandomNumber());
                // console.log(gai_lv.value);
                dan_chou_xuan_ze_qi(gai_lv.value)
                counterStore.jia_zai_active = true;
                setTimeout(() => {
                    counterStore.chou_jiang_active = '';
                    counterStore.jia_zai_active = false;
                    counterStore.danchou_active = true;
                }, 500)

            } else {
                counterStore.chou_jiang_active = '十抽';
                for (let i = 0; i < 10; i++) {
                    let gai_lv = ref(generateRandomNumber());
                    dan_chou_xuan_ze_qi(gai_lv.value);
                    // console.log("十抽执行");
                    counterStore.jia_zai_active = true;
                    setTimeout(() => {
                        counterStore.chou_jiang_active = '';
                        counterStore.jia_zai_active = false;
                        counterStore.shichou_active = true;
                    }, 500)
                }
            }
        } else {
            counterStore.systems = true;
            counterStore.systems_message = "抱歉，您的抽奖钥匙不足";
        }

    }
}
//查看代金券记录
function show_dai_jin_quan_ji_lu() {
    if (!counterStore.login_active) {
        counterStore.login_div_display = "login";
    } else {
        // counterStore.gailv1 = 10000; 
    }
}
//查看暂存箱
function show_zan_cun_xiang() {
    if (!counterStore.login_active) {
        counterStore.login_div_display = "login";
    } else {
        counterStore.jia_zai_active = true;

        setTimeout(() => {
            counterStore.jia_zai_active = false;
            counterStore.zan_cun_xiang_active = true;
        }, 200)

    }
}
//获取概率的函数
function generateRandomNumber() {
    return Math.floor(Math.random() * 10000) + 1;
}
//单抽选择器
let result1 = ref(counterStore.gailv1);
let result2 = ref(counterStore.gailv2 + result1.value);
let result3 = ref(counterStore.gailv3 + result2.value);
let result4 = ref(counterStore.gailv4 + result3.value);
let result5 = ref(counterStore.gailv5 + result4.value);
let result6 = ref(counterStore.gailv6 + result5.value);
let result7 = ref(counterStore.gailv7 + result6.value);
let result8 = ref(counterStore.gailv8 + result7.value);
let result9 = ref(counterStore.gailv9 + result8.value);
let result10 = ref(counterStore.gailv10 + result9.value);
let result11 = ref(counterStore.gailv11 + result10.value);
let result12 = ref(counterStore.gailv12 + result11.value);
let result13 = ref(counterStore.gailv13 + result12.value);
let result14 = ref(counterStore.gailv14 + result13.value);
let result15 = ref(counterStore.gailv15 + result14.value);
let result16 = ref(counterStore.gailv16 + result15.value);



function gao_gai_lv_1() {
    counterStore.gailv1 = counterStore1.set_gai_lv;
    counterStore.gailv2 = 10;
    counterStore.gailv3 = 25;
    counterStore.gailv4 = 25;
    counterStore.gailv5 = 30;
    counterStore.gailv9 = 100;
    counterStore.gailv10 = 120;
    counterStore.gailv16 = 4000 - (counterStore.gailv1 - 10);
    console.log("--------------------------------------------");
    console.log("当前传说辉光的概率为3%");
    console.log("当前传说夜影的概率为0.1%");
    console.log("当前王者星光的概率为0.25%");
    console.log("当前关小雨的概率为0.25%");
    console.log("当前金色蔷薇音效卡的概率为0.3%");
    console.log("当前屠龙的概率为1%");
    console.log("当前天使灵狐玩偶的概率为1.2%");
    console.log("当前概率综合为"+(result16.value/100)+"%");
    console.log("--------------------------------------------");
}
function gao_gai_lv_2() {
    counterStore.gailv1 = 10;
    counterStore.gailv2 = 300;
    counterStore.gailv3 = 25;
    counterStore.gailv4 = 25;
    counterStore.gailv5 = 30;
    counterStore.gailv9 = 100;
    counterStore.gailv10 = 120;
    counterStore.gailv16 = 4000 - (counterStore.gailv2 - 10);
    console.log("--------------------------------------------");
    console.log("当前传说辉光的概率为0.1%");
    console.log("当前传说夜影的概率为3%");
    console.log("当前王者星光的概率为0.25%");
    console.log("当前关小雨的概率为0.25%");
    console.log("当前金色蔷薇音效卡的概率为0.3%");
    console.log("当前屠龙的概率为1%");
    console.log("当前天使灵狐玩偶的概率为1.2%");
    console.log("当前概率综合为"+(result16.value/100)+"%");
    console.log("--------------------------------------------");
}
function gao_gai_lv_3() {
    counterStore.gailv1 = 10;
    counterStore.gailv2 = 10;
    counterStore.gailv3 = 300;
    counterStore.gailv4 = 25;
    counterStore.gailv5 = 30;
    counterStore.gailv9 = 100;
    counterStore.gailv10 = 120;
    counterStore.gailv16 = 4000 - (counterStore.gailv3 - 25);
    console.log("--------------------------------------------");
    console.log("当前传说辉光的概率0.1%");
    console.log("当前传说夜影的概率为0.1%");
    console.log("当前王者星光的概率为3%");
    console.log("当前关小雨的概率为0.25%");
    console.log("当前金色蔷薇音效卡的概率为0.3%");
    console.log("当前屠龙的概率为1%");
    console.log("当前天使灵狐玩偶的概率为1.2%");
    console.log("当前概率综合为"+(result16.value/100)+"%");
    console.log("--------------------------------------------");
}
function gao_gai_lv_4() {
    counterStore.gailv1 = 10;
    counterStore.gailv2 = 10;
    counterStore.gailv3 = 25;
    counterStore.gailv4 = 300;
    counterStore.gailv5 = 30;
    counterStore.gailv9 = 100;
    counterStore.gailv10 = 120;
    counterStore.gailv16 = 4000 - (counterStore.gailv4 - 25);
    console.log("--------------------------------------------");
    console.log("当前传说辉光的概率为0.1%");
    console.log("当前传说夜影的概率为0.1%");
    console.log("当前王者星光的概率为0.25%");
    console.log("当前关小雨的概率为3%");
    console.log("当前金色蔷薇音效卡的概率为0.3%");
    console.log("当前屠龙的概率为1%");
    console.log("当前天使灵狐玩偶的概率为1.2%");
    console.log("当前概率综合为"+(result16.value/100)+"%");
    console.log("--------------------------------------------");
}
function gao_gai_lv_5() {
    counterStore.gailv1 = 10;
    counterStore.gailv2 = 10;
    counterStore.gailv3 = 25;
    counterStore.gailv4 = 25;
    counterStore.gailv5 = 300;
    counterStore.gailv9 = 100;
    counterStore.gailv10 = 120;
    counterStore.gailv16 = 4000 - (counterStore.gailv5 - 30);
    console.log("--------------------------------------------");
    console.log("当前传说辉光的概率为0.1%");
    console.log("当前传说夜影的概率为0.1%");
    console.log("当前王者星光的概率为0.25%");
    console.log("当前关小雨的概率为0.25%");
    console.log("当前金色蔷薇音效卡的概率为3%");
    console.log("当前屠龙的概率为1%");
    console.log("当前天使灵狐玩偶的概率为1.2%");
    console.log("当前概率综合为"+(result16.value/100)+"%");
    console.log("--------------------------------------------");
}
function gao_gai_lv_6() {
    counterStore.gailv1 = 10;
    counterStore.gailv2 = 10;
    counterStore.gailv3 = 25;
    counterStore.gailv4 = 25;
    counterStore.gailv5 = 30;
    counterStore.gailv9 = 300;
    counterStore.gailv10 = 120;
    counterStore.gailv16 = 4000 - (counterStore.gailv9 - 100);
    console.log("--------------------------------------------");
    console.log("当前传说辉光的概率为0.1%");
    console.log("当前传说夜影的概率为0.1%");
    console.log("当前王者星光的概率为0.25%");
    console.log("当前关小雨的概率为0.25%");
    console.log("当前金色蔷薇音效卡的概率为0.3%");
    console.log("当前屠龙的概率为3%");
    console.log("当前天使灵狐玩偶的概率为1.2%");
    console.log("当前概率综合为"+(result16.value/100)+"%");
    console.log("--------------------------------------------");
}
function gao_gai_lv_7() {
    counterStore.gailv1 = 10;
    counterStore.gailv2 = 10;
    counterStore.gailv3 = 25;
    counterStore.gailv4 = 25;
    counterStore.gailv5 = 30;
    counterStore.gailv9 = 100;
    counterStore.gailv10 = 300;
    counterStore.gailv16 = 4000 - (counterStore.gailv10 - 120);
    console.log("--------------------------------------------");
    console.log("当前传说辉光的概率为0.1%");
    console.log("当前传说夜影的概率为0.1%");
    console.log("当前王者星光的概率为0.25%");
    console.log("当前关小雨的概率为0.25%");
    console.log("当前金色蔷薇音效卡的概率为0.3%");
    console.log("当前屠龙的概率为1%");
    console.log("当前天使灵狐玩偶的概率为3%");
    console.log("当前概率综合为"+(result16.value/100)+"%");
    console.log("--------------------------------------------");
}
function zheng_chang_gai_lv_1() {
    counterStore.gailv1 = 10;
    counterStore.gailv2 = 10;
    counterStore.gailv3 = 25;
    counterStore.gailv4 = 25;
    counterStore.gailv5 = 30;
    counterStore.gailv9 = 100;
    counterStore.gailv10 = 120;
    counterStore.gailv16 = 4000;
    console.log("--------------------------------------------");
    console.log("当前传说辉光的概率为0.1%");
    console.log("当前传说夜影的概率为0.1%");
    console.log("当前王者星光的概率为0.25%");
    console.log("当前关小雨的概率为0.25%");
    console.log("当前金色蔷薇音效卡的概率为0.3%");
    console.log("当前屠龙的概率为1%");
    console.log("当前天使灵狐玩偶的概率为1.2%");
    console.log("当前概率综合为"+(result16.value/100)+"%");
    console.log("--------------------------------------------");
}
function zheng_chang_gai_lv_2() {
    counterStore.gailv1 = 0;
    counterStore.gailv2 = 0;
    counterStore.gailv3 = 0;
    counterStore.gailv4 = 0;
    counterStore.gailv5 = 0;
    counterStore.gailv9 = 100;
    counterStore.gailv10 = 120;
    counterStore.gailv16 = 4100;
    console.log("--------------------------------------------");
    console.log("当前传说辉光的概率为0%");
    console.log("当前传说夜影的概率为0%");
    console.log("当前王者星光的概率为0%");
    console.log("当前关小雨的概率为0%");
    console.log("当前金色蔷薇音效卡的概率为0%");
    console.log("当前屠龙的概率为1%");
    console.log("当前天使灵狐玩偶的概率为1.2%");
    console.log("当前概率综合为"+(result16.value/100)+"%");
    console.log("--------------------------------------------");
}
watch(() => counterStore.gailv1, (newVal) => {
    result1.value = counterStore.gailv1;
    // console.log("数值总和为"+result1.value+result2.value+result3.value+result4.value+result5.value+result6.value+result7.value+result8.value+result9.value+result10.value+result11.value+result12.value+result13.value+result14.value+result15.value+result16.value+result17.value+result18.value+result19.value);
    result2.value = counterStore.gailv2 + result1.value
    result3.value = counterStore.gailv3 + result2.value
    result4.value = counterStore.gailv4 + result3.value
    result5.value = counterStore.gailv5 + result4.value
    result6.value = counterStore.gailv6 + result5.value
    result7.value = counterStore.gailv7 + result6.value
    result8.value = counterStore.gailv8 + result7.value
    result9.value = counterStore.gailv9 + result8.value
    result10.value = counterStore.gailv10 + result9.value
    result11.value = counterStore.gailv11 + result10.value
    result12.value = counterStore.gailv12 + result11.value
    result13.value = counterStore.gailv13 + result12.value
    result14.value = counterStore.gailv14 + result13.value
    result15.value = counterStore.gailv15 + result14.value
    result16.value = counterStore.gailv16 + result15.value
    
});
watch(() => counterStore.gailv2, (newVal) => {
    result1.value = counterStore.gailv1;
    result2.value = counterStore.gailv2 + result1.value
    result3.value = counterStore.gailv3 + result2.value
    result4.value = counterStore.gailv4 + result3.value
    result5.value = counterStore.gailv5 + result4.value
    result6.value = counterStore.gailv6 + result5.value
    result7.value = counterStore.gailv7 + result6.value
    result8.value = counterStore.gailv8 + result7.value
    result9.value = counterStore.gailv9 + result8.value
    result10.value = counterStore.gailv10 + result9.value
    result11.value = counterStore.gailv11 + result10.value
    result12.value = counterStore.gailv12 + result11.value
    result13.value = counterStore.gailv13 + result12.value
    result14.value = counterStore.gailv14 + result13.value
    result15.value = counterStore.gailv15 + result14.value
    result16.value = counterStore.gailv16 + result15.value
    
});
watch(() => counterStore.gailv3, (newVal) => {
    result1.value = counterStore.gailv1;
    result2.value = counterStore.gailv2 + result1.value
    result3.value = counterStore.gailv3 + result2.value
    result4.value = counterStore.gailv4 + result3.value
    result5.value = counterStore.gailv5 + result4.value
    result6.value = counterStore.gailv6 + result5.value
    result7.value = counterStore.gailv7 + result6.value
    result8.value = counterStore.gailv8 + result7.value
    result9.value = counterStore.gailv9 + result8.value
    result10.value = counterStore.gailv10 + result9.value
    result11.value = counterStore.gailv11 + result10.value
    result12.value = counterStore.gailv12 + result11.value
    result13.value = counterStore.gailv13 + result12.value
    result14.value = counterStore.gailv14 + result13.value
    result15.value = counterStore.gailv15 + result14.value
    result16.value = counterStore.gailv16 + result15.value
    
});
watch(() => counterStore.gailv4, (newVal) => {
    result1.value = counterStore.gailv1;
    result2.value = counterStore.gailv2 + result1.value
    result3.value = counterStore.gailv3 + result2.value
    result4.value = counterStore.gailv4 + result3.value
    result5.value = counterStore.gailv5 + result4.value
    result6.value = counterStore.gailv6 + result5.value
    result7.value = counterStore.gailv7 + result6.value
    result8.value = counterStore.gailv8 + result7.value
    result9.value = counterStore.gailv9 + result8.value
    result10.value = counterStore.gailv10 + result9.value
    result11.value = counterStore.gailv11 + result10.value
    result12.value = counterStore.gailv12 + result11.value
    result13.value = counterStore.gailv13 + result12.value
    result14.value = counterStore.gailv14 + result13.value
    result15.value = counterStore.gailv15 + result14.value
    result16.value = counterStore.gailv16 + result15.value
    
});
watch(() => counterStore.gailv5, (newVal) => {
    result1.value = counterStore.gailv1;
    result2.value = counterStore.gailv2 + result1.value
    result3.value = counterStore.gailv3 + result2.value
    result4.value = counterStore.gailv4 + result3.value
    result5.value = counterStore.gailv5 + result4.value
    result6.value = counterStore.gailv6 + result5.value
    result7.value = counterStore.gailv7 + result6.value
    result8.value = counterStore.gailv8 + result7.value
    result9.value = counterStore.gailv9 + result8.value
    result10.value = counterStore.gailv10 + result9.value
    result11.value = counterStore.gailv11 + result10.value
    result12.value = counterStore.gailv12 + result11.value
    result13.value = counterStore.gailv13 + result12.value
    result14.value = counterStore.gailv14 + result13.value
    result15.value = counterStore.gailv15 + result14.value
    result16.value = counterStore.gailv16 + result15.value
    
});
watch(() => counterStore.gailv6, (newVal) => {
    result1.value = counterStore.gailv1;
    result2.value = counterStore.gailv2 + result1.value
    result3.value = counterStore.gailv3 + result2.value
    result4.value = counterStore.gailv4 + result3.value
    result5.value = counterStore.gailv5 + result4.value
    result6.value = counterStore.gailv6 + result5.value
    result7.value = counterStore.gailv7 + result6.value
    result8.value = counterStore.gailv8 + result7.value
    result9.value = counterStore.gailv9 + result8.value
    result10.value = counterStore.gailv10 + result9.value
    result11.value = counterStore.gailv11 + result10.value
    result12.value = counterStore.gailv12 + result11.value
    result13.value = counterStore.gailv13 + result12.value
    result14.value = counterStore.gailv14 + result13.value
    result15.value = counterStore.gailv15 + result14.value
    result16.value = counterStore.gailv16 + result15.value
});
watch(() => counterStore.gailv7, (newVal) => {
    result1.value = counterStore.gailv1;
    result2.value = counterStore.gailv2 + result1.value
    result3.value = counterStore.gailv3 + result2.value
    result4.value = counterStore.gailv4 + result3.value
    result5.value = counterStore.gailv5 + result4.value
    result6.value = counterStore.gailv6 + result5.value
    result7.value = counterStore.gailv7 + result6.value
    result8.value = counterStore.gailv8 + result7.value
    result9.value = counterStore.gailv9 + result8.value
    result10.value = counterStore.gailv10 + result9.value
    result11.value = counterStore.gailv11 + result10.value
    result12.value = counterStore.gailv12 + result11.value
    result13.value = counterStore.gailv13 + result12.value
    result14.value = counterStore.gailv14 + result13.value
    result15.value = counterStore.gailv15 + result14.value
    result16.value = counterStore.gailv16 + result15.value
});
watch(() => counterStore.gailv8, (newVal) => {
    result1.value = counterStore.gailv1;
    result2.value = counterStore.gailv2 + result1.value
    result3.value = counterStore.gailv3 + result2.value
    result4.value = counterStore.gailv4 + result3.value
    result5.value = counterStore.gailv5 + result4.value
    result6.value = counterStore.gailv6 + result5.value
    result7.value = counterStore.gailv7 + result6.value
    result8.value = counterStore.gailv8 + result7.value
    result9.value = counterStore.gailv9 + result8.value
    result10.value = counterStore.gailv10 + result9.value
    result11.value = counterStore.gailv11 + result10.value
    result12.value = counterStore.gailv12 + result11.value
    result13.value = counterStore.gailv13 + result12.value
    result14.value = counterStore.gailv14 + result13.value
    result15.value = counterStore.gailv15 + result14.value
    result16.value = counterStore.gailv16 + result15.value
});
watch(() => counterStore.gailv9, (newVal) => {
    result1.value = counterStore.gailv1;
    result2.value = counterStore.gailv2 + result1.value
    result3.value = counterStore.gailv3 + result2.value
    result4.value = counterStore.gailv4 + result3.value
    result5.value = counterStore.gailv5 + result4.value
    result6.value = counterStore.gailv6 + result5.value
    result7.value = counterStore.gailv7 + result6.value
    result8.value = counterStore.gailv8 + result7.value
    result9.value = counterStore.gailv9 + result8.value
    result10.value = counterStore.gailv10 + result9.value
    result11.value = counterStore.gailv11 + result10.value
    result12.value = counterStore.gailv12 + result11.value
    result13.value = counterStore.gailv13 + result12.value
    result14.value = counterStore.gailv14 + result13.value
    result15.value = counterStore.gailv15 + result14.value
    result16.value = counterStore.gailv16 + result15.value
});
watch(() => counterStore.gailv10, (newVal) => {
    result1.value = counterStore.gailv1;
    result2.value = counterStore.gailv2 + result1.value
    result3.value = counterStore.gailv3 + result2.value
    result4.value = counterStore.gailv4 + result3.value
    result5.value = counterStore.gailv5 + result4.value
    result6.value = counterStore.gailv6 + result5.value
    result7.value = counterStore.gailv7 + result6.value
    result8.value = counterStore.gailv8 + result7.value
    result9.value = counterStore.gailv9 + result8.value
    result10.value = counterStore.gailv10 + result9.value
    result11.value = counterStore.gailv11 + result10.value
    result12.value = counterStore.gailv12 + result11.value
    result13.value = counterStore.gailv13 + result12.value
    result14.value = counterStore.gailv14 + result13.value
    result15.value = counterStore.gailv15 + result14.value
    result16.value = counterStore.gailv16 + result15.value
});
watch(() => counterStore.gailv11, (newVal) => {
    result1.value = counterStore.gailv1;
    result2.value = counterStore.gailv2 + result1.value
    result3.value = counterStore.gailv3 + result2.value
    result4.value = counterStore.gailv4 + result3.value
    result5.value = counterStore.gailv5 + result4.value
    result6.value = counterStore.gailv6 + result5.value
    result7.value = counterStore.gailv7 + result6.value
    result8.value = counterStore.gailv8 + result7.value
    result9.value = counterStore.gailv9 + result8.value
    result10.value = counterStore.gailv10 + result9.value
    result11.value = counterStore.gailv11 + result10.value
    result12.value = counterStore.gailv12 + result11.value
    result13.value = counterStore.gailv13 + result12.value
    result14.value = counterStore.gailv14 + result13.value
    result15.value = counterStore.gailv15 + result14.value
    result16.value = counterStore.gailv16 + result15.value
});
watch(() => counterStore.gailv12, (newVal) => {
    result1.value = counterStore.gailv1;
    result2.value = counterStore.gailv2 + result1.value
    result3.value = counterStore.gailv3 + result2.value
    result4.value = counterStore.gailv4 + result3.value
    result5.value = counterStore.gailv5 + result4.value
    result6.value = counterStore.gailv6 + result5.value
    result7.value = counterStore.gailv7 + result6.value
    result8.value = counterStore.gailv8 + result7.value
    result9.value = counterStore.gailv9 + result8.value
    result10.value = counterStore.gailv10 + result9.value
    result11.value = counterStore.gailv11 + result10.value
    result12.value = counterStore.gailv12 + result11.value
    result13.value = counterStore.gailv13 + result12.value
    result14.value = counterStore.gailv14 + result13.value
    result15.value = counterStore.gailv15 + result14.value
    result16.value = counterStore.gailv16 + result15.value
});
watch(() => counterStore.gailv13, (newVal) => {
    result1.value = counterStore.gailv1;
    result2.value = counterStore.gailv2 + result1.value
    result3.value = counterStore.gailv3 + result2.value
    result4.value = counterStore.gailv4 + result3.value
    result5.value = counterStore.gailv5 + result4.value
    result6.value = counterStore.gailv6 + result5.value
    result7.value = counterStore.gailv7 + result6.value
    result8.value = counterStore.gailv8 + result7.value
    result9.value = counterStore.gailv9 + result8.value
    result10.value = counterStore.gailv10 + result9.value
    result11.value = counterStore.gailv11 + result10.value
    result12.value = counterStore.gailv12 + result11.value
    result13.value = counterStore.gailv13 + result12.value
    result14.value = counterStore.gailv14 + result13.value
    result15.value = counterStore.gailv15 + result14.value
    result16.value = counterStore.gailv16 + result15.value
});
watch(() => counterStore.gailv14, (newVal) => {
    result1.value = counterStore.gailv1;
    result2.value = counterStore.gailv2 + result1.value
    result3.value = counterStore.gailv3 + result2.value
    result4.value = counterStore.gailv4 + result3.value
    result5.value = counterStore.gailv5 + result4.value
    result6.value = counterStore.gailv6 + result5.value
    result7.value = counterStore.gailv7 + result6.value
    result8.value = counterStore.gailv8 + result7.value
    result9.value = counterStore.gailv9 + result8.value
    result10.value = counterStore.gailv10 + result9.value
    result11.value = counterStore.gailv11 + result10.value
    result12.value = counterStore.gailv12 + result11.value
    result13.value = counterStore.gailv13 + result12.value
    result14.value = counterStore.gailv14 + result13.value
    result15.value = counterStore.gailv15 + result14.value
    result16.value = counterStore.gailv16 + result15.value
});
watch(() => counterStore.gailv15, (newVal) => {
    result1.value = counterStore.gailv1;
    result2.value = counterStore.gailv2 + result1.value
    result3.value = counterStore.gailv3 + result2.value
    result4.value = counterStore.gailv4 + result3.value
    result5.value = counterStore.gailv5 + result4.value
    result6.value = counterStore.gailv6 + result5.value
    result7.value = counterStore.gailv7 + result6.value
    result8.value = counterStore.gailv8 + result7.value
    result9.value = counterStore.gailv9 + result8.value
    result10.value = counterStore.gailv10 + result9.value
    result11.value = counterStore.gailv11 + result10.value
    result12.value = counterStore.gailv12 + result11.value
    result13.value = counterStore.gailv13 + result12.value
    result14.value = counterStore.gailv14 + result13.value
    result15.value = counterStore.gailv15 + result14.value
    result16.value = counterStore.gailv16 + result15.value
});
watch(() => counterStore.gailv16, (newVal) => {
    result1.value = counterStore.gailv1;
    result2.value = counterStore.gailv2 + result1.value
    result3.value = counterStore.gailv3 + result2.value
    result4.value = counterStore.gailv4 + result3.value
    result5.value = counterStore.gailv5 + result4.value
    result6.value = counterStore.gailv6 + result5.value
    result7.value = counterStore.gailv7 + result6.value
    result8.value = counterStore.gailv8 + result7.value
    result9.value = counterStore.gailv9 + result8.value
    result10.value = counterStore.gailv10 + result9.value
    result11.value = counterStore.gailv11 + result10.value
    result12.value = counterStore.gailv12 + result11.value
    result13.value = counterStore.gailv13 + result12.value
    result14.value = counterStore.gailv14 + result13.value
    result15.value = counterStore.gailv15 + result14.value
    result16.value = counterStore.gailv16 + result15.value
});
watch(() => counterStore.gailv17, (newVal) => {
    result1.value = counterStore.gailv1;
    result2.value = counterStore.gailv2 + result1.value
    result3.value = counterStore.gailv3 + result2.value
    result4.value = counterStore.gailv4 + result3.value
    result5.value = counterStore.gailv5 + result4.value
    result6.value = counterStore.gailv6 + result5.value
    result7.value = counterStore.gailv7 + result6.value
    result8.value = counterStore.gailv8 + result7.value
    result9.value = counterStore.gailv9 + result8.value
    result10.value = counterStore.gailv10 + result9.value
    result11.value = counterStore.gailv11 + result10.value
    result12.value = counterStore.gailv12 + result11.value
    result13.value = counterStore.gailv13 + result12.value
    result14.value = counterStore.gailv14 + result13.value
    result15.value = counterStore.gailv15 + result14.value
    result16.value = counterStore.gailv16 + result15.value
});
watch(() => counterStore.gailv18, (newVal) => {
    result1.value = counterStore.gailv1;
    result2.value = counterStore.gailv2 + result1.value
    result3.value = counterStore.gailv3 + result2.value
    result4.value = counterStore.gailv4 + result3.value
    result5.value = counterStore.gailv5 + result4.value
    result6.value = counterStore.gailv6 + result5.value
    result7.value = counterStore.gailv7 + result6.value
    result8.value = counterStore.gailv8 + result7.value
    result9.value = counterStore.gailv9 + result8.value
    result10.value = counterStore.gailv10 + result9.value
    result11.value = counterStore.gailv11 + result10.value
    result12.value = counterStore.gailv12 + result11.value
    result13.value = counterStore.gailv13 + result12.value
    result14.value = counterStore.gailv14 + result13.value
    result15.value = counterStore.gailv15 + result14.value
    result16.value = counterStore.gailv16 + result15.value
});
watch(() => counterStore.gailv19, (newVal) => {
    result1.value = counterStore.gailv1;
    result2.value = counterStore.gailv2 + result1.value
    result3.value = counterStore.gailv3 + result2.value
    result4.value = counterStore.gailv4 + result3.value
    result5.value = counterStore.gailv5 + result4.value
    result6.value = counterStore.gailv6 + result5.value
    result7.value = counterStore.gailv7 + result6.value
    result8.value = counterStore.gailv8 + result7.value
    result9.value = counterStore.gailv9 + result8.value
    result10.value = counterStore.gailv10 + result9.value
    result11.value = counterStore.gailv11 + result10.value
    result12.value = counterStore.gailv12 + result11.value
    result13.value = counterStore.gailv13 + result12.value
    result14.value = counterStore.gailv14 + result13.value
    result15.value = counterStore.gailv15 + result14.value
    result16.value = counterStore.gailv16 + result15.value
});
let result_text = ref("");
let data = counterStore.xiang_data;
// 暴露 data 给 setup
defineExpose({ data });
watch(() => counterStore.xiang_data, (newVal) => {
    data = newVal;
}, {
    deep: true
});
function dan_chou_xuan_ze_qi(num) {
    // Kar98K-星神	0.2%
    let danchou_object = {
        text: "",
        bao_cun_to_cang_ku: "[领取]",
        fen_jie: "[分解]"
    };
    if (num <= result1.value) {
        console.log("当前出货的概率为" + result1.value);
        counterStore.dan_chou_text = "传说辉光 无序列号版";
        result_text.value = "传说辉光 无序列号版"
        danchou_object.text = "传说辉光 无序列号版"
        counterStore.xiang_data.push(danchou_object);
    }
// 星际战将	0.25%
    if (num <= result2.value && num > result1.value) {
        counterStore.dan_chou_text = "传说夜影 无序列号版";
        result_text.value = "传说夜影 无序列号版"
        danchou_object.text = "传说夜影 无序列号版"
        counterStore.xiang_data.push(danchou_object);
    }
    // 幻神-星耀 皮肤	0.25%
    if (num <= result3.value && num > result2.value) {
        counterStore.dan_chou_text = "王者星光";
        result_text.value = "王者星光"
        danchou_object.text = "王者星光"

        counterStore.xiang_data.push(danchou_object);
    }
    // 屠龙-星耀 皮肤 	0.4%
    if (num <= result4.value && num > result3.value) {
        counterStore.dan_chou_text = "关小雨";
        result_text.value = "关小雨"
        danchou_object.text = "关小雨"

        counterStore.xiang_data.push(danchou_object);
    }
    // M14EBR-玄武 音效卡	0.3%
    if (num <= result5.value && num > result4.value) {
        counterStore.dan_chou_text = "QBZ03-金色蔷薇音效卡";
        result_text.value = "QBZ03-金色蔷薇音效卡"
        danchou_object.text = "QBZ03-金色蔷薇音效卡"

        counterStore.xiang_data.push(danchou_object);
    }
    // Scar Light-马枪	0.4%
    if (num <= result6.value && num > result5.value) {
        counterStore.dan_chou_text = "裁决-流光秘银皮肤";
        result_text.value = "裁决-流光秘银皮肤"
        danchou_object.text = "裁决-流光秘银皮肤"
        counterStore.xiang_data.push(danchou_object);
    }
    // M4A1-黑龙	0.7%
    if (num <= result7.value && num > result6.value) {
        counterStore.dan_chou_text = "Cop-旗袍";
        result_text.value = "Cop-旗袍"
        danchou_object.text = "Cop-旗袍"

        counterStore.xiang_data.push(danchou_object);
    }
    // 麒麟刺	1%
    if (num <= result8.value && num > result7.value) {
        counterStore.dan_chou_text = "AWM-裁决";
        result_text.value = "AWM-裁决"
        danchou_object.text = "AWM-裁决"

        counterStore.xiang_data.push(danchou_object);
    }
    // 沙鹰-天神	1.2%
    if (num <= result9.value && num > result8.value) {
        counterStore.dan_chou_text = "屠龙";
        result_text.value = "屠龙"
        danchou_object.text = "屠龙"

        counterStore.xiang_data.push(danchou_object);
    }
    // B背包套装-手雷包	1.6%
    if (num <= result10.value && num > result9.value) {
        counterStore.dan_chou_text = "天使灵狐玩偶";
        result_text.value = "天使灵狐玩偶"
        danchou_object.text = "天使灵狐玩偶"

        counterStore.xiang_data.push(danchou_object);
    }
    // 10000CF点	2.4%
    if (num <= result11.value && num > result10.value) {
        counterStore.dan_chou_text = "传说宝箱";
        result_text.value = "传说宝箱"
        danchou_object.text = "传说宝箱"

        counterStore.xiang_data.push(danchou_object);
    }
    // 王者之石x10	2%
    if (num <= result12.value && num > result11.value) {
        counterStore.dan_chou_text = "传说币×100";
        result_text.value = "传说币×100"
        danchou_object.text = "传说币×100"

        counterStore.xiang_data.push(danchou_object);
    }
    // 属性抽取券x1	2%
    if (num <= result13.value && num > result12.value) {
        counterStore.dan_chou_text = "传说币×20";
        result_text.value = "传说币×20"
        danchou_object.text = "传说币×20"
        counterStore.xiang_data.push(danchou_object);
    }
    // 金蛇幸运星x1	1.5%
    if (num <= result14.value && num > result13.value) {
        counterStore.dan_chou_text = "传说币×10";
        result_text.value = "传说币×10"
        danchou_object.text = "传说币×10"

        counterStore.xiang_data.push(danchou_object);
    }
    // 传说卡x1	0.2%
    if (num <= result15.value && num > result14.value) {
        counterStore.dan_chou_text = "传说币×9";
        result_text.value = "传说币×9"
        danchou_object.text = "传说币×9"

        counterStore.xiang_data.push(danchou_object);
    }
    // 王者卡x1	2%
    if (num <= result16.value && num > result15.value) {
        counterStore.dan_chou_text = "传说币×8";
        result_text.value = "传说币×8"
        danchou_object.text = "传说币×8"

        counterStore.xiang_data.push(danchou_object);
    }
    // console.log("概率是" + num);
    // console.log(data);
}

</script>