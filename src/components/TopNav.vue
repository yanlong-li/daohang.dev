<template>
    <div class="topNav">
        <el-row>
            <el-col :span="3">
                <div class="nav" v-on:click="toHome">开发者导航</div>
            </el-col>
            <el-col :span="3" :offset="18">
                <el-dropdown>
                  <span class="el-dropdown-link">
                    更多网站<i class="el-icon-arrow-down el-icon--right"></i>
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
    name: 'topNav',
    data () {
      return {
      }
    },
    methods: {
      toHome () {
        this.$router.push({
          name: 'home',
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
