<style scoped>
    .lingqu_box{
        width: 100vw;
        height: 100vh;
        position: fixed;
        left: 0;
        top: 0;
        background-color: rgba(0, 0, 0, .6);
        z-index: 11;
        display: flex;
        align-items: center;
        justify-content: center;
    }
    .zixuan{
        width: 693px;
        height: 551px;
        background: url(@/assets/game5Img/自选.png);
        position: relative;
        box-sizing: border-box;
        padding-top: 26px;
    }
    .zixuan span{
        width: 216px;
        height: 62px;
        display: flex;
        font-size: 36px;
        line-height: 1;
        font-weight: bold;
        position: absolute;
        top: 0px;
        left: 30px;
        justify-content: center;
        align-items: center;
        font-family: 'font';
        background-image: -webkit-linear-gradient(left, #423ba8, #8c59d3, #8c59d3, #8c59d3);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
    }
    .zixuan b{
        width: 216px;
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
    .zixuan p{
        font-size: 20px;
        color: #FFFFFF;
        line-height: 1;
        width: 100%;
        margin: 20px auto 0;
        text-align: center;
    }
    .zixuan1{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 30px auto 0;
        height: 152px;
    }
    .zixuan2{
        width: 100%;
        height: 66px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 35px auto 0;
    }
    .close{
        list-style: none;
        background: url(@/assets/game5Img/sp3.png) no-repeat;
        background-position: -1667px -35px;
        width: 37px;
        height: 37px;
        position: absolute;
        right: 18px;
        top: 20px;
        cursor: pointer;
    }
    .cart{
        width: 679px;
        height: 167px;
        margin: 0 auto;
        margin-top: 30px;
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .carts{
        width: 206px;
        height: 166px;
        background: url(@/assets/game5Img/自选背景.png);
        background-size: 100% 100%;
        margin: 0 7PX;
        display: flex;
        flex-flow: column;
        position: relative;
        align-items: center;
        justify-content: center;
        cursor: pointer;
    }
    .carts img:nth-child(1) {
        width: 100%;
        height: auto;
    }
    .carts p {
        margin: 0;
        position: absolute;
        bottom: 13px;
        color: #5d3a18;
    }
    .lingqu{
        
        margin: 0 auto;
        margin-top: 25px;
        width: 540px;
        height: 83px;
        display: flex;
        justify-content: space-between;
        align-items: center;
    }
    .lingqu p{
        background: url(@/assets/game5Img/sp3.png) no-repeat;
        width: 248px;
        height: 78px;
        cursor: pointer;
        border: none;
        margin: 0;
        font-size: 28px;
        line-height: 88px;
    }
    .lingqu p:nth-child(1){background-position: -695px -1097px !important;color: white;}
    .lingqu p:nth-child(2){background-position: -977px -1098px;    color: #000f83;}
    .xuanzhong{
        width: 32px;
    height: 32px;
    border: 1px solid #705440;
    position: absolute;
    top: 15px;
    left: 15px;
    display: block;
    border-radius: 50%;
    }
    .xuanzhong1{
        width: 32px;
    height: 32px;
    border: 1px solid #705440;
    background-color: #705440;
    position: absolute;
    top: 15px;
    left: 15px;
    display: block;
    border-radius: 50%;
    }
    .title{
        background: url(@/assets/game5Img/sp2.png);
        background-position: -76px -382px;
        width: 539px;
        height: 54px;
        margin: 0 auto;
        margin-bottom: 12px;     
        /*  */
        opacity: 0;
        }
</style>
<template>
    <div class="lingqu_box" v-if="zixuan">
        <div class="zixuan">
            <li class="close" @click="close()"></li>
            <h3 class="pop_tit_zc popsp title title1"></h3>

            <p style="opacity: 0;">选择并领取其中一个奖品</p>
            <div class="cart">
                <div  @click="xuan_zhong(1)" class="carts">
                    <img src="@/assets/game5Img/传说辉光随机序列号抽取券.png" alt="">
                    <p style=" font-size: 16px;">传说辉光 随机序列号抽取券幸运签×1</p>
                    <!-- <p v-if="text_actice==1" style="color: #D70A0A;">竞界值x3</p> -->
                    <!-- <img v-if="text_actice==1" class="xuanzhong" src="@/assets/game5Img/选中.png" alt=""> -->
                    <i v-if="text_actice!=1" class="xuanzhong"></i>
                    <i v-if="text_actice==1" class="xuanzhong xuanzhong1"></i>
                    <!-- <img v-if="text_actice!=1" class="xuanzhong" src="@/assets/game5Img/未选中.png" alt=""> -->
                </div>
                <div @click="xuan_zhong(2)"  class="carts">
                    <img src="@/assets/game5Img/传说夜影随机序列号抽取券.png" alt="">
                    <p  style=" font-size: 16px;">传说夜影 随机序列号抽取券
幸运签×1</p>
                    <!-- <p v-if="text_actice==2" style="color: #D70A0A;">王者之石x1</p> -->
                    <!-- <img v-if="text_actice==2" class="xuanzhong" src="@/assets/game5Img/选中.png" alt="">
                    <img v-if="text_actice!=2" class="xuanzhong" src="@/assets/game5Img/未选中.png" alt=""> -->
                    <i v-if="text_actice!=2" class="xuanzhong"></i>
                    <i v-if="text_actice==2" class="xuanzhong xuanzhong1"></i>
                </div>
                <div @click="xuan_zhong(3)"  class="carts">
                    <img src="@/assets/game5Img/王者之石.png" alt="">
                    <p style=" font-size: 16px;">王者之石×10</p>
                    <!-- <p v-if="text_actice==3" style="color: #D70A0A;">2025万能碎片x3</p> -->
                    <!-- <img v-if="text_actice==3" class="xuanzhong" src="@/assets/game5Img/选中.png" alt="">
                    <img v-if="text_actice!=3" class="xuanzhong" src="@/assets/game5Img/未选中.png" alt=""> -->
                    <i v-if="text_actice!=3" class="xuanzhong"></i>
                    <i v-if="text_actice==3" class="xuanzhong xuanzhong1"></i>
                </div>
            </div>
            <div class="lingqu">
               <p @click="zhixing(1)" alt="">领取一次</p>
               <p @click="zhixing(5)"  alt="">领取五次</p>
            </div>
        </div>
    </div>
</template>

<script setup>
    import { ref ,watch} from "vue";
    import { useCounterStore } from "@/store/counter"; // 确保路径正确
    const counterStore = useCounterStore();
    let zixuan = ref(false);
    let text_actice = ref(0);
    watch(() => counterStore.zixuan, (newVal) => {
        zixuan.value = newVal;
    });
    function close(){
        counterStore.zixuan = false;
        zixuan.value = counterStore.zixuan;
    }
    let xuan_zhong_zhi = ref(0);
    function xuan_zhong(num){  
        if(num==1){xuan_zhong_zhi.value =1;}
        if(num==2){xuan_zhong_zhi.value =2;}
        if(num==3){xuan_zhong_zhi.value =3;}
        text_actice.value = num;
        counterStore.zixuan_liwu = num;
    }
    function zhixing(num){
        if(text_actice.value==0){
            counterStore.zixuan = false;
            counterStore.systems = true;
            counterStore.systems_message = "请先选取奖励";
        }else{
            if(counterStore.jing_jie_bao_xiang<num){
                counterStore.zixuan = false;
                counterStore.systems = true;    
                counterStore.systems_message = "请先获取传说宝箱";
            }else{
                if(xuan_zhong_zhi.value==1){
                    counterStore.jiang_li = '传说辉光 随机序列号抽取券幸运签×1';
                }
                if(xuan_zhong_zhi.value==2){
                    counterStore.jiang_li = '传说夜影 随机序列号抽取券幸运签×1';
                }
                if(xuan_zhong_zhi.value==3){
                    counterStore.jiang_li = '王者之石×10';
                }
                counterStore.zi_xuan_active = true;
                counterStore.cao_zuo_active = '自选';
                counterStore.xuan_zhong_zhi_xing_ci_shu = num;
                counterStore.cf_alert_active = true;
            }
        }
        
    }
</script>