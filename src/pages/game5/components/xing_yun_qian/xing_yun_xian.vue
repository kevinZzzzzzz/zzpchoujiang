<style scoped>
/* 标题 */
.active_rule_title {
    background-position: 0 -430px;
    width: 616px;
    height: 72px;
    margin: 0 auto;
    display: block;
}

.active_rule_title1 {
    background: url(@/assets/game5Img/sp3.png) no-repeat;
    background-position: 0 -430px;
    margin-top: 78px;
}

/* 标题结束 */
.p3list {
    width: 1200px;
    height: 252px;
    margin: 25px auto 0;
    list-style: none;
    padding-left: 0;
}

.p3list li {
    margin-bottom: 5px;
    /* height: 29px; */
    display: flex;
    align-items: center;
}

.p3list em {
    background: url(@/assets/game5Img/sp.png) no-repeat;
    font-style: normal;
    background-position: -1087px -738px;
    width: 30px;
    height: 29px;
    font-size: 18px;
    color: #fee9d0;
    text-align: center;
    line-height: 29px;
    display: inline-block;
    vertical-align: bottom;

    display: NONE;
}

.p3list p {
    font-size: 20px;
    color: #5d3a18;
    text-align: left;
    line-height: 29px;
    display: inline-block;
    margin: 0;
    line-height: 32px;
}



.p3btnee {
    display: flex;
    justify-content: flex-start;
    margin: 30px auto 0;
    padding: 0;
}

.p3btnee li {
    margin: 0;
    padding: 0;

    list-style: none;
}

.p3btnee a {
    font-size: 20px;
    color: #ffe58c;
    display: block;
    text-align: left;
    line-height: 1.2;
    text-decoration: underline;
    margin-right: 60px;
    cursor: pointer;
}
/* 传说辉光的传说夜影的新的 累计获得传说币 开始 */
.lucktxt2 {
    color: #5d3a18;
    text-align: center;
    font-size: 22px;
    margin: 0px auto 10px;
    line-height: 44px;
    font-weight: bold;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-wrap: wrap;
}
.lucktxt2 span {
    width: 50%;
    text-align: center;
}
.lucktxt2 span em {
    font-weight: bold;
}
.btn_lucky {
    color: #5d3a18;
    font-size: 18px;
    line-height: 1.2;
    text-decoration: underline;
    text-align: center;
}
/* 传说辉光的传说夜影的新的 累计获得传说币 结束 */
</style>
<template>
    <div class="active_rule_title active_rule_title1"></div>
    <ul class="p3list">
        <li>
            <em class="sp">1、</em>
            <p>1、每累计获得500传说币，将自动分别获得传说辉光序列号抽取券的幸运签×1 和传说夜影序列号抽取券的幸运签×1；<br>
                传说辉光随机序列号抽取券 幸运签x1用于抽取传说辉光随机序列号兑换资格；传说夜影随机序列号抽取券 幸运签×1用于抽取传说夜影随机序列号兑换资格；</p>
        </li>
        <li>
            <em class="sp">2、</em>
            <p>2、每日18:00刷新中签状态，未中签的签码在活动期间内均有机会中签；每日【传说辉光随机序列号抽取券】幸运签1万张；每日【传说夜影随机序列号抽取券】幸运签1万张</p>
        </li>
        <li>
            <em class="sp">3、</em>
            <p>3、消耗中签的幸运签和相应传说币可进行兑换</p>
        </li>
        <li>
            <em class="sp">4、</em>
            <p>4、同一道具的累计幸运签数达20张，可消耗剩余对应道具未中签幸运签以及相应传说币进行兑换（单Q限1）</p>
        </li>
    </ul>
    <!-- 传说辉光的传说夜影的新的 累计获得传说币 开始 -->
    <p class="lucktxt2">
        <span>累计获得传说币：<em class="jf_total_6915">{{ counterStore.acc_ji_fen }}</em></span>
        <span>剩余可使用传说币：<em class="jf_6915">{{ counterStore.ji_fen }}</em></span>
        <a class="btn_lucky" href="javascript:signList(1,1);">查看我的传说辉光随机序列号抽取券幸运签</a>
        <a class="btn_lucky" href="javascript:get_has_signed_list(0,10,1);">传说辉光幸运签中签公示</a>
        <a class="btn_lucky" href="javascript:signList(1,2);">查看我的传说夜影随机序列号抽取券幸运签</a>
        <a class="btn_lucky" href="javascript:get_has_signed_list(0,10,2);">传说夜影幸运签中签公示</a>
    </p>
    <!-- 传说辉光的传说夜影的新的 累计获得传说币 结束 -->
</template>

<script setup>
import { ref } from "vue";
import { useCounterStore } from "@/store/counter"; // 确保路径正确
const counterStore = useCounterStore();
</script>