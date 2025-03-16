<style scoped>
    .bk{
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(0, 0, 0, 0.6);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 11;
    }
    .shoujiangbeijing{
        width: 693px;
        height: 607px;
        background: url(@/assets/game5Img/十抽.png);
        position: relative;
        box-sizing: border-box;
        padding-top:27px ;

    }
    .shoujiangbeijing .ti{

    }
    .shoujiangbeijing b{
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
    .shoujiangbeijing p{
        font-size: 20px;
        color: #5d3a18;
        line-height: 1;
        width: 100%;
        text-align: center;
        margin: 20px auto 0;
    }
    .shoujiangbeijing1{
        width: 100%;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 30px auto 0;
        height: 152px;
    }
    .shoujiangbeijing2{
        width: 100%;
        height: 66px;
        display: flex;
        justify-content: center;
        flex-wrap: wrap;
        margin: 35px auto 0;
    }
    .close{
        background: url(@/assets/game5Img/sp3.png) no-repeat;
        background-position: -1667px -35px;
        list-style: none;
        width: 37px;
        height: 37px;
        position: absolute;
        right: 18px;
        top: 20px;
        cursor: pointer;
        z-index: 10;
    }
    #shi_chou_container{
        width: 563px;
        height: 361px;
        overflow-x: hidden;
        overflow-y: scroll;
        display: flex;
        flex-flow: column;
        align-items: center;
        margin: 0 auto;
    }
    #shi_chou_container::-webkit-scrollbar-track {
          -webkit-box-shadow: inset 0 0 6px rgb(0 0 0 / 30%);
          border-radius: 10px;
          background-color: #F5F5F5;
      }
      #shi_chou_container::-webkit-scrollbar {
          width: 10px;
          height: 6px;
      }
      #shi_chou_container::-webkit-scrollbar-thumb {
          background: #999;
          border-radius: 10px;
      }
    .zhong_jiang_xin_xi{
        width: 563px;
        height: 34px;
        background-color: rgba(91, 52, 9, .1);
        border: 1px solid #beab8a;
        font-size: 18px;
        color: #5d3a18;
        line-height: 34px;
        text-align: center;
        margin: 0 auto;
        /* font-family:  Arial, Helvetica, Sans-Serif; */
    }
    
        .fc_box3{
            font-size: 20px;
            background-color: #a63745;
            color: #fee9d0;
            display: block;
            width: 595px;
            border: 1px solid #a63745;
            height: 40px;
            text-align: center;
            margin: 0 auto;
            line-height: 40px;
        }
        .title{
            display: block;
            background: url(@/assets/game5Img/sp2.png) no-repeat;
            background-position: -74px -203px;
            width: 539px;
            height: 54px;
            margin: 0 auto;
            opacity: 0;
        }
</style>
<template>
    <div class="bk" v-if="shichou_active">
        <div class="shoujiangbeijing">
            <li class="close" @click="close()"></li>
            <span class="ti title"></span>
            <p>抽奖过程中请勿刷新页面或中断，请以实际礼包记录为准。</p>
            <div style="margin-top: 14px;"></div>
            <!-- <span class="fc_box3">礼包</span> -->
            <!-- <div id="shi_chou_container">   
                
            </div> -->
            <div class="zhong_jiang_xin_xi" v-for="(item,index) in lastTenItems" :key="index">
                    {{item.text}}
                </div>
            <!-- <p style="background-color:#a63745;height: 1px;width: 598px;margin: 0 auto;"></p> -->
            <p style="width: 642px;font-size: 18px;line-height: 24px;text-align: left;">温馨提示:虚拟道具奖品将在24小时内发到您的游戏仓库。谢谢您的理解与支持。<br> 由于数据量巨大，奖励道具显示将有所延迟，或可存在不展示的情况，请以礼包记录为准。</p>

        </div>
    </div>
</template>
<script setup>
    import { ref,watch,reactive } from 'vue';
    import { useCounterStore } from "@/store/counter"; // 确保路径正确
    const counterStore = useCounterStore();
    let data = counterStore.xiang_data;
    let shichou_active = ref(false);
    const lastTenItems =reactive([]);
    watch(() => counterStore.shichou_active, (newVal) => {
        shichou_active.value = newVal;
    });
    // watch(() => counterStore.xiang_data, (newVal) => {
    //     data.value = newVal;
    //             // 计算属性来获取data数组中最后十个对象
    //     for(let i = 0;i<data.length;i++){
    //         console.log("data的长度是："+i);
    //         let o = data.length-9;
    //         for(let j = o;j<data.length;j++){
    //             lastTenItems.push(data[j]);
    //         }
    //         console.log("最后十个是:"+lastTenItems);
    //     }
    // },{
    //     deep:true
    // });
    watch(() => counterStore.xiang_data, (newVal) => {
    data.value = newVal;
    // 使用计算属性来获取data数组中最后十个对象
    if (data.length > 9) {
            lastTenItems.length = 0; // 清空数组
            lastTenItems.push(...data.slice(-10)); // 使用 slice 方法获取最后十个元素并添加到 lastTenItems
            // console.log("最后十个是:");
            // console.log(lastTenItems);
        }
}, {
    deep: true
});
    function close(){   
        counterStore.shichou_active = false;
        lastTenItems.length = 0;
    }
</script>