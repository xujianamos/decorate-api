/*
 * 数据库连接配置
 * */
// 默认dev配置
const config = {
  DEBUG: true,
  MYSQL: {
    host: 'localhost',
    database: 'decorate',
    username: 'test',
    password: '123456'
  }
}
if (process.env.NODE_ENV === 'production') {
  config.MYSQL = {
    host: 'localhost',
    database: 'decorate',
    username: 'test',
    password: '123456'
  }
}
module.exports = config
