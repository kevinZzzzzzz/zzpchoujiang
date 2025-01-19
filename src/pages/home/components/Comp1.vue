<template>
  <div class="comp1">
    <div v-for="(u, idx) in exchangeList" :key="idx" class="comp1_item">
      <div class="comp1_item_img">
        <img :src="u.img" alt="">
        <p>{{ u.decs }}</p>
      </div>
      <a class="comp1_item_btn sp" href="">
        <em>x金蛇卡兑换</em>
      </a>
      <a class="comp1_item_btn sp" href="">
        <em>x王者卡兑换</em>
      </a>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
name: 'Comp1'
}
</script>
<script setup lang='ts'>
import {ref} from 'vue'
import pic01 from '@/assets/images/10001.png'
import pic02 from '@/assets/images/10002.png'
import pic03 from '@/assets/images/10003.png'
import pic04 from '@/assets/images/10004.png'
import pic05 from '@/assets/images/10005.png'
import pic06 from '@/assets/images/10006.png'
import pic07 from '@/assets/images/10007.png'
import pic08 from '@/assets/images/10008.png'
import pic09 from '@/assets/images/10009.png'
import pic10 from '@/assets/images/10010.png'
import pic11 from '@/assets/images/10011.png'
import pic12 from '@/assets/images/10012.png'
const exchangeList = ref([{
  img: pic01,
  decs: '非觉醒版 王者雷影'
},{
  img: pic02,
  decs: '非觉醒版 王者风势'
},{
  img: pic03,
  decs: 'M14EBR-玄武音效卡'
},{
  img: pic04,
  decs: 'Scar Light-马枪'
},{
  img: pic05,
  decs: 'M4A1-黑龙'
},{
  img: pic06,
  decs: '麒麟刺'
},{
  img: pic07,
  decs: '沙鹰-天神'
},{
  img: pic08,
  decs: 'B背包套装-手雷包'
},{
  img: pic09,
  decs: '30000CF点'
},{
  img: pic10,
  decs: '3000CF点'
},{
  img: pic11,
  decs: '属性变更券x5'
},{
  img: pic12,
  decs: '交易专用钥匙x5'
}])

</script>

<style scoped lang="less">
.comp1 {
  width: 100%;
  padding: 10px;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-gap: 10px;
  &_item {
    width: 100%;
    &_img {
      width: 100%;
      height: 80px;
      background: url('@/assets/images/box7.png') no-repeat;
      position: relative;
      background-size: 100% 100%;
      img {
        width: 100%;
        height: 100%;
      }
      p {
        position: absolute;
        bottom: 8%;
        left: 0;
        width: 100%;
        text-align: center;
        line-height: 0.2rem;
        font-size: 7px;
        color: #fee9d0;
      }
    }
    &_btn {
      background-position: -0.2rem -16.25rem !important;
      width: 100%;
      height: 40px;
      display: block;
      margin-bottom: 0.05rem;
      display: flex;
      justify-content: center;
      align-items: center;
      em {
        font-size: 12px;
        font-family: "rui";
        background-image: linear-gradient(to bottom, #f8d8a3, #fce3c0, #ffecd8);
        color: transparent;
        -webkit-background-clip: text;
        display: block;
      }
    }
  }
}
.sp {
  background: url('@/assets/images/spm.png') no-repeat;
  background-size: 9.5rem auto;
}
</style>