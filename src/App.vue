<template>
  <div id="app">
    <el-container>
      <el-header>
        <TopNav></TopNav>
      </el-header>
      <el-container>
        <AsideNav></AsideNav>
        <el-container>
          <el-main>
            <unified/>
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
import Unified from '@/views/Unified'

export default {
  name: 'app',
  components: {
    Unified,
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
  min-width: 100vw;
  min-height: 100vh;
  /*color: #2c3e50;*/

  .el-header {
    padding: 0;
    border-bottom: 1px solid #D3DCE6;
    position: fixed;
    top: 0;
    z-index: 10;
    display: block;
    width: 100%;
    background: white;
  }

  .el-header, .el-footer {
    /*background-color: #B3C0D1;*/
    color: #333;
    text-align: center;
    line-height: 60px;
  }

  .el-footer {
    background-color: #f8f9fa;
    position: fixed;
    bottom: 0;
    width: 100%;
    z-index: 10;
    padding: 0;
  }

  .asideNav {
    position: fixed;
    left: 0;
    top: 60px;
    width: 200px;
  }

  .el-aside {
    background-color: #D3DCE6;
    color: #333;
    text-align: center;
  }

  .el-main {
    color: #333;
    text-align: center;
    margin-left: 230px;
    padding: 0;
    overflow: hidden;
    height: calc(100vh - 120px);
    margin-top: 60px;
    margin-bottom: 60px;
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
  /*min-width: 1366px;*/
  /*overflow-y: hidden;*/
}
</style>
