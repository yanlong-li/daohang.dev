<template>
    <div id="category">
        <el-tabs type="border-card" v-model="activeTab">
            <el-tab-pane v-for="item in data" v-bind:label="item.name" v-text="item.name"></el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
  export default {
    name: 'Category',
    data () {
      return {
        category: null,
        activeTab: '0',
        data: [
          {
            name: '社区',
            children: [
              {
                name: 'GITHUB',
                site: 'www.github.com',
                logo: '',
                description: '全球最大的XXX',
              }
            ]
          },
          {
            name: '新闻资讯',
            children: [
              {
                name: 'GITHUB',
                site: 'www.github.com',
                logo: '',
                description: '全球最大的XXX',
              }
            ]
          },
        ]

      }
    },
    created () {
      this.category = this.$route.params.pathMatch
    }
  }
</script>

<style scoped>

</style>
