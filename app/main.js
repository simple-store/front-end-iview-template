const Koa=require('koa');
const path=require('path')
const bodyParser = require('koa-bodyparser');
const koaStatic = require('koa-static');
const config = require('./config/default.js');
// const router=require('koa-router')
const app=new Koa()
const routers = require('./routes/index');
const METHODS = [
  'PUT',
  'DELETE',
  'POST',
  'GET',
  'OPTION',
];

// 配置跨域
app.use(async (ctx, next) => {
  ctx.set('Access-Control-Allow-Headers', 'Content-Type, Access-Control-Allow-Headers, Authorization, X-Requested-With')
  // ctx.set('Access-Control-Allow-Origin', 'http://localhost:8080');
  ctx.set('Access-Control-Allow-Methods', METHODS.join(','));
  ctx.set('Access-Control-Allow-Credentials', true);
  ctx.set('Access-Control-Max-Age', 3600 * 24);
  await next();
});
// 配置静态资源加载中间件
app.use(koaStatic(
  path.join(__dirname , './public')
));
app.use(async(ctx, next) => {
  next();
});

// app.use

// 使用表单解析中间件
app.use(bodyParser());

// 使用新建的路由文件
app.use(routers.routes()).use(routers.allowedMethods());

// 监听在1200
app.listen(config.port);

console.log(`listening on port ${config.port}`)
