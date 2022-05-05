<!--
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-05-05 14:17:37
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-05-05 16:06:15
-->
<template>
  <div class="mint container">
   <Top />

   mint
  </div>
</template>

<script>
import Foot from "./com/Foot";
import Top from "./com/Top";
export default {
  name: 'mint',
  components: {
    Top,
    Foot
  },
  data () {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../assets/css/mint.less");
</style>
