<template>
  <div class="category" :id="parentIndex">
    <div class="item" v-for="(item,index) of data" :key="index" :id="parentIndex+'-'+index">
      <div class="title">{{ item.title }}</div>
      <div class="tips" v-html="item.tips" v-if="item.tips">Tips</div>
      <category-item :data="item.children"></category-item>
    </div>
  </div>
</template>

<script>

import CategoryItem from '@/components/CategoryItem'

export default {
  name: 'Category',
  components: { CategoryItem },
  props: ['data', 'parentIndex']
}
</script>

<style scoped lang="scss">
.category {
  .item {
    .tips {
      font-size: 36px;
      margin-bottom: 10px;
    }

    > .title {
      text-align: left;
      font-size: 30px;
      line-height: 40px;
      font-weight: bold;
      margin: 20px 0;
    }
  }

}
</style>
<style lang="scss">
.el-scrollbar > .el-scrollbar__wrap {
  overflow-x: hidden;
}

.el-scrollbar__bar.is-horizontal {
  display: none;

  .el-scrollbar__thumb {
    width: 100%;
  }
}
</style>
