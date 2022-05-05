/*
 * @Description: 
 * @version: 
 * @Author: simpletoyou
 * @Date: 2022-05-05 14:17:37
 * @LastEditors: simpletoyou
 * @LastEditTime: 2022-05-05 15:53:27
 */
import Vue from 'vue'
import Router from 'vue-router'
import Home from '@/views/Home'
import Adventure from '@/views/Adventure'
import Bank from '@/views/Bank'
import Inventory from '@/views/Inventory'
import Lottery from '@/views/Lottery'
import Mint from '@/views/Mint'

// 处理路由按需加载
// 处理路由重复点击报错

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home
    },
    {
      path: '/adventure',
      name: 'adventure',
      component: Adventure
    },
    {
      path: '/bank',
      name: 'bank',
      component: Bank
    },
    {
      path: '/inventory',
      name: 'inventory',
      component: Inventory
    },
    {
      path: '/lottery',
      name: 'lottery',
      component: Lottery
    },
    {
      path: '/mint',
      name: 'mint',
      component: Mint
    },
  ]
})
