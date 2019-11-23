<template>
    <div class="topNav">
        <el-row>
            <el-col :span="3">
                <div class="nav" @click="toPage('home')">开发者导航</div>
            </el-col>
            <el-col :span="3" :offset="18">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    更多网站<i class="el-icon-arrow-down el-icon--right"/>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item><el-link href="https://chat.daohang.dev" target="_blank">Chat</el-link></el-dropdown-item>
                        <el-dropdown-item><el-link href="https://blog.yanlongli.com" target="_blank">Blog</el-link></el-dropdown-item>
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
  name: 'topNav',
  data () {
    return {
    }
  },
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
    },
    handleSelect (key, keyPath) {
      console.log(key, keyPath)
    }
  }
}
</script>
<style scoped lang="scss">
    .topNav {
        .nav,.el-dropdown-link {
            cursor: pointer;
        }
    }
</style>
