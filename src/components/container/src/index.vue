<!--  -->
<template>
  <el-container>
    <el-aside width="auto">
      <nav-side :collapse="isCollapse"></nav-side>
    </el-aside>
    <el-container>
      <nav-header v-model:collapse="isCollapse"></nav-header>
      <el-main>
        <router-view></router-view>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts" setup>
  import { ref } from "vue";
  import NavHeader from "./NavHeader/index.vue";
  import NavSide from "./NavSide/index.vue";
  let isCollapse = ref(false);
</script>
<style lang="scss" scoped>
  .el-header {
    padding: 0;
    border: 1px solid #eee;
  }
</style>
