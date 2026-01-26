<template>
  <form @submit.prevent="submit">
    <div>
      <label for="name">Name</label>
      <input id="name" v-model="form.name" required />
    </div>

    <div>
      <label for="description">Description</label>
      <input id="description" v-model="form.description" />
    </div>
    <div>
      <label for="Paymentmethod">Payment method</label>
      <input id="Paymentmethod" v-model="form.Paymentmethod" />
    </div>

    <div>
      <label for="price">Price</label>
      <input id="price" type="number" step="0.01" v-model.number="form.price" />
    </div>

    <button type="submit">Create food</button>
    <div v-if="error" class="error">{{ error }}</div>
  </form>
</template>

<script>
import { createFood } from "../functions/foodService";

export default {
  data() {
    return {
      form: {
        name: "",
        description: "", 
        Paymentmethod: "", 
        price: "0",
      },
      error: null,
    };
  },
  methods: {
    async submit() {
      this.error = null;
      try {
        const res = await createFood(this.form);
        this.$emit("created", res);
        // reset form
        this.form = { name: "", description: "", price: 0 };
      } catch (err) {
        this.error = err.response?.data?.message || err.message;
        console.error(err);
      }
    },
  },
};
</script>

<style scoped>
.error {
  color: red;
  margin-top: 0.5rem;
}
</style>