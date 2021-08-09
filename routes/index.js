const express = require('express')
const router = express.Router()

// 引入自定义的controller
const IndexController = require('../controllers/index')
// 定义首页路由，get请求
router.get('/', function (req, res, next) {
  res.render('index', { title: 'Express' })
})

// 定义活动列表路由，get请求
router.get('/event', IndexController.eventList)

// 定义分类列表路由，get请求
router.get('/cate', IndexController.cateList)

// 定义文章列表路由，get请求
router.get('/article', IndexController.articleList)

// 定义文章详情路由，get请求
router.get('/article/:articleId', IndexController.article)

// 定义案例列表路由，get请求
router.get('/case', IndexController.caseList)

// 定义案例详情路由，get请求
router.get('/case/:caseId', IndexController.caseInfo)

// 定义企业信息路由，get请求
router.get('/company', IndexController.company)

// 定义预约路由，post请求
router.post('/order', IndexController.order)

module.exports = router
