<template>
    <div id="app">
        <el-container>
            <el-header>
                <TopNav></TopNav>
            </el-header>
            <el-container>
                <el-aside>
                    <AsideNav></AsideNav>
                </el-aside>
                <el-container>
                    <el-main>
                        <router-view></router-view>
                    </el-main>
                </el-container>
            </el-container>
            <el-footer>
                <Footer></Footer>
            </el-footer>
        </el-container>
    </div>
</template>

<script>
import TopNav from './components/TopNav'
import Footer from './components/Footer'
import AsideNav from './components/AsideNav'

export default {
  name: 'app',
  components: {
    TopNav,
    Footer,
    AsideNav
  },
  created () {
    // this.$router.push({
    //   name:"home"
    // })
  }
}
</script>

<style scoped lang="scss">
    #app {
        font-family: 'Avenir', Helvetica, Arial, sans-serif;
        -webkit-font-smoothing: antialiased;
        -moz-osx-font-smoothing: grayscale;
        text-align: center;
        /*color: #2c3e50;*/

        .el-header {
            padding: 0;
            border-bottom: 1px solid #D3DCE6;
        }

        .el-header, .el-footer {
            /*background-color: #B3C0D1;*/
            color: #333;
            text-align: center;
            line-height: 60px;
        }

        .el-footer {
            background-color: #f8f9fa;
            /*position: fixed;*/
            /*bottom: 0;*/
            width: 100%;
        }

        .el-aside {
            background-color: #D3DCE6;
            color: #333;
            text-align: center;
            /*line-height: 200px;*/
        }

        .el-main {
            /*background-color: #E9EEF3;*/
            color: #333;
            text-align: center;
            /*line-height: 160px;*/
            min-height: 600px;
        }

        .el-container:nth-child(5) .el-aside,
        .el-container:nth-child(6) .el-aside {
            /*line-height: 260px;*/
        }

        .el-container:nth-child(7) .el-aside {
            /*line-height: 320px;*/
        }

    }
</style>
<style>
    * {
        padding: 0;
        margin: 0;
        font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
    }

    body {
        min-width: 1366px;
    }
</style>
