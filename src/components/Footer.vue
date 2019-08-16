<template>
    <div id="footer">
        <el-row>
            <el-col :span="4" :offset="4">
                <el-link v-on:click="toHome">开发者导航</el-link>
            </el-col>
            <el-col :span="3">
                <el-link>Privacy</el-link>
            </el-col>
            <el-col :span="3">
                <el-link>Teams</el-link>
            </el-col>
            <el-col :span="3">
                <el-link>About</el-link>
            </el-col>
            <el-col :span="3">
                <el-link>Products</el-link>
            </el-col>
        </el-row>
    </div>
</template>

<script>
  export default {
    name: 'Footer',
    methods: {
      toHome () {
        this.$router.push({
          name: 'home',
        }).catch(res => {
          const h = this.$createElement
          this.$message({
            message: h('p', null, [
              h('span', null, '当前已经处于首页啦 '),
              h('i', { style: 'color: teal' }, 'lalalalala')
            ])
          })
        })
      },
    }
  }
</script>

<style scoped>

</style>
