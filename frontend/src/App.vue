<template>
  <div id="app">
    <NavBar/>
    <div id="content">
      <router-view/>
    </div>
  </div>
</template>

<script>
// import { Slide } from 'vue-burger-menu';
import NavBar from '../src/views/NavBar.vue';

export default {
  name: 'App',
  components: {
    NavBar,
  }
}
</script>

<style scoped>
#content {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
