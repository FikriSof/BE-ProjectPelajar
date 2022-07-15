require('custom-env').env()
const cron = require('node-cron')
const moment = require('moment')
const axios = require('axios')

const allSchedule = {
  refreshserver: () => {
    cron.schedule('*/5 * * * *', async () => {
      // const payload = {
      //   url: process.env.SERVER_URL + '/api/v1/ms-account/refreser',
      //   method: 'POST',
      //   headers: {
      //     'Accept': 'application/json',
      //     'Content-Type': 'application/json',
      //     'access-token' : process.env.SECRET
      //   },
      //   data: {}
      // }
      // const resp = await axios(payload).then(response => response.data).catch(error => error)
      console.log('-----------')
      console.log('server refreshed')
      // console.log('status: '+ resp.status);
      console.log('status: '+ 'oke');
      console.log('date: '+moment(new Date()).format('LLL'))
      console.log('-----------')
    },{
      scheduled: true
    })
  }
}

const scheduled = () => {
  allSchedule.refreshserver()
}

module.exports = {
  scheduled
}