/*
* 用来存放mysql数据表cate的映射model
* */
const Sequelize = require('sequelize')
const db=require('../db')
const Cate=db.define('Cate',{
    id:{
        type:Sequelize.INTEGER,
        primaryKey:true,
        allowNull:false,
        autoIncrement:true
    },
    name:{
        type:Sequelize.STRING(20),
        allowNull: false
    },
    img:{
        type:Sequelize.STRING,
        allowNull:false
    }
},{
    underscored:true,
    tableName:'cate'
})
module.exports=Cate