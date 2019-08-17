<template>
    <div id="footer">
        <el-row>
            <el-col :span="4" :offset="4">
                <el-link v-on:click="toHome">非零互娱</el-link>
            </el-col>
            <el-col :span="3">
                <el-link>隐私协议</el-link>
            </el-col>
            <el-col :span="3">
                <el-link>团队</el-link>
            </el-col>
            <el-col :span="3">
                <el-link>About 非零互娱</el-link>
            </el-col>
            <el-col :span="3">
                <el-link>更多产品</el-link>
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
        name: 'home'
      }).catch(res => {
        const h = this.$createElement
        this.$message({
          message: h('p', null, [
            h('span', null, '当前已经处于首页啦 '),
            h('i', { style: 'color: teal' }, 'lalalalala')
          ])
        })
      })
    }
  }
}
</script>

<style scoped>

</style>
