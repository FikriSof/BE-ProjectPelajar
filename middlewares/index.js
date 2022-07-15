require('dotenv').config()
const errMsg = require('../error')

exports.authcheck = async function (req, res, next) {
  try {
    if (req.headers['access-token'] === process.env.SECRET) {
      next()
    } else {
      throw '02000'
    }
  } catch (error) {
    if (typeof error === 'string') {
      res.status(400).json(errMsg(error))
    } else { 
      res.status(500).json(errMsg('03000'))
    }
  }
}