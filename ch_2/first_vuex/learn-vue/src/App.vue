
<template>

  <div id="app">
    <!-- <img src="./assets/logo.png">
    <router-view/> -->
    <Hello></Hello>
  </div>
</template>

<script>
// eslint-disable-next-line
import Hello from './components/HelloWorld'

export default {
  name: 'App',
  components: {// 导入组件以后还要注册
    Hello
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
