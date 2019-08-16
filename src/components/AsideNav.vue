<template>
    <div class="asideNav">
        <el-row class="tac">
            <el-col :span="24">
                <el-menu
                        default-active="2"
                        class="el-menu-vertical-demo"
                        :router="true"
                >
                    <el-menu-item v-for="(item,index) in data" v-bind:tabindex="index+1" :index="item.route">
                        <i v-bind:class="item.icon"></i>
                        <span slot="title" v-text="item.title"></span>
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
        data: [
          {
            title: '热门网站',
            id: 1,
            icon: 'el-icon-collection-tag',
            route: '/category/hot-site',
          },
          {
            title: '编程语言',
            id: 2,
            icon: 'el-icon-edit',
            route: '/category/lang',
          },
          {
            title: '开发工具',
            id: 3,
            icon: 'el-icon-setting',
            route: '/category/tools',
          },
          {
            title: '视频教学',
            id: 4,
            icon: 'el-icon-video-camera',
            route: '/category/video',
          },
          {
            title: '网络资源',
            id: 5,
            icon: 'el-icon-finished',
            route: '/category/resource',
          },
        ],
      }
    },
    methods: {}
  }
</script>

<style scoped>

</style>
