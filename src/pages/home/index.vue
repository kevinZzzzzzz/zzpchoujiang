<template>
  <div class="page">
    <div class="page_header"></div>
    <div class="page_content">
      <div class="page_content_topbox">
        <div class="topbox_box1">
          <a class="topbox_box1_btnMg1 sp" href="" @click="buyCoin"></a>
          <a class="topbox_box1_btnMg2 sp" href="" @click="buyCoin"></a>
          <a class="topbox_box1_btnMg3 sp" href="" @click="buyCoin"></a>
          <a class="topbox_box1_btnMg4 sp" href="" @click="buyCoin"></a>
        </div>
        <div class="page_content_topbox_txt">
          <p>道聚城通用代金券最多抵扣9Q币</p>
          <p>道聚城通用代金券可抵扣90Q币</p>
        </div>
        <div class="page_content_topbox_p1box1">
          <p>金蛇福运卡：特惠开卡xQ币</p>
          <span>赠送抽奖钥匙x5</span>
          <a class="page_content_topbox_p1box1_btnJKf sp" href="" @click="openLuckyCard"></a>
        </div>
      </div>
      <div class="page_content_part1">
        <h2 class="sp"></h2>
        <div class="page_content_part1_lotty">
          <div class="page_content_part1_lotty_txtBox">
            <a class="page_content_part1_lotty_txtBox_btn1 sp" href=""></a>
            <p class="sp">
              我的代金券：
              <span>x</span>
            </p>
            <p class="sp">
              剩余钥匙：
              <span>x</span>
            </p>
          </div>
          <div class="page_content_part1_lotty_btnBox">
            <a class="page_content_part1_lotty_btnBox_btn" href="" @click="openPrizeDraw($event, 1)"></a>
            <a class="page_content_part1_lotty_btnBox_btn" href="" @click="openPrizeDraw($event, 10)"></a>
          </div>
        </div>
        <div class="page_content_part1_box1">
          <div class="page_content_part1_box1_p1boes1">
            <p>
              抽奖获得的可分解道具进入暂存箱；<br>
              其余道具直接发往游戏内
              <em>（具体可点击暂存箱查看）</em>
            </p>
            <a class="page_content_part1_box1_p1boes1_btn sp" href="">
              <p>点击查看暂存箱</p>
            </a>
          </div>
        </div>
        <div class="page_content_part1_box2">
        </div>
      </div>
      <div class="page_content_part2">
        <h2 class="page_content_part2_tit4 sp db"></h2>
        <ul class="page_content_part2_p2list">
          <li>
            <em class="sp">1</em>
            <p>每累计获得x张金蛇卡（包含从其他卡兑换的金蛇卡），将自动获得一张【传说幽瞳 无序列号版】幸运签</p>
          </li>
          <li>
            <em class="sp">2</em>
            <p>每日18:00刷新中签状态，未中签的签码在活动期间内均有机会中签，每日【传说幽瞳 无序列号版】中签幸运签产出x张</p>
          </li>
          <li>
            <em class="sp">3</em>
            <p>消耗中签的幸运签和相应卡片可进行兑换</p>
          </li>
          <li>
            <em class="sp">4</em>
            <p>累计幸运签数达x张，可消耗剩余幸运签以及对应卡片进行兑换（单Q限1）</p>
          </li>
        </ul>
        <ul class="page_content_part2_p3box">
          <li>
            <p>我的幸运签：<em class="page_content_part2_p3box_num">x</em></p>
          </li>
          <li>
            <p>累计获得金蛇卡数量：<em class="page_content_part2_p3box_num">x</em></p>
          </li>
          <li>
            <p>剩余传说卡：<em class="page_content_part2_p3box_num">x</em></p>
          </li>
          <li>
            <p>剩余未中签幸运签数量：<em class="page_content_part2_p3box_num">x</em></p>
          </li>
          <li>
            <p>剩余已中签幸运签数量：<em class="page_content_part2_p3box_num">x</em></p>
          </li>
          <li></li>
          <li>
            <a href="javascript:signList(1);">查看我的幸运签</a>
          </li>
          <!--  onclick="PTTSendClick('btn','btnkte6','幸运签中签公示');" -->
          <li>
            <a href="javascript:get_has_signed_list();">幸运签中签公示</a>
          </li>
        </ul>
      </div>
      <div class="page_content_part3">
        <h2 class="page_content_part3_tit5 sp db">
        </h2>
        <ul class="page_content_part3_p3box">
          <li>
            <p>我的传说卡：<em class="page_content_part3_p3box_num">x</em></p>
          </li>
          <li>
            <p>我的王者卡：<em class="page_content_part3_p3box_num">x</em></p>
          </li>
          <li>
            <p>我的英雄卡：<em class="page_content_part3_p3box_num">x</em></p>
          </li>
          <li>
            <p>我的道具卡：<em class="page_content_part3_p3box_num">x</em></p>
          </li>
          <li>
            <p>我的金蛇卡：<em class="page_content_part3_p3box_num">x</em></p>
          </li>
        </ul>
        <div class="page_content_part3_p3box1">
          <div class="page_content_part3_p3box1_p3btn">
            <!-- href="javascript:popLqSign(1,1,'x张已中签+x张金蛇卡');" onclick="PTTSendClick('btn','btndhs1','兑换');" -->
            <a class="page_content_part3_p3box1_p3btn_dhss2 sp" @click="exchange($event, 1)">
              <p>x张已中签+x张金蛇卡兑换</p>
            </a>
            <a class="page_content_part3_p3box1_p3btn_dhss2 sp" @click="exchange($event, 2)">
              <p>x张已中签+x张传说卡兑换</p>
            </a>
            <a class="page_content_part3_p3box1_p3btn_dhss3 sp" @click="exchange($event, 3)">
              <p>x张未中签+x张金蛇卡兑换</p>
            </a>
            <a class="page_content_part3_p3box1_p3btn_dhss3 sp" @click="exchange($event, 4)">
              <p>x张未中签+x张传说卡兑换</p>
            </a>
          </div>
          <div class="page_content_part3_p3box1_p3btn1">
            <a class="page_content_part3_p3box1_p3btn1_dhss3 sp" @click="exchange($event, 5)">
              <p>x金蛇卡兑换</p>
            </a>
            <a class="page_content_part3_p3box1_p3btn1_dhss2 sp" @click="exchange($event, 6)">
              <p>x传说卡兑换</p>
            </a>
          </div>
        </div>
      </div>
      <div class="page_content_part4"></div>
      <Comp1 @exchangeFun="exchangeFun" />
      <Comp2 @exchangeFun="exchangeFun" />
      <Comp3 @drawDownFun="drawDownFun" />
    </div>
  </div>
  <DialogComp ref="dialogRef" :dialog-obj="dialogObj" />
</template>


<script lang='ts'>
export default {
  name: 'HomePage'
}
</script>
<script setup lang='ts'>
import {ref} from 'vue'
import Comp1 from './components/Comp1.vue'
import Comp2 from './components/Comp2.vue'
import Comp3 from './components/Comp3.vue'
import DialogComp from '@/hooks/dialog.vue'

const dialogRef = ref<any>()
const dialogObj = ref<any>({
  title: '',
  content: '',
  succCb: null,
  cancelCb: null
})
const buyCoin = (e) => {
  e.preventDefault()
  dialogObj.value = {
    title: '提醒',
    content: '是否购买复活币？',
    succCb: () => {
      console.log('购买复活币成功')
      dialogRef.value?.handleClose()
    },
    cancelCb: () => {
      console.log('购买复活币取消')
      dialogRef.value?.handleClose()
    }
  }
  dialogRef.value?.handleShow()
}
const openLuckyCard = (e) => {
  e.preventDefault()
  dialogObj.value = {
    title: '提醒',
    content: '是否花费39.5元开通金福运卡（赠送抽奖钥匙*5）吗？',
    succCb: () => {
      console.log('开通成功')
      dialogRef.value?.handleClose()
    },
    cancelCb: () => {
      console.log('开通取消')
      dialogRef.value?.handleClose()
    }
  }
  dialogRef.value?.handleShow()
}
const openPrizeDraw = (e, num) => {
  e.preventDefault()
  dialogObj.value = {
    title: '提醒',
    content: `是否确认抽奖${num}次吗？`,
    succCb: () => {
      console.log('抽奖成功')
      dialogRef.value?.handleClose()
    },
    cancelCb: () => {
      console.log('抽奖取消')
      dialogRef.value?.handleClose()
    }
  }
  dialogRef.value?.handleShow()
}

const exchange = (e, id) => {
  e && e.preventDefault()
  dialogObj.value = {
    title: '提醒',
    content: `本次兑换不可逆，无法撤回，请确认是否操作？`,
    succCb: () => {
      console.log('兑换成功')
      dialogRef.value?.handleClose()
    },
    cancelCb: () => {
      console.log('兑换取消')
      dialogRef.value?.handleClose()
    }
  }
  dialogRef.value?.handleShow()
}
const exchangeFun = (id) => {
  exchange(null, id)
}
const drawDownFun = (id) => {
  dialogObj.value = {
    title: '提醒',
    content: `确认领取？`,
    succCb: () => {
      console.log('领取成功')
      dialogRef.value?.handleClose()
    },
    cancelCb: () => {
      console.log('领取取消')
      dialogRef.value?.handleClose()
    }
  }
  dialogRef.value?.handleShow()

}

</script>

<style scoped lang="less">
.page {
  width: 100vw;
  // height: 100vh;
  overflow: scroll;
  background: url('@/assets/images/bgImg.png') no-repeat;
  background-size: cover;
  padding-bottom: 30px;
  &_header {
    width: 100%;
    height: 300px;
  }
  &_content {
    width: 100%;
    &_topbox {
      width: 100%;
      &_txt {
        width: 100%;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-gap: 0 10px;
        p {
          font-size: 0.2rem;
          color: #e6bd8d;
          text-align: center;
          line-height: 0.28rem;
        }
      }
      &_p1box1 {
        background: url('@/assets/images/box1.png') no-repeat;
        // width: 100%;
        height: 125px;
        background-size: 100% auto;
        position: relative;
        margin: 10px 10px 0;
        padding-left: 110px;
        padding-top: 30px;
        box-sizing: border-box;
        p {
          font-size: 0.32rem;
          text-align: center;
          font-family: "rui";
          line-height: 1;
          background-image: linear-gradient(to bottom, #ffcd6b, #ffe099, #ffe4a1);
          color: transparent;
          -webkit-background-clip: text;
        }
        span {
          font-size: 0.2rem;
          color: #ffdd99;
          text-align: center;
          line-height: 1;
          font-family: "rui";
          display: block;
          padding-top: 0.1rem;
          // display: none;
        }
        &_btnJKf {
          background-position: -0.05rem -11rem !important;
          width: 160px;
          height: 55px;
          margin: 5px auto 0;
          display: block;
        }
      }
    }
    &_part1 {
      width: 100%;
      padding: 25px 0 0;
      h2 {
        background-position: 0.3rem -4rem !important;
        padding: 0 10px;
        width: 100%;
        height: 30px;
      }
      &_lotty {
        margin: 10px 0 0;
        padding: 0 10px;
        width: 100%;
        height: 680px;
        background: url('@/assets/images/box2.png') no-repeat;
        background-size: calc(100% - 20px) auto;
        background-position: center top;
        position: relative;
        &_txtBox {
          width: 100%;
          height: 35px;
          position: absolute;
          bottom: 60px;
          left: 0;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          &_btn1 {
            background-position: 0rem -12.5rem !important;
            width: 100%;
            height: 100%;
          }
          p {
            background-position: -3.4rem -12.5rem !important;
            width: 100%;
            height: 100%;
            line-height: 35px;
            font-size: 0.25rem;
            color: #fee9d0;
            text-align: center;
          }
        }
        &_btnBox {
          width: 100%;
          height: 60px;
          position: absolute;
          bottom: 0;
          left: 0;
          display: grid;
          grid-template-columns: 1fr 1fr;
          background-color: transparent;
        }
      }
      &_box1 {
        background: url('@/assets/images/box3.png') no-repeat;
        // width: 100%;
        height: 160px;
        background-size: 100% auto;
        position: relative;
        margin: 0px 10px 0;
        padding-left: 130px;
        padding-top: 50px;
        box-sizing: border-box;
        &_p1boes1 {
          p {
            font-size: 0.25rem;
            color: #fee9d0;
            text-align: center;
            line-height: 0.35rem;
            em {
              color: #f3b190;
            }
          }
          &_btn {
            display: block;
            background-position: -4.25rem -10.8rem !important;
            width: 120px;
            height: 45px;
            margin: 5px auto 0;
            p {
              font-size: 10px;
              font-weight: 500;
              color: #a93e1d;
              font-family: "rui";
              text-align: center;
              line-height: 55px;
              text-shadow: -0.01rem -0.01rem 0rem #ffe795;
            }
          }
        }
      }
      &_box2 {
        background: url('@/assets/images/box4.png') no-repeat;
        background-size: 100% auto;
        position: relative;
        height: 160px;
        margin: 0px 10px 0;
      }
    }
    &_part2 {
      width: 100%;
      padding: 25px 0 0;
      h2 {
        background-position: 0.3rem -6rem !important;
        padding: 0 10px;
        width: 100%;
        height: 30px;
      }
      &_p2list {
        margin: 0.35rem auto 0;
        width: 95%;
        li {
          margin-bottom: 5px;
          display: flex;
          justify-content: space-between;
          flex-wrap: wrap;
          em {
            background-position: -8.6rem -11.1rem !important;
            width: 16px;
            height: 16px;
            font-size: 7px;
            color: #fee9d0;
            text-align: center;
            line-height: 16px;
            display: inline-block;
            vertical-align: bottom;
            margin-top: 0.06rem;
          }
          p {
            font-size: 10px;
            color: #fee9d0;
            text-align: left;
            line-height: 18px;
            display: inline-block;
            width: 94%;
          }
        }
      }
      &_p3box {
        background: url('@/assets/images/box5.png') no-repeat;
        background-size: auto auto;
        margin: 12px auto 0;
        padding: 10px 30px 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        li {
          padding-bottom: 10px;
          p {
            font-size: 10px;
            color: #fee9d0;
            text-align: left;
            line-height: 11px;
          }
          a {
            font-size: 10px;
            color: #ffe58c;
            display: block;
            text-align: left;
            line-height: 1.2;
            text-decoration: underline;
          }
        }
      }
    }
    &_part3 {
      width: 100%;
      padding: 40px 0 0;
      h2 {
        background-position: 0.3rem -5rem !important;
        padding: 0 10px;
        width: 100%;
        height: 30px;
      }
      &_p3box {
        background: url('@/assets/images/box5.png') no-repeat;
        background-size: auto auto;
        margin: 12px auto 0;
        padding: 10px 30px 0;
        display: grid;
        grid-template-columns: 1fr 1fr;
        li {
          padding-bottom: 10px;
          p {
            font-size: 10px;
            color: #fee9d0;
            text-align: center;
            line-height: 11px;
          }
        }
      }
      &_p3box1 {
        background: url('@/assets/images/box6.png') no-repeat;
        background-size: 100% auto;
        margin: 12px auto 0;
        width: 96%;
        height: 430px;
        padding-top: 135px;
        &_p3btn {
          margin: 0 auto;
          width: 90%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 10px 0;
          margin: 0 auto 145px;
          &_dhss2 {
            background-position: -4.2rem -23.4rem !important;
            // width: 100%;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 8px;
            padding: 0 5px;
            p {
              color: #872909;
              font-size: 10px;
              font-family: "rui";
              text-shadow: -0.01rem -0.01rem 0rem #ffe795;
              text-align: center;
              font-weight: 600;
            }
          }
          &_dhss3 {
            background-position: -0.05rem -23.4rem !important;
            // width: 100%;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 8px;
            padding: 0 5px;
            p {
              color: #872909;
              font-size: 10px;
              font-family: "rui";
              text-shadow: -0.01rem -0.01rem 0rem #ffe795;
              text-align: center;
              font-weight: 600;
              background-image: linear-gradient(to bottom, #f8d7a2, #fbe0b8, #ffecd7);
              color: transparent;
              -webkit-background-clip: text;
            }
          }
        }
        &_p3btn1 {
          margin: 0 auto;
          width: 90%;
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-gap: 10px 0;
          margin: 0 auto 145px;
          &_dhss2 {
            background-position: -4.2rem -23.4rem !important;
            // width: 100%;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 8px;
            padding: 0 5px;
            p {
              color: #872909;
              font-size: 14px;
              font-family: "rui";
              text-shadow: -0.01rem -0.01rem 0rem #ffe795;
              text-align: center;
              font-weight: 600;
            }
          }
          &_dhss3 {
            background-position: -0.05rem -23.4rem !important;
            // width: 100%;
            height: 35px;
            display: flex;
            justify-content: center;
            align-items: center;
            font-size: 8px;
            padding: 0 5px;
            p {
              color: #872909;
              font-size: 14px;
              font-family: "rui";
              text-shadow: -0.01rem -0.01rem 0rem #ffe795;
              text-align: center;
              font-weight: 600;
              background-image: linear-gradient(to bottom, #f8d7a2, #fbe0b8, #ffecd7);
              color: transparent;
              -webkit-background-clip: text;
            }
          }
        }
      }
    }
  }
}
.topbox {
  width: 100%;
  height: 100%;
  &_box1 {
    width: 100%;
    height: 100%;
    padding: 0 10px;
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: 1fr 1fr;
    grid-gap: 0 10px;
    &_btnMg1 {
      background-position: -0.2rem -0.12rem !important;
      width: 100%;
      height: 1.5rem;
      margin-bottom: 5px;
    }
    &_btnMg2 {
      background-position:  -4.65rem -0.12rem !important;
      width: 100%;
      height: 1.5rem;
      margin-bottom: 5px;
    }
    &_btnMg3 {
      background-position: -0.2rem -1.7rem !important;
      width: 100%;
      height: 1.5rem;
      margin-bottom: 5px;
    }
    &_btnMg4 {
      background-position: -4.65rem -1.7rem !important;
      width: 100%;
      height: 1.5rem;
      margin-bottom: 5px;
    }
  }
}
.sp {
  background: url('@/assets/images/spm.png') no-repeat;
  background-size: 9.5rem auto;
}
</style>