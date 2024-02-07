// Requiere el módulo 'node-fetch' para realizar solicitudes HTTP desde Node.js
// npm install node-fetch
const fetch = require('node-fetch');

exports.getWeatherData = async (req, res) => {
  const { city } = req.query;
  const apiKey = process.env.API_KEY; // Asegúrate de configurar tu API Key como una variable de entorno
  const apiWeatherURL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}&lang=pt_br`;

  try {
    const weatherResponse = await fetch(apiWeatherURL);
    const weatherData = await weatherResponse.json();

    if (weatherData.cod === "404") {
      return res.status(404).send({ error: "Ciudad no encontrada" });
    }

    return res.status(200).send(weatherData);
  } catch (error) {
    return res.status(500).send({ error: "Error al obtener datos del clima" });
  }
};
