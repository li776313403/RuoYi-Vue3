<!--
 * @Descripttion: 
 * @version: v1.0
 * @Author: LiWen
 * @Date: 2022-01-24 18:24:22
 * @LastEditors: LiWen
 * @LastEditTime: 2022-02-23 19:03:49
-->
<template>
  <div
    :class="{ 'has-logo': showLogo }"
    :style="{
      backgroundColor:
        sideTheme === 'theme-dark'
          ? variables.menuBackground
          : variables.menuLightBackground,
    }"
  >
    <logo v-if="showLogo" :collapse="isCollapse" />
    <el-scrollbar :class="sideTheme" wrap-class="scrollbar-wrapper">
      <el-menu
        :default-active="activeMenu"
        :collapse="isCollapse"
        :background-color="
          sideTheme === 'theme-dark'
            ? variables.menuBackground
            : variables.menuLightBackground
        "
        :text-color="
          sideTheme === 'theme-dark'
            ? variables.menuColor
            : variables.menuLightColor
        "
        :unique-opened="true"
        :active-text-color="theme"
        :collapse-transition="false"
        mode="vertical"
      >
        <sidebar-item
          v-for="(route, index) in sidebarRouters"
          :key="route.path + index"
          :item="route"
          :base-path="route.path"
        />
      </el-menu>
    </el-scrollbar>
  </div>
</template>

<script setup>
import Logo from "./Logo";
import SidebarItem from "./SidebarItem";
import variables from "@/assets/styles/variables.module.scss";

const route = useRoute();
const store = useStore();

const sidebarRouters = computed(() => {
  return store.getters.sidebarRouters;
});
const showLogo = computed(() => store.state.settings.sidebarLogo);
const sideTheme = computed(() => store.state.settings.sideTheme);
const theme = computed(() => store.state.settings.theme);
const isCollapse = computed(() => !store.state.app.sidebar.opened);

const activeMenu = computed(() => {
  const { meta, path } = route;
  // if set path, the sidebar will highlight the path you set
  if (meta.activeMenu) {
    return meta.activeMenu;
  }
  return path;
});
</script>
