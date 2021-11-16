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
    ctx.body = { result };
  }

  /**
   * 更新博客浏览量
   * 响应格式
   * {
   *  status: 200/404/...
   * }
   * @param ctx Koa 的上下文参数
   */
  async blogViews(ctx) {
    const { id } = ctx.request.body;
    await blogService.blogViews(id);
    ctx.body = { status: 200 }
  }

  /**
   * 创建新博客
   * 响应格式
   * {
   *    status: 200/...
   * }
   * @param ctx Koa 的上下文参数
   */
  async blogCreate(ctx) {
    const { text, category } = ctx.request.body;
    await blogService.blogCreate(text, category);
    ctx.body = { status: 200 }
  }
}

module.exports = new BlogController();