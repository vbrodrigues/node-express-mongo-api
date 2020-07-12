const express = require('express');

const router = express.Router();

router.get('/', (request, response) => {
    response.send({
        success: true,
        status: 'ok'
    })
})

module.exports = app => app.use('/', router); 