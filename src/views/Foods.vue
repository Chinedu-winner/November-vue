<template>
  <div>
    <h1>Foods</h1>
    <FoodForm @created="onCreated" />
    <FoodList ref="list" />
  </div>
</template>

<script>
import FoodList from "../components/FoodList.vue";
import FoodForm from "../components/FoodForm.vue";

export default {
  components: { FoodList, FoodForm },
  methods: {
    onCreated() {
      // refresh list after a new food is created
      this.$refs.list.fetchFoods();
    },
  },
};
</script>
