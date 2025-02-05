<template>
  <div class="page">
    <div class="page_head"></div>
    <div class="page_head_tabs">
      <ul :class="['page_head_tabs_btnct', 'sp', tabsIdx == 0 ? 'page_head_tabs_btnct-btnct1' : 'page_head_tabs_btnct-btnct2' ]">
        <li @click="changeTabs(0)"></li>
        <li @click="changeTabs(1)"></li>
      </ul>
      <Component :is="componentMap[tabsIdx]" />
    </div>
  </div>
</template>

<script lang="ts">
export default {
  name: "Home2",
};
</script>
<script setup lang="ts">
import { ref } from "vue";
import ZeroComp from './components/ZeroComp.vue';
import SilverWingComp from './components/SilverWing.vue';

const tabsIdx = ref(0);
const componentMap = {
  0: ZeroComp,
  1: SilverWingComp
}
const changeTabs = (idx: number) => {
  tabsIdx.value = idx;
}
</script>

<style scoped lang="less">
body {
  background: #4176bd !important;
}
.page {
  width: 100vw;
  min-height: 100vh;
  padding-top: 20px;
  overflow: scroll;
  background: #4176bd;
  padding-bottom: 20px;
  &_head {
    width: 100%;
    height: 300px;
    background: url("@/assets/images/page2/10011.png") no-repeat;
    background-size: 150% 100%;
    background-position: -100px 0;
    &_tabs {
      width: 100%;
      height: 30px;
      background: url("@/assets/images/page2/10012.png") no-repeat;
      background-size: 100% 100%;
      &_btnct {
        height: 35px;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 0 50px;
        li {
          width: 50%;
          height: 100%;
          text-align: center;
          opacity: 0;
        }
        &-btnct1 {
          background-position: 10px -5px !important;
        }
        &-btnct2 {
          background-position: 10px -50px !important;
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
