<template>
  <div>
    <h1>Data Bindings</h1>
    <h1>{{ message }}</h1>
    <!-- Two way binding in input tag -->
    <input type="text" v-model="message" />

    <h1 style="white-space: pre-line">{{ message }}</h1>
    <!-- Two way binding in textarea tag -->
    <textarea type="text" v-model="message" />
  </div>
</template>

<script>
export default {
  name: "BindingPage",
  data() {
    return {
      message: "Hello",
    };
  },
};
</script>