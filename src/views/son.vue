<template>
  {{ content }}
  {{ X }}
  {{ XX }}
  <button @click="btn">点击</button>
  <br />
  <button @click="$emit('goSon')">使用父组件的函数</button>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'App',
  props: ['X'],
  emits: ['goSon'],
  setup (props) {
    const content = ref(0)
    const XX = ref(props.X)
    function btn () {
      // props.X = 111111
      XX.value = 111111
    }

    return {
      content,
      XX,
      btn
    }
  }
})
</script>

<style lang="less" scoped></style>
