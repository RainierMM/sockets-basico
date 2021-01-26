var socket = io();

// On = Escuchar sucesos
socket.on("connect", function () {
  console.log("Conectado al servidor");
});

socket.on("disconnect", function () {
  console.log("Perdimos conexion con el servidor");
});

// Emit = Enviar informacion
socket.emit(
  "enviarMensaje",
  {
    usuario: "Rai",
    mensaje: "Hola mundo",
  },
  function (resp) {
    console.log("Respuesta sv: ", resp);
  }
);

// Escuchar informacion del sv

socket.on("enviarMensaje", function (mensaje) {
  console.log("Servidor:", mensaje);
});
