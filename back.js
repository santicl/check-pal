require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Configuración de CORS y middleware para JSON
app.use(cors());
app.use(express.json());

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.set('port', PORT);

console.log(PORT)


// Rutas de la API
app.use('/api', require('./routes'));

// Iniciar el servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`SERVER ON PORT ${PORT}`);
});
