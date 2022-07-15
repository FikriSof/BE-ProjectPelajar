const moment = require('moment');

const index = (data) => {
  return {
    status: 'success',
    data: data,
    timeStamp: moment().format()
  }
}

module.exports = index