<template>
  <div>
    <button v-on:click="hello">Click Event</button>
  </div>
</template>
 
<script>
export default {
  name: "ClickEvent",
  methods: {
    // Method: For defining any function
    hello() {
      console.log("using click event");
    },
  },
};
</script>