<template>
  <div class="ZeroComp">
    <div class="ZeroComp_head"></div>
    <div class="ZeroComp_content">
      <div class="ZeroComp_content_gif"></div>
      <div class="ZeroComp_content_btnLine">
        <div class="ZeroComp_content_btnLine_btn">
          <div class="ZeroComp_content_btnLine_btn_item"></div>
          <p>当日完成1次对局，每自然月限领取1次<em>QBZ191-零号（30天）</em></p>
        </div>
        <div class="ZeroComp_content_btnLine_btn">
          <div
            class="ZeroComp_content_btnLine_btn_item ZeroComp_content_btnLine_btn_item1"
          ></div>
          <p>我的碎片：<span class="zeroNum">×</span></p>
        </div>
      </div>
      <div class="ZeroComp_content_foot">
        <p>活动时间：2025.1.24 —— 2025.4.30</p>
        <p>
          活动期间，使用QBZ191-零号在任意对局完成1次击杀，即可<span>领取碎片*10</span>（活动期间限领取一次）<br />集齐碎片兑换无期限版QBZ191-零号（中途退出对局不计入）
        </p>
        <ul class="ZeroComp_content_foot_list">
          <li class="ZeroComp_content_foot_list_item">
            <div class="ZeroComp_content_foot_list_item_top">
              <img src="@/assets/images/page2/10035.png" alt="" />
              <p>每日任意游戏一局<br>（中途不能退出）</p>
            </div>
            <div class="ZeroComp_content_foot_list_item_btn">
              <p>领取5碎片</p>
            </div>
            <h6>每日限领1次，每自然月限领8次</h6>
          </li>
          <li class="ZeroComp_content_foot_list_item">
            <div class="ZeroComp_content_foot_list_item_top">
              <img src="@/assets/images/page2/10035.png" alt="" />
              <p>使用QBZ191-零号<br>在任意对局完成1次击杀</p>
            </div>
            <div class="ZeroComp_content_foot_list_item_btn">
              <p>领取10碎片</p>
            </div>
            <h6>活动期间限领取一次</h6>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "ZeroComp",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
</script>

<style scoped lang="less">
.ZeroComp {
  width: 100%;
  height: 500px;
  margin-top: 0px;
  background: url("@/assets/images/page2/10052.png") no-repeat;
  background-size: 150% 100%;
  background-position: -100px 0;
  position: relative;
  &_head {
    position: absolute;
    width: 100%;
    height: 150px;
    background: url("@/assets/images/page2/10048.png") no-repeat;
    background-size: 100% 80%;
    background-position: 0 10px;
  }
  &_content {
    width: 100%;
    height: 100%;
    &_gif {
      width: 110px;
      height: 60px;
      background: url("@/assets/images/page2/10002.gif") no-repeat;
      background-size: 100% 100%;
      position: absolute;
      right: 10px;
      top: 160px;
    }
    &_btnLine {
      width: 100%;
      position: absolute;
      top: 240px;
      display: grid;
      grid-template-columns: 140px 140px;
      // grid-gap: 10px;
      align-items: flex-start;
      justify-content: center;
      &_btn {
        width: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &_item {
          width: 100px;
          height: 28px;
          background: url("@/assets/images/page2/10024.png") no-repeat;
          background-size: 100% 100%;
          background-position: 0 0;
          margin-bottom: 4px;
        }
        &_item1 {
          background: url("@/assets/images/page2/10053.png") no-repeat;
          background-size: 100% 100%;
        }
        p {
          width: 100%;
          font-size: 8px;
          color: #cfecff;
          text-align: center;
          line-height: 10px;
          white-space: wrap;
        }
      }
    }
    &_foot {
      width: 96%;
      // height: 100%;
      // padding: 1
      margin: 0 auto;
      position: absolute;
      left: 2%;
      top: 300px;
      background: url("@/assets/images/page2/10025.png") no-repeat;
      background-size: 100% 100%;
      padding: 10px;
      display: flex;
      flex-direction: column;
      align-items: center;
      p {
        font-size: 6px;
        color: #cfecff;
        text-align: center;
        span {
          color: #ffd700;
        }
      }
      &_list {
        display: grid;
        grid-template-columns: 100px 100px;
        grid-gap: 10px;
        &_item {
          width: 100%;
          &_top {
            width: 100%;
            height: 80px;
            background: url("@/assets/images/page2/10046.png") no-repeat;
            background-size: 100% 100%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            position: relative;
            img {
              width: 100%;
              height: 90%;
              position: absolute;
              left: 0;
              top: 0;
            }
            p {
              position: absolute;
              left: 50%;
              transform: translateX(-50%);
              top: 50px;
              font-size: 6px;
              color: #2f5cb5;
              text-align: center;
            }
          }
          &_btn {
            width: 100%;
            height: 28px;
            background: url('@/assets/images/page2/10043.png') no-repeat;
            background-size: 100% 100%;
            p {
              font-family: 'font2';
              font-size: 10px;
              line-height: 28px;
              color: #276aa4;
              text-align: center;
              font-weight: bold;
            }
          }
          h6 {
            font-size: 6px;
            color: #cfecff;
            text-align: center;
          }
        }
      }
    }
  }
}
.sp {
  background: url('@/assets/images/page2/10050.png') no-repeat;
  background-size: 9.5rem auto;
}
</style>
