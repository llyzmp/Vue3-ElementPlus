<template>
  <div>
    <el-select placeholder="请选择省份" clearable v-model="province">
      <el-option
        v-for="item in areas"
        :key="item.code"
        :value="item.code"
        :label="item.name"
        >{{ item.name }}</el-option
      >
    </el-select>
    <el-select
      :disabled="!province"
      placeholder="请选择市"
      style="margin: 0 10px"
      v-model="city"
      clearable
    >
      <el-option
        v-for="item in selectCity"
        :key="item.code"
        :value="item.code"
        :label="item.name"
        >{{ item.name }}</el-option
      >
    </el-select>
    <el-select
      :disabled="!province || !city"
      placeholder="请选择区域"
      v-model="area"
      clearable
    >
      <el-option
        v-for="item in selectArea"
        :key="item.code"
        :value="item.code"
        :label="item.name"
        >{{ item.name }}</el-option
      >
    </el-select>
  </div>
</template>

<script lang="ts" setup>
import { ref, computed, watch } from "vue";
import allArea from "../lib/pca-code.json";

export interface AreaItem {
  name: string;
  code: string;
  children?: AreaItem[];
}
export interface Data {
  name: string;
  code: string;
}

let province = ref<string>("");
let city = ref<string>("");
let area = ref<string>("");
let areas = ref(allArea);

let selectCity = ref<AreaItem[]>([]);

let selectArea = ref<AreaItem[]>([]);

// 分发事件
let emits = defineEmits(["change"]);

// 监听选择省份
watch(
  () => province.value,
  (val) => {
    if (val) {
      let cities = areas.value.find(
        (ele) => ele.code === province.value
      )!.children;
      selectCity.value = cities;
    }
    city.value = "";
    area.value = "";
  }
);
// 监听选择城市
watch(
  () => city.value,
  (val) => {
    if (val) {
      let areas = selectCity.value.find((ele) => ele.code === city.value)!
        .children!;
      selectArea.value = areas;
    }
    area.value = "";
  }
);

// 监听区域选择
watch(
  () => area.value,
  (val) => {
    if (val) {
      let provinceData: Data = {
        code: province.value,
        name: province.value && allArea.find((item) => item.code === province.value)!.name,
      };
      let cityData: Data = {
        code: city.value,
        name: city.value && selectCity.value.find((item) => item.code === city.value)!.name,
      };
      let areaData: Data = {
        code: val,
        name: val && selectArea.value.find((item) => item.code === val)!.name,
      };
      emits("change", {
        province: provinceData,
        city: cityData,
        area: areaData,
      });
    }
  }
);
</script>
<style lang="scss" scoped></style>
