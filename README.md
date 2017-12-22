## React+koa项目-todolist
### 所用技术
前端框架：React  
后端框架：koa@V2    
前端路由：react-router@V4   
后端路由：koa-router  
打包工具：webpack  
图标：font-awesome     

### 项目结构
```
.
├── README.md
├── index.js     //服务器入口文件，会加载server.js
├── package-lock.json
├── package.json   //整个项目的依赖和配置
├── public       //存放构建产物
├── src
│   ├── client.css
│   ├── client.js              //客户端入口文件
│   ├── component             //react组件
│   │   ├── AddTodo.css
│   │   ├── AddTodo.js
│   │   ├── App.css
│   │   ├── App.js
│   │   ├── TodoDetail.css
│   │   └── TodoDetail.js
│   ├── server.js            //服务端koa主体文件，这里接受、处理http请求，返回页面
│   └── todolistConfig.js   //初始化静态文件，初次访问服务器时返回
├── views
│   └── index.jade         //koa-jade模板文件
└── webpack.config.js      //webpack配置文件

4 directories, 23 files
```
### overview
如同react-todolist项目[https://github.com/Lmagic16/react-todos](https://github.com/Lmagic16/react-todos)

## 如何运行

### 1.安装
$npm install

### 2.打包
$npm run build

### 3.运行
$npm start  

运行之后，访问 http://localhost:3000/ 即可


## 项目简介
- 整个项目通过 `$npm install` 根据 package.json 中的配置 将项目的依赖模块下载下来，通过 `$npm run build` 根据 webpack.config.js 配置将文件打包，本项目中是以 src/client.js 为入口文件，将 react组件 相关的页面打包，存放在 bulid 目录下。打包的文件会在运行时利用到。当 `$npm start` 运行时，会执行 `$nodemon index.js` 命令，加载 src/server.js 文件，启动服务器监听3000端口。当浏览器访问 http://localhost:3000/ 时，服务器接收请求，并通过 koa-jade 渲染模板返回给客户端 html 文件，客户端加载 html 文件，在这个 html 中通过 script 标签加载打包好的静态资源 bundle.js，最后在客户端渲染 react 组件形成 view 视图。

### 部分模块
1. **koa-static**   
当html页面在客户端请求服务器的静态资源 bundle.js 时，需要配置 `koa-static` 模块（koa插件），用于客户端请求服务器的静态资源。也就是说通过服务器的IP地址+静态资源路径，就可以访问到相应的静态资源。如果在本地开发，则通过http://localhost:3000/bundle.js就可以访问到资源bundle.js，前提是需要配置好静态资源的路径。
2. **koa-jade**
使用koa-jade模板渲染引擎返回html文件，使用方法详情见[https://www.npmjs.com/package/koa-jade](https://www.npmjs.com/package/koa-jade)  
利用ctx.body返回的是json或text文件。  
![http返回的header对比](https://ws2.sinaimg.cn/large/006tKfTcly1fmn8cwbsdjj316z0hz42m.jpg)
3. **nodemon**
node工具，当文件修改保存时，自动重启node服务
4. **babel相关模块**
5. **webpack相关**
webpack-dev-middleware 和 webpack-hot-middleware
6. **axio模块**
- 用于ajax前后端数据交互[https://github.com/axios/axios](https://github.com/axios/axios)
- cookie的设置和原理(github文章链接)


### 新问题
- 开发效率（每次都需要重新打包运行才能看到修改结果）
- 解决办法（引入webpack的hot-reloader）


### 注意项
- cookie只能是字符串，所以设置为其他类型会无效。
- 客户端通过document.cookie获取不到cookie，是由于服务端koa在通过ctx.cookies.set设置cookie时默认配置httpOnly为true，详情点击[https://koa.bootcss.com/](https://koa.bootcss.com/)



 

