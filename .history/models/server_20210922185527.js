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
  //Escuchar
  listen() {
    this.app.listen(this.port, () => {
      console.log("Servidor corriendo en el puerto", this.port);
    });
  }
}

module.exports = Server;
