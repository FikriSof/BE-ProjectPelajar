'use strict';
require('dotenv').config();
const app = require('./app');
const PORT = process.env.PORT || 8080;

const {
  scheduled
} = require('./config/scheduler')

function handleServerReady() {
  console.log(`App listening at ${PORT}`)
}

const server = app.listen(PORT, handleServerReady);

const io = require("socket.io")(server, {
  cors: {
    origin: ["http://localhost:8080"],
  }
})

// SOCKET.IO
const configsockect = require('./config/socketio')
configsockect.socketServer(io)

// NODE-CRON
scheduled()

module.exports = server;
