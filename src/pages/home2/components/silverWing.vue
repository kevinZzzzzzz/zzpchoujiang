<template>
  <div class="SilverWingComp">
    <ul class="SilverWingComp_btnList">
      <li
        v-for="(item, idx) in purchaseOptions"
        :key="idx"
        :class="['SilverWingComp_btnList_item', 'sp']"
      >
        <div
          :class="[
            'SilverWingComp_btnList_item_left',
            idx % 2 !== 0
              ? 'SilverWingComp_btnList_item_left-even'
              : 'SilverWingComp_btnList_item_left-odd',
            'sp',
          ]"
        ></div>
        <div class="SilverWingComp_btnList_item_right">
          <h6>{{ item.label }}</h6>
          <p>{{ item.subTitle }}</p>
        </div>
        <p v-if="item.tip" class="SilverWingComp_btnList_item_tip">
          {{ item.tip }}
        </p>
      </li>
    </ul>
    <div class="SilverWingComp_part1">
      <h2 class="SilverWingComp_part1_title sp"></h2>
      <div class="SilverWingComp_part1_content">
        <div class="SilverWingComp_part1_content_block">
          <ul class="SilverWingComp_part1_content_block_btnList">
            <li
              v-for="(item, idx) in btnOptions"
              :key="idx"
              class="SilverWingComp_part1_content_block_btnList_item"
            >
              <h6 class="sp">
                {{ item.subLabel }} <span>{{ item.num }}</span>
              </h6>
              <p
                :class="[
                  'sp',
                  `SilverWingComp_part1_content_block_btnList_item_btn${idx}`,
                ]"
              ></p>
            </li>
          </ul>
          <p class="sp SilverWingComp_part1_content_block_tip"></p>
        </div>
      </div>
    </div>
    <div class="SilverWingComp_part2">
      <h2 class="SilverWingComp_part2_title sp"></h2>
      <p class="sp SilverWingComp_part2_giftPoint">
        我的积分：<span>{{ giftPoint }}</span>
      </p>
    </div>

  </div>
</template>

<script lang="ts">
export default {
  name: "SilverWingComp",
};
</script>
<script setup lang="ts">
import { ref } from "vue"
import pic10026 from '@/assets/images/page2/10026.png'
import pic10003 from '@/assets/images/page2/10003.png'
import pic10004 from '@/assets/images/page2/10004.png'
import pic10027 from '@/assets/images/page2/10027.png'
import pic10008 from '@/assets/images/page2/10008.png'
import pic10009 from '@/assets/images/page2/10009.png'
import pic10010 from '@/assets/images/page2/10010.png'
import pic100121 from '@/assets/images/page2/100121.png'
import pic100122 from '@/assets/images/page2/100122.png'
import pic10007 from '@/assets/images/page2/10007.png'
import pic100082 from '@/assets/images/page2/100082.png'
import pic100092 from '@/assets/images/page2/100092.png'


const purchaseOptions = ref([
  {
    quantity: 10,
    label: "购买复活币x1",
    subTitle: "赠送抽奖钥匙x1",
    coin: 1,
    gift: 1,
  },
  {
    quantity: 100,
    label: "购买复活币x10",
    subTitle: "赠送抽奖钥匙x11",
    coin: 10,
    gift: 11,
  },
  {
    quantity: 10,
    label: "购买复活币x1",
    subTitle: "赠送抽奖钥匙x1",
    coin: 1,
    gift: 1,
    tip: "道聚城通用代金券最多抵扣9Q币",
  },
  {
    quantity: 100,
    label: "购买复活币x10",
    subTitle: "赠送抽奖钥匙x10",
    coin: 10,
    gift: 10,
    tip: "道聚城通用代金券抵扣90Q币",
  },
]);
const btnOptions = ref([
  {
    label: "抽一次",
    subLabel: "我的代金券：",
    num: 0,
  },
  {
    label: "抽十次",
    subLabel: "剩余钥匙：",
    num: 0,
  },
]);
const giftPoint = ref(0);
</script>

<style scoped lang="less">
.SilverWingComp {
  width: 100%;
  // height: 100%;
  // background: url("@/assets/images/page2/10053.jpg") no-repeat;
  background-size: 100% 100%;
  padding: 10px 0;
  &_btnList {
    height: 40px;
    display: grid;
    padding: 0 5px;
    grid-template-columns: repeat(4, 1fr);
    grid-gap: 0px;
    &_item {
      width: 100%;
      height: 36px;
      background-position: 0rem -2.6rem !important;
      display: flex;
      position: relative;
      // justify-content: center;
      // align-items: center;
      &_left {
        width: 40%;
        height: 26px;
        &-odd {
          background-position: -2.8rem -2.6rem !important;
        }
        &-odd {
          background-position: -2.8rem -2.6rem !important;
        }
        &-even {
          background-position: -4.8rem -2.6rem !important;
        }
      }
      &_right {
        margin-left: 3%;
        width: 58%;
        height: 20px;
        margin-top: 6px;
        h6 {
          font-size: 6px;
          color: #725006;
          text-align: left;
        }
        p {
          font-size: 4px;
          color: #f5750c;
          text-align: left;
        }
      }
      &_tip {
        position: absolute;
        bottom: 0px;
        left: 20%;
        font-size: 4px;
        color: #9fd8ff;
        // text-align: center;
      }
    }
  }
  &_part1 {
    width: 100%;
    padding: 0 5px;
    &_title {
      width: 100%;
      height: 36px;
      background-position: 0rem -3.6rem !important;
    }
    &_content {
      width: 100%;
      height: 350px;
      background: url("@/assets/images/page2/10060.png") no-repeat;
      background-size: 100% 100%;
      position: relative;
      &_block {
        width: 50%;
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        height: 200px;
        padding: 60px 0 0;
        &_btnList {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 5px;
          &_item {
            width: 100%;
            h6 {
              padding: 5px 10px;
              background-position: -6rem -4.5rem !important;
              font-size: 6px;
              color: #cfecff;
              text-align: center;
              span {
                color: #fffabf;
              }
            }
            &_btn0 {
              height: 40px;
              background-position: -0.5rem -4.5rem !important;
            }
            &_btn1 {
              height: 40px;
              background-position: -3rem -4.5rem !important;
            }
          }
        }
        &_tip {
          width: 40%;
          height: 20px;
          background-position: -6rem -5rem !important;
          margin: 0 auto;
        }
      }
    }
  }

  &_part2 {
    width: 100%;
    padding: 0 5px;
    &_title {
      width: 100%;
      height: 36px;
      background-position: 0rem -8rem !important;
    }
    &_giftPoint {
      width: 33%;
      margin: 10px auto;
      padding: 5px 10px;
      background-position: -2rem -6.5rem !important;
      font-size: 8px;
      color: #2f5cb5;
      text-align: center;
      span {
        color: #f5750c;
      }
    }
  }
}
.sp {
  background: url("@/assets/images/page2/10050.png") no-repeat;
  background-size: 9.5rem auto;
}
</style>
