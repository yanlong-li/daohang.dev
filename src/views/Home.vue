<template>
    <div class="home">
        <div class="title">你好,开发者!</div>
        <div class="china">
            <div class="xuexi">
                <div class="logo-content">
                    <el-row :gutter="10">
                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                            <a href="https://www.xuexi.cn/" target="_blank" class="logo">
                                <img src="../../public/img/site/5c0cbdcb8a12e151903b3f14e3babc6f.png" alt="学习强国">
                            </a>
                        </el-col>
                        <el-col :xs="24" :sm="24" :md="12" :lg="12" :xl="12">
                            <div class="right">
                                <img src="../../public/img/site/05b44bad063c5735d66906e3975ea644.png" alt="学习强国">
                            </div>
                        </el-col>
                    </el-row>
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
            /*height: 300px;*/
            background-color: #ce0000;
            /*min-width: 1000px;*/
            @media (max-width: 990px) and (min-width: 442px) {
                padding: 30px 0;
            }

            .logo-content {
                /*width: 1000px;*/
                /*height: 250px;*/
                margin-left: auto;
                margin-right: auto;
                /*position: relative;*/
                display: flex;
                justify-content: center;
                align-items: center;

                .logo {
                    /*position: absolute;*/
                    background-size: contain;
                    width: 100%;
                    min-height: 200px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    /*top: 35px;*/
                    /*left: 50px;*/
                    /*background: url("../../public/img/site/5c0cbdcb8a12e151903b3f14e3babc6f.png") no-repeat center;*/
                    /*background-size: 80% 80%;*/
                    img {
                        width: 80%;
                        height: 80%;
                    }
                }

                .right {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    /*position: absolute;*/
                    background-size: contain;
                    width: 100%;
                    min-height: 200px;
                    /*top: 58px;*/
                    /*right: 22px;*/
                    /*background: url("../../public/img/site/05b44bad063c5735d66906e3975ea644.png") no-repeat center;*/
                    /*background-size: 80% 80%;*/
                    img {
                        width: 80%;
                        height: 80%;
                    }

                    @media (max-width: 990px) {
                        & {
                            margin-top: 50px;
                        }
                    }
                }
            }
        }
    }
</style>
