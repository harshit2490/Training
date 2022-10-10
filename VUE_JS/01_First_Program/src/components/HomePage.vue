<template>
  <div>
    <h1>Hello from Home Component</h1>
    <h2>{{ propsData }}</h2>
  </div>
</template>
 
<script>
export default {
  name: "HomePage",
  props: {
    propsData: String,
  },
};
</script>