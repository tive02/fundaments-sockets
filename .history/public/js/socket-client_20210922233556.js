const socket = io();

socket.on("connect", () => {
  console.log("conectado");
});

socket.on("disconnet", () => {
  console.log("Desconectado del servidor ");
});
