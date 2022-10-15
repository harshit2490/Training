<template>
  <div>
    <h1>Send Props Parent to Child</h1>
    <h3>{{ propData }}</h3>
    <!-- Calling data in loop  -->
    <h3 v-for="user in users" :key="user.name">
      {{ user.name }} : {{user.email}}
    </h3>
  </div>
</template>

<script>
export default {
  name: "ParentToChild",
  props: {
    users: String,
    propData: String,
  },
};
</script>