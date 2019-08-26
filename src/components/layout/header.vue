<template>
  <div class="header">
    <el-menu
      class="topLevelMenus"
      mode="horizontal"
      background-color="#23262E"
      text-color="#fff"
      active-text-color="#5fb878">
      <el-menu-item class="logo-wrap">
        <a class="logo" href="javascript:void(0)" @click="$router.replace('/')">91创客</a>
      </el-menu-item>
      <el-menu-item>
        <a href="javascript:void(0)" class="asideCtrol" @click="menuCtrol()">
          <i class="el-icon-s-operation asideControlIcon"></i>
        </a>
      </el-menu-item>
    </el-menu>
    <div class="topMenuRight">
      <el-menu class="topMenu" mode="horizontal" background-color="#23262E" text-color="#fff" active-text-color="#fff">
        <el-menu-item index="2" @click="clearButton(1)"><i class="el-icon-refresh"></i></el-menu-item>
        <el-submenu index="3" popper-class="menuDetail">
          <template slot="title"><img :src="head_img" width="30" height="30" />&nbsp;{{userName}}</template>
          <el-menu-item index="3-1" @click="$router.replace('/personalInformation')"><i class="icon_person el-icon-user"></i><span>个人资料</span></el-menu-item>
          <el-menu-item index="3-2" @click="$router.replace('/changePassword')"><i class="icon_person el-icon-edit"></i><span>修改密码</span></el-menu-item>
          <el-menu-item index="3-5" @click="signOut()"><i class="icon_person el-icon-switch-button"></i><span>退出</span></el-menu-item>
        </el-submenu>
      </el-menu>
    </div>     
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
export default {
  name: 'layout-header',
  inject: ['reload'],
  props: {
    showAside: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      userName: '',
      head_img:''
    }
  },
  computed: {
    ...mapGetters([
      'userInfo',
      'RealmName'
    ])
  },
  methods: {
    clearButton (obj) {
      if (obj === 1) {
        this.reload()
      }
    },
    signOut () {
      this.$store.dispatch('setUserInfo', null)
      this.$router.push('/login')
      this.$message({
        message: '已退出登录！',
        type: 'warning',
        center: true
      });
    },
    
    menuCtrol () {
      this.$emit('update:showAside', !this.showAside)
    }
  },
  mounted () {
    // if (!this.userInfo) {
    //   this.$message({
    //     message: '访问失败，请先登录！',
    //     type: 'error',
    //     center: true
    //   });
    //   this.$router.push('/login')
    // } else {
    //   this.userName = this.userInfo.info.username
    //   this.head_img = this.userInfo.info.head_img
    // }
  }
}
</script>
<style lang="less" scoped>
.header {
  display: flex;
  justify-content: space-between;
  .logo{
    padding:0 20px;
    font-size:22px;
    text-decoration: none;
  }
  .asideControlIcon {
    padding:5px 3px;
    background:#5fb878;
    color:#fff;
  }
  .text {
    color:#fff;
    padding-left:5px;
    font-size:16px;
  }
  .el-menu-item {
    height:60px;
    line-height:60px;
  }
  .icon {
    color:#ccc;
    font-size:16px;
  }
  .asideCtrol {
    cursor: pointer;
  }
}
@media screen and (max-width:680px) {
  .header {
    .logo-wrap {
      display: none;
    }
  }
}
</style>
