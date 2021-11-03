<!--
 * @Descripttion:
 * @version: 1.0
 * @Author: Zheng
 * @Date: 2021-09-03 11:11:05
 * @LastEditors: Zheng
 * @LastEditTime: 2021-09-11 11:29:17
-->
<template>
  <!-- <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js + TypeScript App"/>
  </div>-->
  <h3>姓名:{{ user.name }}</h3>
  <h3>性别:{{ user.gender }}</h3>
  <h3>年龄:{{ user.age }}</h3>
  <br />

  <h2>当前坐标</h2>
  <h3>X: {{ x }}</h3>
  <h3>Y: {{ y }}</h3>
  <br />
  <div v-color="'pink'">聚焦:<input type="text" value="" v-focus /></div>
  <HelloWorld></HelloWorld>
</template>

<script lang="ts">
import { defineComponent, reactive } from 'vue'
import useMousePosition from '../hooks/useMousePosition'
import HelloWorld from '../components/HelloWorld.vue'

export default defineComponent({
  components: {
    HelloWorld
  },
  // 自定义指令
  directives: {
    focus: {
      // 指令的定义,自动聚焦
      mounted (el) {
        el.focus()
      }
    },
    // 改变背景颜色
    color: {
      mounted (el, cc) {
        el.style.backgroundColor = cc.value
      }
    }
  },
  setup () {
    const user = reactive({
      name: '李四',
      gender: '男',
      age: 21,
      test () {
        console.log('这是reactive对象的方法--')
      }
    })
    const { x, y } = useMousePosition()
    return {
      user,
      x,
      y
    }
  }
})
</script>
