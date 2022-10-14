<template>
  <div>
    <h1>Hello from Home Component</h1>
    <h2>{{ propsData }}</h2>
    <h2>{{ msg }}</h2>
    <button v-on:click="hello">Click Event</button>
  </div>
</template>
 
<script>
export default {
  name: "HomePage",
  props: {
    propsData: String,
    msg: String,
  },
  methods: {
    hello(){
      console.log("using click event")
    }
  },
};
</script>