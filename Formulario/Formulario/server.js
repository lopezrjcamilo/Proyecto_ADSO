const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

// Permitir todas las solicitudes CORS
app.use(cors());
app.use(express.json());

// Configurar una ruta para manejar las solicitudes POST
app.post('/insertarPersonaPorCategoria/:categoria', (req, res) => {
  const categoria = req.params.categoria;
  const persona = req.body;

  // Leer los datos existentes del archivo JSON
  fs.readFile('datos.json', 'utf8', (err, fileData) => {
    if (err) {
      console.error(err);
      res.status(500).send('Error interno del servidor');
      return;
    }

    const jsonData = JSON.parse(fileData || '[]');

    // Verificar si el correo ya existe en los datos existentes
    const existingEmail = jsonData.find(item => item.correo === persona.correo);
    if (existingEmail) {
      res.send('Correo ya existente');
      return;
    }

    // Agregar la persona a la categoría correspondiente
    const categoriaData = jsonData.find(item => item.categoria === categoria);
    if (categoriaData) {
      categoriaData.personas.push(persona);
    } else {
      jsonData.push({ categoria: categoria, personas: [persona] });
    }

    // Guardar los datos en el archivo JSON
    fs.writeFile('datos.json', JSON.stringify(jsonData, null, 2), 'utf8', err => {
      if (err) {
        console.error(err);
        res.status(500).send('Error interno del servidor');
        return;
      }

      res.send('Solicitud POST exitosa');
    });
  });
});

// Iniciar el servidor en el puerto 8080
app.listen(8080, () => {
  console.log('Servidor local iniciado en el puerto 8080');
});
