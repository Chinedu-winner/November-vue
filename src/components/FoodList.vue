<template>
  <div class="food-list">
    <h2>Foods</h2>
    <div v-if="loading">Loading…</div>
    <ul v-else>
      <li v-for="food in foods" :key="food.id">
        <strong>{{ food.name }}</strong> — {{ food.description }} — ${{ food.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import { getFoods } from "../functions/foodService";

export default {
  data() {
    return {
      foods: [],
      loading: true,
    };
  },
  async mounted() {
    await this.fetchFoods();
  },
  methods: {
    async fetchFoods() {
      this.loading = true;
      try {
        const data = await getFoods();
        this.foods = data.data || data; // support standard Laravel resource pagination
      } catch (err) {
        console.error(err);
        this.foods = [];
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.food-list ul {
  list-style: none;
  padding: 0;
}
.food-list li + li {
  margin-top: 0.5rem;
}
</style>