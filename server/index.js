// 引入处理post数据的模块
const bodyParser = require('body-parser')
// 引入Express
const express = require('express')
const app = express()

const user = require('./router/user')
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))

// 挂载 api router
// 待优化
app.use('/api', user)

// 监听3000端口
app.listen(3000)
console.log('success listen…………')