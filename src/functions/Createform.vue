<template>
  <form @submit.prevent="submit">
    <div class="grid gap-6 mb-6 md:grid-cols-2">
      <div class="mb-6">
        <label for="email" class="block mb-2.5 text-sm font-medium text-heading">Email address</label>
        <input type="email" id="email" v-model="email" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body"
          placeholder="john.doe@company.com"
          required
        />
        <p class="text-xs text_red-600" v-if="emailError">{{ emailError }}</p>
      </div>

      <div class="mb-6">
        <label for="password" class="block mb-2.5 text-sm font-medium text-heading">Password</label>
        <input v-model="password" type="password" id="password" class="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="•••••••••" required
        />
        <p class="text-xs text_red-600" v-if="passwordError">{{ passwordError }}</p>
      </div>

      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input v-model="agree_to_terms" id="remember" type="checkbox" :value="true" class="w-4 h-4 border border-default-medium rounded-xs bg-neutral-secondary-medium focus:ring-2 focus:ring-brand-soft"
          />
        </div>
        <label for="remember" class="ms-2 text-sm font-medium text-heading">I agree with the <a href="#" class="text-fg-brand hover:underline">terms and conditions</a>.</label>
      </div>

      <button type="submit" class="text-white bg-brand box-border border border-transparent hover:bg-brand-strong focus:ring-4 focus:ring-brand-medium shadow-xs font-medium leading-5 rounded-base text-sm px-4 py-2.5 focus:outline-none">Submit</button>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      email: "",
      password: "",
      agree_to_terms: false,
      emailError: null,
      passwordError: null,
    };
  },
  methods: {
    submit() {
      this.emailError = null;
      this.passwordError = null;

      if (!this.email) this.emailError = "Email is required.";
      // very simple password rule for demo
      if (!this.password || this.password.length < 6) this.passwordError = "Password must be at least 6 characters.";

      if (this.emailError || this.passwordError) return;

      // emit submit for parent or perform actual submission
      this.$emit("submit", {
        email: this.email,
        password: this.password,
        agree_to_terms: this.agree_to_terms,
      });

      // reset form
      this.email = "";
      this.password = "";
      this.agree_to_terms = false;
    },
  },
};
</script>