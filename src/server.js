import Koa from 'koa';
import path from 'path';
import Jade from 'koa-jade';
import TODOLIST from './todolistConfig';
/* import React from 'react'; */
/* import { renderToString } from 'react-dom/server'; */
/* import App from './component/App'; */
const Router = require('koa-router');

// 创建一个Koa对象表示web app本身
const app = new Koa();
const router = new Router();

app.use(require('koa-static')(path.join(__dirname, '../public')));

const jade = new Jade({
  viewPath: './views',
  app: app // equals to jade.use(app) and app.use(jade.middleware) 
})

/* let html = renderToString(<App />); */

router.get('/todolist', function (ctx, next) {
  ctx.body = TODOLIST;
});

app
.use(router.routes())
.use(router.allowedMethods());

// response
app.use(async(ctx) => {
  await ctx.render('index', { react: '' });
});

// 在端口3000监听
app.listen(3000);
console.log("系统启动，端口：3000");
