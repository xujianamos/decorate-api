/*
* 数据库连接配置
* */
// 默认dev配置
const config = {
    DEBUG:true,
    MYSQL:{
        host:'localhost',
        database:'decorate',
        username:'xujian',
        password:'xujian956014'
    }
};
if(process.env.NODE_ENV === 'production'){
    config.MYSQL={
        host:'',
        database:'',
        username:'xujian',
        password:'xujian956014'
    }
}
module.exports = config