<template lang="">
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/composition">Composition API</router-link> |
    <router-link to="/foods">Foods</router-link>
  </nav>
  <!-- <router-view></router-view> -->
  <RouterView />
</template>
<script>
export default {
  data() {
    return {
      count: 0
    }
  }
}
</script>
<style lang="">

</style>