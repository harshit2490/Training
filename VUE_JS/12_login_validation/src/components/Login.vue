<template>
  <div>
    <h1>Login Form with Validation</h1>
    <p v-if="error.length">
        <b>Please correct following errors</b>
        <ul style="list-style: none;">
            <li v-for="e in error" v-bind:key="e.id">
                {{e}}
            </li>
        </ul>
    </p>
    <form @submit="login">
      <input type="text" v-model="name" placeholder="enter your name..." />
      <br /><br />
      <input type="email" v-model="email" placeholder="enter your email..." />
      <br /><br />
      <input
        type="password"
        v-model="password"
        placeholder="enter your password..."
      />
      <br /><br />
      <button type="submit">Login</button>
    </form>
  </div>
</template>

<script>
export default {
  name: "LoginPage",
  data() {
    return {
      error: [],
      name: null,
      password: null,
    };
  },
  methods: {
    login(e) {
      this.error = [];
      if (this.name && this.email && this.password) {
        console.log("no error");
      }
      if (!this.name) {
        this.error.push("Username is required");
      }
      if (!this.email) {
        this.error.push("Email is required");
      }
      if (!this.password) {
        this.error.push("Password is required");
      }
      console.warn("hello", this.error);
      e.preventDefault();
    },
  },
};
</script>