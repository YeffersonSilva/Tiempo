const express = require('express');
const router = express.Router();
const weatherController = require('../controllers/weatherController');

// Agrega una nueva ruta para manejar las solicitudes de clima
router.get('/api/weather', weatherController.getWeatherData);

module.exports = router;
