<style scoped>
    /* 标题 */
    .active_rule_title{
        background-position: -23px -130px;
        width: 1080px;
        height: 57px;
        margin: 0 auto;
        display: block;
    }
    .active_rule_title1{
        background: url(@/assets/game5Img/sp.png) no-repeat;
        background-position: -23px -299px;
        margin-top: 220px;
    }
    /* 标题结束 */
    .box6 {
        width: 1200px;
        margin: 35px auto 0;
        display: flex;
        justify-content: space-between;
        padding-left: 0;
        list-style: none;
    }
    .txt12 {
        font-size: 20px;
        color: #fee9d0;
        text-align: center;
        line-height: 24px;
        margin: 15px 0;
    }
    .box6ct1 {
    background: url(@/assets/game5Img/传说卡框.png) no-repeat;
    width: 268px;
    height: 121px;
    padding: 23px 0 0 73px;
    box-sizing: border-box;
    margin: 0 auto;
}   
.box6ct1{background: url(@/assets/game5Img/传说卡框.png) no-repeat;}
.box6ct2{background: url(@/assets/game5Img/王者卡框.png) no-repeat;}
.box6ct3{background: url(@/assets/game5Img/英雄卡框.png) no-repeat;}
.box6ct4{background: url(@/assets/game5Img/道具卡框.png) no-repeat;}
.txt13 {
    font-size: 14px;
    color: #e6bd8d;
    text-align: center;
    line-height: 22px;
    margin: 0;
}
.txt13 span {
    display: block;
    color: #ffe58c;
}
.box6btn1 {
    width: 185px;
    margin: 13px auto 0;
    display: flex
;
    justify-content: space-between;
}
.box6btn1 a {
    background: url(@/assets/game5Img/sp.png) no-repeat;
    text-decoration: none;
    background-position: -1085px -696px;
    width: 90px;
    height: 27px;
    font-size: 14px;
    color: #842808;
    text-align: center;
    cursor: pointer;
    line-height: 26px;
}
</style>
<template>
    <div class="active_rule_title active_rule_title1"></div>
    <ul class="box6">
        <li>
            <img src="@/assets/game5Img/传说卡.png">
            <!--传说-->
            <p class="txt12">单张可兑换<span>30张金蛇卡</span></p>
            <div class="box6ct1">
                <p class="txt13">当前拥有数：<span class="jf_3133">{{ counterStore.chuan_shuo_cart }}</span></p>
                <div class="box6btn1">
                    <!--添加类名 grey 为已兑换-->
                    <a class="sp" @click="chuanshuo(1)">消耗1张兑换</a>
                    <a class="sp" @click="chuanshuo(10)" >消耗10张兑换</a>
                </div>
            </div>
        </li>
        <li>
            <img src="@/assets/game5Img/王者卡.png">
            <!--王者-->
            <p class="txt12">单张可兑换<span>3张金蛇卡</span></p>
            <div class="box6ct1 box6ct2">
                <p class="txt13">当前拥有数：<span class="jf_3134">{{ counterStore.wang_zhe_cart}}</span></p>
                <div class="box6btn1">
                    <a class="sp"  @click="wangzhe(1)">消耗1张兑换</a>
                    <a class="sp" @click="wangzhe(10)">消耗10张兑换</a>
                </div>
            </div>
        </li>
        <li>
            <img src="@/assets/game5Img/英雄卡.png">
            <!--英雄-->
            <p class="txt12">单张可兑换<span>2张金蛇卡</span></p>
            <div class="box6ct1 box6ct3">
                <p class="txt13">当前拥有数：<span class="jf_3135">{{ counterStore.ying_xiong_cart }}</span></p>
                <div class="box6btn1">
                    <a class="sp" @click="yingxiong(1)">消耗1张兑换</a>
                    <a class="sp" @click="yingxiong(1)">消耗10张兑换</a>
                </div>
            </div>
        </li>
        <li>
            <img src="@/assets/game5Img/道具卡.png">
            <!--道具-->
            <p class="txt12">单张可兑换<span>1张金蛇卡</span></p>
            <div class="box6ct1 box6ct4">
                <p class="txt13">当前拥有数：<span class="jf_3136">{{ counterStore.dao_ju_cart }}</span></p>
                <div class="box6btn1">
                    <a class="sp" @click="daoju(1)">消耗1张兑换</a>
                    <a class="sp" @click="daoju(10)">消耗10张兑换</a>
                </div>
            </div>
        </li>
    </ul>
</template>

<script setup>
    import { ref } from "vue";
    import { useCounterStore } from "@/store/counter"; // 确保路径正确
    const counterStore = useCounterStore();

    function chuanshuo(num){
        if(!counterStore.login_active){
            counterStore.login_div_display = "login";
        }else{
            if(num==1){
              
                    counterStore.cf_alert_dans_active = true;
                    counterStore.jin_she_ka_dui_huan = true;
                    counterStore.jin_she_ka_dui_huan_type = '传说';
                    counterStore.cart_xiaohao = 1;
                    counterStore.cart_duihuan = 30;
                    counterStore.cao_zuo_active = '金蛇卡-兑换';
                    counterStore.xiao_hao_wu = '传说卡';
                    counterStore.jiang_li = '金蛇卡';
                    counterStore.dao_ji_shi_close = true;
            }else{
                
                    counterStore.cf_alert_dans_active = true;
                    counterStore.jin_she_ka_dui_huan = true;
                    counterStore.jin_she_ka_dui_huan_type = '传说';
                    counterStore.cart_xiaohao = 10;
                    counterStore.cart_duihuan = 300;
                    counterStore.cao_zuo_active = '金蛇卡-兑换';
                    counterStore.xiao_hao_wu = '传说卡';
                    counterStore.jiang_li = '金蛇卡';
                    counterStore.dao_ji_shi_close = true;
                
            }
        }
    }
    function wangzhe(num){
        if(!counterStore.login_active){
            counterStore.login_div_display = "login";
        }else{
            if(num==1){
             
                    counterStore.cf_alert_dans_active = true;
                    counterStore.jin_she_ka_dui_huan = true;
                    counterStore.jin_she_ka_dui_huan_type = '王者';
                    counterStore.cart_xiaohao = 1;
                    counterStore.cart_duihuan = 3;
                    counterStore.cao_zuo_active = '金蛇卡-兑换';
                    counterStore.xiao_hao_wu = '王者卡';
                    counterStore.jiang_li = '金蛇卡';
                    counterStore.dao_ji_shi_close = true;
                
            }else{

                    counterStore.cf_alert_dans_active = true;
                    counterStore.jin_she_ka_dui_huan = true;
                    counterStore.jin_she_ka_dui_huan_type = '王者';
                    counterStore.cart_xiaohao = 10;
                    counterStore.cart_duihuan = 30;
                    counterStore.cao_zuo_active = '金蛇卡-兑换';
                    counterStore.xiao_hao_wu = '王者卡';
                    counterStore.jiang_li = '金蛇卡';
                    counterStore.dao_ji_shi_close = true;

            }
        }
    }
    function yingxiong(num){
        if(!counterStore.login_active){
            counterStore.login_div_display = "login";
        }else{
            if(num==1){

                    counterStore.cf_alert_dans_active = true;
                    counterStore.jin_she_ka_dui_huan = true;
                    counterStore.jin_she_ka_dui_huan_type = '英雄';
                    counterStore.cart_xiaohao = 1;
                    counterStore.cart_duihuan = 2;
                    counterStore.cao_zuo_active = '金蛇卡-兑换';
                    counterStore.xiao_hao_wu = '英雄卡';
                    counterStore.jiang_li = '金蛇卡';
                    counterStore.dao_ji_shi_close = true;
                
            }else{

                    counterStore.cf_alert_dans_active = true;
                    counterStore.jin_she_ka_dui_huan = true;
                    counterStore.jin_she_ka_dui_huan_type = '英雄';
                    counterStore.cart_xiaohao = 10;
                    counterStore.cart_duihuan = 20;
                    counterStore.cao_zuo_active = '金蛇卡-兑换';
                    counterStore.xiao_hao_wu = '英雄卡';
                    counterStore.jiang_li = '金蛇卡';
                    counterStore.dao_ji_shi_close = true;
                
            }
        }
    }
  let dao_ji_shi_close = ref(false);

    function daoju(num){
        if(!counterStore.login_active){
            counterStore.login_div_display = "login";
        }else{
            if(num==1){

                    counterStore.cf_alert_dans_active = true;
                    counterStore.jin_she_ka_dui_huan = true;
                    counterStore.jin_she_ka_dui_huan_type = '道具';
                    counterStore.cart_xiaohao = 1;
                    counterStore.cart_duihuan = 1;
                    counterStore.cao_zuo_active = '金蛇卡-兑换';
                    counterStore.xiao_hao_wu = '道具卡';
                    counterStore.jiang_li = '金蛇卡';
                    counterStore.dao_ji_shi_close = true;
                
            }else{

                    counterStore.cf_alert_dans_active = true;
                    counterStore.jin_she_ka_dui_huan = true;
                    counterStore.jin_she_ka_dui_huan_type = '道具';
                    counterStore.cart_xiaohao = 10;
                    counterStore.cart_duihuan = 10;
                    counterStore.cao_zuo_active = '金蛇卡-兑换';
                    counterStore.xiao_hao_wu = '道具卡';
                    counterStore.jiang_li = '金蛇卡';
                    counterStore.dao_ji_shi_close = true;
                
            }
        }
    }
</script>