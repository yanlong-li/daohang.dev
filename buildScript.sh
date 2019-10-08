# 编译脚本

logUpdatePath="log/update"
logBuildPath="log/build"
# 更新依赖
logDate=$(date  +"%Y-%m-%d-%H-%M")
if [ ! -d "$logUpdatePath" ]; then
    mkdir -p $logUpdatePath
fi
if [ ! -d "$logBuildPath" ]; then
    mkdir -p $logBuildPath
fi
echo "更新依赖"
npm install
echo "编译项目"
npm run build
echo "设置权限"
chown -R www:www dist/[^.]*
echo "运行结束"
