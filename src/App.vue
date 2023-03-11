<template>
  <section class="app">
    <NavBar/>
  <router-view></router-view>
  </section>
  
</template>

<script>
import NavBar from "./components/NavBar.vue"
export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style>
*{
  margin: 0 auto;
  padding: 0;
  box-sizing: border-box;
}

body{
  background: #e3e7eb;
}
#app {
  /* font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px; */
  margin: 0 auto;
  box-sizing: border-box;
  
}
</style>
