const blogDetailsTable = require('../models/blogTable');
const inspirecloud = require('@byteinspire/api');
const ObjectId = inspirecloud.db.ObjectId;

class BlogService {
  /**
   * 获取博客列表信息
   * @return {Promise<Array<any>>} 返回博客信息数组
   */
  async blogListAll() {
    const infoList = await blogDetailsTable.where()
      .projection({
        category: 1,
        text: 1,
        pageviews: 1,
        createdAt: 1
      })
      .sort({ createdAt: -1 })
      .find()
    return infoList
  }

  /**
   * 更新博客浏览量
   * @param id 待更新博客的id
   */
  async blogViews(id) {
    const blogItem = await blogDetailsTable.where({ _id: ObjectId(id) }).findOne();
    if (!blogItem) {
      const error = new Error(`blogItem:${id} not found`);
      error.status = 404;
      throw error;
    }
    blogItem.pageviews += 1
    // 使用 save 更新记录
    await blogDetailsTable.save(blogItem);
  }

  /**
   * 新建博客
   * @param text 博客内容
   * @param category 博客分类
   * @return status 200 返回成功时的状态码 
   */

  async blogCreate(text, category) {
    const blogItem = blogDetailsTable.create({
      pageviews: 0,
      text: text,
      category: category
    })
    await blogDetailsTable.save(blogItem)
  }
}

module.exports = new BlogService();