<template>
  <div>
    <button v-on:click="updateTitle">Update Parent Title</button>
  </div>
</template>

<script>
export default {
  name: "ChildToParent",
  methods: {
    updateTitle() {
      this.$emit("changeTitle", "New Title");
    },
  },
};
</script>