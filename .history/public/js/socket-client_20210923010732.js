//Referencias
const lblonline = document.querySelector("#lblonline");
const lbloffline = document.querySelector("#lbloffline");

const txtMensaje = document.querySelector("#txtMensaje");
const btnEnviar = document.querySelector("#btnEnviar");

const socket = io();

socket.on("connect", () => {
  console.log("conectado");
  lbloffline.style.display = "none";

  lblonline.style.display = "";
});

socket.on("disconnect", () => {
  console.log("Desconectado del servidor ");
  lbloffline.style.display = "";

  lblonline.style.display = "none";
});
