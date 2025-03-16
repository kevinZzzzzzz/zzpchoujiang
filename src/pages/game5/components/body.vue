<style scoped>
    .body{
        width: 100%;
        height: auto;
        /* background: url(@/assets/game5Img/bg.jpg)no-repeat 50% 0;
        background-position:  center -1070px; */
        background: url(@/assets/game5Img/bg2.jpg) no-repeat 50%;
        background-position: center -25px;
        margin: 0 auto;
        position: relative;
        z-index: 9;
        margin-top: 0px;
    }
    .banxin{
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        position: relative;
        box-sizing: border-box;
        /* padding-top: 64px; */
        
    }
    .xuanze{
        width: 1200px;
        height: 139px;
        background: url(@/assets/game5Img/bgtbanav.png) center no-repeat;
        position: absolute;
        top: -75px;
        cursor: pointer;
        display: flex;
        flex-flow: row nowrap;
        align-items: center;
        justify-content: center;
    }
    .xuanze a{
        display: block;
        width: 399px;
        height: 139px;
        list-style: none;
        position: relative;
    }
    .jiangchitupian{
        list-style: none;
        position: absolute;
        width: 442px;
        height: 124px;
        left: 0;
        top: 8px;
        background: url(@/assets/game5Img/btnnavcurr1.png) no-repeat center !important;
    }
    .xianshitupian{
        list-style: none;
        width: 510px;
        height: 124px;
        background: url(@/assets/game5Img/btnnavcurr2.png) no-repeat center !important;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
    }
    .haigoutupina{
        list-style: none;
        width: 457px;
        height: 128px;
        background: url(@/assets/game5Img/btnnavcurr3.png) no-repeat center !important;
        position: absolute;
        right: -2px;
    }
    #oness{
        height: 9000px;
        overflow: hidden;
    }
</style>
<template>
    <div class="body">
        <div class="banxin">
            <!-- <div class="xuanze">
                <a @click="current = '1'" class="xianshijiangchi"></a>
                <li class="jiangchitupian" v-if="current=='1'"></li>
                <a @click="current = '2'"  class="xianshizhigou"></a>
                <li class="xianshitupian" v-if="current=='2'"></li>
                <a @click="current = '3'"  class="haigoujie"></a>
                <li class="haigoutupina" v-if="current=='3'"></li>
            </div> -->  
            <xianshijiangchiss id="oness" v-if="current=='1'"/>
        </div>
    </div>
    <footervue/>
</template>

<script setup>
import { ref } from 'vue';
import xianshijiangchiss from '../components/xianshijiangchi.vue'
import footervue from '../components/footer.vue'
    let current = ref("1");
</script>