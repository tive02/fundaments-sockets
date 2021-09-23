//Referencias
const lblonline = document.querySelector('#lblonline')
const lbloffline = document.querySelector('#lbloffline'),

const socket = io();

socket.on("connect", () => {
  console.log("conectado");
});

socket.on("disconnect", () => {
  console.log("Desconectado del servidor ");
});
