<!--
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-05-05 14:17:37
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-05-05 16:06:41
-->
<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
body,
html {
  margin: 0;
  padding: 0;
  font-size: 16px;
  background: #0e0e3a;

}

.container {
  width: 100%;
  height: 100vh;
  padding: 0 200px;
  box-sizing: border-box;
  background: #0e0e3a;
  color: #FFF;
}

/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */
</style>
