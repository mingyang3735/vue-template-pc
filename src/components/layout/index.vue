<template>
  <el-container>
    <el-header>
      <header-component @update:showAside="updateShowAside" :showAside="showAside"></header-component>
    </el-header>
    <el-container>
      <aside-menu></aside-menu>
      <el-main>
        <router-view></router-view>
      </el-main>
    </el-container>
  </el-container>
</template>
<script>
import { mapGetters } from 'vuex'
import AsideMenu from './aside'
import HeaderComponent from './header'
export default {
  name: 'layout',
  components: {
    AsideMenu,
    HeaderComponent
  },
  data() {
    return {
      showAside: false
    }
  },
  computed: {
    ...mapGetters([
      'userInfo'
    ])
  },
  methods: {
    updateShowAside (val) {
      this.showAside = val
    }
  },
  mounted () {
  }
}
</script>

<style scoped lang="less">
  /deep/ .el-header {
    background-color: #23262e;
    padding: 0;
    color: #fff;
  }
  /deep/ .el-aside {
    background-color: #23262e;
    padding: 0;
    color: #fff;
    .el-menu-item, .el-submenu__title {
      height: 50px;
      line-height: 50px;
    }
  }
  /deep/ .el-main {
    height: calc(100vh - 60px);
    padding: 15px;
  }
</style>
