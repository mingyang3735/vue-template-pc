<template>
  <el-aside width="200px">
    <el-menu
      router
      :default-active="$route.path"
      class="el-menu-vertical"
      background-color="#393d49"
      text-color="#fff"
      active-text-color="#ffd04"
      @select="activeMenu"
      :unique-opened="true">
      <div v-for="item in menuList" :key="item.id">
        <el-submenu v-if="item.child && item.child.length > 0" :index="item.id + ''">
          <template slot="title">
            <i :class="item.icon || 'el-icon-house'"></i>
            <span>{{item.name}}</span>
          </template>
          <el-menu-item v-for="subMenu in item.child" :key="subMenu.id" :index="subMenu.web_url">
            <template slot="title">
              <i :class="subMenu.icon || 'el-icon-house'"></i>
              <span>{{subMenu.name}}</span>
            </template>
          </el-menu-item>
        </el-submenu>
        <el-menu-item v-else :index="item.web_url">
          <i :class="item.icon || 'el-icon-house'"></i>
          <span slot="title">{{item.name}}</span>
        </el-menu-item>
      </div>
    </el-menu>
  </el-aside>
</template>
<script>
import menuList from './menuList'
export default {
  name: 'sidebar',
  data() {
    return {
      menuList,
      activeMenu: ''
    }
  }
}
</script>
<style lang="less" scoped>
/deep/ .el-menu {
  border-right: 0;
}
</style>