/**
 * webserver.
 * Create by Devin on 2021/1/13.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

// 创建server服务器对象
const http = require('http')
const server = http.createServer()

/**
 * @Description: 监听对当前服务器的请求
 * @listener 当服务器被请求时触发的回调函数，会传入请求对象和响应对象
 */
server.on('request', (request, response) => {
    console.log(request.url);
    response.end(JSON.stringify(
        {
            data: {},
            message: 'ok',
            code: 200,
        }
    ))
})

/**
 * @Description: 监听服务器端口号
 * @port 监听端口号 默认监听80
 * @function 启动监听端口号成功时触发的回调函数
 */
server.listen(8000, function () {
    console.log('server start success')
})
