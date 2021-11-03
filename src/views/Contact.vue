<template>
  <h2>语法糖setup</h2>
  <h2>当前坐标</h2>
  <h3>X: {{ x }}</h3>
  <h3>Y: {{ y }}</h3>
  <hr />
  <Son :X="x" @goSon="setSon"></Son>
  <hr />
  <emitSon @aa="write" :father="father"></emitSon>
  {{ writeAfter }}
</template>

<script lang="ts" setup>
import useMousePositionSetup from '@/hooks/useMousePositionSetup'
import Son from './son.vue'
import emitSon from './emitSon.vue'
import { ref } from 'vue'

const { x, y } = useMousePositionSetup()
function setSon () {
  console.log('这是父组件的函数')
}
const writeAfter = ref()
const write = e => {
  console.log(e.value)
  writeAfter.value = e.value
  e.value = '123456789'
  writeAfter.value = 88888
  /*
   * 所以说明子组件使用emit传上来的数据,
   * 在父组件赋值给ref响应式数据后,
   * 与子组件的原数据不再双向绑定,
   * 否则,如上e.value仍然与子组件原数据保持双向绑定
   */
}
const father = ref('我是父组件我要在子组件显示')
</script>
