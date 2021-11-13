const blogService = require('../services/blogService');

class BlogController {
  /**
   * 列出博客信息
   * 响应格式
   * {
   *    result: [blogdetails1, blogdetails2]
   * }
   * @param ctx Koa 的上下文参数
   */
  async blogInfoAll(ctx) {
    const result = await blogService.blogListAll();
    ctx.body = { result }
  }
}

module.exports = new BlogController();