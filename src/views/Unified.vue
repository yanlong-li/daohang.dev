<template>
  <div class="content">
    <el-scrollbar class="cards" style="height: 100%">
      <home/>
      <category
          v-for="(category,index) of categories" :key="category.key"
          :data="category.children" :parent-index="index"
      ></category>
    </el-scrollbar>
  </div>
</template>

<script>
import Home from '@/components/Home'
import Category from '@/components/Category'

export default {
  name: 'Unified',
  components: { Category, Home },
  data () {
    return {
      categories: require('../databases/category.json')
    }
  }
}
</script>

<style scoped lang="scss">
.content {
  height: 100%;
}
</style>
