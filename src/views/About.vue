<!--
 * @Descripttion:
 * @version: 1.0
 * @Author: Zheng
 * @Date: 2021-09-03 11:11:05
 * @LastEditors: Zheng
 * @LastEditTime: 2021-09-14 17:18:58
-->
<template>
  <h2>{{ count }}</h2>
  <button @click="updataCount">增加</button>
  <h2>{{ user.name }}</h2>
  <h2>{{ user.age }}</h2>
  <ul @click="changeColor($event)">
    <li>壹</li>
    <li>贰</li>
    <li>叁</li>
    <li>肆</li>
    <ul>
      伍
    </ul>
  </ul>
</template>

<script lang="ts">
import { defineComponent, onBeforeUnmount, onMounted, reactive, ref, watch } from 'vue'

export default defineComponent({
  nanme: 'App',
  setup () {
    const count = ref(0)
    function updataCount () {
      count.value++
      user.name += '==='
      user.age += 1
    }
    const user = reactive({
      name: '李四',
      age: 1
    })
    watch(
      user,
      ({ name, age }) => {
        console.log('Age: ', age)
        console.log('Name: ', name)
      },
      { immediate: true, deep: true }
    )
    // 事件委派
    function changeColor (e: Event) {
      const target = e.target as HTMLElement
      if (target.nodeName.toLowerCase() === 'li') {
        const theColor = target.style.color
        if (!theColor || theColor !== 'pink') {
          target.style.color = 'pink'
        } else {
          target.style.color = ''
        }
      }
    }
    function logInfo () {
      console.log('试验一下')
    }

    function sum (n: number, m?: number) {
      if (m) {
        return n + m
      } else {
        return (k: number): number => k + n
      }
    }

    /* 生命周期API  --开始 */
    onMounted(() => {
      console.log(sum(1, 2))

      // console.log(sum(1)(5))
    })
    onBeforeUnmount(() => {
      logInfo()
    })

    /* 生命周期API  --结束 */
    return {
      count,
      updataCount,
      user,
      changeColor
    }
  }
})
</script>

<style lang="less" scoped>
ul {
  list-style-type: none;
  display: flex;
  margin: 0 auto;
  text-align: center;
  width: 400px;
  li {
    flex: 1;
    cursor: pointer;
    align-items: center;
  }
}
</style>
