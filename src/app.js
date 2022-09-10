const express = require('express');
const socket = require('socket.io');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.static('public'))

const server = app.listen(PORT, () => console.log(`🚀 Servidor iniciado en el puerto ${PORT}`))

const io = socket(server);

io.on('connection', (socket) => {
  console.log('Socket conectado:', socket.id);

  // io.sockets.emit('mensaje', socket.id)

  socket.on('mensaje', (data) => {
    console.log(data);
    io.sockets.emit('mensaje', data)
  });

  socket.on('disconnect', () => {
    console.log('user disconnected', socket.id);
  });
});
