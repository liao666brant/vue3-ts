<!--
 * @Descripttion:
 * @version: 1.0
 * @Author: Zheng
 * @Date: 2021-09-03 11:11:05
 * @LastEditors: Zheng
 * @LastEditTime: 2021-09-03 13:21:35
-->
<template>
  <div id="nav">
    <router-link to="/">Home</router-link>|
    <router-link to="/about">About</router-link>|
    <router-link to="/contact">Contact</router-link>
  </div>
  <router-view></router-view>
</template>

<style lang="less">
html,
body {
  margin: 0;
  padding: 0;
}
#app {
  text-align: center;
}
</style>
