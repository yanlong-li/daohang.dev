<template>
    <div class="home">
        <div class="title">你好,开发者!</div>
        <div class="china">
            <div class="xuexi">
                <div class="logo-content">
                    <a href="https://www.xuexi.cn/" target="_blank" class="logo"></a>
                    <div class="right"></div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
  // @ is an alias to /src

  export default {
    name: 'home',
    components: {}
  }
</script>
<style scoped lang="scss">
    .home {
        .title {
            font-size: 56px;
            font-family: "Helvetica Neue", Helvetica, "PingFang SC", "Hiragino Sans GB", "Microsoft YaHei", "微软雅黑", Arial, sans-serif;
        }
        .china {
            margin-top: 30px;
            height: 300px;
            background-color: #ce0000;

            .logo-content {
                width: 1000px;
                height: 250px;
                margin-left: auto;
                margin-right: auto;
                position: relative;

                .logo {
                    position: absolute;
                    background-size: contain;
                    width: 300px;
                    height: 160px;
                    top: 35px;
                    left: 50px;
                    background: url("../../public/img/site/5c0cbdcb8a12e151903b3f14e3babc6f.png") no-repeat center;
                }

                .right {
                    position: absolute;
                    background-size: contain;
                    width: 454px;
                    height: 164px;
                    top: 58px;
                    right: 22px;
                    background: url("../../public/img/site/05b44bad063c5735d66906e3975ea644.png") no-repeat center;
                }
            }
        }
    }
</style>
