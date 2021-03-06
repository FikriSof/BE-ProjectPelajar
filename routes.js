const express = require('express');
const router = express.Router();
const fs = require('fs');
const location = (name = '') => name ? `api/v1/${name}` : 'api/v1'
var logger = require('./config/pinohttp');

/* SET CORS HEADERS FOR API */
router.all('/api/*', (req, res, next) => {
    logger(req, res);
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Headers', 'X-Requested-With');
    next();
})

fs.readdirSync(location())
.forEach(file => {
    const path = `/${location(file)}`
    router.use(path, require(`.${path}`))
})

module.exports = router