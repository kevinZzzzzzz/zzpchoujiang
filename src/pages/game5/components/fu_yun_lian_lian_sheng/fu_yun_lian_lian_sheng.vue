<style scoped>
    /* 标题 */
    .active_rule_title{
        background-position: -23px -130px;
        width: 1063px;
        height: 57px;
        margin: 0 auto;
        display: block;
    }
    .active_rule_title1{
        background: url(@/assets/game5Img/sp.png) no-repeat;
        background-position: -23px -456px;
        margin-top: 110px;
    }
    /* 标题结束 */
    .tit_ct1 {
        font-size: 20px;
        color: #fee9d0;
        text-align: center;
        line-height: 30px;
        padding: 25px 0;
        margin: 0 auto;
    }
    .box4 {
        background: url(/PUBLIC/福运列表.png) no-repeat;
        width: 1200px;
        height: 210px;
        margin: 24px auto 0;
        padding-top: 70px;
        box-sizing: border-box;
    }
    table {
        border-collapse: collapse;
        border-spacing: 0;
    }
    .table_bor1 {
        width: 1200px;
        text-align: center;
    }
    .table_bor1 th {
    font-size: 24px;
    color: #fee9d0;
    height: 70px;
    line-height: 70px;
}
.table_bor1 th {
    font-size: 24px;
    color: #fee9d0;
    height: 70px;
    line-height: 70px;
}
.btn_ck1 {
    background: url(@/assets/game5Img/sp.png) no-repeat;
    background-position: -723px -921px;
    width: 325px;
    height: 108px;
    display: block;
    margin: 28px auto 0;
}
.btn_ck1 p {
    background-image: linear-gradient(to bottom, #f8d7a1, #fce3c0, #ffecd7);
    color: transparent;
    -webkit-background-clip: text;
    font-size: 34px;
    text-align: center;
    line-height: 125px;
    font-family: "rui";
    margin: 0;
}
.p2txts {
    font-size: 20px;
    color: #fee9d0;
    text-align: center;
    line-height: 1;
    padding-top: 20px;
    margin: 0;
}
.p2txts em {
    color: #ffe58c;
    font-style: normal
}
.p2box2 {
    position: relative;
    width: 1200px;
    margin: 25px auto 0;
}
.icon_1 {
    background: url(@/assets/game5Img/jindu.png) no-repeat;
    width: 1200px;
    height: 21px;
    position: absolute;
    left: 0;
    top: 30px;
}
.box2 {
    width: 1200px;
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    list-style: none;
}
.box2 li p {
    font-size: 14px;
    color: #e6bd8d;
    text-align: center;
    line-height: 20px;
    margin: 0;
}
.box2 li p span {
    font-size: 24px;
    color: #ffe58c;
    font-weight: bold;
}
.box2 li img {
    display: block;
    margin: 32px auto 0;
}
.btnsee {
    background: url(@/assets/game5Img/sp.png) no-repeat;
    background-position: -1066px -951px;
    width: 161px;
    height: 54px;
    margin: 8px auto 0;
    display: block;
    text-decoration: none;
    cursor: pointer;
}
.btnsee em {
    font-size: 24px;
    text-align: center;
    line-height: 62px;
    display: block;
    font-family: "rui";
    background-image: linear-gradient(to bottom, #832707, #993414, #af4220);
    color: transparent;
    -webkit-background-clip: text;
    font-style: normal;
}
ul{padding-left: 0;}
.gray{
    background-position: -1066px -877px;
    filter: grayscale(100%) !important;
}
</style>
<template>
    <div class="active_rule_title active_rule_title1"></div>
    <p class="tit_ct1">39.9Q币开通福运卡并直接赠送抽奖钥匙x5，单Q限1<br>邀请仍未在本活动开卡的玩家，双方均可获得“金蛇幸运星”x1，（单Q最多邀请6名用户）</p>
    <img style="width: 1200px;"src="@/assets/game5Img/福运.png" alt="">
    <div class="box4">
        <table class="table table_bor1">
            <thead>
            <tr>
                <th style="width: 600px;">玩家名称</th>
                <th>大区</th>
            </tr>
            </thead>
            <tbody class="invite_buy"></tbody>
        </table>
    </div>
    <a class="btn_ck1 sp">
        <p>查看我邀请的用户</p>
    </a>
    <p class="p2txts">当前已累计金蛇幸运星：<em class="jf_3132">{{ counterStore.jin_she_xing_yun_xing }}</em></p>
    <div class="p2box2">
        <em class="icon_1"></em>
        <ul class="box2">
            <li>
                <p>累计获取金蛇幸运星<span>1</span></p>
                <img src="@/assets/game5Img/5000cf.png">
                <!--添加类名 grey 为已领取 -->
                <a v-if="!ac1" class="sp btnsee sumlq sumlq1" @click="lingqu(1)"><em>点击领取</em></a>
                <a v-if="ac1" class="gray sp btnsee sumlq sumlq1"><em>已领取</em></a>
            </li>
            <li>
                <p>累计获取金蛇幸运星<span>3</span></p>
                <img src="@/assets/game5Img/10000cf.png">
                <a v-if="!ac2"  class="sp btnsee sumlq sumlq2" @click="lingqu(3)"><em>点击领取</em></a>
                <a v-if="ac2"  class="gray sp btnsee sumlq sumlq2"><em>已领取</em></a>

            </li>
            <li>
                <p>累计获取金蛇幸运星<span>6</span></p>
                <img src="@/assets/game5Img/15000cf.png">
                <a v-if="!ac3"  class="sp btnsee sumlq sumlq3" @click="lingqu(6)"><em>点击领取</em></a>
                <a v-if="ac3"  class="gray sp btnsee sumlq sumlq3"><em>已领取</em></a>

            </li>
            <li>
                <p>累计获取金蛇幸运星<span>10</span></p>
                <img src="@/assets/game5Img/30000cf.png">
                <a v-if="!ac4"  class="sp btnsee sumlq sumlq4"  @click="lingqu(10)"><em>点击领取</em></a>
                <a v-if="ac4"  class="gray sp btnsee sumlq sumlq4"><em>已领取</em></a>

            </li>
            <li>
                <p>累计获取金蛇幸运星<span>15</span></p>
                <img src="@/assets/game5Img/60000cf.png">
                <a v-if="!ac5"  class="sp btnsee sumlq sumlq5" @click="lingqu(15)"><em>点击领取</em></a>
                <a v-if="ac5"  class="gray sp btnsee sumlq sumlq5"><em>已领取</em></a>

            </li>
            <li>
                <p>累计获取金蛇幸运星<span>20</span></p>
                <img src="@/assets/game5Img/120000cf.png">
                <a v-if="!ac6"  class="sp btnsee sumlq sumlq6"  @click="lingqu(20)"><em>点击领取</em></a>
                <a v-if="ac6"  class="gray sp btnsee sumlq sumlq6"><em>已领取</em></a>

            </li>
            <li>
                <p>超过20金蛇幸运星数量<span class="cur_lq_star_hold">21</span></p>
                <img src="@/assets/game5Img/NANcf.png">
                <a class="sp btnsee sum_lq_extra"  @click="lingqu(21)"><em>点击领取</em></a>
                
            </li>
        </ul>
    </div>
</template>

<script setup>
    import { ref ,watch} from "vue";
    import { useCounterStore } from "@/store/counter"; // 确保路径正确
    const counterStore = useCounterStore();
    let ac1 = ref(false);
    let ac2 = ref(false);
    let ac3 = ref(false);
    let ac4 = ref(false);
    let ac5 = ref(false);
    let ac6 = ref(false);
    let chao_chu_bu_fen = ref(0);
    let yi_dui_huan = ref(0);
    let ke_dui_huan_de_xing_yun_xing = ref(0);
    const ke_dui_huan_de_cf_dian = ref(0); // 可以兑换的CF点数
    watch(() => counterStore.jin_she_xing_yun_xing , (newVal) => {
        console.log("检测到的新值是");
        console.log(newVal);
        chao_chu_bu_fen.value = newVal-20;
        console.log("检测到的超出部分是");
        console.log(chao_chu_bu_fen.value);
        if (chao_chu_bu_fen.value > 0) {
            // 如果超过20个，计算可以兑换的幸运星数量
            ke_dui_huan_de_xing_yun_xing.value = chao_chu_bu_fen.value - yi_dui_huan.value;
            console.log("检测到的可以兑换的部分是");
            console.log(ke_dui_huan_de_xing_yun_xing.value);
            
        }
    });
    function lingqu(num){
        if(!counterStore.login_active){
            counterStore.login_div_display = "login";
        }else{
            if(counterStore.jin_she_xing_yun_xing<num){
                counterStore.systems = true;
                counterStore.systems_message = "您累积获得的金蛇幸运星不足~"
            }else{
                if(num==1){
                    counterStore.systems = true;
                counterStore.systems_message = "恭喜您获得了礼包：5000CF点"
                ac1.value=true;
            }
                if(num==3){
                    counterStore.systems = true;
                counterStore.systems_message = "恭喜您获得了礼包：10000CF点"
                ac2.value=true;
            }
                if(num==6){
                    counterStore.systems = true;
                counterStore.systems_message = "恭喜您获得了礼包：15000CF点"
                ac3.value=true;
            }
                if(num==10){
                    counterStore.systems = true;
                counterStore.systems_message = "恭喜您获得了礼包：30000CF点"
                ac4.value=true;
            }
                if(num==15){
                    counterStore.systems = true;
                counterStore.systems_message = "恭喜您获得了礼包：60000CF点"
                ac5.value=true;
            }
                if(num==20){
                    counterStore.systems = true;
                counterStore.systems_message = "恭喜您获得了礼包：120000CF点"
                ac6.value=true;
            }
                if(num==21){
                    if (ke_dui_huan_de_xing_yun_xing.value > 0) {
                       // 保存可以兑换的幸运星数量
                        const tempKeDuiHuan = ke_dui_huan_de_xing_yun_xing.value;
                        // 更新已经兑换的幸运星数量
                        yi_dui_huan.value += tempKeDuiHuan;
                        // 重置可兑换的幸运星数量
                        ke_dui_huan_de_xing_yun_xing.value = 0;
                        // 计算可以兑换的CF点数
                        ke_dui_huan_de_cf_dian.value = tempKeDuiHuan * 5000;
                        console.log("可以兑换的cf点数量为");
                        console.log(ke_dui_huan_de_cf_dian.value);
                        counterStore.systems = true;
                        counterStore.systems_message = "恭喜您获得了礼包："+ke_dui_huan_de_cf_dian.value+"CF点"
                    }else{
                        counterStore.systems = true;
                        counterStore.systems_message = "您没有可以兑换的金蛇幸运星~"
                    }
                    

            }
            }
            
        }
    }
</script>