<template>
    <div class="topNav">
        <el-row>
            <el-col :span="12">
                <div class="nav" @click="toPage()">开发者导航</div>
            </el-col>
            <el-col :span="12" :offset="0">
                <el-dropdown trigger="click">
                  <span class="el-dropdown-link">
                    更多网站<i class="el-icon-arrow-down el-icon--right"/>
                  </span>
                    <el-dropdown-menu slot="dropdown">
                        <el-dropdown-item><el-link href="https://trans.daohang.dev" target="_blank">全球互译-预览版</el-link></el-dropdown-item>
                        <el-dropdown-item><el-link href="https://chat.daohang.dev" target="_blank">Chat-预览版</el-link></el-dropdown-item>
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
  name: 'topNav',
  data () {
    return {
    }
  },
  methods: {
    toPage () {
     window.location.hash = "";
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
