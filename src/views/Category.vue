<template>
    <div class="category">
        <el-tabs type="border-card" v-model="activeTab">
            <el-tab-pane class="item" v-for="(item,index) in siteData" v-bind:label="item.title" :key="index"
                         :name="item.name">
                <div style="height: 635px">
                    <div class="tips" v-html="item.tips" v-if="item.tips">Tips</div>
                <el-scrollbar class="cards" style="height: 100%">
                    <el-row>
                        <el-col :span="4" v-for="(itemm, index) in item.children" :key="index">
                            <el-card :body-style="{ padding: '0px' }" class="itemm" shadow="hover">
                                <div class="header">
                                    <img :src="itemm.logo" class="image" v-if="itemm.logo">
                                    <div class="image title" v-if="!itemm.logo" v-text="itemm.title">
                                    </div>
                                </div>
                                <div style="padding: 14px;">
                                    <div v-html="itemm.description" class="description"></div>
                                    <div class="bottom clearfix">
                                        <el-link type="primary" target="_blank" class="title" :href="itemm.site"
                                                 v-text="itemm.title"></el-link>
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
        if (this.category === 'hot-site') {
          this.activeTab = '0'
        } else {
          this.activeTab = '0'
        }
      }
    },
    created () {
      this.category = this.$route.params.pathMatch
      try {
        this.siteData = require('../databases/site/' + this.category + '.json')
      } catch (e) {
        this.$router.push({
          path: '404'
        })
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
            .cards{
                height: 500px;
            }
            .itemm {
                width: 100%;
                /*padding: 0 24px;*/
                .description {
                    line-height: 1.71429;
                    color: #202124;
                    font-size: 14px;
                    margin: 5px 0 24px;
                    letter-spacing: .25px;
                    height: 185px;
                    overflow: hidden;
                }

                .header {
                    border-bottom: 1px solid #D3DCE6;
                    height: 130px;

                    .image {
                        line-height: 110px;
                        max-height: 110px;
                        overflow: hidden;
                        /*padding: 24px;*/
                        padding: 5%;
                        max-width: 80%;
                        vertical-align: middle;
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
