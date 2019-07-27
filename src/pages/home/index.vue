<template>
  <div class="home">
    <el-button>home</el-button>
  </div>
</template>

<script>
export default {
  name: 'home',
  mounted () {
    this.$http.post('/post')
  }
}
</script>
