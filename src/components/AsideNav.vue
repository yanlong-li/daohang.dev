<template>
  <div class="asideNav">
    <el-row class="tac">
      <el-col :span="24">
        <el-menu
            class="el-menu-vertical-demo"
            :router="false"
            :collapse="isCollapse"
            :unique-opened="true"
        >
          <el-submenu v-for="(item,index) of data" v-bind:tabindex="index+1" :key="index"
                      @click="jump(item.key)"
                      :index="item.key">
            <template slot="title">
              <i v-bind:class="item.icon"> </i>
              <span slot="title" v-text="item.title"/>
            </template>
            <el-menu-item-group>
              <el-menu-item v-for="(tab,tabIndex) of item.children" :key="index+'-'+tabIndex" :index="index+'-'+tabIndex"
              @click="jump(index+'-'+tabIndex)"
              >
                {{ tab.title }}
              </el-menu-item>
            </el-menu-item-group>
          </el-submenu>
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
      isCollapse: true
    }
  },
  methods: {
    initWindowWidth () {
      this.isCollapse = window.innerWidth < 778
    },
    jump (key) {
      location.hash = key
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
.el-menu {
  height: calc(100vh - 120px);
}
</style>
<style>
.el-submenu:focus {
  border: none;
}
.el-menu:focus{
  border: none;
}
</style>
