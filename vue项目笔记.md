# 第一天

**## 项目描述**

  1). 这是一个关于哪方面的项目?

  2). 有哪些功能模块, 你负责哪些?

  3). 技术栈是哪些?

  4). 开发方式的特点?

## 技术选型

  1). 前台数据处理/交互/组件化

  2). 前后台交互

  3). 模块化

  4). 项目构建/工程化

  5). `css`预编译器

  6). 其它

## 接口相关理解

  1). 接口

  2). 接口文档

  3). 对/调/测接口 / 联调

  4). 前后台分离

  5). mock数据/接口

## git版本控制的基本操作

1. 创建本地仓库(代码在本地仓库中)

   ​        创建.`gitignore`文本, 并配置好

   ​        `git init`

   ​       ` git add .`

   ​        `git commit -m "init app"`

2. 创建远程仓库

   ​        `New Repo`

   ​        指定仓库名

   ​        创建

3. 将本地仓库的代码推送到远程仓库

   ​        `git remote add origin url` (在本地记录远程仓库的地址)

   ​        `git push origin master`

4. 如果本地代码有修改, 要提交到本地仓库, 推送到仓库

   ​        `git add .`

   ​        `git commit -m "xxx"`

   ​        `git push origin master`

   

   ​        `git config --global credential.helper store` (记住用户和密码)

5. 如果远程代码有修改, 要拉取到本地仓库

   ​       ` git pull origin master`

6. 将远程仓库的代码clone到本地(生成仓库)

   ​       ` git clone url`

## 分支操作

1. 创建本地分支, 并推送到远程

   ​        `git checkout -b dev`

   ​        `git push origin origin dev`

2. 拉取远程新分支到本地

   ​        `git pull` (如果分支是在clone后创建的才需要执行)

   ​        `git checkout -b dev origin/dev`

3. 本地`dev`分支代码修改

   ​        `git add .`

   ​        `git commit -m "xxx"`

   ​       ` git push origin dev`

4. 将`dev`分支合并到master

   ​        ``git checkout master`

   ​        `git merge dev`

## 做的事件比较复杂的原因?

1. 逻辑性比强(情况比较多) ==> 分析清楚所有情况分别处理
2. 流程比较长(流程操作很多) ==> 整体少量大的流程步骤在心里

## 使用脚手架创建项目并运行

1. 使用`vue-cli3/4`
2. 开发环境运行
3. 生产环境打包运行

## 一些配置

1. 关闭`eslint`配置: `vue.config.js  lintOnSave: false`
2. @路径提示: `jsconfig.json`

## 引入`vue-router`

1. 下载`vue-router`

2. 确定整体路由结构:

   ​        上:` Header`

   ​        中: `router-view`

   ​        下: `Footer`

3. 定义一级路由组件: `Home/Search/Register/Login`

4. 创建路由器, 配置路由, 配置路由器

## Header组件: 2种路由导航

1. 声明式: 

   ```html
   <router-link to="/xxx">
   ```

2. 编程式:

   ```js
   $router.push/replace('/xxx')
   ```

## Footer组件: 只在Login/Register时隐藏

1. 给Login/Register路由添加meta配置:

   ```js
   meta: {
       isHideFooter: true
   }
   ```

2. 在组件中通过v-show控制显示/隐藏: 

   ```html
   <Footer v-show="!$route.meta.isHideFooter">
   ```

## 路由跳转与传参相关问题

1. 跳转路由的2种基本方式

   ​        声明式: `<router-link to="" replace>`

   ​        编程式: `this.$router.push()/replace()`

2. 跳转路由携带参数的类型

   ​        `params`参数

   ​        `query`参数

3. 携带参数的2种方式

   ​        字符串方式: 将参数手动拼接到path中

   ```js
   /search/${this.keyword}?keyword2=${this.keyword.toUpperCase()}
   ```

   ​        对象方式: (在开发中用得比较多)

   ```js
   this.$router.push({
       name: 'search', 
       params: { keyword: this.keyword },
       query: { keyword2: this.keyword.toUpperCase() }
   })
   ```

   ​        注意: 

   ​            一旦指定带:号的路径, 必须指定name属性来标识当前路由

   ​            `params`只能与`name`组合使用

   ​            `query`可以与`name`或者`path`组合使用

4. 面试问题1: 指定`params`参数时可不可以用`path`和`params`配置的组合?

   ​        不可以用`path`和`params`配置的组合, 只能用name和`params`配置的组合

   ​        `query`配置可以与`path`或`name`进行组合使用

5. 面试问题2: 如何指定`params`参数可传可不传?  

   ​        `path: '/search/:keyword?'`

6. 面试问题3: 如果指定`name`与`params`配置, 但`params中`数据是一个"", 无法跳转

   ​        解决1: 不指定`params`

   ​        解决2: 指定`params`参数值为`undefined`

7. 面试问题4: 路由组件能不能传递props数据?

   ​        可以: 可以将`query`或且`params`参数映射成`props`传递给路由组件对象

   ​        实现: `props: route=>({keyword1:route.params.keyword, keyword2: route.query.keyword })`

8. 面试问题5(非常重要)

   ​        描述: 编程式路由跳转到当前路由(参数不变), 会抛出`NavigationDuplicated`的警告错误

   ​        面试问题: 在做项目时有没有遇到比较难的问题?

   ​        我的问题: 

   ​            我在上一个项目时没有问题, 后面再做一个新的项目时就有了问题

   ​        原因分析: 

   ​            `vue-router3.1.0`之后, 引入了`push()`的`promise`的语法, 如果没有通过参数指定回调函数就返回一个`promise`来指定成功/失败的回调, 且内部会判断如果要跳转的路径和参数都没有变化, 会抛出一个失败的`promise`

   ​        解决办法:

   ​            解决1: 在跳转时指定成功或失败的回调函数, 通过`catch`处理错误

   ​            解决2: 修正`Vue`原型上的push和replace方法 (优秀)

## 解决在二层及以上的路由路径上刷新, 丢失reset样式的问题

1. 原因: 

   ​        获取页面的路径:　http://localhost:8081/search/atguigu?keyword2=ATGUIGU

   ​        页面中引入`reset: <link rel="stylesheet" href="./css/reset.css"> `

   ​        请求reset的路径: http://localhost:8081/search/css/reset.css ==>　路径不对

2. 解决： 

   ```html
   <link rel="stylesheet" href="/css/reset.css">
   ```

   ​        请求时:` http://localhost:8081/css/reset.css`