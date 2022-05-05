<!--
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-05-05 14:17:37
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-05-05 16:05:54
-->
<template>
  <div class="bank container">
   <Top />

   bank
  </div>
</template>

<script>
import Foot from "./com/Foot";
import Top from "./com/Top";
export default {
  name: 'bank',
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
@import url("../assets/css/bank.less");
</style>
