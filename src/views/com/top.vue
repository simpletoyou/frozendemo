<!--
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-05-05 14:17:37
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-05-05 15:59:30
-->
<template>
  <div class="top">
    <img class="logo" src="../../assets/img/logo.png" alt="">
    <div class="menu">
      <div class="subMenu" v-for="(item, index) in menuList" :key="index" @click="toPage(item)">
        {{ item }}
      </div>
    </div>
    <div class="connect btn">CONNECT</div>
  </div>
</template>

<script>
export default {
  name: 'top',
  data() {
    return {
      menuList: ['HOME', 'MINT', 'ADVENTURE', 'BANK', 'LOTTERY']
    }
  },
  methods: {
    toPage(str) {
      let s = str==='HOME'?'/':str.toLowerCase()
      this.$router.push(`${s}`)
    }
  }
}
</script>

<style lang="less" scoped>
@import url("../../assets/css/top.less");
</style>
