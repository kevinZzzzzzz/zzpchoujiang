// stores/counter.js
import { ref,computed,watch, reactive,onMounted } from 'vue';
import { defineStore } from 'pinia';
export const useCounterStore1 = defineStore('counter1', () => {

  //qq号
  let qq_number = ref("19204295511");
  //游戏大区
  let address = ref("河北一区");
  //名字
  let names = ref("憬宸月兔");
  //支付界面的qq名字
  let qqnames = ref('总有刁民111想害朕');



  //勿动开发代码
  let set_gai_lv = ref(300);
   
    return {
      qq_number,
      address,
      names,
      qqnames,
      set_gai_lv,
    };
  }
  );
export const useCounterStore = defineStore('counter', () => {
    const counterStore1: any = useCounterStore1();
    const qq_number = ref(counterStore1.qqnumber);
    const address = ref(counterStore1.address);
    const names = ref(counterStore1.names);
    const qqnames = ref(counterStore1.qqnames);
    const set_gai_lv = ref(counterStore1.setgailv);
//下面为开发测试 勿动！！！！
//下面为开发测试 勿动！！！！
//下面为开发测试 勿动！！！！
//下面为开发测试 勿动！！！！
//下面为开发测试 勿动！！！！
//下面为开发测试 勿动！！！！
//下面为开发测试 勿动！！！！
//下面为开发测试 勿动！！！！
//下面为开发测试 勿动！！！！
// watch(() => counterStore.qq_number, (newVal) => {
//   qq_number.value = newVal;
// });
// watch(() => counterStore.address, (newVal) => {
//   address.value = newVal;
// });
// watch(() => counterStore.names, (newVal) => {
//   names.value = newVal;
// });
// watch(() => counterStore.qqnames, (newVal) => {
//   qqnames.value = newVal;
// });
// watch(() => counterStore.set_gai_lv, (newVal) => {
//   set_gai_lv.value = newVal;
// });
//下面为开发测试 勿动！！！！
//下面为开发测试 勿动！！！！
//下面为开发测试 勿动！！！！
// 传说辉光 无序列号版	0.1%
let gailv1 = ref(10);

// 传说夜影 无序列号版	0.1%
let gailv2 = ref(10);

// 王者星光	0.25%
let gailv3 = ref(25);

// 关小雨 	0.25%
let gailv4 = ref(25);

// QBZ03-金色蔷薇音效卡	0.3%
let gailv5 = ref(30);

// 裁决-流光秘银皮肤	0.5%
let gailv6 = ref(50);

// COP-旗袍	0.5%
let gailv7 = ref(50);

// AWM-裁决	0.7%
let gailv8 = ref(70);

// 屠龙	1%
let gailv9 = ref(100);

// 天使灵狐玩偶	1.2%
let gailv10 = ref(120);

// 传说宝箱x1	5%
let gailv11 = ref(500);

// 传说币×100	0.1%
let gailv12 = ref(10);

// 传说币×20	1%
let gailv13 = ref(100);
// 传说币×10	9%
let gailv14 = ref(900);
// 传说币×9	40%
let gailv15 = ref(4000);
// 传说币×8	40%
let gailv16 = ref(4000);

  //cf弹窗的状态
  let cf_alert_active = ref(false);
  //cf危险弹窗的状态
  let cf_alert_dans_active = ref(false);
  //领取的变量
  let ling_qu_active = ref(false);
  let jiang_li = ref("");
  let cao_zuo_active = ref("");
  let item_index = ref(0);
  let item = {};
  let dao_ji_shi_close = ref(false);
  //分解的变量
  let fen_jie_active = ref(false);
  let page_num = ref(0);
  //兑换的变量
  let dui_huan_active = ref(false);
  let xiao_hao_wu = ref('');
  let xiao_hao_ji_fen_zhi = ref(0);
  //竞界值兑换的变量
  let jing_jie_dui_huan_active = ref(false);
  let xiao_hao_jing_jie_zhi = ref(0);
  //万能碎片兑换的变量
  let wan_neng_dui_huan = ref(false);
  let xiao_hao_wan_neng_zhi = ref(10);
  let wan_neng_lei_xing = ref(0);
  //暂存箱的显示状态
  let zan_cun_xiang_active = ref(false);
  let systems_after_zan_cun_xiang_active =ref(false);
  //单抽中的物品
  let dan_chou_text = ref("");
  //单抽盒子的显示状态
  let danchou_active = ref(false);
  //十抽盒子的显示状态
  let shichou_active = ref(false);
  //加载界面的状态
  let jia_zai_active = ref(false);
  //支付界面的显示状态
  let buy_active = ref(false);
  let buy_jiazai_active1 = ref(false);
  let buy_jiazai_active2 = ref(false);
  let buy_type = ref();
  //钥匙
  let chou_jiang_key = ref(0);
      // // 设置watch来监听金蛇卡数量的变化
    // watch(qq_number.value, (newCount, oldCount) => {
    //   if(qq_number.value){
    //     chou_jiang_key.value = 0;
    //   }
    // });
  //代金券
  let dai_jin_quan = ref(0);
  //积分
  let ji_fen = ref(0); 
  // 积分余数(判断累计获得的积分 增加幸运签的变量)
  let ji_fen_yu_shu = ref(0);
  // 积分的累加器
  let acc_ji_fen = ref(0);
  //竞界宝箱
  let jing_jie_bao_xiang = ref(0);
  //竞界值
  let jing_jie_zhi = ref(0);
  //万能碎片
  let wan_neng_sui_pian = ref(0);
 //登录状态
  const login_active = ref(false); 
  //登录盒子显示状态 login是显示  login1是不显示
  let login_div_display = ref("login");
  //登录的文字
  const loginText = computed(() => {
    return login_active.value ? "欢迎你，" : "您还未登录，请";
  });
  //登录的文字
  const loginText1 = computed(() => {
    return login_active.value ? "退出" : "登录";
  });

  //宝箱自选界面的开启状态
  let zixuan = ref(false);
  let zi_xuan_active = ref(false);
  let zixuan_liwu = ref(0);
  let xuan_zhong_zhi_xing_ci_shu = ref(0);
  //dui_huan_active
  let systems = ref(false);
  let systems_message = ref("测试字幕");


  //主功能
  //卡片数量
  //幸运签
  let hui_guang_xing_yun_qian = ref(0);
  let ye_ying_xing_yun_qian = ref(0);
  let jin_she_ka_yu_shu = ref(0);
  // 传说卡
  let chuan_shuo_cart = ref(0);
  // 王者卡
  let wang_zhe_cart = ref(0);
  // 英雄卡
  let ying_xiong_cart = ref(0);
  // 道具卡
  let dao_ju_cart = ref(0);
  // 金蛇卡
  let jin_she_cart = ref(0);
  let jin_she_xing_yun_xing = ref(0);
  let acc_jin_she_cart = ref(0);
  // 设置watch来监听积分的数量的变化
  watch(ji_fen, (newCount, oldCount) => {
    if (newCount > oldCount) {
      // 如果积分的数量上升，则累加增加的数量
      acc_ji_fen.value += (newCount - oldCount);
      //余数增加
      ji_fen_yu_shu.value +=(newCount - oldCount);
      if(ji_fen_yu_shu.value>=500){
        ji_fen_yu_shu.value -=500;
        hui_guang_xing_yun_qian.value +=1
        ye_ying_xing_yun_qian.value +=1
      }
    }
    // 注意：如果积分的数量下降，我们不更新累计值
  });

  //暂存箱子的数据
  let xiang_data = reactive([])
  //抽奖的状态
  let chou_jiang_active = ref('');
  //传说-兑换的状态
  let chuan_shuo_dao_ju_dui_huan = ref(false);
  let jin_she_ka_dui_huan = ref(false);
  let chuan_shuo_dui_huan_type = ref('');
  let jin_she_ka_dui_huan_type = ref('');
  let cart_xiaohao = ref(0);
  let cart_duihuan = ref(0);
  let chuan_shuo_you_tong_dui_huan = ref(false);
  let ka1text = ref('');
  let ka1num = ref(0);
  let ka2text = ref('');
  let ka2num = ref(0);
  //暂存箱以及算法
  let zan_cun_xiang = ref<any[]>([]);
  // let zan_cun_xiang1 = reactive([]);
  watch(() => xiang_data, (newVal,oldVal) => {
    if (chou_jiang_active.value == '') {
      console.log("抽奖活动未结束，不执行 watch 操作");
      return;
    }
    if(chou_jiang_active.value=='单抽'){
      console.log("单抽执行");
      const lastItems: any =  newVal[newVal.length-1];
      console.log("最后一个元素是");
      console.log(lastItems);
      if(lastItems.text=="传说辉光 无序列号版"||
            lastItems.text=="传说夜影 无序列号版"||
            lastItems.text=="王者星光"||
            lastItems.text=="关小雨"||
            lastItems.text=="QBZ03-金色蔷薇音效卡"||
            lastItems.text=="裁决-流光秘银皮肤"||
            lastItems.text=="Cop-旗袍"||
            lastItems.text=="AWM-裁决"||
            lastItems.text=="屠龙"||
            lastItems.text=="天使灵狐玩偶"
          ){
            // zan_cun_xiang.push(lastItems);
            lastItems && zan_cun_xiang.value.unshift(lastItems);
          }
        //加积分的算法
        jiajifen(lastItems);
        //加宝箱的算法
        jiabaoxiang(lastItems);
        chou_jiang_active.value=='单抽'
        // chou_jiang_active.value==''
    }else if(chou_jiang_active.value=='十抽'){
      // console.log("十抽执行"); 
      const lastTenItems: any = newVal.slice(-10);
        for(let i = 0;i<lastTenItems.length;i++){
          if(lastTenItems[i].text=="传说辉光 无序列号版"||
            lastTenItems[i].text=="传说夜影 无序列号版"||
            lastTenItems[i].text=="王者星光"||
            lastTenItems[i].text=="关小雨"||
            lastTenItems[i].text=="QBZ03-金色蔷薇音效卡"||
            lastTenItems[i].text=="裁决-流光秘银皮肤"||
            lastTenItems[i].text=="Cop-旗袍"||
            lastTenItems[i].text=="AWM-裁决"||
            lastTenItems[i].text=="屠龙"||
            lastTenItems[i].text=="天使灵狐玩偶"
          ){
            // zan_cun_xiang.push(lastTenItems[i]);
            zan_cun_xiang.value.unshift(lastTenItems[i]);
          }
          //加积分的算法
          jiajifen(lastTenItems[i]);
          //加宝箱的算法
          jiabaoxiang(lastTenItems[i])
          
        }
        
    }
    // console.log("xiang_data的长度是");
    // console.log(newVal.length);
    //chou_jiang_active.value=='单抽'
    chou_jiang_active.value==''
    // console.log(chou_jiang_active.value);
    // console.log("抽奖活动为空了");
  },{
    deep:true
  });
  // watch(() => zan_cun_xiang, (newVal) => {
  //   zan_cun_xiang1.value = newVal.value;
  //   console.log("下面是data");
  //   console.log("zan_cun_xiang1的数据是");
  //   console.log(zan_cun_xiang1);
  // },{
  //     deep:true
  // });
  //加积分的函数
  function jiajifen(objects){
    //6 7 8 10 100
    if(objects.text == "传说币×100"){
      ji_fen.value +=100;
    }
    if(objects.text == "传说币×20"){
      ji_fen.value +=20;
    }
    if(objects.text == "传说币×10"){
      ji_fen.value +=10;
    }
    if(objects.text == "传说币×9"){
      ji_fen.value +=9;
    }
    if(objects.text == "传说币×8"){
      ji_fen.value +=8;
    }
    // console.log("积分是：");
    // console.log(ji_fen.value);
  }
  //加宝箱的函数
  function jiabaoxiang(objects){
    if(objects.text == "传说宝箱"){
      jing_jie_bao_xiang.value +=1;
    }
    // console.log("宝箱是：");
    // console.log(jing_jie_bao_xiang.value);
  } 
  onMounted(()=>{
    buy_active.value = false;
    buy_jiazai_active1.value= false;
    buy_jiazai_active2.value = false;
    danchou_active.value = false;
    shichou_active.value = false;
    systems.value = false;
    zan_cun_xiang_active.value = false;
    systems_after_zan_cun_xiang_active.value = false;
    cf_alert_active.value = false;
    fen_jie_active.value = false;
    ling_qu_active.value = false;
    cf_alert_dans_active.value = false;
    cao_zuo_active.value = '';
    jiang_li.value = '';
    item = {};
    xiao_hao_wu.value = '';
    xuan_zhong_zhi_xing_ci_shu.value = 0;
    systems_message.value = '';
    qq_number.value = qq_number.value;
    zixuan.value = false;
      const seting = setInterval(() => {
        if(counterStore1.qq_number==qq_number.value){
          clearInterval(seting);
          console.log("1111111111111111111");
          return;
        }else{
          //抽奖钥匙
          chou_jiang_key.value = 0;
          //星辰币
          ji_fen.value = 0;
          //竞界宝箱
          jing_jie_bao_xiang.value = 0;
          //竞界值
          jing_jie_zhi.value = 0;
          //万能碎片
          wan_neng_sui_pian.value = 0;
          // 幸运签
          hui_guang_xing_yun_qian.value = 0;
          ye_ying_xing_yun_qian.value = 0;
          // 累加器
          acc_ji_fen.value = 0;
          // 积分的余数
          ji_fen_yu_shu.value = 0;
          //切换账号恢复概率
          gailv1.value = 10;
          gailv2.value = 10;
          gailv3.value = 25;
          gailv4.value = 25;
          gailv5.value = 30;
          gailv9.value = 100;
          gailv10.value = 120;
          gailv16.value = 4000;
          qq_number.value = counterStore1.qq_number;
          zan_cun_xiang.value=[];
          clearInterval(seting);
          console.log("1111111111111111111");
          return;
        }
      }, 10);
  });
  watch(() => counterStore1.qq_number, (newVal) => {
    //抽奖钥匙
    chou_jiang_key.value = 0;
    //星辰币
     ji_fen.value = 0;
    //竞界宝箱
     jing_jie_bao_xiang.value = 0;
    //竞界值
    jing_jie_zhi.value = 0;
    //万能碎片
    wan_neng_sui_pian.value = 0;
    zan_cun_xiang=ref([]);
  });
  
  return { 
    login_active,
    loginText,
    loginText1,
    zixuan,
    systems,
    systems_message,
    chou_jiang_key,
    dai_jin_quan,
    jia_zai_active,
    danchou_active,
    dan_chou_text,
    login_div_display,
    buy_active,
    buy_jiazai_active1,
    buy_jiazai_active2,
    buy_type,
    ji_fen,
    jing_jie_bao_xiang,
    jing_jie_zhi,
    wan_neng_sui_pian,
    gailv1,
    gailv2,
    gailv3,
    gailv4,
    gailv5,
    gailv6,
    gailv7,
    gailv8,
    gailv9,
    gailv10,
    gailv11,
    gailv12,
    gailv13,
    gailv14,
    gailv15,
    gailv16,
    acc_ji_fen,
    xiang_data,
    zan_cun_xiang,
    chou_jiang_active,
    qq_number,
    address,
    names,
    cf_alert_active,
    cf_alert_dans_active,
    ling_qu_active,
    cao_zuo_active,
    item,
    zan_cun_xiang_active,
    systems_after_zan_cun_xiang_active,
    jiang_li,
    page_num,
    fen_jie_active,
    chuan_shuo_cart,
    wang_zhe_cart,
    ying_xiong_cart,
    dao_ju_cart,
    jin_she_cart,
    acc_jin_she_cart,
    hui_guang_xing_yun_qian,
    ye_ying_xing_yun_qian,
    jin_she_xing_yun_xing,
    qqnames,
    set_gai_lv
    // zan_cun_xiang1
  };

  //M200-竞技荣光
  //炽芒蝶刃
  //电竞教官-云悠悠
  //炽芒蝶刃-破浪逐光 皮肤
  //柯尔特-竞技荣光
  //幻影-破浪逐光 皮肤
  //金色蔷薇-破浪逐光 皮肤
  //屠龙-破浪逐光 皮肤
  //擎天-竞技荣光
  //高爆手雷-竞技荣光

  
  //抽奖过程中请勿刷新页面或中断，请以实际礼包记录为准。
  // 温馨提示：1、虚拟道具奖品将在24小时内发到您的游戏仓库。谢谢您的理解与支持。2、由于数据量巨大，奖励道具显示将有所延迟，或可存在不展示的情况，请以礼包记录为准。
}
,{
  persist:{
    enabled: true
  },
}
);
export const useCounterStore2 = defineStore('counter2', () => {
  const counterStore = useCounterStore();
  let zan_cun_xiangs = ref<any[]>([]);
  onMounted(async()=>{
    await new Promise(resolve => setTimeout(resolve, 2000)); // 模拟延迟
    zan_cun_xiangs.value = counterStore.zan_cun_xiang;
    console.log("zancunxiangs从zancunxiang下载数据中");
    console.log(zan_cun_xiangs.value);
  })
  watch(() => counterStore.zan_cun_xiang, (newVal) => {
    zan_cun_xiangs.value = newVal;
    console.log("有数据了");
    console.log(zan_cun_xiangs.value);
  },{
    deep:true,
  });
   return {
    zan_cun_xiangs,
   };
 }
 );
  