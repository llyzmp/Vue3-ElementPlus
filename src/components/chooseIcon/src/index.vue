<template>
  <el-button @click="handleClick" type="primary">
    <slot></slot>
  </el-button>
  <div class="ll-define-dialog-height">
    <el-dialog :title="title" v-model="dialogVisible">
      <div class="container">
        <div class="item" v-for="(item, index) in Object.keys(ElIcons)" :key="index">
          <div>
            <component :is="`el-icon-${toLine(item)}`"></component>
          </div>
          <div>{{ item }}</div>
        </div>
      </div>
  
    </el-dialog>
  </div>
</template>

<script lang='ts' setup>
import * as ElIcons from '@element-plus/icons-vue'
import { watch, ref } from 'vue'
import { toLine } from '../../../utils'
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
.container {
  display: flex;
  align-items: center;
  flex-wrap: wrap;
}
.item {
  width: 20%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 15px;
  cursor: pointer;
  height: 90px;
  font-size: 16px;
}
svg {
  width: 2em;
  height: 2em;
}
</style>