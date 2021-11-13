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
}

module.exports = new BlogService();