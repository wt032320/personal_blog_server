const inspirecloud  = require('@byteinspire/api')

// 使用home_info表
const homeInfoTable = inspirecloud.db.table('home_info')

module.exports = homeInfoTable