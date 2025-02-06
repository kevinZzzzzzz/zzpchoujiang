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
        <p v-if="item.tip" class="SilverWingComp_btnList_item_tip">{{ item.tip}}</p>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "SilverWingComp",
};
</script>
<script setup lang="ts">
import { ref } from "vue";

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
</script>

<style scoped lang="less">
.SilverWingComp {
  width: 100%;
  // height: 100%;
  background: url("@/assets/images/page2/10053.jpg") no-repeat;
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
}
.sp {
  background: url("@/assets/images/page2/10050.png") no-repeat;
  background-size: 9.5rem auto;
}
</style>
