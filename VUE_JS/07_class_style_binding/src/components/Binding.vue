<template>
  <div>
    <h1 class="homestyle">Class and Style Bindings</h1>
    <!-- Inline Styling -->
    <h1 v-bind:style="{ color: 'blue' }">Inline Styling</h1>
    <h1 v-bind:class="{ display: show, displayColor: show }">
      Class Binding with Object
    </h1>
    <h1 v-bind:class="[arrClass]">Class Binding with Array</h1>
    <h1
      v-bind:class="[show ? 'yesShow' : 'noShow']"
      v-bind:style="{ color: colorKey }"
    >
      Class ands Style Binding with Array
    </h1>
  </div>
</template>

<script>
export default {
  name: "BindingPage",
  data() {
    return {
      show: true,
      arrClass: "arrayClass",
      colorKey: "red",
    };
  },
};
</script>

<style scoped>
.homestyle {
  color: orange;
}
.display {
  color: aliceblue;
  background-color: brown;
}
.arrayClass {
  background-color: cyan;
}
</style>