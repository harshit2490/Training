<template>
  <div>
    <ParentToChild v-bind:users="usersDetail" propData="props data" />
    <hr />
    <h1>Send Props Child to Parent</h1>
    <h1>Title: {{title}}</h1>
    <ChildToParent v-on:changeTitle="updateTitle($event)" />
  </div>
</template>

<script>
import ParentToChild from "./components/ParentToChild.vue";
import ChildToParent from "./components/ChildToParent.vue";

export default {
  name: "App",
  components: {
    ParentToChild,
    ChildToParent,
  },
  data() {
    return {
      usersDetail: [
        { name: "harshit", email: "harshit@test.com" },
        { name: "uday", email: "uday@test.com"  },
        { name: "hardik", email: "hardik@test.com"  },
        { name: "suraj", email: "suraj@test.com"  },
      ],
      title:"Old Title"
    };
  },
  methods: {
    updateTitle(title){
      this.title=title
    }
  }
};
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
