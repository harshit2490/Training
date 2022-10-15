<template>
  <div>
    <h1>Life cycle method in Vue js</h1>
  </div>
</template>

<script>
export default {
  name: "LifeCycle",
  method: {},
  data() {
    return {};
  },
  beforeCreate: function () {
    console.warn("beforeCreate");
  },
  beforeMount: function () {
    console.warn("beforeMount");
  },
  mounted: function () {
    console.warn("mounted");
  },
  created: function () {
    console.warn("created");
  },
};
</script>
