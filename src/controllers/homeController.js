const homeService = require('../services/homeService');

class HomeController {
  /**
   * 列出首页信息
   * 响应格式
   * {
   *    result: [info1, info2]
   * }
   * @param ctx Koa 的上下文参数
   */
  async homeInfoAll(ctx) {
    const result = await homeService.homeInfoAll()
    ctx.body = { result }
  }
}

module.exports = new HomeController()