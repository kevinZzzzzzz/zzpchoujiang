<style scoped>
a {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
}

.sp {
    background: url(@/assets/game5Img/sp3.png) no-repeat;
}

p {
    margin: 0;
}

.title {

    background: url(@/assets/game5Img/sp.png) no-repeat;
    background-position: -86px -1008px;
    width: 1121px;
    height: 105px;
    margin: 0 auto;
    margin-top: 80px;
}

.my_jifen {
    height: 18px;
    text-align: center;
    margin-top: 18px;
    /* background: url(@/assets/game5Img/我的积分_bk.png) center no-repeat; */
    font-size: 18px;
    color: #b9f5fe;
    line-height: 18px;
}

.suipian {
    width: 1208px;
    margin: 22px 0 0 -4px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
}

.suipian li {
    list-style: none;
    width: 302px;
    height: 232px;
}

.suipian p {
    background: url(@/assets/game5Img/碎片兑换btn.png);
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
}

/* 传说活动的css */
.active_rule_title {
    widows: 100%;
    height: auto;
    background: url(@/assets/game5Img/sp.png) no-repeat;
    background-position: -23px -621px;
    width: 1020px;
    height: 57px;
    margin: 0 auto;
    margin-top: 220px;
}

.active_rule_title1 {
    background: url(@/assets/game5Img/sp.png) no-repeat;
    background-position: -23px -542px;
    margin-top: 110px;
}

.jifenduihuan {
    width: 110%;
    margin: 19px 0 0 -5%;
    height: 351px;
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

.jifenduihuan>div {
    width: 295px;
    height: 339px;
    margin: 0px 2px 13px;
}

.jifenduihuan li {
    width: 292px;
    height: 86px;
    background: url(@/assets/game5Img/sp.png);
    background-position: -1363px -385px;
    list-style: none;
    text-align: center;
    font-family: "font";
    cursor: pointer;
    margin: 15px auto 0px;
}

.jifenduihuan li span {
    display: block;
    width: 100%;
    text-align: center;
    font-size: 26px;
    color: #2a2223;
    line-height: 1;
    text-align: center;
    padding-top: 23px;
    box-sizing: border-box;
    background-image: -webkit-linear-gradient(top, #41393a, #4c4546, rgba(109, 103, 104, 0.6));
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.p2boxjdk {
    width: 295px;
    height: 238px;
    background: url(@/assets/game5Img/noon_bk.png) no-repeat;
    background-size: 100% auto;
    position: relative;
}

.p2boxjdk img {
    width: 295px;
    height: 238px;
}

.on {
    background: url(@/assets/game5Img/on_bk.png) no-repeat !important;
    background-size: 100% auto !important;
}

.on .p2djname {
    color: #343434 !important;
}

.p2listdjdh .boxtages {
    width: 106%;
    left: -3%;
}

.boxtages {
    width: 245px;
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
    font-size: 18px;
    color: #343434;
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

.p2djname {
    color: white;
}

.title1 {
    background: url(@/assets/game5Img/sp3.png) no-repeat;
    margin-top: 70px;
    width: 790px;
    height: 72px;
    background-position: 0 -1403px;
}

.title2 {
    background-position: -55px -1165px;
    width: 1135px;
    height: 106px;
}

.title3 {
    background: url(@/assets/game5Img/sp3.png) no-repeat;
    background-position: 0 -712px;
    width: 558px;
    height: 70px;
    margin-top: 92px;
}

.btnadvgg {
    background: url(@/assets/game5Img/sp3.png) no-repeat;
    background-position: -1523px -340px;
    width: 358px;
    height: 128px;
    display: block;
    margin: 5px auto 0;
    color: #fff;
    font-size: 34px;
    text-align: center;
    line-height: 148px;
}

/* 玩家反馈问卷部分 */
.p2bx7bg {
    background: url(@/assets/game5Img/反馈问卷.png) no-repeat;
    width: 1202px;
    height: 321px;
    box-sizing: border-box;
    margin: 12px auto 0;
    padding-top: 42px;
}

.p2bx7bgtxt1 {
    font-size: 30px;
    line-height: 40px;
    width: 100%;
    text-align: center;
    color: #ffffff;
    margin: 0;
}

.p2bx7bgtxt2 {
    font-size: 30px;
    line-height: 40px;
    width: 100%;
    text-align: center;
    color: #ffffff;
    margin: 47px auto 0;
}

.p2bx7btnbx {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 54px auto 0;
}

.p2bx7btnbx a {
    display: block;
    width: 367px;
    height: 108px;
    margin: 0 70px;
}

.p2bx7btn3 {
    background: url(@/assets/game5Img/sp.png) no-repeat;
    background-position: -1404px -1195px;
}

.p2bx7btn2 {
    background: url(@/assets/game5Img/sp.png) no-repeat;
    background-position: -1387px -1327px;
}

.p2listrule {
    width: 1200px;
    height: 1065px;
    margin: 24px auto 0;
    padding-bottom: 80px;
}

.p2listrule li {
    width: 100%;
    float: left;
    margin-bottom: 10px;
    list-style: none;
}

.p2listrule li strong {
    width: 30px;
    height: 30px;
    background: url(//game.gtimg.cn/images/actdaoju/cp/a20250116cfstar/p8ruleicon.png);
    float: left;
    font-size: 18px;
    line-height: 30px;
    text-align: center;
    color: #FFFFFF;
    font-style: normal;
}

.p2listrule li p {
    font-size: 18px;
    color: #035d81;
    line-height: 26px;
    padding-left: 36px;
    padding-top: 5px;
    margin: 0;

}
.rule {
    display: block;
    margin: 15px auto 0;
    box-sizing: border-box;
    padding: 10px 40px;
}
ul{
    padding-left: 0;
}
.box4_list li {
    font-size: 19px;
    padding-left: 30px;
    color: #5d3a18;
    line-height: 1.4;
    margin-bottom: 20px;
    position: relative;
}
.box4_list li i {
    font-style: normal;
    position: absolute;
    top: 3px;
    left: 0;
    background-position: -811px -264px;
    width: 25px;
    height: 24px;
    text-align: center;
    line-height: 42px;
}
</style>
<template>
    <!-- 万能碎片兑换 开始 -->
    <!-- <h2 class="title"></h2>
    <p class="my_jifen">我的万能碎片：<span style="color: #FFDE7A;">{{ wan_neng_sui_pian }}</span></p>

    <div class="jifenduihuan">

        <div>
            <div class="p2boxjdk ">
                <img src="@/assets/game5Img/游戏内王者夺宝红宝石.png" alt="">
                <p class="p2djname">游戏内王者夺宝红宝石x1</p>
            </div>
            <li @click="wan_neng_sui_pian_dui_huan(1)"><span>10万能碎片兑换</span></li>
        </div>
        <div>
            <div class="p2boxjdk ">
                <img src="@/assets/game5Img/游戏内王者轮回蓝宝石.png" alt="">
                <p class="p2djname">游戏内王者夺宝蓝宝石x1</p>
            </div>
            <li @click="wan_neng_sui_pian_dui_huan(2)"><span>10万能碎片兑换</span></li>
        </div>
        <div>
            <div class="p2boxjdk ">
                <img src="@/assets/game5Img/游戏内王者许愿黄宝石.png" alt="">
                <p class="p2djname">游戏内王者夺宝黄宝石x1</p>
            </div>
            <li @click="wan_neng_sui_pian_dui_huan(3)"><span>10万能碎片兑换</span></li>
        </div>
        <div>
            <div class="p2boxjdk ">
                <img src="@/assets/game5Img/本活动抽奖钥匙.png" alt="">
                <p class="p2djname">本活动抽奖钥匙x1</p>
            </div>
            <li @click="wan_neng_sui_pian_dui_huan(4)"><span>10万能碎片兑换</span></li>
        </div>
    </div> -->
    <!-- 万能碎片兑换 结束 -->
    <!-- 专题站 开始 -->

    <h2 class="title title1"></h2>
    <img style="margin-top: 8px;" src="@/assets/game5Img/专题.png" alt="">
    <a href="https://cf.qq.com/cp/a20230117label/index.html" target="_blank" class="btnadvgg sp db">
        <span>立即查看</span>
    </a>
    <!-- 专题站 结束 -->
    <!-- 玩家反馈问卷 开始-->
    <!-- <h2 class="title title2"></h2>

    <div class="p2bx7bg">
        <p class="p2bx7bgtxt1">这是关于本活动的体验问卷，完成填写<span>可领取本活动的星辰币×7</span><br>您的意见和建议对我们来说非常重要，感谢支持!</p>
        <p class="p2bx7bgtxt2">注：仅限【在本次活动付费过】的玩家填写问卷，领取奖励</p>
        <div class="p2bx7btnbx">
            <a href="javascript:ACT.amsSayLq()" @click="wenjuan(1)" class="p2bx7btn3 sp db btnFeedBack"></a>
            <a href="javascript:ACT.amsSayLq()" @click="wenjuan(2)" class="p2bx7btn2 sp db btn_getFkGfit"></a>
        </div>
    </div> -->
    <!-- 玩家反馈问卷 结束-->
    <!-- 版尾声明 开始-->

    <h2 class="title title3"></h2>
    <div class="rule">
        <ul class="box4_list">
            <li><i class="sp"></i>活动时间：2025.02.11~2025.03.17 23:59:59<br>a.付费购买开始&amp;结束时间:2025.02.11~2025.03.17
                23:59:59<br>b.抽奖、暂存箱分解开始&amp;结束时间:2025.02.11~2025.03.17
                23:59:59，注:请及时使用抽奖钥匙和进行分解，超过该期限的抽奖钥匙、十连抽一折券、单抽一折券、单抽三折券、单抽五折券将过期作废<br>c.暂存箱领取、兑换、问卷模块开始&amp;结束时间:
                2025.02.11~2025.03.31 23:59:59；注：为方便玩家使用剩余积分，延缓了领取&amp;兑换等操作的结束时间，因此2025.03.18~2025.03.31
                23:59:59之间仅可暂存箱领取、传说币兑换、问卷模块的参与，无法进行任何购买、暂存箱分解和幸运签中签</li>
            <li><i
                    class="sp"></i>购买：10QB购买复活币x1，赠送抽奖钥匙x1；100QB购买复活币x10，赠送抽奖钥匙x11；500Q币购买复活币x50，赠送抽奖钥匙x55；拥有道聚城代金券的玩家，可以使用道聚城代金券抵扣购买复活币x1并赠送钥匙x1，一次最多抵扣9个道聚城代金券；可以使用道聚城代金券抵扣购买复活币x10并赠送钥匙x10，一次抵扣90个道聚城代金券（不足90个代金券则无法购买）；一旦代金券使用后无法退还（下单后未支付，订单被系统取消之后或手动取消之后会返还抵扣的代金券）；
            </li>
            <li><i
                    class="sp"></i>折扣购买：10QB购买复活币×10，赠送抽奖钥匙×10，仅限使用十连抽一折券的玩家；1QB购买复活币×1，赠送抽奖钥匙×1，仅限使用单抽一折券的玩家；3QB购买复活币×1，赠送抽奖钥匙×1，仅限使用单抽三折券的玩家；5QB购买复活币×1，赠送抽奖钥匙×1，仅限使用单抽五折券的玩家；若玩家账号被封号则不允许进行充值行为，请玩家在解除封号后进行充值；注：【十连抽折扣券】和
                【单抽折扣券】只能选择其一使用，若您已使用他人分享的单抽五折券/单抽三折券/单抽一折券，十连抽一折券将无法使用，请谨慎确认
            </li>
            <li><i
                    class="sp"></i>抽奖：消耗钥匙进行单抽和十连抽，抽奖获得的可分解道具存放在【暂存箱】中，可选择分解成钥匙或发往游戏仓库，已经领取到仓库的道具无法退换，请慎重（在参与活动期间请确认好绑定的大区）；唯一性道具和角色（如：关小雨等），可重复抽到，但在同一大区内，游戏仓库无法重复到账；
            </li>
            <li><i
                    class="sp"></i>兑换：玩家可以消耗获得的传说币进行道具兑换，兑换获得的道具直接发往游戏仓库，兑换会消耗对应传说币；“王者破空枪刃”单大区限兑换1次，其他道具兑换不限次数；唯一性道具和角色（如：关小雨等），可重复兑换，但在同一大区内，游戏仓库无法重复到账；
            </li>
            <!-- <li><i class="sp"></i>幸运签：每累计获得500传说币，将自动获得一张传说辉光序列号抽取券的幸运签×1 和传说夜影序列号抽取券的幸运签×1；每日18:00刷新中签状态，传说辉光序列号与传说夜影序列号每日分别限量中签10000张，未中签的签码在活动期间内均有机会中签，中签概率：0.5%—2%；活动期间玩家均可消耗中签的幸运签和【6666传说币】兑换传说辉光随机序列号抽取券或传说夜影随机序列号抽取券；可消耗20个未中签幸运签和【6666传说币】兑换传说辉光随机序列号抽取券（单Q限1）或传说夜影随机序列号抽取券（单Q限1）；
                    </li> -->
            <li><i class="sp"></i>传说福利：已拥有【传说辉光 无序列号版】或【传说夜影 无序列号版】的用户，可以领取一份额外的福利礼包作为回馈（单Q限1）；传说辉光 无序列号版和传说夜影 无序列号版
                两个都拥有的用户，可以领取两次福利礼包作为回馈；</li>
            <li><i
                    class="sp"></i>破空枪刃福利：仓库内已拥有【破空枪刃】的玩家，可以领取1张【十连抽一折券】（单Q限领取1张），在主奖池一折参与十连抽一次；仓库内已拥有【破空枪刃】的玩家，向其他10名仓库内没有【破空枪刃】的玩家分别赠送1次【单抽折扣券礼包】，礼包包含：单抽一折券×1、单抽三折券×1、单抽五折券×1；收到【单抽折扣券】的玩家可在主奖池使用不同进行单抽（单抽折扣券使用说明：只能按照单抽五折券、单抽三折券、单抽一折券的顺序使用）；【十连抽一折券】和
                【单抽折扣券】只能选择其一使用，若您已使用他人分享的单抽折扣券，十连抽一折券将无法使用，请谨慎确认；福利领取前请先检查您的私人金库，本活动不会统计您私人金库内的道具存储情况，如道具在私人金库中，请取出后再尝试领取对应折扣券；
            </li>
            <li><i
                    class="sp"></i>传说辉光（序列号版）：在本活动中获得【传说辉光随机序列号抽取券】的玩家可免费抽取一次随机的4位数序列号，确认该序列号后玩家即可将印有该序列号的【传说辉光（对应数字的序列号版）】发送至绑定大区的仓库（交易所界面查看）。【传说辉光序列号版】并非唯一性道具，同一序列号可被重复获取，同时【传说辉光（序列号版）】可在交易所进行交易；
            </li>
            <li><i
                    class="sp"></i>传说夜影（序列号版）：在本活动中获得【传说夜影随机序列号抽取券】的玩家可免费抽取一次随机的4位数序列号，确认该序列号后玩家即可将印有该序列号的【传说夜影（对应数字的序列号版）】发送至绑定大区的仓库（交易所界面查看）。【传说夜影序列号版】并非唯一性道具，同一序列号可被重复获取，同时【传说夜影（序列号版）】可在交易所进行交易；
            </li>
            <li><i
                    class="sp"></i>序列号定制：在本活动中已确认随机数字的【传说辉光/夜影序列号版】（尚未发送至仓库）的玩家，可以进一步对对应武器的4位数的序列号进行个性化、特色化的尊享私人定制，【传说辉光/夜影序列号版】的枪身分别有“千、百、十、个”四位数，每个位数只能定制一次号码（即4次机会），先选择想要定制的武器及需要定制的位数，并消耗对应数量的相同【数字卡】对该选择的位数上原有的数字进行替换。每进行一次数字替换，下一次所需要消耗的【数字卡】数量将会递增，第一次需要3张相同的数字卡，第二次需要9张相同的数字卡，第三次需要18张相同的数字卡，第四次需要36张相同的数字卡。注意：未获得【传说辉光/夜影随机序列号抽取券】，或已获得【传说辉光/夜影随机序列号抽取券】，但未确认随机序列号数字的玩家无法使用传说币抽取【数字卡】，无法参与任何序列号定制相关操作，注：序列号范围为【0001—9999】，【0000】不是序列号；
            </li>
            <li><i
                    class="sp"></i>数字卡：玩家可在数字卡池中随机概率抽取0—9十个数字卡以及一张【万能幸运数】，其中数字卡6、8以及万能数字卡的概率：2%，数字卡1、7、9、0的概率：6%，数字卡2、3、4、5的概率范围：15%—20%。玩家可以消耗获取到的【万能幸运数】对任意数字卡进行兑换。玩家每抽取50次数字卡，可额外获得一个【万能幸运数】；
            </li>
            <li><i
                    class="sp"></i>分享玩法：玩家可以通过将已获得的数字卡分享给好友，也可以向好友索要数字卡，分享将消耗自己拥有的数字卡，例如A共拥有3张【数字卡6】，A将其中一张【数字卡6】分享给B，B点击接收A的分享则B的【数字卡6】数量加一，而A将仅剩2张【数字卡6】，活动期间单Q限5次成功接收好友赠送的数字卡（注：赠送数字只能赠送本人抽到的数字，从好友处获赠的数字，无法再赠送给他人）；
            </li>
            <li><i
                    class="sp"></i>超过活动期限的抽奖钥匙、传说币、累计传说币、幸运签和数字卡（包括万能数字卡）、【传说辉光/夜影随机序列号抽取券】都将作废，请及时使用。道聚城通用代金券不会作废，可以用于后续的其他活动；
            </li>
            <li><i class="sp"></i>本活动主奖池<a href="javascript:TGDialogS('popgl');" style="color: red;display: inline">道具概率公示</a>；本活动数字奖池<a
                    href="javascript:TGDialogS('popgls');"
                    style="color: red;display: inline">道具概率公示</a>；所用‘概率’均是在大样本(大量用户)下的统计数值，与单个玩家的少量测试数据之间可能会存在一定差异。
            </li>
            <li><i class="sp"></i>玩家反馈：在本活动页面进行任意消费，都视为参与本活动，单Q仅限填写问卷一次；</li>
            <li><i
                    class="sp"></i>参与资格、获奖资格的取消：<br>本活动不鼓励未满18周岁的未成年用户参与。若您为不具备完全民事行为能力的未成年人，您应在监护人的陪同下阅读本规则，并取得您监护人的同意。如您监护人同意您参与本活动，应对您参与本活动期间作出的行为进行正确监督和引导，同时，您行使和履行本活动规则下的权利和义务，均视为已获得您监护人认可。请理性消费。您若有下列任何一种行为或情况的，腾讯有权单方面取消您的参与资格、获奖资格等：<br>a、不符合参与资格的；<br>b、提供虚假信息的；<br>c、虚假交易或恶意破坏活动的；<br>d、以任何机器人软件、蜘蛛软件、爬虫软件、刷奖软件或其它任何自动方式、不正当手段等参与本活动的；<br>e、有任何违反诚实信用、公序良俗、公平、公正等原则行为的；<br>f、其他违反相关法规、本规则行为的。
            </li>
            <li><i class="sp"></i>纳税义务：<br>腾讯将依法履行个人所得税等相关税费代扣代缴的义务。</li>
            <li><i
                    class="sp"></i>免责条款：<br>如因非腾讯原因导致您在本规则约定时间内未参与活动、兑换奖品或领取奖品，或由于您提供的信息不真实不完整等导致奖品无法发放或发放错误的，由您自行承担全部损失。互联网运行存在诸多不确定性因素，如因不可抗力、网络、通讯线路故障、计算机大规模瘫痪及活动中存在大面积作弊行为等原因致使本活动出现异常情况或难以继续开展的，腾讯有权采取包括但不限于通过各种方式消除异常情况或调整、暂停、取消本活动等合理措施保障腾讯及用户的合法权益，您表示理解，由此给您造成的损失，您同意不追究腾讯的责任。
            </li>
            <li><i
                    class="sp"></i>管辖条款：<br>本规则的成立、生效、履行、解释及纠纷解决等相关事宜，均适用中华人民共和国大陆地区法律（不包括冲突法）。若您和腾讯之间发生任何纠纷或争议应将纠纷或争议提交本规则签订地即深圳市南山区有管辖权的人民法院管辖。
            </li>
        </ul>
    </div>
    <!-- 版尾声明 结束-->

</template>

<script setup>
import { useCounterStore } from "@/store/counter"; // 确保路径正确
import { ref, watch } from "vue"; // 确保路径正确
const counterStore = useCounterStore();
let wan_neng_sui_pian = ref(0);

watch(() => counterStore.wan_neng_sui_pian, (newVal) => {
    wan_neng_sui_pian.value = newVal;
});
//兑换
function wan_neng_sui_pian_dui_huan(num) {
    if (!counterStore.login_active) {
        counterStore.login_div_display = "login";
    } else {
        counterStore.wan_neng_dui_huan = true;
        counterStore.wan_neng_lei_xing = num;
        counterStore.cf_alert_active = true;
        counterStore.cao_zuo_active = '万能碎片兑换';
        counterStore.xiao_hao_wu = '兑换万能碎片x10';
        if (num == 1) { counterStore.jiang_li = '【游戏内王者夺宝红宝石x1】' }
        if (num == 2) { counterStore.jiang_li = '【游戏内王者夺宝蓝宝石x1】' }
        if (num == 3) { counterStore.jiang_li = '【游戏内王者夺宝黄宝石x1】' }
        if (num == 4) { counterStore.jiang_li = '【本活动抽奖钥匙x1】' }
    }
}
function wenjuan(num) {
    if (!counterStore.login_active) {
        counterStore.login_div_display = "login";
    } else {
        if (num == 1) {
            counterStore.systems = true;
            counterStore.systems_message = "【请先参与本次活动】";
        }
        if (num == 2) {
            counterStore.systems = true;
            counterStore.systems_message = "请先参与填写问卷";
        }
    }
}
</script>