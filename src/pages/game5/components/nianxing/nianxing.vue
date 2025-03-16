<style scoped>
div {
    width: 318px;
    height: 366px;
    /* background:url(@/assets/game5Img/粘性.png); */
    background-size: 100% 100%;
    position: fixed;
    right: 0px;
    z-index: 9;
}

p {
    display: inline-block;
    position: absolute;
    width: 34px;
    height: 34px;
    right: 20px;
    cursor: pointer;
}

a {
    display: inline-block;
    position: absolute;
    width: 220px;
    height: 60px;
    cursor: pointer;
    bottom: 63px;
    left: 50px;
}

#zhubodaichou {
    width: 168px;
    height: 230px;
    background: none;
    left: 0;
    cursor: pointer;
    z-index: 9;
    top: calc(50% - 14vh);
}

.lianxi {
    top: calc(50% - 25vh);
}

#mao_dian_lian_jie {
    width: 229px;
    height: 930px;
    display: flex;
    flex-flow: column nowrap;
    align-items: center;
    justify-content: start;
    /* background-color: black; */
    position: fixed;
    bottom: 0px;
    right: -10px;
    z-index: 9;
    transition: .2s ease;
    transform: scale(.9);
    opacity: 1;
}
.mao_dian_active{
    /* bottom: 100px !important; */
    width: 0px !important;
    height: 0px !important;
    opacity: 0 !important;
    /* bottom: -200px !important; */
}
.mao_dian_lie_biao {
    width: 229px;
    height: 618px;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-flow: column nowrap;
    padding-left: 0;
    margin: 0;
}

.mao_dian_lie_biao li {
    background: url(@/assets/game5Img/sp3.png) no-repeat;
    /* background-size: 100% 100%; */
    width: 229px;
    height: 70px;
    background-position: -1235px -675px;

    cursor: pointer;
    line-height: 70px;
    font-size: 22px;
    text-align: center;
    color: #522b01;
}

.mao_dian_lie_biao li:hover {
    background-position: -1501px -674px;
}

.on {
    background-position: -1501px -674px !important;
}

.btn_top {
    width: 60px;
    height: 38px;
    display: block;
    background: url(@/assets/game5Img/sp3.png) no-repeat;
    background-position: -886px -257px;
    margin: 0 auto;
    position: static !important;
    margin-top: 20px;
}
.code {
    background: url(//game.gtimg.cn/images/actdaoju/cp/a20250121serialnumber/erweim_bg.png) no-repeat;
    width: 237px;
    height: 254px;
    display: block;
    box-sizing: border-box;
    padding-top: 118px;
    margin: 0px auto 0;
    background-size: 100% 100%;
    position: static !important;
    
}

</style>
<template>
    <!-- <div class="lianxi" v-show="active" v-if="active_important">
        <p @click="no_show()"></p>
        <a href="https://kf.qq.com/touch/kfgames/A1109/v2/PCweb/conf/index.html?scene_id=CSCE20241231181228OUscMOSu#/faq"></a>
    </div> -->
    <div id="mao_dian_lian_jie" :class="mao_dian_active">
        <ul class="mao_dian_lie_biao">
            <li class="li" @click="mao_dian(1)"><span>传说抽奖池</span></li>
            <li class="li" @click="mao_dian(2)"><span>传说宝箱自选</span></li>
            <li class="li" @click="mao_dian(3)"><span>传说币兑换</span></li>
            <li class="li" @click="mao_dian(4)"><span>传说福利</span></li>
            <li class="li" @click="mao_dian(5)"><span>破空枪刃福利</span></li>
            <li class="li" @click="mao_dian(6)"><span>序列号尊享私人订制</span></li>
            <li class="li" @click="mao_dian(7)"><span>好友齐聚 尊贵同享</span></li>
            <li class="li" @click="mao_dian(8)"><span>传说厂牌专题站</span></li>
            <li class="li" @click="mao_dian(9)"><span>活动规则</span></li>
        </ul>
        <a @click="top()" class="btn_top db sp" href="javascript:scrollTo(0);"></a>
        <div class="code">
            <a class="btn_kf"
                href="https://kf.qq.com/touch/kfgames/A1109/v2/PCweb/conf/index.html?scene_id=CSCE20250211123146nYLRWGik"
                target="_blank"></a>
        </div>
    </div>
    <div id="zhubodaichou" v-show="active" v-if="active_important1">
        <img @click="guanbi_daichou()" src="@/assets/game5Img/主播带抽.png" alt="">
    </div>
</template>

<script setup>
import { ref } from 'vue';
let active = ref(false);
let active_important = ref(true);
let active_important1 = ref(true);
let mao_dian_active = ref('');
let set = setInterval(() => {
    var scrollTop = document.documentElement.scrollTop;
    const listItems = document.querySelectorAll('.mao_dian_lie_biao li');
        // 移除所有li的on类名
        listItems.forEach(li => li.classList.remove('on'));

    if (scrollTop >= 875) {
        mao_dian_active.value = '';
        active.value = true;
    } else {
        mao_dian_active.value = 'mao_dian_active';

        active.value = false;
    }
    // 根据滚动位置为对应的li添加on类名
    if (scrollTop < 2972) {
        // 第一个li
        listItems[0].classList.add('on');
    } else if (scrollTop >= 2972 && scrollTop < 3576) {
        // 第二个li
        listItems[1].classList.add('on');
    } else if (scrollTop >= 3576 && scrollTop < 5771) {
        // 第三个li
        listItems[2].classList.add('on');
    } else if (scrollTop >= 5771 && scrollTop < 6471) {
        // 第四个li
        listItems[3].classList.add('on');
    } else if (scrollTop >= 6471 && scrollTop < 7630) {
        // 第五个li
        listItems[4].classList.add('on');
    } else if (scrollTop >= 7630 && scrollTop < 10382) {
        // 第六个li
        listItems[5].classList.add('on');
    } else if (scrollTop >= 10382 && scrollTop < 11261) {
        // 第七个li
        listItems[6].classList.add('on');
    } else if (scrollTop >= 11261 && scrollTop < 12253) {
        // 第八个li
        listItems[7].classList.add('on');
    } else if (scrollTop >= 12253 && scrollTop < 20000) {
        // 第九个li
        listItems[8].classList.add('on');
    }

}, 10)
function top() {
    // 使用平滑滚动
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // 平滑滚动
    });
}
function mao_dian(num) {
    // 获取所有li元素
    const listItems = document.querySelectorAll('.mao_dian_lie_biao li');
    // 移除所有li的on类名
    listItems.forEach(li => li.classList.remove('on'));
    // 为当前点击的li添加on类名
    if (num >= 1 && num <= listItems.length) {
        listItems[num - 1].classList.add('on');
    }
    // 定义每个按钮对应的滚动位置
    const scrollPositions = [
        1200,   // num = 1
        2972,   // num = 2
        3576,   // num = 3
        5771,   // num = 4
        6471,   // num = 5
        7630,   // num = 6
        10382,  // num = 7
        11261,  // num = 8
        12253   // num = 9
    ];

    // 检查num是否在有效范围内
    if (num >= 1 && num <= scrollPositions.length) {
        const targetPosition = scrollPositions[num - 1]; // 数组索引从0开始

        // 使用平滑滚动
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth' // 平滑滚动
        });
    } else {
        console.error('无效的num值:', num);
    }
}
function no_show() {
    clearInterval(set);
    active_important.value = false;
}
function guanbi_daichou() {
    active_important1.value = false;
}
</script>