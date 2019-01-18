const router = require('koa-router')();
const fs = require('fs');

router.get('/check', ctx => {
  ctx.body = 'ok';
})

// router.get('/', ctx => {
//   ctx.response.type = 'html';
//   ctx.body = fs.readFileSync(`${process.cwd()}/public/index.html`);
// });

module.exports = router
