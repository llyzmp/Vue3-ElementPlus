<!--  -->
<template>
  <el-header class="header">
    <span @click="toggle" class="toggle">
      <el-icon-expand v-if="collapse" />
      <el-icon-fold v-else />
    </span>
  </el-header>
</template>

<script lang="ts" setup>
  let props = defineProps<{
    collapse: boolean;
  }>();
  let emits = defineEmits(["update:collapse"]);
  const toggle = () => {
    emits("update:collapse", !props.collapse);
  };
</script>
<style lang="scss" scoped>

  .header {
    height: 60px;
    padding: 0 20px !important;
    display: flex;
    align-items: center;
    .toggle {
      cursor: pointer;
    }
  }
</style>
