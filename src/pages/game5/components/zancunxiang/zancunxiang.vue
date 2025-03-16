<style scoped>
.bk {
    width: 100vw;
    height: 100vh;
    position: fixed;
    top: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 11;
}

.shoujiangbeijing {
    width: 693px;
    height: 607px;
    background: url(@/assets/game5Img/暂存箱背景.png);
    position: relative;
    box-sizing: border-box;
    padding-top: 27px;

}

.shoujiangbeijing>span {

    display: flex;

    line-height: 1;
    position: absolute;
    top: 25px;
    justify-content: center;
    align-items: center;
    /* background-image: -webkit-linear-gradient(left, #423ba8, #8c59d3, #8c59d3, #8c59d3); */
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
}

.shoujiangbeijing b {
    width: 144;
    height: 62px;
    display: inline-block;
    font-size: 36px;
    line-height: 1;
    color: #405f5f;
    position: absolute;
    top: 0px;
    left: 31px;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: 'font';
}

.shoujiangbeijing p {
    font-size: 20px;
    color: #FFFFFF;
    line-height: 1;
    width: 100%;
    margin: 20px auto 0;
    text-align: center;
}

.shoujiangbeijing1 {
    width: 100%;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 30px auto 0;
    height: 152px;
}

.shoujiangbeijing2 {
    width: 100%;
    height: 66px;
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
    margin: 35px auto 0;
}

.close {
    list-style: none;
    background: url(@/assets/game5Img/sp3.png);
    background-position: -1667px -35px;
    width: 37px;
    height: 37px;
    position: absolute;
    right: 18px;
    top: 20px;
    cursor: pointer;
    z-index: 10;
}

.zhong_jiang_xin_xi {
    margin: 0px auto;
    width: 563px;
    height: 50px;
    background-color: #FFFFFF;
    border: 1px solid #D8D2FF;
    font-size: 18px;
    color: #5440C0;
    line-height: 48px;
    text-align: center;
}

.left_right {
    width: 660px;
    height: 467px;
    margin: 0 auto;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    margin-top: 6px;
}

.left {
    width: 370px;
    height: 467px;
}

.right {
    width: 280px;
    height: 467px;
}

.pop_tit_zc {
    width: 100%;
    color: #5F151B;
    text-align: center;
    font-family: "font";
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 40px;
    margin: 0;
    margin-bottom: 12px;
}

.poptable3 {
    text-align: justify;
    width: 370px;
    height: 420px;
}

.poptable3 h4 {
    width: 100%;
    height: 60px;
    display: flex;
    justify-content: start;
    flex-wrap: nowrap;
    margin: 0;
}

.poptable3 h4 .spanleft,
.spanright {
    display: inline-block;
    width: 162px;
    height: 60px;
    align-items: center;
    text-align: center;
    line-height: 60px;
    box-sizing: border-box;
    font-weight: 100;
    font-size: 16px;
    background-color: #745740;

    color: white;
}

.poptable3 h4 .spanright {
    width: 108px !important;
    border-left: 1px solid #745740;
    height: 60px;
}

.table_con2 {
    width: 100%;
    height: 420px;
    overflow: hidden;
    overflow-y: scroll;
    display: flex;
    flex-flow: column;
    align-items: start;
}

.table_con2::-webkit-scrollbar {
    width: 10px;
    height: 6px;
}

.table_con2::-webkit-scrollbar-thumb {
    background: #999;
    border-radius: 10px;
}

.table_con2::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
    border-radius: 10px;
    background-color: #F5F5F5;
}

.table_con2 p {
    width: 270px;
    margin: 0;
    display: flex;
    align-items: center;
    color: #5440C0;
    box-sizing: border-box;
    border-bottom: 1px solid #d2c3a6;
    background-color: #efe5c6;
    /* margin-left: 2px; */

}

.tableft {
    display: inline-block;
    width: 162px;
    height: auto;
    padding: 5px 0px;
    color: black;
    font-size: 16px;
    box-sizing: border-box;
    line-height: 25px;

    color: #745740;
    border-right: 1px solid #d2c3a6;
    /* background-color: #efe5c6; */
}

.tabright {
    display: inline-block;
    width: 108px;
    height: auto;
    font-size: 16px;
    line-height: 25px;
    color: #745740;
    /* background-color: #efe5c6; */

}

.title {
    background: url(@/assets/game5Img/sp2.png);
    background-position: -95px -25px;
    width: 126px;
    height: 44px;
    margin: 0 auto;
    opacity: 0;
    margin-bottom: 12px;
}

.title1 {
    background-position: -379px -25px;
    width: 213px;
    height: 44px;
}

#titles {
    width: 100%;
    height: 60px;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: start;
    font-weight: 400;
}

.sspanleft {
    display: inline-block;
    width: 185px;
    height: 60px;
    background-color: #745740;
    color: #FFFFFF;
    text-align: center;
    line-height: 60px;
    font-size: 17px;
    box-sizing: border-box;
}

.sspancenter {
    display: inline-block;
    width: 92px;
    height: 60px;
    box-sizing: border-box;
    line-height: 60px;
    background-color: #745740;
    color: #FFFFFF;
    text-align: center;
    font-size: 17px;

}

.sspanright {
    display: inline-block;
    box-sizing: border-box;
    width: 93px;
    height: 60px;
    line-height: 60px;
    text-align: center;
    background-color: #745740;
    color: #FFFFFF;
    font-size: 17px;

}

.fen_ye {
    width: 100%;
    height: 42px;
    background-color: #00c0ff;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 0px 30px;
}

.fen_ye li {
    list-style: none;
    widows: 124px;
    height: 42px;
    margin: 0;
    line-height: 42px;
    font-size: 20px;
    color: white;
    cursor: pointer;
}

.fenye p {
    display: inline-block;
    width: 43px;
    height: 42px;
}
#jiang_pin_container{
    width: 100%;
    height: auto;
    min-height: 360px;
    background-color: #efe5c6;
    display: flex;
    flex-flow: column;
    align-items: center;
    justify-content: start;
    position: relative;
}
.null {
    width: 100%;
    text-align: center;
    height: 36px;
    line-height: 36px;
    box-sizing: border-box;
    color: #745740;
    /* border: 1px solid #D8D2FF; */
    border-bottom: 1px solid #d2c3a6;
    border-top: none;
    background-color: #efe5c6;
}

.data {
    width: 100%;
    height: 36px;
    box-sizing: border-box;
    border-bottom: 1px solid #d2c3a6;
    display: flex;
    flex-flow: row nowrap;
    background-color: #efe5c6;
    text-align: center;
    line-height: 38px;
    list-style-type: none;
    font-size: 15px;
}

.data .name {
    display: inline-block;
    width: 185px;
    margin: 0;
    text-align: center;
    box-sizing: border-box;
    font-size: 16px;
    color: #745740;
    display: flex;
    align-items: center;
    justify-content: center;
}

.data .lingqu {
    display: inline-block;
    width: 92px;
    text-align: center;
    cursor: pointer;
    /* border-left: 1px solid #D8D2FF; */
    border-left: 1px solid #d2c3a6;
    border-right: 1px solid #d2c3a6;
    /* border-right: 1px solid #D8D2FF; */
    color: #745740;
}

.data .fenjie {
    display: inline-block;
    width: 93px;
    cursor: pointer;
    color: #745740;

}

.mt-4 {
    display: flex;
    flex-flow: row;
    justify-content: center;
    margin-top: 6px;
    height: 40px;
    position: absolute;
    bottom: 0;
}
</style>
<template>
    <div class="bk" v-if="active">
        <div class="shoujiangbeijing">
            <li class="close" @click="close()"></li>
            <div class="left_right">
                <div class="left">
                    <h3 class="pop_tit_zc popsp title"></h3>
                    <div class="poptable3">
                        <h4 id="titles"><span class="sspanleft">名称</span><span class="sspancenter">领取道具</span><span
                                class="sspanright">分解为钥匙</span></h4>
                        <!-- <div class="null" v-if="current_data.value.length==0">抱歉，您尚未获得任何礼包</div>   -->
                        <div id="jiang_pin_container">
                            <div class="null" v-if="new_test_data.length == 0">暂未获取更多礼包</div>
                            <div class="data" v-for="(item, index) in current_data.value" :key="index">
                                <p class="name"><span>{{ item.text }}</span></p>
                                <li class="lingqu">
                                    <span @click="lingqu(item, index);" style="background-color: red;color: white;"
                                        v-if="item.bao_cun_to_cang_ku == '[领取]'">[发送仓库]</span>
                                    <span v-if="item.bao_cun_to_cang_ku == 'x'">X</span>
                                    <span v-if="item.bao_cun_to_cang_ku == '[已领取]'">已发送</span>
                                </li>
                                <li class="fenjie">
                                    <span style="background-color: red;color: white;" @click="fenjie(item, index);"
                                        v-if="item.fen_jie == '[分解]'">[分解]</span>
                                    <span v-if="item.fen_jie == 'x'">X</span>
                                    <span v-if="item.fen_jie == '[已分解]'">已分解</span>
                                </li>
                            </div>
                            <el-pagination  v-if="new_test_data.length != 0" size="small" layout="prev, pager, next" :total="new_test_data.length"
                            :current-page="current" :page-size="pageSize"  @current-change="handlePageChange" :pager-count="3" class="mt-4" />
                        </div>
                        <!-- <div  class="fen_ye">
                            <li @click="shangyiye()">上一页</li>
                            
                            <p  style="color: white;letter-spacing: 6px;width: 43px;margin: 0; ">{{current}}/{{page}}</p>
                            <li @click="xiayiye()">下一页</li>
                        </div> -->
                        
                    </div>
                </div>
                <div class="right">
                    <h3 class="pop_tit_zc popsp title title1"></h3>

                    <div class="poptable3" style="width: 280px;">

                        <div class="table_con2">
                            <h4><span class="spanleft">道具名称</span><span class="spanright">分解所获钥匙</span></h4>
                            <p><span class="tableft">传说辉光 无序列号版</span><span class="tabright">40</span></p>
                            <p><span class="tableft">传说夜影 无序列号版</span><span class="tabright">40</span></p>
                            <p><span class="tableft">王者星光</span><span class="tabright">12</span></p>
                            <p><span class="tableft">关小雨</span><span class="tabright">10</span></p>
                            <p><span class="tableft">QBZ03-金色蔷薇音效卡</span><span class="tabright">8</span></p>
                            <p><span class="tableft">裁决-流光秘银皮肤</span><span class="tabright">5</span></p>
                            <p><span class="tableft">Cop-旗袍</span><span class="tabright">5</span></p>
                            <p><span class="tableft">AWM-裁决</span><span class="tabright">3</span></p>
                            <p><span class="tableft">屠龙</span><span class="tabright">2</span></p>
                            <p><span class="tableft">天使灵狐玩偶</span><span class="tabright">1</span></p>

                        </div>
                    </div>

                </div>
            </div>
            <p style="width: 660px;font-size: 18px;    color: #725640;line-height: 24px;margin-top: 26px;">温馨提示：虚拟道具奖品将在24小时内发到您的游戏仓库。谢谢您的理解与支持！</p>
        </div>
    </div>
</template>
<script setup>
import { ref, watch, reactive, onMounted } from 'vue';
import { useCounterStore, useCounterStore1, useCounterStore2 } from "@/store/counter"; // 确保路径正确
const counterStore1 = useCounterStore1();
const counterStore2 = useCounterStore2();
const counterStore = useCounterStore();
let active = ref(false);

watch(() => counterStore.zan_cun_xiang_active, (newVal) => {
    active.value = newVal;
});
// 每页显示的数据数量
// const pageSize = 10;
const pageSize = 8;
let data = reactive([
]);
let current = ref(1);
let current_data = reactive([]);
let page = ref(1);
let new_test_data = reactive([]);
watch(() => counterStore2.zan_cun_xiangs, (newVal) => {
    console.log('data更新');
    console.log(counterStore2.zan_cun_xiangs);
    data.value = newVal;
    getCurrentPageData();
    if (data.value.length == 0) {
        page.value = 1;
        console.log("暂存箱无数据");
        // }else if(data.value.length%10==0){
    } else if (data.value.length % 8 == 0) {
        // page.value = data.value.length/10;
        page.value = data.value.length / 8;
        console.log("暂存箱数据页为"+data.value.length / 8);

        // }else if(data.value.length%10!=0){
    } else if (data.value.length % 8 != 0) {
        // page.value = Math.floor(data.value.length / 10+1);
        page.value = Math.floor(data.value.length / 8 + 1);
        console.log("暂存箱数据页为"+data.value.length / 8);

    }
    new_test_data = data.value;
}, {
    deep: true
});
onMounted(async () => {
    // 等待 Store 数据加载完成
    await new Promise(resolve => setTimeout(resolve, 2000)); // 模拟延迟
    data.value = counterStore2.zan_cun_xiangs;
    getCurrentPageData();
    if (data.value.length === 0) {
        page.value = 1;
    } else if (data.value.length % 8 === 0) {
        page.value = data.value.length / 8;
    } else {
        page.value = Math.floor(data.value.length / 8) + 1;
    }
    new_test_data = data.value;
});
// 监听当前页码的变化
watch(current, (newVal) => {
    getCurrentPageData(); // 当页码变化时，重新获取当前页数据
    counterStore.page_num = current.value - 1;
});
function getCurrentPageData() {
    const startIndex = (current.value - 1) * pageSize;
    const endIndex = startIndex + pageSize;
    // 使用slice来获取当前页的数据，但不直接修改current_data
    const currentPageData = data.value.slice(startIndex, endIndex);
    // 使用current_data.value来更新响应式数据
    current_data.value = currentPageData;
}
function close() {
    counterStore.zan_cun_xiang_active = false;
}

function shangyiye() {
    current.value--;
    if (current.value <= 1) {
        current.value = 1;
    }
}
function xiayiye() {
    current.value++;
    if (current.value >= page.value) {
        current.value = page.value;
    }
}
function handlePageChange(newPage) {
    // 当页码改变时，这里会被调用
    //   if(current.value-newPage>=2||current.value-newPage>=-2){
    //     return;
    //   }else{

    //   }
    current.value = newPage;
    // 在这里可以执行你的逻辑，比如获取新页面的数据
}
function lingqu(item, index) {
    //暂存箱界面消失
    counterStore.zan_cun_xiang_active = false;
    //弹窗出现
    counterStore.cf_alert_active = true;
    //领取状态开
    counterStore.ling_qu_active = true;
    //中转item（貌似没用了）
    counterStore.item = item;
    //中转当前数值（貌似没用了）
    // counterStore.item_index = ((current.value-1)*10)+index;
    counterStore.item_index = ((current.value - 1) * 8) + index;
    //必须
    counterStore.jiang_li = item.text;
    //必须
    counterStore.cao_zuo_active = "领取";

    //复制试试
    // counterStore.zan_cun_xiang[((current.value-1)*10)+index].bao_cun_to_cang_ku = '[已领取]';
    // counterStore.zan_cun_xiang[((current.value-1)*10)+index].fen_jie = 'x';
    // setTimeout(()=>{
    //     counterStore.zan_cun_xiang.splice(((current.value-1)*10)+index + 1, 1);
    // },100)
}
function fenjie(item, index) {
    counterStore.zan_cun_xiang_active = false;
    counterStore.cf_alert_active = true;
    counterStore.fen_jie_active = true;

    counterStore.item = item;
    // counterStore.item_index = ((current.value-1)*10)+index;
    counterStore.item_index = ((current.value - 1) * 8) + index;

    counterStore.item_index = index;

    counterStore.jiang_li = item.text;
    counterStore.cao_zuo_active = "分解";
    //复制试试
    // counterStore.zan_cun_xiang[((current.value-1)*10)+index].bao_cun_to_cang_ku = 'x';
    // counterStore.zan_cun_xiang[((current.value-1)*10)+index].fen_jie = '[已分解]';
    // setTimeout(()=>{
    //     counterStore.zan_cun_xiang.splice(((page.value-1)*10)+index + 1, 1);
    // },100)


}
</script>