/**
 * webserver.
 * Create by Devin on 2021/1/13.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

const http = require('http')
const url = require("url")

class Server {

    constructor() {
        this.server = http.createServer()
        this.reqEvent = {}
        this.server.on('request', (req, res) => {
            res.setHeader('content-type', 'application/json;charset=utf-8')
            const pathName = url.parse(req.url).pathname
            console.log(pathName);
            if (!pathName.indexOf('/favicon.ico')) return
            if (typeof this.reqEvent[pathName] == "function") {
                this.reqEvent[pathName](req, res)
            } else {
                res.end('404 Not Found')
            }
        })
    }

    on(url, fn) {
        this.reqEvent[url] = fn
    }

    run(port, callback) {
        this.server.listen(port, callback)
    }
}

module.exports = Server

