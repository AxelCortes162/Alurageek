import { valida } from "./validaciones.js";

const inputs = document.querySelectorAll(".input");

inputs.forEach((input) => {
    input.addEventListener("blur", (input) => {
        valida(input.target);
        console.log(inputs);
    });   
})

const formulario = document.querySelector("[data-form]");
formulario.addEventListener("submit", (e) => {
    e.preventDefault();
    window.location.href = "loggin_completo.html"
});
 
// app.js

const express = require('express');
const cors = require('cors');

const app = express();

// Agregar CORS como middleware global
app.use(cors());

// Resto de la configuración de tu servidor de API
// ...

// Iniciar el servidor
const port = 3000;
app.listen(port, () => {
  console.log(`Servidor en funcionamiento en http://localhost:${port}`);
});

// Permitir acceso solo desde ciertos dominios
const corsOptions = {
    origin: ['https://app.netlify.com', 'https://axelcortes162.github.io', 'https://alurageek-axelcortes.netlify.app/'],
  };
  
  app.use(cors(corsOptions));
  

