const express = require("express");
const cors = require("cors");
//const fs = require('fs');
const path = require("path");
const app = express();

// middleware
app.use(cors());
app.use(express.json());
app.use(
  express.static("public")
); // Para acceder a los archivos estáticos

const port = 3000;

// Ruta a la página web
app.get("/", function (req, res) {
  res.sendFile(path.join(__dirname + "/Login_Cloud.html"));
});

app.get("/index", function (req, res) {
  res.sendFile(path.join(__dirname + "/index.html"));
});

// Iniciar el servidor en el puerto 8080
app.listen(port, () => {
  console.log(`Servidor iniciado en http://localhost:${port}`);
});
