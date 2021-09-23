const express = require("express");
const cors = require("cors");

class Server {
  constructor() {
    this.app = express();
    this.port = process.env.PORT;
    this.server = require("http").createServer(this.app);
    this.io = require("socket.io")(this.server);
    this.paths = {};

    //middlewares
    this.middlewares();
    //rutas de la aplicacion
    this.routes();
    //Sockets
    this.sockets();
  }

  middlewares() {
    //Cors
    this.app.use(cors());

    //Directorio publico
    this.app.use(express.static("public"));
  }
  // respond with "hello world" when a GET request is made to the homepage
  routes() {
    //this.app.use(this.paths.auth, require("../routes/auth"));
  }

  //Sockets
  sockets() {
    this.io.on("connection", (socket) => {
      socket.on("disconnect", () => {
        console.log("Cliente Desconectado", socket.id);
      });

      socket.on("enviar-mensaje", (payload) => {
        this.io.emit("enviar-mensaje", payload);
      });
    });
  }
  //Escuchar
  listen() {
    this.server.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto", this.port);
    });
  }
}

module.exports = Server;
