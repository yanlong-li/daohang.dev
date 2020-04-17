<template>
    <div class="category">
        <el-tabs type="border-card" v-model="activeTab">
            <el-tab-pane class="item" v-for="(item,index) in siteData" v-bind:label="item.title" :key="index"
                         :name="item.name">
                <div style="height: 635px">
                <el-scrollbar class="cards" style="height: 100%">
                    <div class="tips" v-html="item.tips" v-if="item.tips">Tips</div>
                    <el-row>
                        <el-col :xs="24" :sm="8" :md="6" :lg="4" :xl="3" v-for="(itemm, index) in item.children" :key="index">
                            <el-card :body-style="{ padding: '0px' }" class="itemm" shadow="hover">
                                <div class="header">
                                    <img :src="itemm.logo" class="image" v-if="itemm.logo">
                                    <div class="image title" v-if="!itemm.logo" v-text="itemm.title">
                                    </div>
                                </div>
                                <div style="padding: 14px;">
                                    <el-scrollbar style="height: 185px;">
                                    <div v-html="itemm.description" class="description"></div>
                                    </el-scrollbar>
                                    <div class="bottom clearfix">
                                        <el-link v-if="!isArray(itemm.site)" type="primary" target="_blank" class="title" :href="itemm.site"
                                                 v-text="itemm.siteTitle || itemm.title"></el-link>
                                        <el-dropdown v-else>
                                          <span class="el-dropdown-link" style="cursor: pointer;">
                                            {{itemm.title}}<i class="el-icon-arrow-down el-icon--right"></i>
                                          </span>
                                            <el-dropdown-menu slot="dropdown">
                                                <el-dropdown-item v-for="_site in itemm.site" :key="_site.site"><el-link type="primary" target="_blank" class="title" :href="_site.site"
                                                                                                                           v-text="_site.title || itemm.siteTitle || itemm.title "></el-link></el-dropdown-item>
                                            </el-dropdown-menu>
                                        </el-dropdown>
                                    </div>
                                </div>
                            </el-card>
                        </el-col>
                    </el-row>
                </el-scrollbar>
                </div>
            </el-tab-pane>
        </el-tabs>
    </div>
</template>

<script>
import '../databases/site/hot-site.json'

export default {
  name: 'Category',
  data: function () {
    return {
      category: null,
      activeTab: '0',
      siteData: []

    }
  },
  watch: {
    '$route': function () {
      this.category = this.$route.params.pathMatch
      try {
        this.siteData = require('../databases/site/' + this.category + '.json')
      } catch (e) {
        this.$router.push({
          path: '/404'
        })
      }
      // 额外的热门网站首选 学习强国
      // if (this.category === 'hot-site') {
      //   this.activeTab = '0'
      // } else {
      this.activeTab = '0'
      // }
    }
  },
  created () {
    // console.log(this.$route)
    this.category = this.$route.params.pathMatch
    try {
      this.siteData = require('../databases/site/' + this.category + '.json')
    } catch (e) {
      this.$router.push({
        path: '404'
      })
    }
  },
  methods: {
    isArray (obj) {
      return (typeof obj === 'object') && obj.constructor === Array
    }
  }
}
</script>

<style scoped lang="scss">
    .category {
        .item {
            .tips {
                font-size: 36px;
                margin-bottom: 10px;
            }
            /*.cards{*/
            /*    mheight: 500px;*/
            /*}*/
            .itemm {
                width: 100%;
                /*padding: 0 24px;*/
                .description {
                    line-height: 1.71429;
                    color: #202124;
                    font-size: 14px;
                    margin: 5px 0 24px;
                    letter-spacing: .25px;
                    text-align: left;
                    /*overflow: hidden;*/
                }

                .header {
                    border-bottom: 1px solid #D3DCE6;
                    height: 130px;
                    display: flex;
                    justify-content: center;
                    align-items: center;

                    .image {
                        line-height: 110px;
                        max-height: 110px;
                        overflow: hidden;
                        /*padding: 24px;*/
                        padding: 5%;
                        max-width: 80%;
                        margin: 0 auto;
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
        }

    }
</style>
<style lang="scss">
    .el-scrollbar > .el-scrollbar__wrap {
        overflow-x: hidden;
    }
    .el-scrollbar__bar.is-horizontal{
        display: none;
        .el-scrollbar__thumb{
            width: 100%;
        }
    }
</style>
