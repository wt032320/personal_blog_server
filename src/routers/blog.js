const Router = require('@koa/router');
// Koa 的路由在被 use 时是无法指定前缀的, 需要在定义时就指定前缀
const router = Router({
  prefix: '/api/bloginfo'
});

const blogController = require('../controllers/blogController');

// 组装路由
router.get('/', blogController.blogInfoAll);

module.exports = router.routes();