<template>
  <div class="main">
    <h3>抽奖模拟器</h3>
    <ul class="main_topBtnList">
      <li v-for="(item, idx) in topBtnList" :key="idx">
        {{ item.name }}
      </li>
    </ul>
    <ul class="main_eventList">
      <li v-for="(item, idx) in eventList" :key="idx" class="main_eventList_item">
        <img class="main_eventList_item_img" :src="item.img" alt="" />
        <div class="main_eventList_item_main">
          <p>{{ item.gameName }} {{ item.title }}</p>
          <ul>
            <li style="background-color: #1d6e04;">免费</li>
            <li style="background-color: #c34cb2;">付费</li>
            <li style="background-color: #06f;">活动重置</li>
          </ul>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
export default {
  name: "HomePage",
};
</script>
<script setup lang="ts">
import { ref } from "vue";

const topBtnList = ref([
  { name: "余额明细", url: "" },
  // { name: "广告招商", url: "" },
  // { name: "活动重制", url: "" },
]);
const eventList = ref<any>([]);
const eventMap = {
  "银翼出击": {
    img: '/images/game3/advpic.png',
    url: '/game3.html'
  },
  "星辰所向": {
    img: '/images/game1/advpic.png',
    url: '/game1.html'
  }
};
onMounted(() => {
  document.title = "抽奖模拟器";
  window.$api.getEventList().then((res) => {
    const {code, data} = res;
    if (code == 0) {
      eventList.value = data.map((d, idx) => {
        const item = eventMap[d.title] || {}
        return {
          ...d,
          ...item,
        }
      });
    }
  });
});
</script>

<style scoped lang="less">
.main {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  h3 {
    font-weight: 600;
    font-size: 30px;
  }
  &_topBtnList {
    display: grid;
    padding: 10px 20px;
    // grid-template-columns: repeat(1, 1fr);
    gap: 10px;
    li {
      font-size: 12px;
      padding: 5px 20px;
      background-color: #f81ee6;
      color: #fff;
      border-radius: 5px;
      text-align: center
    }
  }
  &_eventList {
    padding: 10px 10px;
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 10px;
    &_item {
      display: flex;
      flex-direction: column;
      justify-content: center;
      border: 1px solid #ccc;
      padding: 2px;
      img {
        width: 100%;
      }
      &_main {
        padding: 5px;
        p {
          font-size: 14px;
          text-align: center;
        }
        ul {
          margin-top: 5px;
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          li {
            padding: 2px 5px;
            border-radius: 5px;
            color: #fff;
          }
        }
      }
    }
  }
}
</style>
