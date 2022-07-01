<template>
  <div>
    <el-select placeholder="请选择省份" v-model="province">
      <el-option v-for="item in areas" :key="item.code" :value="item.code" :label="item.name">{{ item.name }}</el-option>
    </el-select>
    <el-select :disabled="!province" placeholder="请选择市" style="margin: 0 10px;" v-model="city">
      <el-option v-for="item in selectCity" :key="item.code" :value="item.code" :label="item.name">{{ item.name }}</el-option>
    </el-select>
    <el-select :disabled="!province || !city" placeholder="请选择区域" v-model="area">
      <el-option v-for="item in selectArea" :key="item.code" :value="item.code" :label="item.name">{{ item.name }}</el-option>
    </el-select>
  </div>
</template>

<script lang='ts' setup>
import { ref, computed, watch } from 'vue'
import allArea from '../lib/pca-code.json'

let province = ref<string>('')
let city = ref<string>('')
let area = ref<string>('')
let areas = ref(allArea)

let selectCity = ref<any[]>([])

let selectArea = ref<any[]>([])

// 监听选择省份
watch(() => province.value, val => {
  if (val) {
    let cities = areas.value.find(ele => ele.code === province.value)!.children
    selectCity.value = cities
  }
  city.value = ''
  area.value = ''
})
// 监听选择城市
watch(() => city.value, val => {
  if (val) {
    let areas = selectCity.value.find(ele => ele.code === city.value)!.children
    selectArea.value = areas
  }
  area.value = ''
})

</script>
<style lang='scss' scoped>
</style>