<template>
  <div id="app">
    <router-view v-if="isRouterAlive"/>
  </div>
</template>
<script>
export default {
  name: 'app',
  data() {
    return {
      isRouterAlive: true
    }
  },
  provide () {
    return {
      reload: this.reload
    }
  },
  methods:{
    reload(){
      this.isRouterAlive = false
      this.$nextTick(() => {
        this.isRouterAlive = true
      })
    }
  }
}
</script>
<style lang="less">
body, html div {
  margin: 0;
}
.pager-title {
  background: #e5e9f2;
  padding: 10px 15px;
  border-radius: 4px;
  color: #333;
  font-size: 16px;
}
</style>
