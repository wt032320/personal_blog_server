const inspirecloud = require('@byteinspire/api');

// 博客详情表
const blogDetailsTable = inspirecloud.db.table('blog_details');

module.exports = blogDetailsTable;