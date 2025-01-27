<template>
  <div class="comp2">
    <h2 class="sp"></h2>
    <div class="comp2_list">
      <div v-for="(u, i) in exchangeList" :key="i" class="comp2_list_item">
        <img class="comp2_list_item_topImg" :src="u.topImg" alt="">
        <p class="comp2_list_item_txt">单张可兑换{{ u.num }}张金蛇卡</p>
        <div class="comp2_list_item_bottom" :style="{'background-image': `url(${u.bottomImg})`}">
          <p class="comp2_list_item_bottom_txt">
            <em>当前拥有数：</em>
            <em>{{ u.currNum }}</em>
          </p>
          <div class="comp2_list_item_bottom_btnList">
            <div class="comp2_list_item_bottom_btnList_btn sp" @click="exchangeFunc($event, 9)">
              <p>消耗1张兑换</p>
            </div>
            <div class="comp2_list_item_bottom_btnList_btn sp" @click="exchangeFunc($event, 10)">
              <p>消耗10张兑换</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
name: 'Comp2'
}
</script>
<script setup lang='ts'>
import {ref} from 'vue'
import pic13 from '@/assets/images/10013.png'
import pic14 from '@/assets/images/10014.png'
import pic15 from '@/assets/images/10015.png'
import pic16 from '@/assets/images/10016.png'
import pic33 from '@/assets/images/10033.png'
import pic34 from '@/assets/images/10034.png'
import pic35 from '@/assets/images/10035.png'
import pic36 from '@/assets/images/10036.png'

const exchangeList = ref([{
  topImg: pic13,
  num: 'x',
  currNum: 'x',
  bottomImg: pic33, 
},{
  topImg: pic14,
  num: 'x',
  currNum: 'x',
  bottomImg: pic34, 
},{
  topImg: pic15,
  num: 'x',
  currNum: 'x',
  bottomImg: pic35, 
},{
  topImg: pic16,
  num: 'x',
  currNum: 'x',
  bottomImg: pic36, 
}])

const emit = defineEmits(['exchangeFun']);

const exchangeFunc = (e: Event, type: number) => {
  e.preventDefault()
  emit('exchangeFun', type)
}
</script>

<style scoped lang="less">
.comp2 {
  width: 100%;
  padding: 60px 10px 0;
  h2 {
    background-position: 0.3rem -6rem !important;
    padding: 0 10px;
    width: 100%;
    height: 30px;
  }
  &_list {
    margin: 0 10px;;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-gap: 20px 20px;
    &_item {
      width: 100%;
      &_topImg {
        width: 100%;
        height: 210px;
      }
      &_txt {
        width: 100%;
        text-align: center;
        font-size: 10px;
        color: #fee9d0;
        margin: 10px 0;
      }
      &_bottom {
        width: 100%;
        height: 65px;
        background-size: 100% 100%;
        padding: 8px 4px 0 44px;
        &_txt {
          width: 100%;
          text-align: center;
          em {
            display: block;
            font-size: 10px;
            color: #fee9d0;
          }
        }
        &_btnList {
          width: 100%;
          display: grid;
          grid-template-columns: 1fr 1fr;
          grid-gap: 4px;
          &_btn {
            padding: 4px 10px;
            background-position: -3.5rem -16.35rem !important;
            p {
              font-size: 8px;
              color: #842808;
              text-align: center;
              line-height: 0.18rem;
            }
          }
        }
      }
    }
  }
}

.sp {
  background: url('@/assets/images/spm.png') no-repeat;
  background-size: 9.5rem auto;
}
</style>