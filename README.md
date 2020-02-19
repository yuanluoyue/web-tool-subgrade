# web 工具地基
+ 给 web 工具、外挂或者脚本加个 gui

## 项目目录
+ ./src 源码
+ ./dist 压缩后的代码

## 如何使用
+ 先导入(执行) ./dist 中的 wts.min.js ，此时会在全局上注册一个 _wts 属性
+ 首先执行 _wts.createSubgrade()
+ 然后 _wts.getLayer() 就能获取到这个 dom，在上面插入需要的 ui 即可

## api

## 如何修改和构建源码
+ 首先在命令行中进入到这个项目的目录， 执行 npm install
+ 等依赖下载完成后， 就能修改 ./src 项目下面的源码了
+ 修改完成，执行 npm run build 进行构建

### 一边调试一边修改
+ 打开一个静态服务运行 test.html （推荐使用 VSCode 中的 Live Server 插件）
+ 然后在命令行运行 npm watch 
+ 此时修改代码的时候就能观察到修改效果了