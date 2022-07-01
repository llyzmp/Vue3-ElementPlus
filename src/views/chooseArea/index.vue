<!--  -->
<template>
  <m-choose-area @change="handleChange"></m-choose-area>
</template>

<script lang='ts' setup>
import mChooseArea from '../../components/chooseArea/src/index.vue'

const handleChange = (data: any) => {
  console.log('data', data)
}
</script>
<style lang='scss' scoped>
</style>