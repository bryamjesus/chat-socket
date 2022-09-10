const socket = io();

// Elementos
const cajaMensaje = document.getElementById('inputMensaje')
const cajaUsuario = document.getElementById('inputUsuario')

const limpiar = () => {
  cajaMensaje.value = ''
  // cajaUsuario.value = ''
}

const enviar = () => {
  const datos = {
    usuario: cajaUsuario.value,
    mensaje: cajaMensaje.value,
  }

  socket.emit('mensaje', datos)
  limpiar()
}

socket.on('mensaje', (data) => {
  const areaMensajes = document.getElementById('mensajes')
  areaMensajes.innerHTML += `<p>${data.usuario}: ${data.mensaje}</p>`;
  // console.log(data)
})

socket.emit('mensaje', io.socket)

