<template>
  <van-popup v-model:show="show">
    <div class="DialogComp">
      <div class="DialogComp_title">
        {{ props.dialogObj.title }}
      </div>
      <div class="DialogComp_content">
        <p>{{ props.dialogObj.content }}</p>
        <div class="DialogComp_content_list">
          <div class="DialogComp_content_list_btn1 sp2" @click="props.dialogObj.cancelCb && props.dialogObj.cancelCb()"></div>
          <div class="DialogComp_content_list_btn2 sp2" @click="props.dialogObj.succCb && props.dialogObj.succCb()"></div>
        </div>
      </div>
    </div>
  </van-popup>
</template>

<script lang='ts'>
export default {
name: 'DialogComp'
}
</script>
<script setup lang='ts'>
import {ref} from 'vue'
const show = ref(false)
const props = defineProps({
  dialogObj: {
    type: Object,
    default: () => {
      return {
        title: '提醒',
        content: '',
        succCb: null,
        cancelCb: null
      }
    }
  }
})
onMounted(() => {
  console.log(props.dialogObj)
})

const handleShow = () => {
  show.value = true
}
const handleClose = () => {
  show.value = false
}
defineExpose({
  handleShow,
  handleClose
})
</script>

<style scoped lang="less">
.DialogComp {
  width: 80vw;
  min-height: 200px;
  background: url('@/assets/images/10046.png') no-repeat;
  background-size: 100% 100%;
  position: relative;
  padding: 50px 20px 20px;
  &_title {
    position: absolute;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    font-size: 18px;
    text-align: center;
    line-height: 46px;
    height: 40px;
    display: block;
    font-family: "rui";
    font-weight: 600;
    background-image: linear-gradient(to bottom, #fcd18a, #fce3c0, #feebd5);
    color: transparent;
    -webkit-background-clip: text;
  }
  &_content {
    width: 100%;
    text-align: center;
    p {
      font-size: 14px;
    }
    &_list {
      width: 100%;
      position: absolute;
      bottom: 20px;
      left: 0;
      display: flex;
      justify-content: space-around;
      &_btn1 {
        background-position: -3.5rem -1rem !important;
        width: 100px;
        height: 40px;
        display: block;
      }
      &_btn2 {
        background-position: -6.5rem -1rem !important;
        width: 100px;
        height: 40px;
        display: block;
      }
    }
  }
}
.sp2 {
  background: url('@/assets/images/10047.png') no-repeat;
  background-size: 9.5rem auto;
}
</style>