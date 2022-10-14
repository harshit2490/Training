<template>
  <div>
    <button v-on:click="hello">Click Event</button>
    <br>
    <br>
    <button v-on:click="alertMsg('alert popups')">Alert Msg</button>
  </div>
</template>
 
<script>
export default {
  name: "ClickEvent",
  methods: {
    // For click event...
    hello() {
      console.log("using click event");
    },
    // For alert message...
    alertMsg(data) {
        alert(data)
    }
  },
};
</script>