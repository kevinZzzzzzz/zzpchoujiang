<style scoped>
#__milo_loader_layer__{font-size:12px;width:100%;height:638px;position: fixed;left:0;top:0;z-index:10000;background: rgba(0,0,0,0.5)}
#__milo_loader_layer__ #loading-con{width:100%;position:fixed;height:29px;text-align: center;display: block;margin:0 auto;margin-top:22%}
#__milo_loader_layer__ .loading-con--icon{height:29px;text-align: center;display: block;margin:0 auto;}
#__milo_loader_layer__ .loading-con--icon img{width:auto;height:100%;display:inline-block;animation: __milo_loader_layer___rotate 1s 0s linear infinite;}
#__milo_loader_layer__ #loading-con p{text-align: center;color:#fff;line-height: 40px; }
@keyframes __milo_loader_layer___rotate {
  0% {transform: rotate(0deg); }
  50% {transform: rotate(180deg); }
  100% {transform: rotate(360deg);} 
}
.display{
  display: block !important;
  position: fixed !important;
  height: 100vh !important;
}
</style>
<template>
    <div id="__milo_loader_layer__" class="display" style="display:block;">
        <div id="loading-con">
        <span class="loading-con--icon" style=""><img src="https://game.gtimg.cn/images/js/milo-next/images/loading.png"></span>
        <p>数据读取中</p>  
        </div>
    </div>
</template>

<script setup>
</script>