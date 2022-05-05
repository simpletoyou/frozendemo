<!--
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-05-05 14:17:37
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-05-05 16:06:08
-->
<template>
  <div class="inventory container">
   <Top />

   inventory
  </div>
</template>

<script>
import Foot from "./com/Foot";
import Top from "./com/Top";
export default {
  name: 'inventory',
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
@import url("../assets/css/inventory.less");
</style>
