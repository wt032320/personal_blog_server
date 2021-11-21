const inspirecloud = require("@byteinspire/api");

const adminTable = require('../models/adminTable');

const jwt = require('../utils/jwt');

class AdminService {
  /**
   * 登录验证
   * @return { status: 200/401 } 返回状态码
   */

  async adminLogin(username, password) {
    const adminInfo = await adminTable.where()
      .projection({
        username: 1,
        password: 1,
      })
      .find()
    if (username == adminInfo[0].username && password == adminInfo[0].password) {
      const token = await jwt.setToken(username, password)
      return token
    }
  }
};

module.exports = new AdminService();