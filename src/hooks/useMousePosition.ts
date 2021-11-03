import { ref, onBeforeUnmount, onMounted, Ref } from 'vue'
interface pageXY {
  x: Ref
  y: Ref
}
export default function (): pageXY {
  // 定义点击坐标
  const x = ref(0)
  const y = ref(0)
  // 点击事件
  const onHandleClick = (Event: MouseEvent) => {
    x.value = Event.pageX
    y.value = Event.pageY
  }
  // 页面已经加载完毕了,再进行点击的操作
  // 页面加载完毕的生命周期组合API
  onMounted(() => {
    // 监听鼠标点击事件,指定回调处理
    addEventListener('click', onHandleClick)
  })
  // 页面卸载之前的生命周期组合API
  // 组件销毁前删除监听事件
  onBeforeUnmount(() => {
    window.removeEventListener('click', onHandleClick)
    console.log('===')
  })
  return {
    x,
    y
  }
}
