require('dotenv').config();
const express = require('express');
const cors = require('cors');

const app = express();

// Configuración de CORS más completa
app.use(cors({
  origin: 'https://paue.com.co', // <--- mejor si defines tu origen exacto
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
  allowedHeaders: ['Content-Type'],
  credentials: true, // Opcional: solo si usas cookies o auth
}));

// Middleware para permitir respuestas a preflight requests
app.options('*', cors());

// Middleware para parsear JSON
app.use(express.json());

// Configuración del puerto
const PORT = process.env.PORT || 3000;
app.set('port', PORT);

console.log(`🚀 Puerto configurado: ${PORT}`);

// Rutas de la API
app.use('/api', require('./routes'));

// Iniciar el servidor
app.listen(PORT, '0.0.0.0', () => {
    console.log(`✅ SERVER ON PORT ${PORT}`);
});