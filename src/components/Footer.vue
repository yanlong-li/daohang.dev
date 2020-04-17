<template>
    <div id="footer">
        <el-row>
            <el-col :span="6">
                <el-link v-on:click="toPage()">开发者导航</el-link>
            </el-col>
            <el-col :span="5">
                <el-link @click="toPage('privacy-protocol')">隐私协议</el-link>
            </el-col>
            <el-col :span="4">
                <el-link @click="toPage('team')">团队</el-link>
            </el-col>
            <el-col :span="5">
                <el-link @click="toPage('about')">非零互娱</el-link>
            </el-col>
            <el-col :span="4">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    更多<i class="el-icon-arrow-up el-icon--right"/>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item><el-link href="https://trans.daohang.dev" target="_blank">全球互译-预览版</el-link></el-dropdown-item>
                        <el-dropdown-item><el-link href="https://chat.daohang.dev" target="_blank">全球Chat-预览版</el-link></el-dropdown-item>
                        <el-dropdown-item><el-link href="https://bbs.daohang.dev" target="_blank">社区论坛</el-link></el-dropdown-item>
                        <el-dropdown-item><el-link href="https://blog.yanlongli.com" target="_blank">作者Blog</el-link></el-dropdown-item>
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
