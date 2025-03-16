<style scoped>
    .bk{
        width: 100vw;
        height: 100vh;
        position: fixed;
        top: 0;
        left: 0;
        background-color: rgba(119, 119, 119,.7);
        display: flex;
        align-items: center;
        justify-content: center;
        z-index: 12;
    }
</style>
<template>
    <div class="bk">
        
    </div>
</template>

<script setup>
import { watch } from 'vue';
import { ref } from 'vue';
import { useCounterStore } from "@/store/counter"; // 确保路径正确
const counterStore = useCounterStore();
</script>