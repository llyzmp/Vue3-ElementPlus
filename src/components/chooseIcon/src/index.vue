<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <el-dialog :title="title" v-model="dialogVisible">
  112121

  </el-dialog>
</template>

<script lang='ts' setup>
import { watch, ref } from 'vue'
let props = defineProps<{
  // 弹出框的标题
  title: string,
  // 控制弹框的显示与隐藏
  visible: boolean 
}>()

let emits = defineEmits(['update:visible'])
// 赋值一份传递过来的visible, 不直接修改父组件的visible
let dialogVisible = ref<boolean>(props.visible)

let handleClick = () => {
  // 修改父组件的数据
  emits('update:visible', !props.visible)
}

// 监听visible变化
watch(() => props.visible, val => {
  dialogVisible.value = val
})
// 监听组件内部的dialogVisible变化
watch(() => dialogVisible.value, val => {
  emits('update:visible', val)
})

</script>
<style lang='scss' scoped>
</style>