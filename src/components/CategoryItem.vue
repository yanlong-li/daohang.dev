<template>
  <el-row>
    <el-col :xs="24" :sm="12" :md="8" :lg="4" :xl="4" v-for="(item, index) in data" :key="index">
      <el-card :body-style="{ padding: '0px' }" class="item" shadow="hover">
        <div class="header">
          <img :src="item.logo" class="image" v-if="item.logo" :alt="item.siteTitle">
          <div class="image title" v-if="!item.logo" v-text="item.title">
          </div>
        </div>
        <div style="padding: 14px;">
          <div v-html="item.description" class="description"></div>
          <div class="bottom clearfix">
            <el-link v-if="!isArray(item.site)" type="primary" target="_blank" class="title"
                     :href="item.site"
                     v-text="item.siteTitle || item.title"></el-link>
            <el-dropdown v-else>
                                          <span class="el-dropdown-link" style="cursor: pointer;">
                                            {{ item.title }}<i class="el-icon-arrow-down el-icon--right"></i>
                                          </span>
              <el-dropdown-menu slot="dropdown">
                <el-dropdown-item v-for="_site in item.site" :key="_site.site">
                  <el-link type="primary" target="_blank" class="title" :href="_site.site"
                           v-text="_site.title || item.siteTitle || item.title "></el-link>
                </el-dropdown-item>
              </el-dropdown-menu>
            </el-dropdown>
          </div>
        </div>
      </el-card>
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: 'CategoryItem',
  props: ['data', 'parentIndex'],
  methods: {
    isArray (obj) {
      return (typeof obj === 'object') && obj.constructor === Array
    }
  }
}
</script>

<style scoped lang="scss">
.item {
  width: 100%;
  //margin-bottom: 100px;
  //padding: 0 24px;
  .description {
    line-height: 1.71429;
    color: #202124;
    font-size: 14px;
    margin: 5px 0 24px;
    letter-spacing: .25px;
    text-align: left;
    overflow: hidden;
    height: 50px;
  }

  .header {
    border-bottom: 1px solid #D3DCE6;
    height: 100px;
    display: flex;
    justify-content: center;
    align-items: center;

    .image {
      width: 100%;
      height: 100%;
      overflow: hidden;
      /*padding: 24px;*/
      //padding: 5%;
      //max-width: 80%;
      //margin: 0 auto;
    }

    .image.title {
      /*padding: 30px;*/
      line-height: 110px;
      font-size: 30px;
      height: 110px;
      overflow: hidden;
      /* padding: 24px; */
      padding: 5%;
      width: 80%;
      margin: 0 auto;
    }
  }

  .title {
    line-height: 19px;
    height: 19px;
    overflow: hidden;
  }
}
</style>
