<template>
  <div>
    <h1>Template in vue js</h1>
    <!-- v-once not change the below name... -->
    <h3 v-once>{{ name }}</h3>
    <h3>{{ name }}</h3>
    <h3>{{ 10 + 5 }}</h3>
    <h3>{{ a + b }}</h3>
    <!-- Ternary Operators -->
    <h3>{{ ok ? "Yes" : "No" }}</h3>
    <button v-on:click="updateText">Click Me</button>
    <!-- Render HTML Tag from data() property... -->
    <p v-html="rowHtml"></p>
    <!-- Disable Button -->
    <button v-bind:disabled="disableBtn">Disable Button</button>
  </div>
</template>

<script>
export default{
    name: 'HomeComponent',
    data(){
        return{
            name:'Anil',
            a:10,
            b:20,
            ok:true,
            rowHtml:"<h1>Render HTML tag</h1>",
            disableBtn:true
        }
    },
    methods:{
        updateText(){
            this.name="Peter"
            this.ok=!this.ok
        }
    }
}
</script>