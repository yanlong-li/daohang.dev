<template>
    <div id="topNav">
        <el-row>
            <el-col :span="3">
                <div v-on:click="toHome">开发者导航</div>
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
                        <!--                        <el-dropdown-item disabled>双皮奶</el-dropdown-item>-->
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
        activeIndex: '1',
        activeIndex2: '1'
      }
    },
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
      handleSelect (key, keyPath) {
        console.log(key, keyPath)
      }
    }
  }
</script>
