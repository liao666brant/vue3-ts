<template>
  <div class="son">{{ father }}</div>
  <div>son: {{ son }}</div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue'
export default defineComponent({
  props: ['father'],
  setup (props, { emit }) {
    console.log(props)

    const son = ref('我是儿子要在巴巴里显示')
    emit('aa', son)
    return {
      son
    }
  }
})
</script>
