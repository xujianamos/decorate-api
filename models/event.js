/*
* 用来存放mysql数据表event的映射model
* */
const Sequelize = require('sequelize')
const db = require('../db')

const Event = db.define('Event', {
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true,
    },
    name:{
        type:Sequelize.STRING(20),
        allowNull: false
    },
    img:{
        type:Sequelize.STRING,
        allowNull:false
    },
    url:{
        type:Sequelize.STRING,
    },
    articleId:{
        type:Sequelize.INTEGER,
    }
},{
    underscored:true,
    tableName:'event'
})
module.exports=Event