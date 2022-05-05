<!--
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-05-05 14:17:37
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-05-05 16:05:50
-->
<template>
  <div class="adventure container">
   <Top />

    adventure
  </div>
</template>

<script>
import Foot from "./com/Foot";
import Top from "./com/Top";
export default {
  name: 'adventure',
  components: {
    Top,
    Foot
  },
  data() {
    return {
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../assets/css/adventure.less");
</style>
