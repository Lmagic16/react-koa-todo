import Koa from 'koa';
import path from 'path';
import Jade from 'koa-jade';
import TODO_LIST from './todolistConfig';
/* import React from 'react'; */
/* import { renderToString } from 'react-dom/server'; */
/* import App from './component/App'; */
const Router = require('koa-router');
let TODO_NUMBER = '0'; //维护todolist完成项目的总个数
//当客户端第一次访问时，获取服务端的默认todolist，客户端将其存在localStorage本地，服务端将TODO_NUMBER返回给客户端的cookie，当用户之后再访问服务器的时候，就会带cookie访问服务器。

// 创建一个Koa对象表示web app本身
const app = new Koa();
const router = new Router();

app.use(require('koa-static')(path.join(__dirname, '../public')));

const jade = new Jade({
  viewPath: './views',
  app: app // equals to jade.use(app) and app.use(jade.middleware) 
})

/* let html = renderToString(<App />); */

app.keys = ['todoNumber']; //设置密钥
router.get('/todolist', function (ctx, next) {
  ctx.cookies.set('todoListNumber', TODO_NUMBER, { httpOnly: false })
  // console.log('body',ctx.header);
  console.log(ctx.render);
  ctx.body = TODO_LIST;
});

app
.use(router.routes())
.use(router.allowedMethods());

// response
app.use(async(ctx) => {
  //console.log('render',ctx.header);
  await ctx.render('index', { react: '' });
});

// 在端口3000监听
app.listen(3000);
console.log("系统启动，端口：3000");
