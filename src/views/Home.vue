<!--
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-05-05 14:17:37
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-05-05 16:06:00
-->
<template>
  <div class="home container">
   <Top />
   <div class="inner">
     <div class="banner">
       <img src="../assets/img/banner.png" alt="">
     </div>
   </div>
   <!-- <Foot /> -->
  </div>
</template>

<script>

import Foot from "./com/Foot";
import Top from "./com/Top";

export default {
  name: 'home',
  components: {
    Top,
    Foot
  },
  data() {
    return {
      msg: 'Welcome to Your Vue.js App'
    }
  }

}
</script>

<style lang="less" scoped>
@import url("../assets/css/home.less");
</style>
