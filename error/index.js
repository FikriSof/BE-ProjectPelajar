const moment = require('moment');
const errCode = require('./errCode');
const errColor = require('./errColor');

const index = (code, e) => {
  console.log(errColor['red'],`${code} - ${errCode[code]}`)
  return {
    message: 'unsuccessful',
    err_code: code,
    err_msg: errCode[code],
    err_msg2: e,
    language: 'EN',
    timeStamp: moment().format()
  }
}

module.exports = index