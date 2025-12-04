<script setup>
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <div>
      <h1>Options API</h1>

      <button @click="count++">+</button>
      {{ count }}
      <button @click="count--">-</button>
    </div>

  </main>
</template>
