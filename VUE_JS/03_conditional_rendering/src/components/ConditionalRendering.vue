<template>
  <div>
    <h1 v-if="show">Conditional Rendering (if block)</h1>
    <h1 v-else>Conditional Rendering (else block)</h1>
    <button v-on:click="display">Toggle Element</button>
  </div>
</template>

<script>
export default {
  name: 'ConditionalRendering',
  data(){
    return {show:true}
  },
  methods:{
    display(){
      this.show=!this.show
    }
  }
}
</script>