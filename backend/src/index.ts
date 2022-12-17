import * as express from "express"
import entryRoute from './route/entry'

require('dotenv').config();
const host = process.env['SERVER_HOST']
const port = process.env['SERVER_PORT']

const app = express()
entryRoute(app)

app.listen(port, function () {
    console.log("应用实例，访问地址为 http://%s:%s", host, port)
})

// https://juejin.cn/post/6844903955173277703 => express
// https://github.com/typeorm/typeorm => orm
// https://www.runoob.com/nodejs/nodejs-express-framework.html => express
