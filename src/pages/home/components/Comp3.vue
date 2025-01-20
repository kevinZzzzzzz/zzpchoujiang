<template>
  <div class="comp3">
    <h2 class="sp"></h2>
    <p class="comp3_tit">
      xQ币开通福运卡并直接赠送抽奖钥匙x5，单Q限1<br>
      邀请仍未在本活动开卡的玩家，双方均可获得“金蛇幸运星”x1，（单Q最多邀请6名用户）
    </p>
    <ul class="comp3_box3" :style="{'background-image': `url(${pic37})`}">
      <li>
        <p class="comp3_box3_txt">
          赠送抽奖钥匙x5
        </p>
        <input type="text" placeholder="输入好友邀请码" class="comp3_box3_int">
        <div class="comp3_box3_btn sp1"></div>
        <p class="comp3_box3_tips">（单Q最多购买1次）</p>
      </li>
      <li>
        <p class="comp3_box3_txt">
          需要先开通福运卡，才能生成邀请码
        </p>
        <div class="comp3_box3_ipt">
          <em>我的邀请码：</em>
          <input type="text" placeholder="xxx">
        </div>
        <div class="comp3_box3_btn1 sp1"></div>
        <p class="comp3_box3_tips">（单Q最多购买1次）</p>
      </li>
    </ul>
    <div class="comp3_box4">
      <div class="comp3_box4_table">
        <div class="comp3_box4_table_th">
          <p class="comp3_box4_table_th_td">
            玩家名称
          </p>
          <p class="comp3_box4_table_th_td">
            大区
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
export default {
name: 'Comp3'
}
</script>
<script setup lang='ts'>
import {ref} from 'vue'
import pic37 from '@/assets/images/10037.png'
</script>

<style scoped lang="less">
.comp3 {
  width: 100%;
  padding: 60px 10px 0;
  h2 {
    background-position: 0.3rem -8rem !important;
    padding: 0 10px;
    width: 100%;
    height: 30px;
  }
  &_tit {
    width: 100%;
    text-align: center;
    font-size: 10px;
    color: #fee9d0;
    padding: 15px 5px
  }
  &_box3 {
    width: 100%;
    height: 200px;
    background-size: 100% 100%;
    padding: 48px 10px 0;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    background-size: 100% 100%;
    grid-gap: 10px;
    li {
      width: 100%;
      height: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }
    &_txt {
      font-size: 10px;
      color: #5f151b;
      text-align: center;
      margin: 5px 0;
    }
    &_int {
      width: 100%;
      padding: 5px 0;
      background-color: #c58c50;
      text-align: center;
      font-size: 8px;
      color: #5f151b !important;
      border: 1px solid #f9e3ab;
      margin: 5px 0;
    }
    &_int::placeholder {
      font-size: 8px;
      color: #5f151b !important;
    }
    &_btn {
      width: 170px;
      height: 42px;
      background-position: 0.05rem -20.3rem !important;
    }
    &_tips {
      font-size: 8px;
      color: #5f151b;
      text-align: center;
    }
    &_ipt {
      height: 24px;
      background-color: #f8dd96;
      text-align: center;
      font-size: 8px;
      color: #5f151b;
      display: flex;
      justify-content: center;
      align-items: center;
      margin: 5px 0;
      input {
        border: 1px solid #7d553d;
        background: none;
        color: #5f151b;
        font-size: 8px;
        text-align: center;
        padding: 5px 0;
      }
    }
    &_btn1 {
      width: 170px;
      height: 42px;
      background-position: -4.5rem -20.3rem !important;
    }
  }
  &_box4 {
    width: 100%;
    min-height: 115px;
    background-size: 100% 100%;
    margin-top: 10px;
    padding: 40px 10px 0;
    background: url('@/assets/images/box8.png') no-repeat;
    background-size: 100% 100%;
    &_table {
      width: 100%;
      &_th {
        height: 34px;
        display: grid;
        grid-template-columns: 1fr 1fr;
        &_td {
          font-size: 12px;
          color: #fee9d0;
          display: flex;
          align-items: center;
          justify-content: center
        }
      }
    }
  }
}
.sp {
  background: url('@/assets/images/spm.png') no-repeat;
  background-size: 9.5rem auto;
}
.sp1 {
  background: url('@/assets/images/spm1.png') no-repeat;
  background-size: 9.5rem auto;
}
</style>