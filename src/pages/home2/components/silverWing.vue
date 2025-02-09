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
      <div class="SilverWingComp_part2_content">
        <ul class="SilverWingComp_part2_content_list1">
          <li
            v-for="(item, idx) in redeemGift.slice(0, 4)"
            :key="idx"
            class="SilverWingComp_part2_content_list1_item"
          >
            <div class="SilverWingComp_part2_content_list1_item_img">
              <img :src="item.image" alt="" />
              <p>{{ item.name }}</p>
            </div>
            <div class="SilverWingComp_part2_content_list1_item_btn sp">
              {{ item.points }}积分兑换
            </div>
          </li>
        </ul>
        <ul class="SilverWingComp_part2_content_list2">
          <li
            v-for="(item, idx) in redeemGift.slice(4)"
            :key="idx"
            class="SilverWingComp_part2_content_list2_item"
          >
            <div class="SilverWingComp_part2_content_list2_item_img">
              <img :src="item.image" alt="" />
              <p>{{ item.name }}</p>
            </div>
            <div class="SilverWingComp_part2_content_list2_item_btn sp">
              {{ item.points }}积分兑换
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="SilverWingComp_part3">
      <h2 class="SilverWingComp_part3_title sp"></h2>
      <div class="SilverWingComp_part3_content">
        <div class="SilverWingComp_part3_content_block">
          <div class="SilverWingComp_part3_content_block_left">
            <h2 class="sp"></h2>
            <p class="SilverWingComp_part3_content_block_left_giftPoint">
              我的超导宝箱：<span>{{ superconductivityBox }}</span>
            </p>
            <ul class="SilverWingComp_part3_content_block_left_list">
              <li
                v-for="(item, idx) in superconductivityL"
                :key="idx"
                class="SilverWingComp_part3_content_block_left_list_item"
              >
                <div
                  class="SilverWingComp_part3_content_block_left_list_item_img"
                >
                  <img :src="item.image" alt="" />
                  <p>{{ item.name }}</p>
                </div>
                <div
                  class="SilverWingComp_part3_content_block_left_list_item_btn sp"
                >
                  立即领取
                </div>
              </li>
            </ul>
          </div>
          <div class="SilverWingComp_part3_content_block_right">
            <h2 class="sp"></h2>
            <p class="SilverWingComp_part3_content_block_right_giftPoint">
              我的超导值：<span>{{ superconductivityVal }}</span>
            </p>
            <ul class="SilverWingComp_part3_content_block_right_list">
              <li
                v-for="(item, idx) in superconductivityR"
                :key="idx"
                class="SilverWingComp_part3_content_block_right_list_item"
              >
                <div
                  class="SilverWingComp_part3_content_block_right_list_item_img"
                >
                  <img :src="item.image" alt="" />
                  <p>{{ item.name }}</p>
                </div>
                <div
                  class="SilverWingComp_part3_content_block_right_list_item_btn sp"
                >
                  {{ item.points }}超导值兑换
                </div>
                <p>(单Q限兑换1次)</p>
              </li>
            </ul>
          </div>
        </div>
        <div class="SilverWingComp_part3_content_block1">
          <h2 class="sp"></h2>
          <p>
            注:如道具在私人金库中，请取出后再尝试领取<br />
            当前绑定大区拥有以下道具，可领取对应超导值
          </p>

          <ul class="SilverWingComp_part3_content_block1_list">
            <li
              v-for="(item, idx) in superconductivityB"
              :key="idx"
              class="SilverWingComp_part3_content_block1_list_item"
            >
              <div class="SilverWingComp_part3_content_block1_list_item_img">
                <img :src="item.image" alt="" />
                <p>{{ item.name }}</p>
              </div>
              <div class="SilverWingComp_part3_content_block1_list_item_btn sp">
                领取5超导值
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
    <div class="SilverWingComp_part4">
      <h2 class="SilverWingComp_part4_title sp"></h2>
      <p class="sp SilverWingComp_part4_giftPoint">
        我的2025万能碎片：<span>{{ universalShip }}</span>
      </p>
      <div class="SilverWingComp_part4_content">
        <ul class="SilverWingComp_part4_content_list">
          <li
            v-for="(item, idx) in universalShipList"
            :key="idx"
            class="SilverWingComp_part4_content_list_item"
          >
            <div
              class="SilverWingComp_part4_content_list_item_img"
            >
              <img :src="item.image" alt="" />
              <p>{{ item.name }}</p>
            </div>
            <div
              class="SilverWingComp_part4_content_list_item_btn sp"
            >
              {{ item.points }}碎片兑换
            </div>
          </li>
        </ul>

      </div>
    </div>
    <div class="SilverWingComp_part5">
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "SilverWingComp",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import pic10026 from "@/assets/images/page2/10026.png";
import pic10003 from "@/assets/images/page2/10003.png";
import pic10004 from "@/assets/images/page2/10004.png";
import pic10027 from "@/assets/images/page2/10027.png";
import pic10008 from "@/assets/images/page2/10008.png";
import pic10009 from "@/assets/images/page2/10009.png";
import pic10010 from "@/assets/images/page2/10010.png";
import pic100121 from "@/assets/images/page2/100121.png";
import pic100112 from "@/assets/images/page2/100112.png";
import pic10007 from "@/assets/images/page2/10007.png";
import pic100082 from "@/assets/images/page2/100082.png";
import pic100092 from "@/assets/images/page2/100092.png";
import pic100371 from "@/assets/images/page2/100371.png";
import pic100381 from "@/assets/images/page2/100381.png";
import pic100391 from "@/assets/images/page2/100391.png";
import pic10019 from "@/assets/images/page2/10019.png";
import pic10047 from "@/assets/images/page2/10047.png";
import pic10049 from "@/assets/images/page2/10049.png";
import pic10051 from "@/assets/images/page2/10051.png";

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
const giftPoint = ref(0); // 我的积分
const redeemGift = ref([
  // 兑换版块
  {
    id: 1,
    name: "QBZ191-银翼",
    image: pic10026,
    points: 1398,
  },
  {
    id: 2,
    name: "研",
    image: pic10003,
    points: 1168,
  },
  {
    id: 3,
    name: "月兔特工",
    image: pic10004,
    points: 888,
  },
  {
    id: 4,
    name: "金色蔷薇-量子蔷薇皮肤",
    image: pic10027,
    points: 698,
  },
  {
    id: 5,
    name: "M4A1-雷神音效卡",
    image: pic10008,
    points: 548,
  },
  {
    id: 6,
    name: "M4A1-雷神",
    image: pic10009,
    points: 298,
  },
  {
    id: 7,
    name: "AK47-无影",
    image: pic10010,
    points: 278,
  },
  {
    id: 8,
    name: "AA-12-雷霆",
    image: pic100121,
    points: 236,
  },
  {
    id: 9,
    name: "Barrett-暗月传说",
    image: pic100112,
    points: 198,
  },
  {
    id: 10,
    name: "白银末日机甲玩偶",
    image: pic10007,
    points: 108,
  },
  {
    id: 11,
    name: "交易专用钥匙x5",
    image: pic100082,
    points: 15,
  },
  {
    id: 12,
    name: "属性变更券x5",
    image: pic100092,
    points: 15,
  },
  {
    id: 13,
    name: "交易专用钥匙x1",
    image: pic100082,
    points: 3,
  },
  {
    id: 14,
    name: "属性变更券x1",
    image: pic100092,
    points: 3,
  },
]);
const superconductivityL = ref([
  {
    id: 1,
    name: "超导值x3",
    image: pic100371,
    points: 0,
  },
  {
    id: 2,
    name: "王者之石x1",
    image: pic100381,
    points: 0,
  },
  {
    id: 3,
    name: "2025万能碎石x3",
    image: pic100391,
    points: 0,
  },
]);
const superconductivityR = ref([
  {
    id: 1,
    name: "QBZ191-银翼",
    image: pic100371,
    points: 148,
  },
  {
    id: 2,
    name: "王者之石x1",
    image: pic100381,
    points: 118,
  },
  {
    id: 3,
    name: "2025万能碎石x3",
    image: pic100391,
    points: 88,
  },
  {
    id: 3,
    name: "2025万能碎石x3",
    image: pic100391,
    points: 48,
  },
]);
const superconductivityBox = ref(0); // 超导宝箱
const superconductivityVal = ref(0); // 超导值

const superconductivityB = ref([
  {
    id: 1,
    name: "QBZ191-银翼",
    image: pic100371,
    points: 0,
  },
  {
    id: 2,
    name: "王者之石x1",
    image: pic100381,
    points: 0,
  },
  {
    id: 3,
    name: "2025万能碎石x3",
    image: pic100391,
    points: 0,
  },
  {
    id: 3,
    name: "2025万能碎石x3",
    image: pic100391,
    points: 0,
  },
  {
    id: 1,
    name: "QBZ191-银翼",
    image: pic100371,
    points: 0,
  },
  {
    id: 2,
    name: "王者之石x1",
    image: pic100381,
    points: 0,
  },
  {
    id: 3,
    name: "2025万能碎石x3",
    image: pic100391,
    points: 0,
  },
  {
    id: 3,
    name: "2025万能碎石x3",
    image: pic100391,
    points: 0,
  },
  {
    id: 1,
    name: "QBZ191-银翼",
    image: pic100371,
    points: 0,
  },
  {
    id: 2,
    name: "王者之石x1",
    image: pic100381,
    points: 0,
  },
  {
    id: 3,
    name: "2025万能碎石x3",
    image: pic100391,
    points: 0,
  },
  {
    id: 3,
    name: "2025万能碎石x3",
    image: pic100391,
    points: 0,
  },
]);
const universalShip = ref(0); // 2025万能碎片
const universalShipList = ref([
  {
    id: 1,
    name: "游戏内王者夺宝红宝石x1",
    image: pic10019,
    points: 10,
  },
  {
    id: 2,
    name: "游戏内王者轮回蓝宝石x1",
    image: pic10047,
    points: 10,
  },
  {
    id: 3,
    name: "游戏内王者许愿黄宝石x1",
    image: pic10049,
    points: 10,
  },
  {
    id: 4,
    name: "本活动抽奖钥匙x1",
    image: pic10051,
    points: 10,
  },
]);
</script>

<style scoped lang="less">
.SilverWingComp {
  width: 100%;
  // height: 100%;
  background: url("@/assets/images/page2/10053.jpg") no-repeat;
  background-size: 100% 100%;
  padding: 10px 0 50px;
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
    margin-top: 20px;
    width: 100%;
    padding: 0 5px;
    &_title {
      width: 100%;
      height: 36px;
      background-position: 0rem -5.45rem !important;
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
    &_content {
      width: 100%;
      &_list1,
      &_list2 {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 0px;
        &_item {
          width: 100%;
          &_img {
            width: 100%;
            height: 50px;
            background: url("@/assets/images/page2/10046.png") no-repeat;
            background-size: 100% 100%;
            padding: 1px;
            position: relative;
            img {
              width: 99%;
              height: 99%;
            }
            p {
              width: 100%;
              font-size: 4px;
              color: #2f5cb5;
              text-align: center;
              position: absolute;
              left: 0%;
              bottom: 6px;
            }
          }
          &_btn {
            width: 100%;
            height: 25px;
            background-position: 0.2rem -6.5rem !important;
            font-size: 8px;
            margin-top: 2px;
            font-weight: 600;
            color: #def5ff;
            text-align: center;
            line-height: 25px;
          }
        }
      }
      &_list2 {
        margin-top: 5px;
        grid-template-columns: repeat(5, 1fr);
        &_item {
          margin-bottom: 5px;
          &_btn {
            width: 100%;
            height: 25px;
            background-position: -0.1rem -6.5rem !important;
            font-size: 8px;
            margin-top: 2px;
            font-weight: 600;
            color: #def5ff;
            text-align: center;
            line-height: 25px;
          }
        }
      }
    }
  }

  &_part3 {
    margin-top: 20px;
    width: 100%;
    padding: 0 5px;
    &_title {
      width: 100%;
      height: 36px;
      background-position: 0rem -8.2rem !important;
    }
    &_content {
      width: 100%;
      &_block {
        display: grid;
        grid-template-columns: repeat(2, 1fr);
        grid-gap: 5px;
        &_left,
        &_right {
          width: 100%;
          background: url("@/assets/images/page2/10065.png") no-repeat;
          background-size: 100% 100%;
          padding: 10px;
          h2 {
            width: 60%;
            margin: 0 auto;
            height: 20px;
            background-position: -2.1rem -7.35rem !important;
          }
          &_giftPoint {
            width: 60%;
            margin: 10px auto;
            padding: 5px 10px;
            font-size: 8px;
            color: #fff;
            text-align: center;
            span {
              color: #fffabf;
            }
          }
          &_list {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 0px;
            &_item {
              width: 100%;
              margin-bottom: 5px;
              &_img {
                width: 100%;
                height: 50px;
                background: url("@/assets/images/page2/10046.png") no-repeat;
                background-size: 100% 100%;
                padding: 1px;
                position: relative;
                img {
                  width: 99%;
                  height: 99%;
                }
                p {
                  width: 100%;
                  font-size: 4px;
                  color: #2f5cb5;
                  text-align: center;
                  position: absolute;
                  left: 0%;
                  bottom: 6px;
                }
              }
              &_btn {
                width: 100%;
                height: 25px;
                background-position: 0rem -7.3rem !important;
                font-size: 8px;
                margin-top: 2px;
                font-weight: 600;
                color: #744004;
                text-align: center;
                line-height: 25px;
              }
              p {
                font-size: 6px;
                color: #fff;
                text-align: center;
              }
            }
          }
        }
        &_right {
          h2 {
            background-position: -4.5rem -7.35rem !important;
          }
        }
      }
      &_block1 {
        margin-top: 10px;
        width: 100%;
        background: url("@/assets/images/page2/10066.png") no-repeat;
        background-size: 100% 100%;
        padding: 10px;
        h2 {
          width: 20%;
          margin: 0 auto;
          height: 20px;
          background-position: -7.7rem -6.3rem !important;
        }
        p {
          margin-top: 5px;
          font-size: 6px;
          color: #fff;
          text-align: center;
        }
        &_list {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-gap: 0px;
          &_item {
            width: 100%;
            &_img {
              width: 100%;
              height: 50px;
              background: url("@/assets/images/page2/10046.png") no-repeat;
              background-size: 100% 100%;
              padding: 1px;
              position: relative;
              img {
                width: 99%;
                height: 99%;
              }
              p {
                width: 100%;
                font-size: 4px;
                color: #2f5cb5;
                text-align: center;
                position: absolute;
                left: 0%;
                bottom: 6px;
              }
            }
            &_btn {
              width: 100%;
              height: 25px;
              background-position: 0.1rem -7.3rem !important;
              font-size: 8px;
              margin-top: 2px;
              font-weight: 600;
              color: #744004;
              text-align: center;
              line-height: 25px;
            }
          }
        }
      }
    }
  }

  &_part4 {
    margin-top: 20px;
    width: 100%;
    padding: 0 5px;
    &_title {
      width: 100%;
      height: 36px;
      background-position: 0rem -9.2rem !important;
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
    &_content {
      &_list {
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-gap: 0px;
        &_item {
          width: 100%;
          &_img {
            width: 100%;
            height: 50px;
            background: url("@/assets/images/page2/10046.png") no-repeat;
            background-size: 100% 100%;
            padding: 1px;
            position: relative;
            img {
              width: 99%;
              height: 99%;
            }
            p {
              width: 100%;
              font-size: 4px;
              color: #2f5cb5;
              text-align: center;
              position: absolute;
              left: 0%;
              bottom: 6px;
            }
          }
          &_btn {
            width: 100%;
            height: 25px;
            background-position: 0.18rem -6.5rem !important;
            font-size: 8px;
            margin-top: 2px;
            font-weight: 600;
            color: #def5ff;
            text-align: center;
            line-height: 25px;
          }
        }
      }
    }
  }
  &_part5 {
    margin: 20px auto 0;
    width: 96%;
    height: 300px;
    background: url("@/assets/images/page2/10069.png") no-repeat;
    background-size: 100% 100%;
  }
}
.sp {
  background: url("@/assets/images/page2/10050.png") no-repeat;
  background-size: 9.5rem auto;
}
</style>
