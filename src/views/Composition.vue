<template lang="">
    <div>
        <h1>Composition API</h1>
        <button @click="increase">+</button>
        {{ count }}
        <button @click="decrease">-</button>
    </div>
</template>
<script setup>
import { ref } from 'vue';

const count = ref(0);
function increase() {
    count.value++;
    if(count.value > 10) {
        count.value = 10;
    }
} 
// export default {
    
// }
</script>
<style lang="">
    
</style>