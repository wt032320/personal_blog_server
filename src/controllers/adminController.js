const adminService = require('../services/adminService');

class AdminController {
  /**
   *  管理员登录认证
   *  响应格式
   *  {
   *     status: 200/400
   *     token?: token
   *  }
   * @param ctx Koa 的上下文参数
   */
  async adminLogin(ctx) {
    const { username, password } = ctx.request.body;
    const res = await adminService.adminLogin(username, password);
    if (res) {
      ctx.body = { status: 200, token: res }
    } else {
      ctx.body = { status: 400, msg: '用户名或密码错误！' }
    }
  }
}

module.exports = new AdminController();