const socketServer = (io) => {
  let usercount = 0
  console.log('--socketServer configured--');
  io.on('connection', (socket) => {
    usercount++
    console.log('id-connected:',socket.id)
    console.log('USER_INSIDE', usercount)

    // MESSAGING CHANNEL
    socket.on('CHANNEL_MSG', (data) => {
      console.log('-----------')
      console.log('PUBLISHING UPDATE:',data)
      io.emit('CHANNEL_MSG', data)
    })

    // // UPDATE APP
    // io.emit('UPDATE_NEED', 'no')

    // // USER COUNT
    // io.emit('USER_INSIDE', usercount)

    // // BACKGROUND IMAGE APP
    // socket.emit('IMG_BANNER', bannerimg[0].img)

    socket.on("disconnect", (reason) => {
      console.log(`id-disconnect ${socket.id} due to ${reason}`);
      usercount--
      console.log('USER_INSIDE', usercount)
    })
  })
}

module.exports = {
  socketServer
}