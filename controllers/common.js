//引入async模块
const async = require('async')
//引入常量模块
const Constant = require('../constant/constant')

//定义导出对象
const exportObj = {
    clone,
    checkParams,
    autoFn
}
module.exports = exportObj


/*
* 克隆方法,
* @param obj
* @return { any }
* */
function clone(obj) {
  return  JSON.parse(JSON.stringify(obj))
}


/*
* 检验参数方法
* @param params  请求的参数集
* @param checkArr 需要验证的参数
* @param cb 回调
* @return { any }
* */
function checkParams(params,checkArr,cb) {
    let flag = true
    checkArr.forEach(v=>{
        if(!params[v]){
            flag=false
        }
    })
    if(flag){
        cb(null)
    }else{
        cb(Constant.LACK)
    }
}

/*
* 返回统一方法,返回json格式的数据
* @param tasks  当前controller执行tasks
* @param res 当前controller response
* @param resObj 当前controller返回json对象
* @return { any }
* */
function autoFn(tasks,res,resObj) {
    async.auto(tasks,function (err) {
        if(!!err){
            console.log(JSON.stringify(err))
            res.json({
                code:err.code||Constant.DEFAULT_ERROR.code,
                msg:err.msg|| JSON.stringify(err)
            })
        }else {
            res.json(resObj)
        }
    })
}