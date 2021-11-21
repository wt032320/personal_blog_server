const inspirecloud = require("@byteinspire/api");

// 管理员信息表
const adminTable = inspirecloud.db.table('admin');

module.exports = adminTable;