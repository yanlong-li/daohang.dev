<template>
    <div id="footer">
        <el-row>
            <el-col :span="4" :offset="4">
                <el-link v-on:click="toPage()">开发者导航</el-link>
            </el-col>
            <el-col :span="3">
                <el-link @click="toPage('privacy-protocol')">隐私协议</el-link>
            </el-col>
            <el-col :span="3">
                <el-link @click="toPage('team')">团队</el-link>
            </el-col>
            <el-col :span="3">
                <el-link @click="toPage('about')">About 非零互娱</el-link>
            </el-col>
            <el-col :span="3">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    更多网站<i class="el-icon-arrow-up el-icon--right"/>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item>Chat</el-dropdown-item>
                        <el-dropdown-item>Blog</el-dropdown-item>
                        <el-dropdown-item>QQ群</el-dropdown-item>
                        <el-dropdown-item divided>其他</el-dropdown-item>
                    </el-dropdown-menu>
                </el-dropdown>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'Footer',
  methods: {
    toPage (name) {
      console.log(name)
      this.$router.push({
        name: name || 'home'
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

<style scoped lang="scss">
    #footer{
        .el-dropdown-link {
            cursor: pointer;
        }
    }
</style>
