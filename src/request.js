/**
 * webserver.
 * Create by Devin on 2021/1/13.
 *
 * Copyright (c) 2021-present, Devin.
 * All rights reserved.
 *
 */

const server = require('../src/server')
const app = new server()

app.on('/', (req, res) => {
    res.end(JSON.stringify({
        data: {},
        message: 'success',
        code: 200,
    }))
})

app.on('/login', (req, res) => {
    res.end(JSON.stringify({
        data: {},
        message: 'success',
        code: 200,
    }))
})

app.run(8000, () => {
    console.log('server start success');
})
