<template>
    <div class="asideNav">
        <el-row class="tac">
            <el-col :span="24">
                <el-menu
                        :default-active="$route.path"
                        class="el-menu-vertical-demo"
                        :router="true"
                        :collapse="isCollapse"
                >
                    <el-menu-item v-for="(item,index) in data" v-bind:tabindex="index+1" :key="index"
                                  :index="item.route">
                        <i v-bind:class="item.icon"> </i>
                        <span slot="title" v-text="item.title"/>
                    </el-menu-item>
                </el-menu>
            </el-col>
        </el-row>
    </div>
</template>

<script>
export default {
  name: 'AsideNav',
  data () {
    return {
      data: require('../databases/category'),
      isCollapse: false
    }
  },
  methods: {
    initWindowWidth () {
      if (window.innerWidth < 778) {
        this.isCollapse = true
      } else {
        this.isCollapse = false
      }
    }
  },
  created () {
    this.initWindowWidth()
    window.addEventListener('resize', () => {
      this.initWindowWidth()
    })
  }
}
</script>

<style scoped lang="scss">

</style>
