/*
* 数据库配置文件
* */

const Sequelize = require('sequelize')
const CONFIG = require('./config')

//实例化数据库对象
const sequelize=new Sequelize(
    CONFIG.MYSQL.database,
    CONFIG.MYSQL.username,
    CONFIG.MYSQL.password,
    {
        host:CONFIG.MYSQL.host,
        dialect:'mysql',
        logging:CONFIG.DEBUG? console.log :false,
        pool:{
            max:5,
            min:0,
            idle:10000
        },
        timezone:'+08:00'
    }
)
module.exports = sequelize