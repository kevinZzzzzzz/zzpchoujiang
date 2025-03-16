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
h3{
    margin: 0;
}
.par4 {
    padding-top: 80px;
    height: 2742px;
}

.par4 h2 {
    background-position: 0 -528px;
    width: 944px;
    height: 73px;
    display: block;
    margin: 0 auto;
}

.p4nav {
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 26px;
}

.btn_navhg.on {
    background: url(//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/p4nav_bg_on.png) no-repeat 0 0;
}

.btn_navgx.on {
    background: url(//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/p4nav_bg_on.png) no-repeat -482px 0;
}

.btn_navhg {
    background: url(//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/p4nav_bg.png) no-repeat 0 0;
}

.btn_navgx {
    background: url(//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/p4nav_bg.png) no-repeat -482px 0;
}

.p4nav a {
    width: 482px;
    height: 104px;
    font-size: 0;
    display: block;
}

.btn_cqxl {
    background-position: -1207px 0;
    width: 240px;
    height: 86px;
    line-height: 80px;
    margin: 23px auto 0;
    text-align: center;
    color: #ffffff;
    font-size: 26px;
    box-sizing: border-box;
    padding-top: 6px;
}

.input {
    text-align: center;
    margin: 10px auto 0;
    background: url(//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/serial_bg.png) no-repeat;
    width: 1200px;
    height: 445px;
    box-sizing: border-box;
    padding: 20px;
    position: relative;
}

.input b {
    border: none;
    width: 96px;
    height: 93px;
    display: inline-block;
    vertical-align: middle;
    background-position: -1087px -245px;
    margin: 0 20px;
    color: #000;
    font-size: 30px;
    text-align: center;
    line-height: 93px;
    font-weight: bold;
    padding: 0 !important;
}

.item {
    width: 100%;
    background-color: rgba(255, 193, 123, .15);
    height: 76px;
    line-height: 76px;
    margin-top: 7px;
    box-sizing: border-box;
    padding: 0 50px;
    color: #fee0be;
    font-size: 26px;
    text-align: center;
}

.btn_qrxl {
    background-position: -1207px 0;
    width: 240px;
    height: 86px;
    text-align: center;
    line-height: 1.1;
    color: #ffffff;
    font-size: 20px;
    display: block;
    margin: 200px auto 0;
    box-sizing: border-box;
    padding-top: 14px;
}

.p4num {
    color: #5d3a18;
    font-size: 18px;
    line-height: 44px;
    position: absolute;
    bottom: 5px;
    text-align: center;
    left: 0;
    width: 100%;
}

.dqnum {
    width: 100%;
    height: 240px;
    margin: 32px auto 0;
}

.dqnum_l {
    width: 422px;
    float: left;
    margin-right: 33px;
}

.dqtit {
    font-size: 26px;
    text-align: center;
    color: #5d3a18;
    font-weight: bold;
}

.dqnumbox {
    background: url(//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/dqnum_bg.png) no-repeat;
    width: 422px;
    height: 199px;
    box-sizing: border-box;
    padding: 24px 3px 3px;
    color: #f3cb9a;
    font-size: 18px;
    text-align: center;
    line-height: 1.2;
    margin: 8px auto 0;
}

.dqtxts {
    text-align: center;
    color: #f3cb9a;
    font-size: 42px;
    font-weight: bold;
}

.dqtips {
    padding-top: 25px;
}

.dqtxts span {
    background-position: -1087px -245px;
    width: 96px;
    height: 93px;
    text-align: center;
    line-height: 93px;
    display: inline-block;
    vertical-align: middle;
    color: #000000;
    font-size: 34px;
    font-weight: bold;
}

.dqtxts em {
    padding-left: 15px;
}

.dqnum_l {
    width: 422px;
    float: left;
    margin-right: 33px;
}

.last {
    margin-right: 0 !important;
}

.dqtit {
    font-size: 26px;
    text-align: center;
    color: #5d3a18;
    font-weight: bold;
}

.dqnumbox {
    background: url(//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/dqnum_bg.png) no-repeat;
    width: 422px;
    height: 199px;
    box-sizing: border-box;
    padding: 24px 3px 3px;
    color: #f3cb9a;
    font-size: 18px;
    text-align: center;
    line-height: 1.2;
    margin: 8px auto 0;
}

.dqtxts {
    text-align: center;
    color: #f3cb9a;
    font-size: 42px;
    font-weight: bold;
}

.dqtxts span {
    background-position: -1087px -245px;
    width: 96px;
    height: 93px;
    text-align: center;
    line-height: 93px;
    display: inline-block;
    vertical-align: middle;
    color: #000000;
    font-size: 34px;
    font-weight: bold;
}

.dqtips {
    padding-top: 25px;
}

.dqbtn {
    width: 322px;
    float: right;
}

.dqbtn a {
    background-position: -1523px -219px;
    width: 322px;
    height: 114px;
    text-align: center;
    line-height: 114px;
    color: #ffffff;
    font-size: 24px;
    display: block;
    margin-top: 76px;
    box-sizing: border-box;
    padding-top: 8px;
}

.dqbtn em {
    color: #5d3a18;
    font-size: 18px;
    text-align: center;
    line-height: 1.2;
    padding-top: 10px;
    display: block;
}

.serialbox {
    background: url(//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/serial_bg2.png) no-repeat;
    width: 1200px;
    height: 508px;
    margin: 40px auto 0;
    box-sizing: border-box;
    padding: 39px 26px 0;
}

.sernum {
    color: #f3cb9a;
    font-size: 24px;
    text-align: center;
    line-height: 68px;
}

.sernum span {
    border: 2px solid #ffcd95;
    width: 328px;
    height: 68px;
    display: inline-block;
    margin: 0 75px;
}

.sernums {
    color: #f3cb9a;
    font-size: 20px;
    text-align: center;
    line-height: 1.2;
    padding-top: 12px;
}

.list_serial {
    width: 1148px;
    height: 308px;
    margin-top: 15px;
    padding-left: 0;
}

.list_card {
    margin: 36px auto 0;
    background: url(//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_box.png) no-repeat;
    width: 1200px;
    height: 963px;
    box-sizing: border-box;
    padding: 24px 18px 0;
}

.list_serial li {
    width: 263px;
    float: left;
    margin: 0 12px;
}

.serial {
    background: url(//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/serial_bg1.png) no-repeat;
    width: 263px;
    height: 202px;
    box-sizing: border-box;
    padding-top: 41px;
    margin: 0 auto;
}

.serial p {
    color: #000000;
    font-size: 30px;
    text-align: center;
    line-height: 83px;
}

.serial span {
    color: #5d3a18;
    font-size: 34px;
    text-align: center;
    line-height: 1.2;
    width: 100%;
    display: block;
    padding-top: 18px;
    letter-spacing: 2px;
    font-weight: bold;
}

.btn_dz {
    background-position: 0 -219px;
    width: 272px;
    height: 97px;
    display: block;
    margin: 9px auto 0;
    color: #fff;
    font-size: 28px;
    line-height: 92px;
    text-align: center;
    box-sizing: border-box;
    padding-top: 8px;
}

.list_card li {
    width: 209px;
    float: left;
    margin: 0 11px 35px;
    cursor: pointer;
}

.list_card li p {
    color: #f3cb9a;
    font-size: 20px;
    text-align: center;
    line-height: 1.2;
}

.card_bg {
    background: url(//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_bg.png) no-repeat;
    width: 209px;
    height: 303px;
    display: block;
    margin: 6px auto 0;
    background-size: 100% 100%;
    position: relative;
}

.card_bg img {
    width: 100%;
    position: absolute;
    top: 0;
    left: 0;
}

.btn_xz {
    background-position: -279px -231px;
    width: 207px;
    height: 74px;
    display: block;
    color: #ffffff;
    font-size: 20px;
    text-align: center;
    line-height: 70px;
    margin: 4px auto 0;
    box-sizing: border-box;
    padding-top: 8px;
}

.p4btn1 {
    width: 100%;
    margin: 8px auto 0;
}

.p4btn1 a {
    background-position: 0 -1092px;
    width: 320px;
    height: 99px;
    float: left;
    margin-right: 109px;
    text-align: center;
    line-height: 1.2;
    color: #fff;
    font-size: 22px;
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    position: relative;
    z-index: 9;
    padding-top: 5px;
}

.fl {
    float: left;
}

.fr {
    float: right;
}

.luckbtn {
    width: 342px;
    float: right;
}

.last {
    margin-right: 0 !important;
}

.luckbtn p {
    color: #5d3a18;
    font-size: 18px;
    line-height: 1.2;
    text-align: center;
    padding-top: 105px;
    position: relative;
}
/* 好友齐聚板块 */
.par5 {
    padding-top: 40px;
}
.par5 h2 {
    background-position: 0 -623px;
    width: 917px;
    height: 70px;
    display: block;
    margin: 0 auto;
}
.tit_ct {
    color: #5d3a18;
    font-size: 18px;
    text-align: center;
    line-height: 1.6;
    padding-top: 20px;
}
.p5num {
    margin: 20px auto 0;
    width: 100%;
    height: 239px;
}
.btn_p5tx {
    background-position: 0 -1092px;
    color: #fff;
}
.btn_p5lq {
    background-position: -345px -1092px;
    color: #000f83;
}
.fr {
    float: right;
}
.dqnum_l {
    width: 422px;
    float: left;
    margin-right: 33px;
}
.dqtit {
    font-size: 26px;
    text-align: center;
    color: #5d3a18;
    font-weight: bold;
}
.dqnumbox {
    background: url(//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/dqnum_bg.png) no-repeat;
    width: 422px;
    height: 199px;
    box-sizing: border-box;
    padding: 24px 3px 3px;
    color: #f3cb9a;
    font-size: 18px;
    text-align: center;
    line-height: 1.2;
    margin: 8px auto 0;
}
.dqtxts {
    text-align: center;
    color: #f3cb9a;
    font-size: 42px;
    font-weight: bold;
}
.dqtxts span {
    background-position: -1087px -245px;
    width: 96px;
    height: 93px;
    text-align: center;
    line-height: 93px;
    display: inline-block;
    vertical-align: middle;
    color: #000000;
    font-size: 34px;
    font-weight: bold;
}
.dqtips {
    padding-top: 25px;
}
.p5num a {
    background-position: -1523px -340px;
    width: 358px;
    height: 128px;
    display: block;
    color: #fff;
    font-size: 26px;
    text-align: center;
    line-height: 128px;
    box-sizing: border-box;
    padding-top: 5px;
    float: left;
    margin: 66px 7px 0;
}
.p5box {
    background: url(//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/p5box_bg.png) no-repeat;
    width: 1200px;
    height: 508px;
    box-sizing: border-box;
    padding: 22px 25px 0;
    margin: 38px auto 0;
}
.btn_qrtj {
    background-position: -1523px -340px;
    width: 358px;
    height: 128px;
    display: block;
    color: #fff;
    font-size: 26px;
    text-align: center;
    line-height: 128px;
    box-sizing: border-box;
    padding-top: 8px;
    margin: 0 auto;
}
.item {
    width: 100%;
    background-color: rgba(255, 193, 123, .15);
    height: 76px;
    line-height: 76px;
    margin-top: 7px;
    box-sizing: border-box;
    padding: 0 50px;
    color: #fee0be;
    font-size: 26px;
    text-align: center;
}
.item span {
    display: block;
    float: left;
}
.i_t1 {
    width: 24%;
}
.tabox {
    width: 1033px;
    margin: 3px auto 0;
    height: 256px;
    overflow: auto;
}
.tabox table {
    width: 100%;
}
table {
    border-collapse: collapse;
    border-spacing: 0;
}
.p5box1 {
    background: url(//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/p5box_bg1.png) no-repeat;
    width: 1200px;
    height: 403px;
    display: block;
    margin: 32px auto 0;
    box-sizing: border-box;
    padding: 40px 20px 0;
}
.p5box1 h3 {
    font-size: 34px;
    text-align: center;
    color: #edc897;
    line-height: 1.2;
}
.p5box1 h3:before {
    background: url(//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/sp.png) no-repeat -850px -3px;
    width: 52px;
    height: 51px;
    display: inline-block;
    vertical-align: bottom;
    content: "";
    margin: 0 4px;
}
.p5box1 h3:after {
    background: url(//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/sp.png) no-repeat -926px -5px;
    width: 52px;
    height: 51px;
    display: inline-block;
    vertical-align: bottom;
    content: "";
    margin: 0 4px;
}
.p5box1 p {
    color: #f3cb9a;
    font-size: 28px;
    text-align: center;
    line-height: 1.6;
    padding: 18px 0;
}
.p5box1 p span {
    font-size: 22px;
    display: block;
}
.p5btn {
    margin: 15px auto 0;
    width: 70%;
}
.p5btn a {
    width: 320px;
    height: 99px;
    text-align: center;
    font-size: 40px;
    line-height: 1.2;
    display: flex
;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding-top: 5px;
}
.btn_p5lq span {
    display: block;
    font-size: 16px;
    line-height: 1.2;
}
</style>
<template>
    <div class="par4 mao" id="mk6">
        <h2 class="sp db"></h2>
        <div class="p4nav">
            <a class="btn_navhg sp on" href="javascript:">传说辉光序列号定制</a>
            <a class="btn_navgx sp" href="javascript:">传说夜影序列号定制</a>
        </div>
        <div class="p4boxs" style="display: block;">
            <a class="btn_cqxl sp" href="javascript:amsChouNumInit(1);"><span>抽取随机序列号</span></a>
            <div class="c input hgItem">
                <b class="item item1 sp" readonly="readonly">X</b>
                <b class="item item2 sp" readonly="readonly">X</b>
                <b class="item item3 sp" readonly="readonly">X</b>
                <b class="item item4 sp" readonly="readonly">X</b>
                <a class="btn_qrxl sp" href="javascript:amsLqNum(1);" style="padding-top: 30px;"><span>确认当前序列号</span><br><span>并发送至仓库</span></a>
                <p class="p4num">当前剩余随机序列号抽取券：<em class="jf_6916">0</em></p>
            </div>
            <div class="c dqnum">
                <div class="dqnum_l">
                    <p class="dqtit">您当前选择的位数</p>
                    <div class="dqnumbox">
                        <p class="dqtxts"><span class="hg_select_item sp">x</span><em>位数</em></p>
                        <p class="dqtips">请在下方选择区选择您要定制的位数</p>
                    </div>
                </div>
                <div class="dqnum_l last">
                    <p class="dqtit">您当前选择的数字</p>
                    <div class="dqnumbox">
                        <p class="dqtxts"><span class="hg_select_num sp">x</span></p>
                        <p class="dqtips">请在下方选择区选择您要定制的数字</p>
                    </div>
                </div>
                <div class="dqbtn">
                    <a class="sp" href="javascript:amsExchangeNum(1);"><span>确认定制该位数序列号</span></a>
                    <em>一经定制将无法撤回，请谨慎选择</em>
                </div>
            </div>
            <div class="serialbox">
                <p class="sernum"><span>共可定制次数：<em>4 </em></span><span>当前剩余可定制次数：<em
                            class="hg_ret_hold_num">4</em></span></p>
                <p class="sernums">4次定制所需相同数字卡的数量：第一次3张，第二次9张，第三次18张，第四次36张；0000为无效序列号</p>
                <ul class="list_serial c hg-select-ul">
                    <li>
                        <div class="serial">
                            <p class="item1">X</p>
                            <span>千位数</span>
                        </div>
                        <a class="btn_dz sp" href="javascript:amsSelect('hg',1);"><span>选择该位置</span></a>
                    </li>
                    <li>
                        <div class="serial">
                            <p class="item2">X</p>
                            <span>百位数</span>
                        </div>
                        <a class="btn_dz sp" href="javascript:amsSelect('hg',2)"><span>选择该位置</span></a>
                    </li>
                    <li>
                        <div class="serial">
                            <p class="item3">X</p>
                            <span>十位数</span>
                        </div>
                        <a class="btn_dz sp" href="javascript:amsSelect('hg',3)"><span>选择该位置</span></a>
                    </li>
                    <li>
                        <div class="serial">
                            <p class="item4">X</p>
                            <span>个位数</span>
                        </div>
                        <a class="btn_dz sp" href="javascript:amsSelect('hg',4);"><span>选择该位置</span></a>
                    </li>
                </ul>
            </div>
            <ul class="list_card c hg_select_num_list">
                <!--                    <li class="on"></li>-->
                <li>
                    <p>您当前拥有数：<em class="jf_6922">0</em><br>剩余可赠送次数：<em class="jf_6932">0</em></p>
                    <div class="card_bg">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic0.png"
                            class="card_pic">
                        <!-- <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic0_on.png"
                            class="card_pic_on"> -->
                    </div>
                    <a class="btn_xz sp" href="javascript:;"><span>选择该数字卡</span></a>
                </li>
                <li>
                    <p>您当前拥有数：<em class="jf_6923">0</em><br>剩余可赠送次数：<em class="jf_6933">0</em></p>
                    <div class="card_bg">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic1.png"
                            class="card_pic">
                        <!-- <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic1_on.png"
                            class="card_pic_on"> -->
                    </div>
                    <a class="btn_xz sp" href="javascript:;"><span>选择该数字卡</span></a>
                </li>
                <li>
                    <p>您当前拥有数：<em class="jf_6924">0</em><br>剩余可赠送次数：<em class="jf_6934">0</em></p>
                    <div class="card_bg">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic2.png"
                            class="card_pic">
                        <!-- <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic2_on.png"
                            class="card_pic_on"> -->
                    </div>
                    <a class="btn_xz sp" href="javascript:;"><span>选择该数字卡</span></a>
                </li>
                <li>
                    <p>您当前拥有数：<em class="jf_6925">0</em><br>剩余可赠送次数：<em class="jf_6935">0</em></p>
                    <div class="card_bg">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic3.png"
                            class="card_pic">
                        <!-- <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic3_on.png"
                            class="card_pic_on"> -->
                    </div>
                    <a class="btn_xz sp" href="javascript:;"><span>选择该数字卡</span></a>
                </li>
                <li>
                    <p>您当前拥有数：<em class="jf_6926">0</em><br>剩余可赠送次数：<em class="jf_6936">0</em></p>
                    <div class="card_bg">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic4.png"
                            class="card_pic">
                        <!-- <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic4_on.png"
                            class="card_pic_on"> -->
                    </div>
                    <a class="btn_xz sp" href="javascript:;"><span>选择该数字卡</span></a>
                </li>
                <li>
                    <p>您当前拥有数：<em class="jf_6927">0</em><br>剩余可赠送次数：<em class="jf_6937">0</em></p>
                    <div class="card_bg">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic5.png"
                            class="card_pic">
                        <!-- <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic5_on.png"
                            class="card_pic_on"> -->
                    </div>
                    <a class="btn_xz sp" href="javascript:;"><span>选择该数字卡</span></a>
                </li>
                <li>
                    <p>您当前拥有数：<em class="jf_6928">0</em><br>剩余可赠送次数：<em class="jf_6938">0</em></p>
                    <div class="card_bg">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic6.png"
                            class="card_pic">
                        <!-- <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic6_on.png"
                            class="card_pic_on"> -->
                    </div>
                    <a class="btn_xz sp" href="javascript:;"><span>选择该数字卡</span></a>
                </li>
                <li>
                    <p>您当前拥有数：<em class="jf_6929">0</em><br>剩余可赠送次数：<em class="jf_6939">0</em></p>
                    <div class="card_bg">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic7.png"
                            class="card_pic">
                        <!-- <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic7_on.png"
                            class="card_pic_on"> -->
                    </div>
                    <a class="btn_xz sp" href="javascript:;"><span>选择该数字卡</span></a>
                </li>
                <li>
                    <p>您当前拥有数：<em class="jf_6930">0</em><br>剩余可赠送次数：<em class="jf_6940">0</em></p>
                    <div class="card_bg">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic8.png"
                            class="card_pic">
                        <!-- <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic8_on.png"
                            class="card_pic_on"> -->
                    </div>
                    <a class="btn_xz sp" href="javascript:;"><span>选择该数字卡</span></a>
                </li>
                <li>
                    <p>您当前拥有数：<em class="jf_6931">0</em><br>剩余可赠送次数：<em class="jf_6941">0</em></p>
                    <div class="card_bg">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic9.png"
                            class="card_pic">
                        <!-- <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic9_on.png"
                            class="card_pic_on"> -->
                    </div>
                    <a class="btn_xz sp" href="javascript:;"><span>选择该数字卡</span></a>
                </li>
            </ul>
            <div class="p4btn1 c">
                <a class="sp fl chouNum chouNum1"
                    href="javascript:amsChouNum(1,1);"><span>消耗传说币x10</span><span>抽取一次数字</span></a>
                <a class="sp fl chouNum chouNum10"
                    href="javascript:amsChouNum(1,10);"><span>消耗传说币x100</span><span>抽取十次数字</span></a>
                <div class="fr luckbtn last">
                    <a class="sp" href="javascript:TGDialogS('popcard');"><span>万能幸运数兑换</span></a>
                    <p>剩余传说币：<em class="jf_6915">0</em>；已抽奖次数：<em class="_had_chou">0</em>；<br>拥有万能幸运数：<em
                            class="jf_6920">0</em></p>
                </div>
            </div>
        </div>
        <div class="p4boxs" style="display: none;">
            <a class="btn_cqxl sp" href="javascript:amsChouNumInit(2);"><span>抽取随机序列号</span></a>
            <div class="c input input1 yyItem">
                <b class="item item1 sp" readonly="readonly">X</b>
                <b class="item item2 sp" readonly="readonly">X</b>
                <b class="item item3 sp" readonly="readonly">X</b>
                <b class="item item4 sp" readonly="readonly">X</b>
                <a class="btn_qrxl sp" href="javascript:amsLqNum(2);"><span>确认当前序列号</span><span>并发送至仓库</span></a>
                <p class="p4num">当前剩余随机序列号抽取券：<em class="jf_6917">0</em></p>
            </div>
            <div class="c dqnum">
                <div class="dqnum_l">
                    <p class="dqtit">您当前选择的位数</p>
                    <div class="dqnumbox">
                        <p class="dqtxts"><span class="yy_select_item sp">x</span><em>位数</em></p>
                        <p class="dqtips">请在下方选择区选择您要定制的位数</p>
                    </div>
                </div>
                <div class="dqnum_l last">
                    <p class="dqtit">您当前选择的数字</p>
                    <div class="dqnumbox">
                        <p class="dqtxts"><span class="yy_select_num sp">x</span></p>
                        <p class="dqtips">请在下方选择区选择您要定制的数字</p>
                    </div>
                </div>
                <div class="dqbtn">
                    <a class="sp" href="javascript:amsExchangeNum(2);"><span>确认定制该位数序列号</span></a>
                    <em>一经定制将无法撤回，请谨慎选择</em>
                </div>
            </div>
            <div class="serialbox">
                <p class="sernum"><span>共可定制次数：<em>4 </em></span><span>当前剩余可定制次数：<em
                            class="yy_ret_hold_num">4</em></span></p>
                <p class="sernums">4次定制所需相同数字卡的数量：第一次3张，第二次9张，第三次18张，第四次36张；0000为无效序列号</p>
                <ul class="list_serial c yy-select-ul">
                    <li>
                        <div class="serial">
                            <p class="item1">X</p>
                            <span>千位数</span>
                        </div>
                        <a class="btn_dz sp" href="javascript:amsSelect('yy',1);"><span>选择该位置</span></a>
                    </li>
                    <li>
                        <div class="serial">
                            <p class="item2">X</p>
                            <span>百位数</span>
                        </div>
                        <a class="btn_dz sp" href="javascript:amsSelect('yy',2)"><span>选择该位置</span></a>
                    </li>
                    <li>
                        <div class="serial">
                            <p class="item3">X</p>
                            <span>十位数</span>
                        </div>
                        <a class="btn_dz sp" href="javascript:amsSelect('yy',3)"><span>选择该位置</span></a>
                    </li>
                    <li>
                        <div class="serial">
                            <p class="item4">X</p>
                            <span>个位数</span>
                        </div>
                        <a class="btn_dz sp" href="javascript:amsSelect('yy',4);"><span>选择该位置</span></a>
                    </li>
                </ul>
            </div>
            <ul class="list_card c yy_select_num_list">
                <!--                    <li class="on"></li>-->
                <li>
                    <p>您当前拥有数：<em class="jf_6922">0</em><br>剩余可赠送次数：<em class="jf_6932">0</em></p>
                    <div class="card_bg">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic0.png"
                            class="card_pic">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic0_on.png"
                            class="card_pic_on">
                    </div>
                    <a class="btn_xz sp" href="javascript:;"><span>选择该数字卡</span></a>
                </li>
                <li>
                    <p>您当前拥有数：<em class="jf_6923">0</em><br>剩余可赠送次数：<em class="jf_6933">0</em></p>
                    <div class="card_bg">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic1.png"
                            class="card_pic">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic1_on.png"
                            class="card_pic_on">
                    </div>
                    <a class="btn_xz sp" href="javascript:;"><span>选择该数字卡</span></a>
                </li>
                <li>
                    <p>您当前拥有数：<em class="jf_6924">0</em><br>剩余可赠送次数：<em class="jf_6934">0</em></p>
                    <div class="card_bg">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic2.png"
                            class="card_pic">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic2_on.png"
                            class="card_pic_on">
                    </div>
                    <a class="btn_xz sp" href="javascript:;"><span>选择该数字卡</span></a>
                </li>
                <li>
                    <p>您当前拥有数：<em class="jf_6925">0</em><br>剩余可赠送次数：<em class="jf_6935">0</em></p>
                    <div class="card_bg">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic3.png"
                            class="card_pic">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic3_on.png"
                            class="card_pic_on">
                    </div>
                    <a class="btn_xz sp" href="javascript:;"><span>选择该数字卡</span></a>
                </li>
                <li>
                    <p>您当前拥有数：<em class="jf_6926">0</em><br>剩余可赠送次数：<em class="jf_6936">0</em></p>
                    <div class="card_bg">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic4.png"
                            class="card_pic">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic4_on.png"
                            class="card_pic_on">
                    </div>
                    <a class="btn_xz sp" href="javascript:;"><span>选择该数字卡</span></a>
                </li>
                <li>
                    <p>您当前拥有数：<em class="jf_6927">0</em><br>剩余可赠送次数：<em class="jf_6937">0</em></p>
                    <div class="card_bg">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic5.png"
                            class="card_pic">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic5_on.png"
                            class="card_pic_on">
                    </div>
                    <a class="btn_xz sp" href="javascript:;"><span>选择该数字卡</span></a>
                </li>
                <li>
                    <p>您当前拥有数：<em class="jf_6928">0</em><br>剩余可赠送次数：<em class="jf_6938">0</em></p>
                    <div class="card_bg">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic6.png"
                            class="card_pic">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic6_on.png"
                            class="card_pic_on">
                    </div>
                    <a class="btn_xz sp" href="javascript:;"><span>选择该数字卡</span></a>
                </li>
                <li>
                    <p>您当前拥有数：<em class="jf_6929">0</em><br>剩余可赠送次数：<em class="jf_6939">0</em></p>
                    <div class="card_bg">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic7.png"
                            class="card_pic">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic7_on.png"
                            class="card_pic_on">
                    </div>
                    <a class="btn_xz sp" href="javascript:;"><span>选择该数字卡</span></a>
                </li>
                <li>
                    <p>您当前拥有数：<em class="jf_6930">0</em><br>剩余可赠送次数：<em class="jf_6940">0</em></p>
                    <div class="card_bg">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic8.png"
                            class="card_pic">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic8_on.png"
                            class="card_pic_on">
                    </div>
                    <a class="btn_xz sp" href="javascript:;"><span>选择该数字卡</span></a>
                </li>
                <li>
                    <p>您当前拥有数：<em class="jf_6931">0</em><br>剩余可赠送次数：<em class="jf_6941">0</em></p>
                    <div class="card_bg">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic9.png"
                            class="card_pic">
                        <img src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/card_pic9_on.png"
                            class="card_pic_on">
                    </div>
                    <a class="btn_xz sp" href="javascript:;"><span>选择该数字卡</span></a>
                </li>
            </ul>
            <div class="p4btn1 c">
                <a class="sp fl chouNum chouNum1"
                    href="javascript:amsChouNum(2,1);"><span>消耗传说币x10</span><span>抽取一次数字</span></a>
                <a class="sp fl chouNum chouNum10"
                    href="javascript:amsChouNum(2,10);"><span>消耗传说币x100</span><span>抽取十次数字</span></a>
                <div class="fr luckbtn last">
                    <a class="sp" href="javascript:TGDialogS('popcard');"><span>万能幸运数兑换</span></a>
                    <p>剩余传说币：<em class="jf_6915">0</em>；已抽奖次数：<em class="_had_chou">0</em>；<br>拥有万能幸运数：<em
                            class="jf_6920">0</em></p>
                </div>
            </div>
        </div>
    </div>
    <div class="par5 mao" id="mk7">
            <h2 class="sp db"></h2>
            <p class="tit_ct">活动期间单Q限5次成功接收好友赠送的数字卡（注：赠送数字只能赠送本人抽到的数字，从好友处获赠的数字，无法再赠送给他人</p>
            <div class="p5num c">
                <div class="dqnum_l">
                    <p class="dqtit">选择一个数字卡</p>
                    <div class="dqnumbox">
                        <p class="dqtxts"><span class="_select_num sp">x</span><em></em></p>
                        <p class="dqtips">请在上方选择一个数字卡数字</p>
                    </div>
                </div>
                <a class="sp" href="javascript:giveF();"><span>分享该数字卡给好友</span></a>
                <a class="sp" href="javascript:getF();"><span>邀请好友赠送数字卡</span></a>
            </div>
            <div class="p5box" style="display: none;">
                <a class="sp btn_qrtj" href="javascript:get_my_friend();"><span>确认授权将为您推荐好友</span></a>
                <p class="item c"><span class="i_t1">好友QQ</span><span class="i_t1">好友昵称</span><span class="i_t2">好友头像</span> </p>
                <div class="tabox">
                    <table id="friend_list">
                        <!--                        <tr>-->
                        <!--                            <td width="24%">1111111111</td>-->
                        <!--                            <td width="24%">昵称</td>-->
                        <!--                            <td width="20%">-->
                        <!--                                <div class="hd_bg"><img-->
                        <!--                                        src="//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/hd_pic.png"/>-->
                        <!--                                </div>-->
                        <!--                            </td>-->
                        <!--                            <td>-->
                        <!--                                <a class="sp btn_share1" href="javascript:;"><span>分享该数字卡给TA</span></a>-->
                        <!--                                <a class="sp" href="javascript:;"><span>邀请TA赠送数字卡</span></a>-->
                        <!--                            </td>-->
                        <!--                        </tr>-->
                    </table>
                </div>
            </div>
            <div class="p5box1">
                <h3>玩家反馈</h3>
                <p>这里有一份关于本活动的体验问卷，填写后可领取获得本活动传说币x8，您的建议和意见对我们来说非常重要，感谢支持！<span>（注：仅限【在本次活动付费过】的玩家填写问卷，领取奖励）</span></p>
                <div class="p5btn c">
                    <a class="sp btn_p5tx fl btnFeedBack" href="javascript:alert('【请先参与本次活动】')">填写问卷</a>
                    <a class="sp btn_p5lq fr btnLqFeedBack" href="javascript:amsLqFeedBack();">领取奖励<span>（传说币x8）</span></a>
                </div>
            </div>
        </div>
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/store/counter"; // 确保路径正确
const counterStore = useCounterStore();

</script>