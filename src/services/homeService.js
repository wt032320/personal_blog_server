const homeInfoTable = require('../models/homeTable');
const inspirecloud = require('@byteinspire/api');
const ObjectId = inspirecloud.db.ObjectId;

class HomeService {
  /**
   * 获取首页信息
   * @return {Promise<Array<any>>} 返回首页信息数组
   */
  async homeInfoAll() {
    const infoList = await homeInfoTable.where()
      .projection({
        title: 1,
        img_src: 1,
        content: 1
      })
      .sort({ _id: -1 })
      .find()
    return infoList
  }
}

// 导出实例
module.exports = new HomeService();