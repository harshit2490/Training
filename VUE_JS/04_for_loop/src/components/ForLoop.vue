<template>
  <div>
    <h1>For Loop</h1>
    <table border="1px">
      <tr>
        <td>Id</td>
        <td>Name</td>
        <td>Email</td>
      </tr>
      <tr v-for="user in users" :key="user.id">
        <td>{{user.id}}</td>
        <td>{{user.name}}</td>
        <td>{{user.email}}</td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "ForLoop",
  data() {
    return {
      users: [
        { id: 1, name: "peter", email: "peter@test.com" },
        { id: 2, name: "tony", email: "tony@test.com" },
        { id: 3, name: "bruce", email: "bruce@test.com" },
        { id: 4, name: "sam", email: "sam@test.com" },
      ],
    };
  },
};
</script>